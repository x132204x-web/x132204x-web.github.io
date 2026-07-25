"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "FinalAce",
    type: "AI 学习辅助工具",
    color: "blue",
    description:
      "把课程资料变成可行动的学习计划，帮助大学生更高效地完成考试准备。",
    context:
      "为了解决自己的备考需求设计了这个网站，后来发现很多大学生不知道如何高效学习，于是决定将这个想法继续做大、优化。",
    work: ["产品设计", "用户需求分析", "AI 流程设计", "产品迭代"],
    status: "已上线，优化中",
    versions: ["刷题助手", "Agent 判断复习进度", "个性化学习系统"],
  },
  {
    number: "02",
    name: "云品册",
    type: "产品目录与企业协作工具",
    color: "yellow",
    description: "围绕产品目录、商品导入和企业协作，参与微信小程序体验与流程设计。",
    context: "在项目中完成 Yunpince catalog 体验重设计，推进产品表单、保存操作、底部 Tab 对齐，并参与微信云认证、商品导入、企业入驻和邀请流程。",
    work: ["体验重设计", "产品表单", "微信云认证", "企业邀请流程"],
    status: "持续迭代中",
  },
  {
    number: "03",
    name: "Narziss",
    type: "AI 学习系统",
    color: "green",
    description: "一次从学习场景出发的 AI Agent 产品实践，已经完成了从想法到可用系统的探索。",
    context: "围绕个性化学习伙伴，完成了产品结构、交互方式和 AI Agent 方案的设计与实现。它更像一份完整的实践记录，也还会继续留下新的版本。",
    work: ["产品结构", "学习流程", "Agent 方案", "系统实现"],
    status: "已完成，持续迭代",
  },
];

const logs = [
  {
    date: "2026.07.20",
    tag: "工具体验",
    title: "GitHub AI Agent 项目",
    body: "今天体验了一个新的 AI 工具，了解它如何帮助自动执行任务。",
    thought: "AI 正在从聊天工具逐渐变成可以执行任务的智能助手。",
  },
  {
    date: "2026.07.12",
    tag: "行业观察",
    title: "世界人工智能大会 WAIC",
    body: "在现场体验了不同形态的 AI 软件、硬件和 Agent 产品。",
    thought: "好的 AI 产品，最终还是要回到真实的使用场景。",
  },
];

const articles = [
  {
    category: "AI观察",
    date: "2026.07.20",
    title: "参加 WAIC 后的 AI 行业观察",
    body: [
      "这次在 WAIC 试用了几款有用的软件。Pebble“皮蛋”（pebble.digitmasterai.com）是一款 AI Agent 个人操作系统，通过可视化工作台整合任务、工具和个人信息。ZimaOS（zimaspace.com）更偏向个人服务器和 NAS 场景，通过简单的界面帮助用户管理本地数据、应用和计算资源。随着个人数据和本地 AI 需求增加，这类个人服务器系统可能会成为重要基础设施。",
      "AIping（aiping.cn/docs/PlatformOverview/product）提供大模型 API 聚合和智能路由服务，通过批量采购国内大模型 Token 降低成本，用一个 API 密钥帮助用户调用多个模型。对于开发者来说，这种模式减少了重复配置，也降低了模型切换和使用成本。",
      "硬件方面，现场有很多 AI 眼镜、机器人和 3D 打印相关产品。例如拓竹“把一个想法变成可交互硬件”，展示了 AI 与现实世界结合的可能性，但不少产品仍然更像概念展示，缺少明确、高频和必要的使用场景。",
      "现在用户仍需要在多个 AI 工具之间切换，但未来这些能力大概率会趋于统一。用户只需要提出目标，系统在背后自动调用合适的模型和工具。大厂会依靠用户、数据和生态快速占据统一入口，创业团队则必须找到更难被替代的场景。",
      "我目前比较确定的方向有两个：一是 AI Agent，它会从回答问题逐渐走向调用工具和完成任务；二是实用的硬件终端，让 AI 辅助工作和生活，逐渐进化掉手机，比如穿戴类的戒指、手环和眼镜。",
      "产品同质化有些严重。很多团队都在做类似的 Agent 平台、AI 硬件和智能终端，但真正能够留下来的只有少数。",
    ],
  },
  {
    category: "成长思考",
    date: "2025.07.27",
    title: "AI 不能创造人与人之间的相遇",
    body: [
      "今年年初，我胡乱购买的有关“人工智能”的基金竟为我带来了一笔意外的收入，加之我对陌生事物有着强烈的好奇心，我由此开始研究 AI 相关的问题。我上了一两个月的网课，知道了什么是大模型、梯度下降、强化学习、数据预处理，也知道了一个可投入使用的大模型是如何被训练、调参和个性化完善的。我甚至去读了一些脑科学相关的文章，复习了神经元、轴突、树突那些高中生物相关的内容。",
      "但随着我学习的深入、实践的增多，以及那些层出不穷、实时更迭的 AI 应用工具，我对 AI 的兴趣一点点消散，我有些信息过载了。我放弃研究如何创造出一个大模型，转而尝试如何更好地去运用它。",
      "AI 的数据整合能力的确比人类强了千倍百倍，它的出现让世界上正在使用网络的人的生产力也强了千倍百倍。同时，它能够生成文字、图片、视频、播客这种创造性内容，每当一个新的 AI 应用出来，我在使用过后都会发出惊叹声。",
      "但它永远只是人类的工具（个人观点）。它就算能够通过获取数据而构建出一个“个人宇宙”、将自己包装成有思想的人类，也不能做到和我一起静静坐在小板凳上，一边等待着一个个孩子到来，一边聊着我们各自的家乡、过去和未来。",
      "我是一个很讨厌网聊、很喜欢面对面沟通的人，不光是因为在网络上效率低下，还因为我希望听见每个聊天对象特有的起伏语调、看见他们高兴时扬起的眉毛和思考时抿起的嘴。而这就算机器人再发展，也做不到。",
      "AI 或许可以变成一个拥有完整记忆和个性的人，但它不能创造出人与人之间的“相遇”。",
    ],
  },
  {
    category: "产品复盘",
    date: "2026.06.18",
    title: "为什么大学生需要 AI 学习助手",
    body: ["学习记录整理中，准备从 FinalAce 的真实使用过程出发，记录需求、设计和迭代。"],
  },
  {
    category: "学习记录",
    date: "2026.05.06",
    title: "我的 AI 工具学习方法",
    body: ["学习记录整理中，准备分享我如何从体验工具、拆解流程到尝试做出产品。"],
  },
];

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到首页"><span className="brand-mark">夏</span><span>诗淇的个人实验室</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="打开导航">{menuOpen ? "×" : "☰"}</button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>关于我</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>项目</a>
          <a href="#journal" onClick={() => setMenuOpen(false)}>探索日志</a>
          <a href="#writing" onClick={() => setMenuOpen(false)}>文章</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>联系我 <Arrow /></a>
        </nav>
      </header>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">PERSONAL LAB / 2026</p>
          <h1>你好，我是<br /><span>夏诗淇。</span></h1>
          <p className="hero-lede">一名地理信息科学专业学生，<br />正在探索人工智能、产品设计和技术应用。</p>
          <div className="tags"><span>AI 探索者</span><span>产品实践者</span><span>GIS 学生</span><span>持续学习者</span></div>
          <div className="hero-actions"><a className="button primary" href="#projects">查看项目 <Arrow /></a><a className="button text-button" href="#writing">阅读博客 <Arrow /></a><a className="button text-button" href="#contact">联系我 <Arrow /></a></div>
        </div>
        <div className="workbench" aria-label="个人工作台视觉">
          <div className="bench-caption">正在进行的探索 <span>●</span></div>
          <div className="bench-surface">
            <div className="window notion"><div className="window-top"><i></i><i></i><i></i><b>NOTES / 学习记录</b></div><div className="notion-body"><div className="fake-line wide"></div><div className="fake-line"></div><div className="fake-line short"></div><div className="note-chip">✦ Agent 学习流程</div><div className="fake-line"></div><div className="fake-line wide"></div></div></div>
            <div className="window figma"><div className="window-top"><i></i><i></i><i></i><b>FIGMA / 产品草图</b></div><div className="figma-body"><div className="figma-block"></div><div className="figma-block"></div><div className="figma-block"></div><div className="figma-line"></div><div className="figma-line small"></div></div></div>
            <div className="window github"><div className="window-top"><i></i><i></i><i></i><b>GITHUB / PROJECTS</b></div><div className="github-body"><strong>finalace</strong><span>AI study companion</span><div className="commit"><em></em> 18 commits <em></em> building in public</div></div></div>
            <div className="window ai-window"><div className="ai-dot">✦</div><strong>AI assistant</strong><span>思考中 · 正在整理学习路径</span><div className="ai-bars"><i></i><i></i><i></i></div></div>
          </div>
          <div className="bench-foot"><span>4 个窗口正在运行</span><span>上次更新 · 2 小时前</span></div>
        </div>
      </section>

      <section className="updates section-wide"><div className="section-kicker"><span>最近动态</span><span>RECENT NOTES</span></div><div className="update-grid"><div><b>2026.05</b><p>开发 AI 学习产品 FinalAce</p></div><div><b>2026.07</b><p>参加世界人工智能大会 WAIC</p></div><div><b>2026.04</b><p>开始探索 AI Agent 和大模型应用</p></div></div></section>

      <section className="about section" id="about"><div className="section-heading"><p className="eyebrow">01 / ABOUT</p><h2>把好奇心，<br /><em>变成正在发生的事。</em></h2></div><div className="about-content"><p className="lead">我是一名中国农业大学地理信息科学专业学生。</p><p>我的学习经历从空间数据分析开始，逐渐探索人工智能、大语言模型和产品设计。我喜欢研究新技术，并尝试把想法转化为真实产品。</p><div className="info-grid"><div><span>教育背景</span><b>中国农业大学<br />地理信息科学</b></div><div><span>兴趣方向</span><b>人工智能应用<br />AI 产品设计<br />空间智能（智能驾驶）</b></div><div><span>正在学习</span><b>大模型应用<br />AI Agent<br />软件产品开发</b></div></div></div><div className="timeline"><div className="timeline-label">大学阶段 / 2022 — NOW</div><div className="timeline-steps"><span>GIS 学习</span><i>→</i><span>探索 AI 工具</span><i>→</i><span>开发 AI 产品</span><i>→</i><span>创办个人科技公司</span></div></div></section>

      <section className="life section-wide"><div className="life-heading"><p className="eyebrow">LIFE NOTES / 生活切片</p><p>项目之外，我也在旅行、支教和与人相处中学习。<br />这些经历让我保持具体、好奇，也提醒我不要只活在屏幕里。</p></div><div className="life-gallery"><figure className="life-photo travel"><img src="/travel-japan.jpg" alt="在日本街道旅行" /><figcaption>旅行 / 日本街道</figcaption></figure><figure className="life-photo travel"><img src="/travel-sea.jpg" alt="在海边旅行" /><figcaption>旅行 / 海边</figcaption></figure><figure className="life-photo travel small"><img src="/travel-window.jpg" alt="在博物馆橱窗前" /><figcaption>旅行 / 看见日常之外</figcaption></figure><figure className="life-photo teaching"><img src="/teaching-class.jpg" alt="支教课堂" /><figcaption>支教 / 课堂里</figcaption></figure><figure className="life-photo teaching"><img src="/teaching-workshop.jpg" alt="支教活动中的共同创作" /><figcaption>支教 / 一起做点什么</figcaption></figure><figure className="life-photo teaching"><img src="/teaching-night.jpg" alt="支教团队活动" /><figcaption>支教 / 和伙伴们</figcaption></figure></div></section>

      <section className="projects section-wide" id="projects"><div className="section-heading projects-heading"><p className="eyebrow">02 / PROJECTS</p><h2>想法不止停在<br /><em>想法。</em></h2><p className="heading-note">只展示已经做过、正在做，或有真实过程记录的项目。</p></div><div className="project-list">{projects.map((project) => <article className={`project-card ${project.color}`} key={project.name}><div className="project-top"><span className="project-number">{project.number}</span><span className="status"><i></i>{project.status}</span></div><h3>{project.name}</h3><p className="project-type">{project.type}</p><p className="project-desc">{project.description}</p><div className="project-meta"><div><span>{project.name === "FinalAce" ? "项目背景" : "项目记录"}</span><p>{project.context || project.description}</p></div><div><span>我的工作</span><div className="work-tags">{project.work.map((item) => <b key={item}>{item}</b>)}</div></div></div>{project.versions && <div className="versions"><span>产品迭代</span><div>{project.versions.map((version, i) => <div key={version}><b>V {i + 1}</b><span>{version}</span></div>)}</div></div>}<div className="project-visual">{project.name === "FinalAce" ? <img src="/finalace-desktop.png" alt="FinalAce 产品页面截图" /> : <div className="visual-placeholder"><span>{project.name === "云品册" ? "PRODUCT PROCESS" : "SYSTEM PRACTICE"}</span><strong>{project.name === "云品册" ? <>产品目录体验重设计<br />表单 / 商品导入 / 企业协作</> : <>从学习场景到 Agent 系统<br />一份完整实践记录</>}</strong><Arrow /></div>}</div></article>)}</div></section>

      <section className="journal section" id="journal"><div className="section-heading"><p className="eyebrow">03 / AI JOURNAL</p><h2>我的 AI<br /><em>探索记录。</em></h2></div><div className="journal-intro"><p>把每天遇见的新工具、新想法和新问题记下来。<br />有些会变成产品，有些只留下一个更好的问题。</p><a className="button text-button" href="#contact">订阅更新 <Arrow /></a></div><div className="log-grid">{logs.map((log) => <article className="log-card" key={log.date}><div className="log-date">{log.date}<span>{log.tag}</span></div><h3>{log.title}</h3><p>{log.body}</p><div className="log-thought"><span>我的思考</span><p>{log.thought}</p></div><div className="log-application">↳ 未来可能应用于我的 AI 产品</div></article>)}</div></section>

      <section className="experience section-wide"><div className="section-heading"><p className="eyebrow">04 / EXPERIENCE</p><h2>经历不是标签，<br /><em>是留下来的东西。</em></h2></div><div className="experience-list"><article><span>01</span><div><p className="exp-label">世界人工智能大会 WAIC</p><h3>探索 AI 产业前沿</h3><p>参加世界人工智能大会，体验 AI 软件、硬件和 Agent 相关产品。</p><b>收获：观察 AI 行业发展趋势，并思考 AI 产品未来方向。</b></div><Arrow /></article><article><span>02</span><div><p className="exp-label">支教经历</p><h3>教育实践</h3><p>参与支教活动，发现了教育的重要性，也重新理解了“帮助别人学习”这件事。</p></div><Arrow /></article><article><span>03</span><div><p className="exp-label">校园活动策划执行</p><h3>把一件事组织好</h3><p>参与校园活动组织、宣传和执行。</p><b>培养：项目管理 · 沟通协调</b></div><Arrow /></article></div></section>

      <section className="writing section" id="writing"><div className="section-heading"><p className="eyebrow">05 / WRITING</p><h2>写下来，<br /><em>才算真的想过。</em></h2></div><div className="article-list">{articles.map((article) => <div key={article.title}><button className={`article-row ${activeArticle === article.title ? "selected" : ""}`} onClick={() => setActiveArticle(activeArticle === article.title ? null : article.title)} aria-expanded={activeArticle === article.title}><span>{article.category}</span><h3>{article.title}</h3><time>{article.date}</time><Arrow /></button>{activeArticle === article.title && <article className="article-detail"><div className="article-detail-top"><span>正文 / {article.date}</span><button onClick={() => setActiveArticle(null)}>收起 ×</button></div>{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article>}</div>)}</div><p className="all-link">点击文章标题，展开完整正文 <Arrow /></p></section>

      <section className="contact section-wide" id="contact"><div className="contact-inner"><p className="eyebrow">06 / CONTACT</p><h2>如果你也在<br /><em>探索一些可能。</em></h2><p>欢迎交流 AI 产品、技术探索和未来机会。</p><div className="contact-links"><a href="mailto:x132204x@163.com">x132204x@163.com <Arrow /></a><a href="https://github.com/x132204x-web?tab=repositories" target="_blank" rel="noreferrer">GitHub / x132204x-web <Arrow /></a><a href="#contact">个人简历 PDF <Arrow /></a></div></div></section>
      <footer><span>© 2026 夏诗淇</span><span>持续学习，持续创造。</span><a href="#top">回到顶部 ↑</a></footer>
    </main>
  );
}
