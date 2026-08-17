"use client";

import { useRef, useState } from "react";

type ProjectMediaCarouselProps = {
  projectName: string;
  images: string[];
};

export default function ProjectMediaCarousel({ projectName, images }: ProjectMediaCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, images.length - 1));
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: track.clientWidth * nextIndex, behavior: "smooth" });
    setActiveIndex(nextIndex);
  };

  const syncActiveSlide = () => {
    const track = trackRef.current;
    if (!track?.clientWidth) return;
    setActiveIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <figure className="project-media project-carousel" aria-label={`${projectName} 产品界面轮播`}>
      <div className="project-carousel-track" ref={trackRef} onScroll={syncActiveSlide}>
        {images.map((image, imageIndex) => (
          <div className="project-carousel-slide" key={image}>
            <img src={image} alt={`${projectName} 产品界面 ${imageIndex + 1}`} />
          </div>
        ))}
      </div>
      <figcaption className="project-carousel-controls">
        <span aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
        <div>
          <button type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="查看上一张 FinalAce 界面">←</button>
          <button type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === images.length - 1} aria-label="查看下一张 FinalAce 界面">→</button>
        </div>
      </figcaption>
    </figure>
  );
}
