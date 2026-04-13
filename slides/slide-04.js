// slide-04.js - 痛点内容页
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function createSlide04(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.primary }
  });
  
  // 页面标题
  slide.addText("信息太多，判断太少", {
    x: 0.6, y: 0.4, w: 8.8, h: 0.8,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  
  // 三个痛点卡片
  const painPoints = [
    { number: "01", text: "遇到问题，网上搜一堆泛泛的建议，越看越迷茫" },
    { number: "02", text: "学了很多道理，但不知道该怎么用" },
    { number: "03", text: "做决定时容易被情绪和焦虑带着走" }
  ];
  
  const cardWidth = 2.8;
  const cardGap = 0.3;
  const startX = 0.6;
  const cardY = 1.5;
  const cardHeight = 2.2;
  
  painPoints.forEach((point, index) => {
    const cardX = startX + index * (cardWidth + cardGap);
    
    // 卡片背景
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: cardX, y: cardY, w: cardWidth, h: cardHeight,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1,
      shadow: { type: "outer", blur: 6, offset: 3, angle: 45, opacity: 0.1 }
    });
    
    // 卡片顶部强调条
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cardX, y: cardY, w: cardWidth, h: 0.1,
      fill: { color: theme.accent }
    });
    
    // 序号
    slide.addText(point.number, {
      x: cardX, y: cardY + 0.3, w: cardWidth, h: 0.6,
      fontSize: 32, fontFace: "Arial",
      color: theme.light, bold: true,
      align: "center"
    });
    
    // 痛点文字
    slide.addText(point.text, {
      x: cardX + 0.2, y: cardY + 1.0, w: cardWidth - 0.4, h: 1.0,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center", valign: "top"
    });
  });
  
  // 底部问题区域
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 4.1, w: 8.8, h: 0.9,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  
  slide.addText("有没有一种方式，能直接借一个成熟人物的判断方式？", {
    x: 0.6, y: 4.1, w: 8.8, h: 0.9,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.bg, align: "center", valign: "middle"
  });
  
  // 页码徽章
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.5, y: 5.2, w: 0.9, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("04", {
    x: 8.5, y: 5.2, w: 0.9, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide04, theme };
