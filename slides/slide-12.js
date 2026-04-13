// slide-12.js - 结束页 CTA
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function createSlide12(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  
  // 装饰圆形
  slide.addShape(pres.shapes.OVAL, {
    x: -1, y: -1, w: 3, h: 3,
    fill: { color: theme.light, transparency: 70 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8, y: 4, w: 3, h: 3,
    fill: { color: theme.accent, transparency: 60 }
  });
  
  // 主标题
  slide.addText("现在就试试", {
    x: 0.5, y: 1.2, w: 9, h: 1.0,
    fontSize: 48, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true,
    align: "center"
  });
  
  // 三个行动点
  const actions = [
    "GitHub: github.com/topperson",
    "选择一个人物 skill 开始",
    "把你遇到的问题交给它"
  ];
  
  actions.forEach((action, i) => {
    slide.addText(action, {
      x: 0.5, y: 2.5 + i * 0.6, w: 9, h: 0.5,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.light,
      align: "center"
    });
  });
  
  // 分隔线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 3.5, y: 4.3, w: 3, h: 0.03,
    fill: { color: theme.accent }
  });
  
  // 底部标语
  slide.addText("借一个成熟的方法框架，做更好的判断", {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fontSize: 14, fontFace: "Microsoft YaHei",
    color: theme.accent, align: "center",
    italic: true
  });
  
  // 页码徽章
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.5, y: 5.0, w: 0.9, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("12", {
    x: 8.5, y: 5.0, w: 0.9, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide12, theme };
