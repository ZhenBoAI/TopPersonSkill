// slide-07.js - 核心定位页
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function createSlide07(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.primary }
  });
  
  // 左侧装饰竖条
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 0.5, w: 0.05, h: 0.8,
    fill: { color: theme.accent }
  });
  
  // 主标题
  slide.addText("不是语录库，是方法论仓库", {
    x: 0.85, y: 0.5, w: 8, h: 0.8,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  
  // 左列 - ✗ 不是
  slide.addText("✗  不是", {
    x: 0.6, y: 1.6, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true
  });
  
  const notItems = [
    "语录合集 — 把名人说过的话堆在一起",
    "名人崇拜 — 把人当偶像，不关心方法",
    "空洞鸡汤 — 听起来有道理但无法执行"
  ];
  
  notItems.forEach((item, i) => {
    const yBase = 2.2 + i * 0.65;
    
    // 红色圆点
    slide.addShape(pres.shapes.OVAL, {
      x: 0.8, y: yBase + 0.08, w: 0.16, h: 0.16,
      fill: { color: "C0392B" }
    });
    
    slide.addText(item, {
      x: 1.1, y: yBase, w: 3.6, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.secondary
    });
  });
  
  // 中间分隔竖线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 1.6, w: 0.02, h: 3.0,
    fill: { color: theme.light }
  });
  
  // 右列 - ✓ 是
  slide.addText("✓  是", {
    x: 5.4, y: 1.6, w: 4, h: 0.5,
    fontSize: 16, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  
  const yesItems = [
    "提炼方法论 — 从一手资料提取可复用的判断方式",
    "翻译成现代建议 — 把历史智慧变成可执行的行动",
    "让 AI 稳定调用 — 整理成可被系统化使用的 skill"
  ];
  
  yesItems.forEach((item, i) => {
    const yBase = 2.2 + i * 0.65;
    
    // 绿色圆点
    slide.addShape(pres.shapes.OVAL, {
      x: 5.6, y: yBase + 0.08, w: 0.16, h: 0.16,
      fill: { color: "27AE60" }
    });
    
    slide.addText(item, {
      x: 5.9, y: yBase, w: 3.8, h: 0.5,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary
    });
  });
  
  // 底部总结
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 4.6, w: 8.8, h: 0.6,
    fill: { color: theme.primary },
    rectRadius: 0.08
  });
  
  slide.addText("遇到现实问题时，如果按某个顶尖人物的方式来判断、取舍和行动，会怎么做？", {
    x: 0.8, y: 4.6, w: 8.4, h: 0.6,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: theme.bg, align: "center", valign: "middle",
    italic: true
  });
  
  // 页码徽章
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 8.5, y: 5.35, w: 0.9, h: 0.5,
    fill: { color: theme.accent },
    rectRadius: 0.08
  });
  slide.addText("07", {
    x: 8.5, y: 5.35, w: 0.9, h: 0.5,
    fontSize: 14, fontFace: "Arial",
    color: theme.primary, bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide07, theme };
