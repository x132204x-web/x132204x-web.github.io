import type { Article } from "./article-data";
import type { Project } from "./project-data";

export type FullLocale = "zh" | "en";
export type FullProject = Project & { decisions: { title: string; body: string }[] };
export type TravelEntry = { id: string; image: string; alt: string; place: string; date: string; note: string; position?: string };
export type ReadingEntry = { id: string; title: string; author?: string; note: string };
export type FieldNote = { id: string; label: string; title: string; body: string };

export const personalSummary: Record<FullLocale, string> = {
  zh: "我是夏诗淇。做产品、写文字，也喜欢独自出发，记录路上的人和风景。",
  en: "I’m Ashley Xia. I build products, write, and travel on my own, collecting stories of people and places along the way.",
};

// Project facts follow the shared résumé and existing project records.
export const fullProjects: Record<FullLocale, FullProject[]> = {
  zh: [
    {
      slug: "finalace",
      name: "FinalAce",
      type: "大学生 AI 复习工作台",
      status: "已上线，持续迭代",
      tone: "blue",
      question: "资料都在，下一步该复习什么？",
      summary: "从自己的期末复习出发，把课程资料、练习和错题复盘放进一条连贯的学习路径。",
      solution: "复习时，我会整理课程 PPT 和笔记，再集中做题。但资料多起来之后，很难判断哪些已经掌握、哪些还需要回头看。我从这段具体的使用经历开始做 FinalAce：上传课程资料，整理知识结构，生成练习，再把答题反馈留给下一轮复习。",
      role: ["产品定位与需求分析", "PRD 与交互流程", "AI Workflow", "全栈开发", "测试与版本迭代"],
      progress: "已上线多文件上传、课程资料管理、知识整理、智能练习与错题复盘等核心流程，并邀请朋友试用。接下来继续检查学习反馈是否清楚、备考流程是否顺手，以及集中在期末的需求怎样持续被满足。",
      features: ["多文件上传与管理", "AI 知识整理", "智能练习", "错题与学习反馈"],
      learning: "最初我关心能不能做出来。做出第一个版本后，问题变成了：多少人会遇到这个困难，多久遇到一次，又愿意为解决它付出什么？",
      images: ["/finalace-home.png", "/finalace-study-path.png", "/finalace-upload.png", "/finalace-quiz.png"],
      publicUrl: "https://finalace.online",
      decisions: [
        { title: "从一门课的资料开始", body: "以学生手上已有的 PPT、笔记和课程文件作为入口，让知识整理与练习围绕正在复习的内容展开。" },
        { title: "把答错之后的路接上", body: "将练习、答题反馈和错题复盘放在同一条路径里，让一次答题的结果能进入下一轮学习。" },
        { title: "把能运行交给真实使用检验", body: "先完成可用版本，再邀请朋友试用，继续处理文件解析、登录、答题反馈和稳定性等实际使用中的问题。" },
      ],
    },
    {
      slug: "cloud-catalog",
      name: "云品册",
      type: "中小商家产品资料与协作工具",
      status: "持续迭代",
      tone: "wheat",
      question: "客户要资料时，还要翻多少聊天记录？",
      summary: "把商品图片、SKU、价格和规格收进同一个目录，方便团队维护，也方便发给客户。",
      solution: "商家的商品资料往往散落在相册、聊天和表格里，修改和分享都需要反复整理。云品册将这些信息集中到一个目录，由团队共同维护，并生成客户可以直接查看的分享页面。我参与梳理小程序里的商品表单、保存操作、批量导入、企业入驻和成员邀请流程。",
      role: ["需求与体验梳理", "商品表单设计", "保存操作", "批量导入流程", "企业协作流程"],
      progress: "产品已完成商品目录、批量导入、企业入驻、成员邀请和客户只读分享等主要流程，继续优化资料录入与团队协作体验。",
      features: ["商品资料集中管理", "相册与表格批量导入", "企业成员协作", "客户只读分享"],
      learning: "这个项目让我把注意力放到细小的操作上：一份资料怎样录入、保存、修改和发出去。商家要临时给客户看产品时，这些步骤才会真正连在一起。",
      decisions: [
        { title: "让图片和规格待在一起", body: "将图片与名称、SKU、材质、颜色、价格等字段放在同一份商品资料里，减少维护时在不同地方来回查找。" },
        { title: "把现有资料接进来", body: "围绕相册与表格整理批量导入流程，让已有商品资料能够进入目录，并继续维护。" },
        { title: "分清团队维护与客户查看", body: "梳理企业入驻和成员邀请，让团队协作维护目录；对外通过只读页面分享，保留清楚的查看与编辑边界。" },
      ],
    },
  ],
  en: [
    {
      slug: "finalace",
      name: "FinalAce",
      type: "AI study workspace for university students",
      status: "Live · Iterating",
      tone: "blue",
      question: "All the material is here. What should I study next?",
      summary: "Built from my own exam preparation, bringing course material, practice, and mistake review into one study path.",
      solution: "My exam routine involved sorting lecture slides and notes, then working through questions. As the material grew, it became harder to tell what I understood and what needed another look. I built FinalAce around that experience: upload course files, organize the topics, generate practice, and carry the feedback into the next study session.",
      role: ["Product definition and requirements", "PRD and interaction flows", "AI workflow", "Full-stack development", "Testing and iteration"],
      progress: "The live product includes multi-file upload, course material management, knowledge organization, practice, and mistake review. I have invited friends to try it and continue to refine the feedback and study flow, while examining how to serve a need that peaks around exams.",
      features: ["Multi-file upload and management", "AI knowledge organization", "Practice questions", "Mistake review and feedback"],
      learning: "At first, I wanted to know whether I could build it. After the first version, I had different questions: how many people face this problem, how often, and what are they willing to give to solve it?",
      images: ["/finalace-home.png", "/finalace-study-path.png", "/finalace-upload.png", "/finalace-quiz.png"],
      publicUrl: "https://finalace.online",
      decisions: [
        { title: "Start with the course in front of you", body: "Use the slides, notes, and files students already have as the starting point, so organization and practice stay connected to what they are studying." },
        { title: "Connect practice to what comes next", body: "Keep practice, answer feedback, and mistake review in the same flow, allowing one attempt to inform the next study session." },
        { title: "Put the working version in someone’s hands", body: "Invite friends to try the first usable version, then work through concrete issues in file parsing, sign-in, answer feedback, and reliability." },
      ],
    },
    {
      slug: "cloud-catalog",
      name: "Cloud Catalog",
      type: "Product catalog and collaboration tool for small merchants",
      status: "Iterating",
      tone: "wheat",
      question: "How many chats do you search before sending a customer a product?",
      summary: "A shared home for product images, SKUs, prices, and specifications, ready for a team to maintain and customers to view.",
      solution: "A merchant’s product information can be scattered across photo albums, chats, and spreadsheets. Updating or sharing it means assembling it again. Cloud Catalog brings that material into a shared catalog with customer-facing pages. I contributed to the mini program’s product forms, save interactions, bulk import, business onboarding, and member invitations.",
      role: ["Requirements and experience mapping", "Product forms", "Save interactions", "Bulk import flows", "Team collaboration flows"],
      progress: "The product supports catalogs, bulk import, business onboarding, member invitations, and read-only customer sharing. Work continues on making data entry and team maintenance easier.",
      features: ["Centralized product information", "Photo and spreadsheet import", "Team collaboration", "Read-only customer sharing"],
      learning: "The work brought my attention to small operations: entering, saving, changing, and sending a product’s details. Those steps become one experience when a customer asks to see something right away.",
      decisions: [
        { title: "Keep images beside their specifications", body: "Put images, names, SKUs, materials, colors, and prices in one product record, reducing the need to find and maintain them in separate places." },
        { title: "Bring existing material into the catalog", body: "Map bulk import around photo albums and spreadsheets, so merchants can reuse the product information they already have." },
        { title: "Separate team maintenance from customer viewing", body: "Use business onboarding and invitations for team collaboration, and read-only pages for customer sharing, with a clear boundary between editing and viewing." },
      ],
    },
  ],
};

// Edited from the existing five personal essays. Unverified travel totals are omitted.
export const fullArticles: Record<FullLocale, Article[]> = {
  zh: [
    {
      slug: "finalace-from-zero-to-one", category: "项目复盘", date: "2026.05",
      title: "五天做出 FinalAce，接下来呢？",
      excerpt: "第一个版本带来的是兴奋。朋友开始试用后，那些没做完的小问题才逐个显现。",
      cover: "/finalace-home.png", coverAlt: "FinalAce 产品首页", coverPosition: "center top",
      paragraphs: [
        "FinalAce 起于一次期末复习。我习惯先根据课程资料整理重点，再集中做题。找不到完全贴合这套方式的工具，就决定自己试着做一个。最早的想法很直接：把资料传进去，让 AI 帮忙整理内容、生成练习，再把错题留下来。",
        "最初的五天，我几乎一直抱着电脑。前面推进得很快，越接近完成，剩下的问题越难：一个按钮放在哪里，登录注册是否顺手，答完题之后能否看懂反馈。还有文件解析、模型调用和稳定性，要一件件处理。",
        "这是我第一次完整经历从想法到 Web App。能亲手把一个念头变成可以打开的页面，确实很快乐。AI 帮我写界面、连数据和调试，但我仍然要决定先做什么、哪里需要改，以及现在的结果是否足够好。",
        "Beta 版本做出来后，我邀请朋友试用。自己熟悉的路径，在别人手里不一定顺畅。我开始从“我已经做了哪些功能”，转向看“一个人真正复习时，会在哪一步停下来”。",
        "后来我又记下了更靠前的问题：这件事是否值得做？期末复习有集中、周期短的特点，多少人遇到类似困难、多久遇到一次、愿意付出什么，都需要继续验证。第一版给了我继续做的能力，也让我开始认真面对这些问题。",
      ],
    },
    {
      slug: "my-ai-workflow", category: "工作方法", date: "2026.07",
      title: "一个新 AI 工具，先拿来做一件事",
      excerpt: "收藏之前先试一次。我想留下能进入实际工作的工具，也练习把问题交代清楚。",
      cover: "/finalace-upload.png", coverAlt: "FinalAce 的文件上传与课程创建界面", coverPosition: "center top",
      paragraphs: [
        "重新关注 AI 后，我很快被信息淹没。模型、Agent、开源项目，每天都能看到新东西。收藏夹越来越长，却不等于我知道怎样使用它们。",
        "现在看到一个工具，我先问它解决什么问题，再拿手边的真实任务试一次。能用的留下，暂时用不上的保留印象。有时试完才发现，演示里看起来很顺的流程，放到自己的材料和限制里会卡住。这个发现也有价值。",
        "做项目时，我会把模糊目标拆开：先整理需求，再搭页面、接数据、检查代码和定位错误。不同工具可以参与不同环节，我负责把结果接起来，并判断下一步。",
        "Agent 出错时，我也在练习先停下来检查。它拿到了什么上下文？约束有没有说清楚？这次输出与想要的结果差在哪里？反复说“再试一次”很容易，把问题讲具体更有用。",
        "从前端、后端，到网站备案和支付接口，这些实际任务帮我筛掉了不少想象。对我来说，一套工作流是用着用着形成的：留下能减少重复劳动的部分，自己继续承担判断、取舍和推进。",
      ],
    },
    {
      slug: "ai-and-encounter", category: "个人随笔", date: "2025.07",
      title: "我还是喜欢面对面地认识一个人",
      excerpt: "坐在小板凳上等孩子们到来，听语气、看表情。那些共同度过的时间，我仍然很珍惜。",
      cover: "/teaching-class.jpg", coverAlt: "公益夏令营中的课堂交流", coverPosition: "center center",
      paragraphs: [
        "刚开始了解 AI 时，我对很多东西都好奇：大模型、梯度下降、强化学习、数据预处理，也读了一些脑科学相关的内容。后来信息太多，我把注意力收回到更具体的事情上：怎样在日常学习和工作里用好它。",
        "AI 能整合信息，也能生成文字、图片和声音。我仍然喜欢尝试这些能力，看看一个新想法能被带到哪里。",
        "可我也会想起支教时的场景：坐在小板凳上，等孩子们一个个到来，聊各自的家乡、过去和未来。那段时间没有什么需要被快速完成的任务，就是相处。",
        "我喜欢听一个人说话时语气的起伏，看高兴时扬起的眉毛和思考时抿起的嘴。有些理解在一句话之外，来自我们一起待过的那个下午。",
        "工具怎样变化，我都想给这种相遇留出时间。两个有着各自生活的人，在某个地方认识了彼此，又带着一点关于对方的记忆离开。这件事对我一直有吸引力。",
      ],
    },
    {
      slug: "cities-and-choices", category: "城市观察", date: "2026.06",
      title: "去深圳见朋友，也重新看自己的选择",
      excerpt: "朋友手上的项目、身边的生意、街上的节奏，让一些原本遥远的选择变得具体。",
      cover: "/travel-window.jpg", coverAlt: "旅行中留下的城市与空间观察", coverPosition: "center center",
      paragraphs: [
        "去深圳见朋友时，我听他们聊正在做的项目。有人跟着学长学姐实践，有人在校外或家里的生意里参与具体工作。听着这些事情，我感到“自己也可以开始做点什么”离我近了一些。",
        "在北京、广州和深圳生活与行走，我对几座城市留下了不同印象。北京让我更多想到秩序和路径，广州与深圳给我的感受更外向，也更愿意尝试。这只是我的片面观察，和当时见到的人、走过的地方有关。",
        "环境会影响人怎样想象风险。身边已经有人在做项目，很多问题就可以直接问：第一步怎么开始，客户从哪里来，哪件事没有想象中顺利。一个抽象选择因此变成了几件可以尝试的小事。",
        "我也见过项目停在宣布开始的时候。拍照、发帖、租办公室都能让开始显得很明确，之后怎么持续推进，却需要另一种耐心。",
        "这趟见面让我更留意自己所处的环境，也提醒我把兴奋落实到下一步。城市和朋友能带来新的可能，接下来做哪件具体的事，还是要自己决定。",
      ],
    },
    {
      slug: "xinjiang-solo-drive", category: "旅行记录", date: "2026.04",
      title: "一个人开车去新疆，计划一路在变",
      excerpt: "从乌鲁木齐出发，沿着天山走。没赶上的日出、阴天的湖和陌生人的帮助，都留在了旅途中。",
      cover: "/portrait-xinjiang.jpg", coverAlt: "夏诗淇在新疆山地旅行", coverPosition: "center 62%",
      paragraphs: [
        "一个人，背着一个包，开着一辆车，从乌鲁木齐出发。一路经常能看见天山，它像一个留在远处的路标。原本准备了不同路线，最后还是走到了计划以外的地方。",
        "我记得路边停着的大货车，司机坐在车影里做饭；也记得雪山、草原、湖边拍婚纱照的人，以及傍晚回家的小马、小羊和小牛。独自开车的时候，我有很多时间看这些很小的场景。",
        "到了赛里木湖，我没有继续赶日出。连续开车已经累了，就让行程慢下来。阴天的湖雾蒙蒙的，坐在湖边发呆也很好，不必每一站都赶上最适合拍照的时刻。",
        "售票口的保安帮我买学生票，又担心我跟着导航找不到入口，让我加微信，迷路时可以打视频。路线和入口有点混乱，但这份具体的善意让我记得很清楚。",
        "一个人走也需要不断判断路况、时间和自己的状态。临时改变路线之后，要重新安排接下来怎么走。我喜欢其中的自在，也接受这些决定要由自己负责。最后带回来的，是照片、几段相遇，还有一些只有自己知道的安静时刻。",
      ],
    },
  ],
  en: [
    {
      slug: "finalace-from-zero-to-one", category: "Project reflection", date: "2026.05",
      title: "Five days to build FinalAce. What next?",
      excerpt: "The first version was exciting. Once friends started using it, the unfinished details began to show.",
      cover: "/finalace-home.png", coverAlt: "The FinalAce home screen", coverPosition: "center top",
      paragraphs: [
        "FinalAce began during exam preparation. I usually organized the key points from my course material, then worked through questions. When I couldn’t find a tool that quite fit, I decided to try building one. The first idea was straightforward: upload the material, let AI help organize it and generate practice, and keep the mistakes for review.",
        "For the first five days, I was almost always at my computer. Progress was fast at the beginning. Near the end, the remaining problems got harder: where a button should go, whether sign-up felt straightforward, and whether the feedback made sense after an answer. File parsing, model calls, and reliability each needed attention too.",
        "It was my first complete experience of taking an idea into a web app. Seeing a thought become a page I could open was a particular kind of joy. AI helped me write interfaces, connect data, and debug, while I still had to decide what came first, what needed changing, and whether the result was good enough.",
        "Once the beta was ready, I asked friends to try it. A path that felt familiar to me wasn’t always easy for someone else. I began paying less attention to my list of finished features and more to where someone actually paused while studying.",
        "Later, I wrote down an earlier question: is this problem worth solving? Exam preparation is concentrated in short periods. How many people have this difficulty, how often, and what would they give to solve it? Those questions still need testing. The first version gave me the ability to keep building, and a reason to take them seriously.",
      ],
    },
    {
      slug: "my-ai-workflow", category: "Working methods", date: "2026.07",
      title: "A new AI tool? First, give it one real task",
      excerpt: "Try it before saving it. I want tools that fit actual work, and to get better at explaining the problem.",
      cover: "/finalace-upload.png", coverAlt: "File upload and course creation in FinalAce", coverPosition: "center top",
      paragraphs: [
        "When I started following AI again, the volume of information quickly became overwhelming. There was a new model, agent, or open-source project every day. A longer list of saved links didn’t mean I knew how to use any of them.",
        "Now, when I find a tool, I first ask what problem it solves and try it on a real task. Useful ones stay; the others can wait. Sometimes a flow that looks effortless in a demo gets stuck on my own material and constraints. That is useful to learn too.",
        "In a project, I break a vague goal into parts: clarify the requirements, build the pages, connect the data, review the code, and locate errors. Different tools can help at different stages. I connect the results and decide what happens next.",
        "When an agent gets something wrong, I am learning to pause. What context did it receive? Were the constraints clear? Where does the output differ from what I need? Asking it to try again is easy; describing the gap precisely helps more.",
        "Working through the frontend, backend, website registration, and payment integration has corrected plenty of my assumptions. My workflow takes shape through use: I keep the parts that reduce repetitive work and continue to take responsibility for the choices and follow-through.",
      ],
    },
    {
      slug: "ai-and-encounter", category: "Personal essay", date: "2025.07",
      title: "I still like meeting people face to face",
      excerpt: "Waiting on a small stool for the children to arrive, listening to their voices, noticing their expressions. I value that shared time.",
      cover: "/teaching-class.jpg", coverAlt: "A classroom conversation at the volunteer summer camp", coverPosition: "center center",
      paragraphs: [
        "When I first explored AI, I was curious about almost everything: large language models, gradient descent, reinforcement learning, and data preprocessing. I also read a little neuroscience. Eventually, the information became too much, and I brought my attention back to a more concrete question: how could I use it well in everyday learning and work?",
        "AI can bring information together and generate text, images, and sound. I still enjoy trying these capabilities and seeing how far they can take a new idea.",
        "But I also think of the volunteer camp: sitting on a small stool, waiting for the children to arrive one by one, and talking about our hometowns, pasts, and futures. There wasn’t a task to finish quickly. We were simply spending time together.",
        "I like hearing a person’s voice change as they speak, seeing their eyebrows lift in delight, or their lips press together while they think. Some understanding lives beyond a sentence, in an afternoon we spent in the same place.",
        "As the tools change, I want to keep making time for these meetings. Two people with separate lives get to know each other somewhere, then leave carrying a little memory of the other. I have always found something compelling in that.",
      ],
    },
    {
      slug: "cities-and-choices", category: "City notes", date: "2026.06",
      title: "Visiting friends in Shenzhen, reconsidering my own choices",
      excerpt: "Friends’ projects, nearby businesses, and the pace of the streets made some distant possibilities feel concrete.",
      cover: "/travel-window.jpg", coverAlt: "An observation of a city space during a trip", coverPosition: "center center",
      paragraphs: [
        "On a visit to friends in Shenzhen, I listened to them talk about their projects. Some were learning alongside older students; others were helping with work outside university or in their families’ businesses. Hearing these details made the thought of starting something myself feel a little closer.",
        "Living and walking in Beijing, Guangzhou, and Shenzhen has left me with different impressions of each. Beijing makes me think more of structure and established paths; Guangzhou and Shenzhen have felt more outward-looking and willing to try things. These are partial, personal impressions, shaped by the people I met and the places I happened to go.",
        "An environment can change how we imagine risk. If someone nearby is already building a project, you can ask specific questions: how did you start, where did the customers come from, and what turned out to be difficult? An abstract choice becomes a few things you might actually try.",
        "I have also seen projects stop at the announcement. Taking photos, posting, and renting an office can make the beginning feel definite. Continuing after that takes another kind of patience.",
        "The visit made me more attentive to my surroundings, and reminded me to turn excitement into a next step. A city and its people can reveal new possibilities. I still have to choose the concrete thing I will do next.",
      ],
    },
    {
      slug: "xinjiang-solo-drive", category: "Travel journal", date: "2026.04",
      title: "Driving through Xinjiang alone, changing the plan as I went",
      excerpt: "Leaving Urumqi with the Tian Shan in view. A missed sunrise, a cloudy lake, and help from strangers became part of the trip.",
      cover: "/portrait-xinjiang.jpg", coverAlt: "Ashley traveling in the mountains of Xinjiang", coverPosition: "center 62%",
      paragraphs: [
        "I left Urumqi on my own, with a bag and a car. The Tian Shan often remained in sight, like a distant landmark. I had prepared different routes, but still ended up in places outside the plan.",
        "I remember trucks parked by the road, their drivers cooking in the shade of the vehicles. I remember snowy mountains, grasslands, people taking wedding photos by a lake, and horses, sheep, and calves heading home in the evening. Driving alone gave me time to notice these small scenes.",
        "At Sayram Lake, I stopped trying to catch the sunrise. I was tired from driving and let the day slow down. The lake was cloudy and misty. Sitting beside it, doing very little, was lovely too. I didn’t need every stop to happen at its most photogenic moment.",
        "A security guard at the ticket office helped me buy a student ticket. Worried that the navigation might lead me to the wrong entrance, he suggested adding him on WeChat so I could video-call if I got lost. The routes and entrances were confusing, but I remember that very practical kindness clearly.",
        "Traveling alone also meant keeping track of the road, time, and my own energy. Each change of route needed a new plan for what followed. I liked the freedom and accepted responsibility for the decisions. I came home with photographs, a few encounters, and quiet moments that belonged just to me.",
      ],
    },
  ],
};

// Captions retain the locations already associated with these personal photos.
export const travelEntries: Record<FullLocale, TravelEntry[]> = {
  zh: [
    { id: "mestia", image: "/travel-georgia-mestia.jpg", alt: "夏诗淇在格鲁吉亚梅斯蒂亚徒步", place: "格鲁吉亚 · 梅斯蒂亚", date: "", note: "在梅斯蒂亚徒步，留下一张山里的照片。" },
    { id: "batumi", image: "/travel-georgia-batumi.jpg", alt: "夏诗淇在巴统的黑海边", place: "格鲁吉亚 · 巴统", date: "", note: "走到巴统，去黑海边看一看。" },
    { id: "xinjiang", image: "/portrait-xinjiang-stage.jpg", alt: "夏诗淇在新疆伊犁的山地旅行", place: "新疆 · 伊犁", date: "2026.04", note: "一个人开车出发，路线在变，天山经常留在远处。", position: "center 60%" },
    { id: "hermitage", image: "/portrait-st-petersburg.jpg", alt: "夏诗淇在圣彼得堡冬宫参观", place: "圣彼得堡 · 冬宫", date: "", note: "走进冬宫，在展厅里慢慢看。" },
    { id: "murmansk", image: "/travel-murmansk.jpg", alt: "俄罗斯摩尔曼斯克的冬日旅行照片", place: "俄罗斯 · 摩尔曼斯克", date: "", note: "关于北方、冬天与极夜的一页。" },
    { id: "izu", image: "/travel-sea.jpg", alt: "日本伊豆海边的旅行照片", place: "日本 · 伊豆", date: "", note: "沿着伊豆的海边走一走。" },
  ],
  en: [
    { id: "mestia", image: "/travel-georgia-mestia.jpg", alt: "Ashley hiking in Mestia, Georgia", place: "Mestia, Georgia", date: "", note: "A photograph from a hike in the mountains around Mestia." },
    { id: "batumi", image: "/travel-georgia-batumi.jpg", alt: "Ashley beside the Black Sea in Batumi", place: "Batumi, Georgia", date: "", note: "In Batumi, a walk down to the Black Sea." },
    { id: "xinjiang", image: "/portrait-xinjiang-stage.jpg", alt: "Ashley traveling in the mountains of Ili, Xinjiang", place: "Ili, Xinjiang", date: "2026.04", note: "A drive on my own. The route changed; the Tian Shan often stayed in view.", position: "center 60%" },
    { id: "hermitage", image: "/portrait-st-petersburg.jpg", alt: "Ashley visiting the Hermitage in St Petersburg", place: "The Hermitage, St Petersburg", date: "", note: "Taking my time in the galleries of the Winter Palace." },
    { id: "murmansk", image: "/travel-murmansk.jpg", alt: "A winter travel photograph from Murmansk, Russia", place: "Murmansk, Russia", date: "", note: "A page from the north: winter and the polar night." },
    { id: "izu", image: "/travel-sea.jpg", alt: "The coast of Izu, Japan", place: "Izu, Japan", date: "", note: "A walk along the coast of Izu." },
  ],
};

// Personal “thoughts” fields and the opening of the reading summary; no generated analyses.
export const readingEntries: Record<FullLocale, ReadingEntry[]> = {
  zh: [
    { id: "give-and-take", title: "Give and Take", author: "Adam Grant", note: "多问一句“你需要什么帮助？”，然后去做。帮助也可以是把合适的人和资源联系起来。我需要别人的帮助，也总有能帮上别人的地方。" },
    { id: "negotiation", title: "哈佛谈判课", note: "真难，真有用。我记下了几个要反复练习的动作：提前准备，把蛋糕做大，再讨论怎么分；处理情绪，也面对问题。" },
    { id: "ergun", title: "额尔古纳河右岸", author: "迟子建", note: "读完很震惊，也很平静。我喜欢迟子建的文风。这是我合上书后，最先想记下来的感受。" },
  ],
  en: [
    { id: "give-and-take", title: "Give and Take", author: "Adam Grant", note: "Ask “What do you need help with?” more often, then act on it. Helping can also mean connecting someone to the right people or resources. I need help from others, and there are things I can offer too." },
    { id: "negotiation", title: "Negotiation Genius", note: "Difficult, and useful. A few things to keep practicing: prepare beforehand, expand what is possible before dividing it, deal with the emotions, and face the problem." },
    { id: "ergun", title: "The Last Quarter of the Moon", author: "Chi Zijian", note: "I finished it feeling shaken and calm at once. I like the way Chi Zijian writes. That was the first feeling I wanted to keep after closing the book." },
  ],
};

// Selected personal records: workplace reflection (Feb 13), problem selection (Aug 19), travel (Apr 23).
export const fieldNotes: Record<FullLocale, FieldNote[]> = {
  zh: [
    { id: "basket", label: "工作中的观察", title: "什么时候递一个购物篮", body: "顾客手上已经拿着商品时，递篮子更容易被接受；还在观望时，往往会拒绝。有些人喜欢自己逛，有些人希望有人讲解。我开始先观察，再决定什么时候靠近。" },
    { id: "worth-solving", label: "8 月 19 日 · 记录", title: "先判断，这个问题值得做吗", body: "开始之前，问清多少人遇到、多久遇到一次、愿意付出什么。判断之后就尽快动手，让现实告诉我对不对。FinalAce 也让我继续想：集中在期末的需要，能怎样被满足？" },
    { id: "cloudy-lake", label: "4 月 · 新疆", title: "阴天的赛里木湖也很好", body: "连续开车累了，就不赶日出。湖面雾蒙蒙的，坐在旁边发呆也很好。售票口保安担心我找不到入口，让我迷路时打视频给他；我把这份善意也记下来了。" },
  ],
  en: [
    { id: "basket", label: "An observation at work", title: "When to offer a shopping basket", body: "People were more likely to take a basket once they were already holding products, and often declined while still browsing. Some wanted space; others wanted an explanation. I began watching first, then deciding when to approach." },
    { id: "worth-solving", label: "August 19 · A note", title: "First, is this problem worth solving?", body: "Before starting, ask how many people face it, how often, and what they would give to solve it. Then act quickly enough for reality to test the judgment. FinalAce keeps me thinking about a need concentrated around exams." },
    { id: "cloudy-lake", label: "April · Xinjiang", title: "Sayram Lake was lovely under clouds, too", body: "Tired from driving, I let the sunrise go. Sitting beside the misty lake was enough. A guard at the ticket office worried I might miss the entrance and offered to take a video call if I got lost. I kept a note of that kindness too." },
  ],
};
