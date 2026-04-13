// slide-02.js - 目录页
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function createSlide02(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.primary }
  });
  
  // 页面标题
  slide.addText("内容导览", {
    x: 0.6, y: 0.5, w: 4, h: 0.7,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  
  // 标题下划线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.1, w: 1.6, h: 0.04,
    fill: { color: theme.accent }
  });
  
  // 章节配置
  const chapters = [
    { num: "01", title: "问题", desc: "为什么需要这个" },
    { num: "02", title: "定位", desc: "它是什么" },
    { num: "03", title: "内容", desc: "人物与方法论" },
    { num: "04", title: "使用", desc: "如何开始" }
  ];
  
  const startY = 1.5;
  const itemHeight = 0.85;
  
  chapters.forEach((ch, i) => {
    const y = startY + i * itemHeight;
    
    // 章节编号
    slide.addText(ch.num, {
      x: 0.6, y: y, w: 0.8, h: 0.6,
      fontSize: 26, fontFace: "Arial",
      color: theme.accent, bold: true
    });
    
    // 章节标题
    slide.addText(ch.title, {
      x: 1.5, y: y, w: 1.3, h: 0.6,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    
    // 分隔符
    slide.addText("：", {
      x: 2.7, y: y, w: 0.3, h: 0.6,
      fontSize: 20, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    
    // 章节描述
    slide.addText(ch.desc, {
      x: 3.0, y: y, w: 4, h: 0.6,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
    
    // 连接线
    if (i < chapters.length - 1) {
      slide.addShape(pres.shapes.RECTANGLE, {
        x: 0.95, y: y + 0.6, w: 0.02, h: 0.25,
        fill: { color: theme.light }
      });
    }
  });
  
  // 右侧装饰
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: 1.2, w: 2.0, h: 2.0,
    fill: { color: theme.light, transparency: 50 }
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8.0, y: 2.6, w: 1.2, h: 1.2,
    fill: { color: theme.accent, transparency: 30 }
  });
  
  // 页码徽章
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.8, y: 4.8, w: 0.8, h: 0.5,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  slide.addText("2", {
    x: 8.8, y: 4.8, w: 0.8, h: 0.5,
    fontSize: 16, fontFace: "Arial",
    color: theme.bg, bold: true,
    align: "center", valign: "middle"
  });
  
  // 底部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 5.565, w: 10, h: 0.06,
    fill: { color: theme.primary }
  });
  
  return slide;
}

module.exports = { createSlide02, theme };
