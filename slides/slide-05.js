// slide-05.js - 解决方案内容页
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function createSlide05(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.primary }
  });
  
  // 主标题
  slide.addText("借一个成熟的方法框架", {
    x: 0.6, y: 0.4, w: 8.8, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  
  // 核心观点
  slide.addText("遇到问题时，不是在问 AI 一个答案，而是在借一个成熟人物的判断方式", {
    x: 0.6, y: 1.2, w: 8.8, h: 0.6,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.secondary, italic: true
  });
  
  // 分隔线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.9, w: 8.8, h: 0.02,
    fill: { color: theme.light }
  });
  
  // 三个示例
  const examples = [
    { name: "曾国藩", question: "这个烂摊子怎么收？" },
    { name: "费曼", question: "这个知识点怎么学明白？" },
    { name: "段永平", question: "这个机会值不值得做？" }
  ];
  
  const cardWidth = 2.8;
  const cardGap = 0.3;
  const startX = 0.6;
  const cardY = 2.2;
  const cardHeight = 2.6;
  
  examples.forEach((ex, index) => {
    const cardX = startX + index * (cardWidth + cardGap);
    
    // 卡片背景
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cardX, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1,
      shadow: { type: "outer", blur: 6, offset: 3, angle: 45, opacity: 0.1 }
    });
    
    // 人物名称
    slide.addText(ex.name, {
      x: cardX, y: cardY + 0.4, w: cardWidth, h: 0.6,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });
    
    // 分隔线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cardX + 0.8, y: cardY + 1.1, w: 1.2, h: 0.02,
      fill: { color: theme.light }
    });
    
    // 问题
    slide.addText(ex.question, {
      x: cardX + 0.2, y: cardY + 1.3, w: cardWidth - 0.4, h: 1.0,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top"
    });
  });
  
  // 页码徽章
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.5, y: 5.2, w: 0.9, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("05", {
    x: 8.5, y: 5.2, w: 0.9, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide05, theme };
