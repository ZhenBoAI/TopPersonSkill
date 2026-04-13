// slide-09.js - 人物展示页
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function createSlide09(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.primary }
  });
  
  // 标题
  slide.addText("精选人物，覆盖四大场景", {
    x: 0.6, y: 0.4, w: 8.8, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  
  // 人物数据
  const persons = [
    { name: "曾国藩", tag: "收战线、稳节奏" },
    { name: "费曼", tag: "学明白、讲清楚" },
    { name: "段永平", tag: "判断机会值不值得做" },
    { name: "巴菲特", tag: "投资决策框架" },
    { name: "王阳明", tag: "知行合一、心学智慧" },
    { name: "乔布斯", tag: "产品判断、创新思维" },
    { name: "张一鸣", tag: "战略决策" },
    { name: "稻盛和夫", tag: "经营哲学" }
  ];
  
  const startX = 0.5;
  const startY = 1.3;
  const cardW = 2.1;
  const cardH = 1.3;
  const gapX = 0.2;
  const gapY = 0.2;
  
  persons.forEach((person, index) => {
    const col = index % 4;
    const row = Math.floor(index / 4);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);
    
    // 卡片背景
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.08,
      shadow: { type: "outer", blur: 3, offset: 2, angle: 45, opacity: 0.08 }
    });
    
    // 人物名称
    slide.addText(person.name, {
      x: x, y: y + 0.2, w: cardW, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });
    
    // 标签
    slide.addText(person.tag, {
      x: x + 0.1, y: y + 0.75, w: cardW - 0.2, h: 0.4,
      fontSize: 10, fontFace: "Microsoft YaHei",
      color: theme.accent,
      align: "center"
    });
  });
  
  // 底部信息
  slide.addText("已有 33 个人物 skill，持续更新", {
    x: 0.5, y: 4.1, w: 8, h: 0.4,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.secondary, align: "center"
  });
  
  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.2, y: 4.9, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("09", {
    x: 9.2, y: 4.9, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide09, theme };
