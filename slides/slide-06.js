// slide-06.js - Section 2 分隔页
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function createSlide06(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  
  // 大数字 02
  slide.addText("02", {
    x: 0.6, y: 0.8, w: 4, h: 3,
    fontSize: 160, fontFace: "Arial",
    color: theme.light, bold: true,
    transparency: 30
  });
  
  // 标题
  slide.addText("定位", {
    x: 4.2, y: 1.8, w: 5, h: 1.2,
    fontSize: 64, fontFace: "Microsoft YaHei",
    color: theme.bg, bold: true
  });
  
  // 副标题
  slide.addText("它是什么", {
    x: 4.2, y: 2.9, w: 5, h: 0.7,
    fontSize: 24, fontFace: "Microsoft YaHei",
    color: theme.accent
  });
  
  // 装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 4.2, y: 3.6, w: 2.5, h: 0.05,
    fill: { color: theme.accent }
  });
  
  // 页码徽章
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.5, y: 5.0, w: 0.9, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("06", {
    x: 8.5, y: 5.0, w: 0.9, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide06, theme };
