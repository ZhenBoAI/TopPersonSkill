// slide-10.js - 使用场景页
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function createSlide10(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.primary }
  });
  
  // 标题
  slide.addText("覆盖四大场景", {
    x: 0.6, y: 0.4, w: 8.8, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  
  // 四个场景
  const scenarios = [
    { title: "生活", items: "自律、习惯、情绪、长期节奏" },
    { title: "学习", items: "理解、记忆、解释、练习" },
    { title: "工作", items: "执行、沟通、带队、管理、决策" },
    { title: "人生", items: "重大选择、低谷调整、方向判断" }
  ];
  
  const startX = 0.5;
  const startY = 1.3;
  const cardW = 2.15;
  const cardH = 2.6;
  const gapX = 0.2;
  
  scenarios.forEach((scenario, index) => {
    const x = startX + index * (cardW + gapX);
    
    // 卡片背景
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1,
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });
    
    // 顶部装饰条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: startY, w: cardW, h: 0.08,
      fill: { color: theme.accent }
    });
    
    // 场景图标/编号
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardW / 2 - 0.3, y: startY + 0.35, w: 0.6, h: 0.6,
      fill: { color: theme.primary }
    });
    slide.addText(String(index + 1), {
      x: x + cardW / 2 - 0.3, y: startY + 0.35, w: 0.6, h: 0.6,
      fontSize: 18, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    
    // 场景标题
    slide.addText(scenario.title, {
      x: x, y: startY + 1.1, w: cardW, h: 0.5,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });
    
    // 场景描述
    slide.addText(scenario.items, {
      x: x + 0.15, y: startY + 1.65, w: cardW - 0.3, h: 0.8,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
  });
  
  // 底部提示
  slide.addText("遇到问题时，让 AI 帮你用顶尖人物的方法来分析", {
    x: 0.5, y: 4.2, w: 8, h: 0.4,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center",
    italic: true
  });
  
  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.2, y: 4.9, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("10", {
    x: 9.2, y: 4.9, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide10, theme };
