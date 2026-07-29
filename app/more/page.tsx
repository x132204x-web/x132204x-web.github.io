import Link from "next/link";

export default function MorePage() {
  return (
    <main className="more-page">
      <header className="site-header">
        <Link className="brand" href="/">夏诗淇</Link>
        <nav><Link href="/">返回首页</Link><Link href="/#contact">联系</Link></nav>
      </header>

      <section className="more-hero">
        <p className="kicker">BEYOND WORK</p>
        <h1>项目之外，<br />我也在认真生活。</h1>
        <p>
          旅行和读书不是简历上的项目，却一直影响我怎样观察问题、理解别人，也影响我想做怎样的产品。
        </p>
        <Link className="more-home-link" href="/">← 回到夏诗淇的主页</Link>
        <figure className="more-hero-photo">
          <img src="/travel-lake-mountain.jpg" alt="旅行中看见雪山与湖泊" />
          <figcaption>旅行 / 山、湖与很远的天空</figcaption>
        </figure>
      </section>

      <section className="travel-notes">
        <div className="more-heading">
          <p className="kicker">TRAVEL</p>
          <h2>去陌生的地方，看看不同的人怎样生活</h2>
          <p>
            我喜欢旅行中的不确定：临时改变的路线、刚认识的人、语言不完全相通却仍能理解彼此的时刻。
            它们让我保持好奇，也提醒我不要只从自己的经验出发理解世界。
          </p>
        </div>
        <div className="travel-grid">
          <figure className="murmansk-photo">
            <img src="/travel-murmansk.jpg" alt="在俄罗斯摩尔曼斯克旅行" />
            <figcaption>俄罗斯摩尔曼斯克 / 冬天与极夜</figcaption>
          </figure>
          <figure>
            <img src="/travel-sea.jpg" alt="在日本伊豆旅行" />
            <figcaption>日本伊豆 / 海边</figcaption>
          </figure>
          <figure>
            <img src="/travel-window.jpg" alt="参观俄罗斯冬宫" />
            <figcaption>俄罗斯冬宫 / 在展厅里慢慢看</figcaption>
          </figure>
          <figure>
            <img src="/travel-sunset.jpg" alt="旅行中望向远处的晚霞" />
            <figcaption>旅行 / 等一场傍晚</figcaption>
          </figure>
          <figure>
            <img src="/travel-evergreen.jpg" alt="旅行中观察松针" />
            <figcaption>旅行 / 走近一点看</figcaption>
          </figure>
          <figure>
            <img src="/travel-lakeside.jpg" alt="旅行途中看到湖边的树" />
            <figcaption>旅行 / 湖边的两棵树</figcaption>
          </figure>
        </div>
      </section>

      <section className="reading-notes">
        <div className="more-heading">
          <p className="kicker">READING</p>
          <h2>读书是另一种认识世界的方式</h2>
        </div>
        <div className="reading-copy">
          <p>
            我读的内容比较杂：AI 与脑科学、产品与商业，也包括人物经历和对日常生活的观察。
            我不太追求读完很多本，更在意一本书有没有让我换一个角度看原来的问题。
          </p>
          <p>
            有些阅读会直接进入项目，例如我会因为理解记忆和学习，再回头修改学习产品；
            也有些内容没有明确用途，只是让我保留对人和世界的兴趣。
          </p>
          <div className="reading-topics">
            <span>AI 与脑科学</span>
            <span>产品与商业</span>
            <span>人物经历</span>
            <span>成长与生活</span>
          </div>
        </div>
      </section>

      <section className="more-ending">
        <p>
          我仍然在探索自己适合做什么。项目、旅行和阅读看起来是不同的事情，
          但它们都在帮助我更具体地理解问题，也更诚实地理解自己。
        </p>
        <Link href="/">返回首页 ↗</Link>
      </section>
    </main>
  );
}
