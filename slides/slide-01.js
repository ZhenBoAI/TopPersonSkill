// slide-01.js - TopPerson PPT 封面页
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function createSlide01(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.primary }
  });
  
  // 左侧装饰竖条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.6, w: 0.05, h: 1.6,
    fill: { color: theme.accent }
  });
  
  // 主标题
  slide.addText("把顶尖人物", {
    x: 0.85, y: 1.6, w: 8, h: 0.9,
    fontSize: 54, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  
  // 副标题
  slide.addText("做成 AI Skill", {
    x: 0.85, y: 2.4, w: 8, h: 0.7,
    fontSize: 40, fontFace: "Microsoft YaHei",
    color: theme.secondary
  });
  
  // 分隔线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.85, y: 3.4, w: 2.5, h: 0.03,
    fill: { color: theme.light }
  });
  
  // 底部信息
  slide.addText("TopPerson | 开源人物方法论仓库", {
    x: 0.85, y: 3.7, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent
  });
  
  // 右侧装饰圆形
  slide.addShape(pres.shapes.OVAL, {
    x: 7.8, y: 3.5, w: 1.5, h: 1.5,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8.3, y: 4.0, w: 1.0, h: 1.0,
    fill: { color: theme.accent, transparency: 30 }
  });
  
  // 底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.565, w: 10, h: 0.06,
    fill: { color: theme.primary }
  });
  
  return slide;
}

module.exports = { createSlide01, theme };
