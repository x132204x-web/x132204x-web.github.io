"use client";

import { useState } from "react";

const travelItems = [
  { image: "/travel-georgia-mestia.jpg", alt: "在格鲁吉亚梅斯蒂亚徒步的夏诗淇", place: "格鲁吉亚 · 梅斯蒂亚", note: "徒步" },
  { image: "/travel-georgia-batumi.jpg", alt: "在格鲁吉亚巴统黑海边的夏诗淇", place: "格鲁吉亚 · 巴统", note: "黑海边" },
  { image: "/portrait-xinjiang-stage.jpg", alt: "在新疆伊犁旅行的夏诗淇", place: "新疆伊犁", note: "在山里走一走" },
  { image: "/portrait-st-petersburg.jpg", alt: "在圣彼得堡冬宫参观的夏诗淇", place: "圣彼得堡 · 冬宫", note: "在展厅里慢慢看" },
  { image: "/travel-murmansk.jpg", alt: "在俄罗斯摩尔曼斯克旅行", place: "俄罗斯摩尔曼斯克", note: "冬天与极夜" },
  { image: "/travel-sea.jpg", alt: "在日本伊豆旅行", place: "日本伊豆", note: "沿着海边慢慢走" },
  { image: "/travel-sunset.jpg", alt: "旅行中望向远处的晚霞", place: "旅行途中", note: "等一场傍晚" },
];

const shelves = {
  books: [
    { icon: "🐣", title: "我与地坛", meta: "会想再读", theme: "earth", note: "关于困境、时间，以及一个人怎样重新与生活相处。" },
    { icon: "💧", title: "额尔古纳河右岸", meta: "会想再读", theme: "river", note: "从土地、族群与变迁里，看见另一种具体的生活。" },
    { icon: "🌾", title: "秋园", meta: "留下印象", theme: "wheat", note: "普通人的一生，也装着沉重而具体的历史。" },
    { icon: "🎭", title: "长恨歌", meta: "留下印象", theme: "rose", note: "城市、女性和时间留下的细密痕迹。" },
    { icon: "🐁", title: "Flowers for Algernon", meta: "留下印象", theme: "ink", note: "聪明、尊严和被理解之间，并不是简单的关系。" },
    { icon: "🪨", title: "百年孤独", meta: "还会重读", theme: "sage", note: "家族、记忆与循环构成的一段漫长时间。" },
  ],
  films: [
    { icon: "🧑‍🚀", title: "Interstellar", meta: "会想再看", theme: "space", note: "宏大的宇宙里，最打动我的仍然是人与人的连接。" },
    { icon: "🎹", title: "1900", meta: "会想再看", theme: "ocean", note: "一个人怎样理解自由，又怎样选择自己的世界。" },
    { icon: "🚪", title: "蓝色大门", meta: "留下印象", theme: "blue", note: "青春里那些说不清，却又非常真实的情绪。" },
    { icon: "🍯", title: "甜蜜蜜", meta: "留下印象", theme: "honey", note: "人在城市里相遇、走散，又在彼此生命里留下痕迹。" },
    { icon: "📗", title: "绿皮书", meta: "留下印象", theme: "green", note: "偏见之外，理解往往从具体的相处开始。" },
    { icon: "⌛", title: "时空恋旅人", meta: "还会重看", theme: "time", note: "真正值得留住的，常常只是一个认真度过的普通日子。" },
  ],
};

export function TravelGallery() {
  const [active, setActive] = useState(0);
  const item = travelItems[active];
  const move = (direction: number) => setActive((current) => (current + direction + travelItems.length) % travelItems.length);

  return (
    <div className="travel-gallery">
      <div className="travel-stage">
        <img src={item.image} alt={item.alt} />
        <div className="travel-stage-meta">
          <div><strong>{item.place}</strong><span>{item.note}</span></div>
          <small>{String(active + 1).padStart(2, "0")} / {String(travelItems.length).padStart(2, "0")}</small>
        </div>
        <div className="travel-controls" aria-label="切换旅行照片">
          <button type="button" onClick={() => move(-1)} aria-label="上一张照片">←</button>
          <button type="button" onClick={() => move(1)} aria-label="下一张照片">→</button>
        </div>
      </div>
      <div className="travel-thumbs" aria-label="旅行照片缩略图">
        {travelItems.map((travel, index) => (
          <button className={index === active ? "active" : ""} type="button" key={travel.image} onClick={() => setActive(index)} aria-label={`查看${travel.place}照片`} aria-pressed={index === active}>
            <img src={travel.image} alt="" />
            <span>{travel.place}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function MediaShelf() {
  const [kind, setKind] = useState<keyof typeof shelves>("books");
  const [selected, setSelected] = useState(0);
  const items = shelves[kind];
  const chooseKind = (next: keyof typeof shelves) => {
    setKind(next);
    setSelected(0);
  };

  return (
    <div className="media-shelf">
      <div className="media-toolbar">
        <div className="media-tabs" role="tablist" aria-label="切换书籍和电影">
          <button className={kind === "books" ? "active" : ""} type="button" role="tab" aria-selected={kind === "books"} onClick={() => chooseKind("books")}>读过的书</button>
          <button className={kind === "films" ? "active" : ""} type="button" role="tab" aria-selected={kind === "films"} onClick={() => chooseKind("films")}>喜欢的电影</button>
        </div>
      </div>
      <div className="media-rail">
        {items.map((entry, index) => (
          <button className={`media-card ${entry.theme} ${selected === index ? "active" : ""}`} type="button" key={entry.title} onClick={() => setSelected(index)} aria-pressed={selected === index}>
            <span className="media-card-icon">{entry.icon}</span>
            <span className="media-card-copy"><strong>{entry.title}</strong><small>{entry.meta}</small></span>
            <i>查看短注 →</i>
          </button>
        ))}
      </div>
      <div className="media-note" aria-live="polite">
        <span>{items[selected].icon}</span>
        <div><small>{items[selected].meta}</small><strong>{items[selected].title}</strong><p>{items[selected].note}</p></div>
      </div>
      <div className="media-pagination" aria-label="当前选择">
        {items.map((entry, index) => (
          <button key={entry.title} type="button" className={selected === index ? "active" : ""} onClick={() => setSelected(index)} aria-label={`查看${entry.title}`} />
        ))}
      </div>
    </div>
  );
}
