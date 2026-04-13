// compile.js - 编译所有幻灯片生成 PPT
const pptxgen = require("pptxgenjs");

const theme = {
  primary: "22223b",
  secondary: "4a4e69",
  accent: "9a8c98",
  light: "c9ada7",
  bg: "f2e9e4"
};

// 创建演示文稿
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "TopPerson - 把顶尖人物做成 AI Skill";
pres.author = "TopPerson";

// 导入所有幻灯片模块
const slide01 = require("./slide-01.js");
const slide02 = require("./slide-02.js");
const slide03 = require("./slide-03.js");
const slide04 = require("./slide-04.js");
const slide05 = require("./slide-05.js");
const slide06 = require("./slide-06.js");
const slide07 = require("./slide-07.js");
const slide08 = require("./slide-08.js");
const slide09 = require("./slide-09.js");
const slide10 = require("./slide-10.js");
const slide11 = require("./slide-11.js");
const slide12 = require("./slide-12.js");

// 生成所有幻灯片
console.log("正在生成幻灯片...");

slide01.createSlide01(pres);
console.log("  [1/12] 封面页完成");

slide02.createSlide02(pres);
console.log("  [2/12] 目录页完成");

slide03.createSlide03(pres);
console.log("  [3/12] Section 1 分隔页完成");

slide04.createSlide04(pres);
console.log("  [4/12] 痛点内容页完成");

slide05.createSlide05(pres);
console.log("  [5/12] 解决方案页完成");

slide06.createSlide06(pres);
console.log("  [6/12] Section 2 分隔页完成");

slide07.createSlide07(pres);
console.log("  [7/12] 核心定位页完成");

slide08.createSlide08(pres);
console.log("  [8/12] 三个能力页完成");

slide09.createSlide09(pres);
console.log("  [9/12] 人物展示页完成");

slide10.createSlide10(pres);
console.log("  [10/12] 场景页完成");

slide11.createSlide11(pres);
console.log("  [11/12] 使用方法页完成");

slide12.createSlide12(pres);
console.log("  [12/12] 结束页完成");

// 保存文件
const outputPath = "./output/topperson-intro.pptx";
pres.writeFile({ fileName: outputPath })
  .then(() => {
    console.log(`\n✅ PPT 生成成功！`);
    console.log(`📁 文件位置: ${outputPath}`);
  })
  .catch(err => {
    console.error("生成失败:", err);
  });
