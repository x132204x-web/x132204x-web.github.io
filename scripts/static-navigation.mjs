// GitHub Pages serves documents, not vinext's RSC navigation endpoints.
// Install before the framework so native fragment history cannot trigger an
// RSC request whose fallback navigates to the same fragment indefinitely.
function installStaticNavigation() {
  const documentUrl = window.location.pathname + window.location.search;
  window.addEventListener("popstate", (event) => {
    event.stopImmediatePropagation();
    window.history.scrollRestoration = "auto";
    if (window.location.pathname + window.location.search !== documentUrl) {
      window.location.reload();
    }
  }, true);
}

export const staticNavigationScript = `(${installStaticNavigation.toString()})();`;
