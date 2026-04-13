// slide-08.js - 三个关键能力页
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function createSlide08(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.primary }
  });
  
  // 左侧装饰竖条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.4, w: 0.05, h: 0.7,
    fill: { color: theme.accent }
  });
  
  // 主标题
  slide.addText("只做三件事", {
    x: 0.85, y: 0.4, w: 8, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  
  // 三张能力卡片
  const cards = [
    { number: "01", title: "提炼人物方法论", desc: "从著作、书信、演讲、传记中提取真实可用的判断方式" },
    { number: "02", title: "翻译成现代建议", desc: "把历史智慧转化为普通人今天就能执行的行动" },
    { number: "03", title: "让 AI 稳定调用", desc: "整理成可被 AI 稳定调用的 skill" }
  ];
  
  const cardW = 2.8;
  const cardH = 3.2;
  const cardGap = 0.3;
  const cardsStartX = 0.6;
  const cardsStartY = 1.4;
  
  cards.forEach((card, i) => {
    const cx = cardsStartX + i * (cardW + cardGap);
    const cy = cardsStartY;
    
    // 卡片阴影
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx + 0.05, y: cy + 0.05, w: cardW, h: cardH,
      fill: { color: theme.light },
      rectRadius: 0.1
    });
    
    // 卡片主体
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cx, y: cy, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1
    });
    
    // 顶部色条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: cardW, h: 0.08,
      fill: { color: theme.primary }
    });
    
    // 编号
    slide.addText(card.number, {
      x: cx + 0.3, y: cy + 0.3, w: 1.2, h: 0.5,
      fontSize: 24, fontFace: "Arial",
      color: theme.light, bold: true
    });
    
    // 分隔线
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx + 0.3, y: cy + 0.9, w: 1.6, h: 0.02,
      fill: { color: theme.light }
    });
    
    // 卡片标题
    slide.addText(card.title, {
      x: cx + 0.3, y: cy + 1.1, w: cardW - 0.6, h: 0.6,
      fontSize: 16, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    
    // 卡片描述
    slide.addText(card.desc, {
      x: cx + 0.3, y: cy + 1.8, w: cardW - 0.6, h: 1.2,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });
  
  // 页码徽章
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.5, y: 5.0, w: 0.9, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("08", {
    x: 8.5, y: 5.0, w: 0.9, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide08, theme };
