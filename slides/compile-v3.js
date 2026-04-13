const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "TopPerson - 把顶尖人物做成 AI Skill";

const colors = {
  dark: "#0a0a0f",
  purple: "#9333ea",
  gold: "#f59e0b",
  white: "#ffffff",
  gray: "#9ca3af",
  lightGray: "#e5e7eb",
  accent: "#ec4899",
  cyan: "#06b6d4"
};

const makeShadow = () => ({
  type: "outer",
  color: "000000",
  blur: 25,
  offset: 8,
  angle: 135,
  opacity: 0.4
});

// Slide 1: 宣告式开头
function createSlide1() {
  let slide = pres.addSlide();
  slide.background = { color: colors.dark };
  
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: colors.purple }
  });
  
  slide.addText("如何把顶级人物变成你的导师？", {
    x: 0.5, y: 1.5, w: 9, h: 1.2,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: colors.white, bold: true, align: "center"
  });
  
  slide.addText("它来了", {
    x: 0.5, y: 2.8, w: 9, h: 0.8,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: colors.gray, align: "center"
  });
  
  slide.addText("他来了", {
    x: 0.5, y: 3.5, w: 9, h: 1.2,
    fontSize: 72, fontFace: "Microsoft YaHei",
    color: colors.purple, bold: true, align: "center"
  });
  
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 4.8, w: 3, h: 0.04,
    fill: { color: colors.purple }
  });
}

// Slide 2: 揭示
function createSlide2() {
  let slide = pres.addSlide();
  slide.background = { color: colors.dark };
  
  slide.addText("TopPerson", {
    x: 0.5, y: 1.2, w: 9, h: 1,
    fontSize: 64, fontFace: "Arial",
    color: colors.white, bold: true, align: "center"
  });
  
  slide.addText("这个开源库蒸馏了各种顶级人物的 Skill", {
    x: 0.5, y: 2.4, w: 9, h: 0.7,
    fontSize: 26, fontFace: "Microsoft YaHei",
    color: colors.lightGray, align: "center"
  });
  
  slide.addShape(pres.shapes.LINE, {
    x: 2.5, y: 3.3, w: 5, h: 0,
    line: { color: colors.purple, width: 2 }
  });
  
  slide.addText("让你随时调用他们的思维方式", {
    x: 0.5, y: 3.6, w: 9, h: 0.6,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: colors.purple, align: "center"
  });
  
  const tags = ["开源", "免费", "AI Skill"];
  const tagW = 1.5;
  const totalW = tags.length * tagW + (tags.length - 1) * 0.3;
  const startX = (10 - totalW) / 2;
  
  tags.forEach((tag, i) => {
    const x = startX + i * (tagW + 0.3);
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: 4.5, w: tagW, h: 0.5,
      fill: { color: colors.purple, transparency: 20 },
      line: { color: colors.purple, width: 1 },
      rectRadius: 0.1
    });
    slide.addText(tag, {
      x, y: 4.5, w: tagW, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: colors.white, align: "center", valign: "middle"
    });
  });
}

// Slide 3: 曾国藩
function createSlide3() {
  let slide = pres.addSlide();
  slide.background = { color: colors.dark };
  
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 0.4, w: 1.8, h: 0.5,
    fill: { color: colors.purple },
    rectRadius: 0.1
  });
  slide.addText("曾国藩", {
    x: 0.5, y: 0.4, w: 1.8, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: colors.white, bold: true, align: "center", valign: "middle"
  });
  
  slide.addText("用曾国藩的方式做决策", {
    x: 0.5, y: 1.2, w: 9, h: 0.8,
    fontSize: 34, fontFace: "Microsoft YaHei",
    color: colors.white, bold: true
  });
  
  const scenarios = [
    { icon: "📋", text: `面对复杂局面，先"结硬寨、打呆仗"` },
    { icon: "📝", text: "每天写日记复盘，从不间断" },
    { icon: "🤝", text: "用人之道：德为主，才为辅" },
    { icon: "🧘", text: "越是艰难，越要心静如水" }
  ];
  
  scenarios.forEach((item, i) => {
    const y = 2.3 + i * 0.75;
    slide.addText(item.icon, {
      x: 0.8, y: y, w: 0.6, h: 0.6,
      fontSize: 26, align: "center", valign: "middle"
    });
    slide.addText(item.text, {
      x: 1.6, y: y, w: 7.5, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: colors.lightGray, valign: "middle"
    });
  });
  
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: "1a1a2e" }
  });
  slide.addText(`"不聪明，但极其勤奋；不取巧，但极其踏实"`, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: colors.gold, align: "center", valign: "middle", italic: true
  });
}

// Slide 4: 费曼
function createSlide4() {
  let slide = pres.addSlide();
  slide.background = { color: colors.dark };
  
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.5, y: 0.4, w: 1.5, h: 0.5,
    fill: { color: colors.cyan },
    rectRadius: 0.1
  });
  slide.addText("费曼", {
    x: 0.5, y: 0.4, w: 1.5, h: 0.5,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: colors.white, bold: true, align: "center", valign: "middle"
  });
  
  slide.addText("用费曼的方式理解事物", {
    x: 0.5, y: 1.2, w: 9, h: 0.8,
    fontSize: 34, fontFace: "Microsoft YaHei",
    color: colors.white, bold: true
  });
  
  const scenarios = [
    { icon: "🔍", text: `"你真的理解这个问题吗？"` },
    { icon: "🎯", text: "给我画个图，用最简单的语言讲清楚" },
    { icon: "❌", text: "遇到不懂的，绝不装懂，也不轻易放过" },
    { icon: "💡", text: "最后你会发现：原来这么简单！" }
  ];
  
  scenarios.forEach((item, i) => {
    const y = 2.3 + i * 0.75;
    slide.addText(item.icon, {
      x: 0.8, y: y, w: 0.6, h: 0.6,
      fontSize: 26, align: "center", valign: "middle"
    });
    slide.addText(item.text, {
      x: 1.6, y: y, w: 7.5, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: colors.lightGray, valign: "middle"
    });
  });
  
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fill: { color: "1a1a2e" }
  });
  slide.addText(`"凡是我无法创造的，我都无法理解"`, {
    x: 0.5, y: 5.0, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: colors.cyan, align: "center", valign: "middle", italic: true
  });
}

// Slide 5: 人物展示
function createSlide5() {
  let slide = pres.addSlide();
  slide.background = { color: colors.dark };
  
  slide.addText("看看有没有你的精神偶像", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: colors.white, bold: true, align: "center"
  });
  
  const characters = [
    { name: "曾国藩", desc: "成事之道", color: colors.purple },
    { name: "王阳明", desc: "心学智慧", color: colors.purple },
    { name: "费曼", desc: "深度理解", color: colors.cyan },
    { name: "巴菲特", desc: "投资思维", color: colors.gold },
    { name: "乔布斯", desc: "创新设计", color: colors.accent },
    { name: "段永平", desc: "商业决策", color: colors.gold },
    { name: "张一鸣", desc: "理性创业", color: colors.purple },
    { name: "稻盛和夫", desc: "经营哲学", color: colors.cyan }
  ];
  
  const cols = 4;
  const cardW = 2.1;
  const cardH = 1.7;
  const startX = (10 - cols * cardW - (cols - 1) * 0.2) / 2;
  
  characters.forEach((char, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = startX + col * (cardW + 0.2);
    const y = 1.3 + row * (cardH + 0.25);
    
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y, w: cardW, h: cardH,
      fill: { color: "1a1a2e" },
      line: { color: char.color, width: 2 },
      rectRadius: 0.1
    });
    
    slide.addText(char.name, {
      x, y: y + 0.4, w: cardW, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: colors.white, bold: true, align: "center"
    });
    
    slide.addText(char.desc, {
      x, y: y + 1.0, w: cardW, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: colors.gray, align: "center"
    });
  });
}

// Slide 6: 使用场景
function createSlide6() {
  let slide = pres.addSlide();
  slide.background = { color: colors.dark };
  
  slide.addText("什么时候用它？", {
    x: 0.5, y: 0.4, w: 9, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: colors.white, bold: true, align: "center"
  });
  
  const scenes = [
    { icon: "🤔", q: "这个offer要不要接？", who: "用巴菲特思维" },
    { icon: "😤", q: "团队有人摸鱼怎么办？", who: "用曾国藩带团队" },
    { icon: "📚", q: "学了很多但没进步？", who: "用费曼方法审视" },
    { icon: "😟", q: "人生陷入低谷？", who: "用王阳明炼心性" }
  ];
  
  scenes.forEach((scene, i) => {
    const y = 1.3 + i * 1.0;
    
    slide.addText(scene.icon, {
      x: 0.8, y: y, w: 0.8, h: 0.8,
      fontSize: 32, align: "center", valign: "middle"
    });
    
    slide.addText(scene.q, {
      x: 1.8, y: y, w: 4.5, h: 0.8,
      fontSize: 24, fontFace: "Microsoft YaHei",
      color: colors.white, valign: "middle"
    });
    
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.8, y: y + 0.15, w: 2.5, h: 0.5,
      fill: { color: colors.purple, transparency: 30 },
      rectRadius: 0.1
    });
    slide.addText(scene.who, {
      x: 6.8, y: y + 0.15, w: 2.5, h: 0.5,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: colors.white, align: "center", valign: "middle"
    });
  });
}

// Slide 7: CTA
function createSlide7() {
  let slide = pres.addSlide();
  slide.background = { color: colors.dark };
  
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.08,
    fill: { color: colors.purple }
  });
  
  slide.addText("去看看", {
    x: 0.5, y: 1.5, w: 9, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: colors.gray, align: "center"
  });
  
  slide.addText("有没有你的精神偶像", {
    x: 0.5, y: 2.3, w: 9, h: 1,
    fontSize: 44, fontFace: "Microsoft YaHei",
    color: colors.white, bold: true, align: "center"
  });
  
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 3.5, y: 3.6, w: 3, h: 0.8,
    fill: { color: colors.purple },
    rectRadius: 0.15,
    shadow: makeShadow()
  });
  slide.addText("⭐ Star 项目", {
    x: 3.5, y: 3.6, w: 3, h: 0.8,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: colors.white, bold: true, align: "center", valign: "middle"
  });
  
  slide.addText("github.com/your-repo/topperson", {
    x: 0.5, y: 4.6, w: 9, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: colors.purple, align: "center"
  });
  
  slide.addText(`"借用一个成熟的方法框架，做更好的判断"`, {
    x: 0.5, y: 5.2, w: 9, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: colors.gray, align: "center", italic: true
  });
}

// Generate
async function createPresentation() {
  console.log("正在生成 v3 宣告版 PPT...");
  createSlide1();
  createSlide2();
  createSlide3();
  createSlide4();
  createSlide5();
  createSlide6();
  createSlide7();
  
  await pres.writeFile({ fileName: "output/topperson-final.pptx" });
  console.log("\n✅ v3 宣告版 PPT 生成成功！");
}

createPresentation().catch(console.error);
