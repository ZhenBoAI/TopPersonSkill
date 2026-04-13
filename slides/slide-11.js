// slide-11.js - 使用方法页
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

function createSlide11(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };
  
  // 顶部装饰线
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06,
    fill: { color: theme.primary }
  });
  
  // 标题
  slide.addText("如何使用", {
    x: 0.6, y: 0.4, w: 8.8, h: 0.7,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });
  
  // 三步流程
  const steps = [
    { num: "1", title: "选择人物", desc: "进入 skills 目录，选择一个人物" },
    { num: "2", title: "描述问题", desc: "告诉 AI 你当前遇到的现实问题" },
    { num: "3", title: "获得建议", desc: "AI 会根据这个人物的判断方式来给你建议" }
  ];
  
  const startX = 0.6;
  const startY = 1.4;
  const cardW = 2.8;
  const cardH = 2.0;
  const gapX = 0.3;
  
  steps.forEach((step, index) => {
    const x = startX + index * (cardW + gapX);
    
    // 卡片背景
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: startY, w: cardW, h: cardH,
      fill: { color: "FFFFFF" },
      line: { color: theme.light, width: 1 },
      rectRadius: 0.1,
      shadow: { type: "outer", blur: 4, offset: 2, angle: 45, opacity: 0.1 }
    });
    
    // 步骤编号圆形
    slide.addShape(pres.shapes.OVAL, {
      x: x + cardW / 2 - 0.35, y: startY + 0.25, w: 0.7, h: 0.7,
      fill: { color: theme.primary }
    });
    slide.addText(step.num, {
      x: x + cardW / 2 - 0.35, y: startY + 0.25, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });
    
    // 步骤标题
    slide.addText(step.title, {
      x: x, y: startY + 1.1, w: cardW, h: 0.4,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });
    
    // 步骤描述
    slide.addText(step.desc, {
      x: x + 0.15, y: startY + 1.5, w: cardW - 0.3, h: 0.5,
      fontSize: 11, fontFace: "Microsoft YaHei",
      color: theme.secondary,
      align: "center"
    });
    
    // 箭头（除了最后一个）
    if (index < steps.length - 1) {
      slide.addText("→", {
        x: x + cardW, y: startY + 0.8, w: gapX, h: 0.5,
        fontSize: 24, fontFace: "Arial",
        color: theme.accent,
        align: "center", valign: "middle"
      });
    }
  });
  
  // 示例代码框
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 3.7, w: 8.8, h: 1.0,
    fill: { color: theme.primary },
    rectRadius: 0.1
  });
  slide.addText("Use $zeng-guofan to analyze this situation and give me actionable advice.", {
    x: 0.8, y: 3.7, w: 8.4, h: 1.0,
    fontSize: 13, fontFace: "Consolas",
    color: theme.bg, align: "center", valign: "middle"
  });
  
  // 页码徽章
  slide.addShape(pres.shapes.OVAL, {
    x: 9.2, y: 4.9, w: 0.5, h: 0.5,
    fill: { color: theme.accent }
  });
  slide.addText("11", {
    x: 9.2, y: 4.9, w: 0.5, h: 0.5,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  
  return slide;
}

module.exports = { createSlide11, theme };
