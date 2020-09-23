// 用var宣告會用到的全域變數。
var
  hex1 = 0,
  hex2 = 0,
  hex3 = 0,
  hex4 = 0,
  hex5 = 0,
  hex6 = 0,
  hexCode = '000000';

// 主程式: 將數字轉換為16進位，然後把六個單一組合在一起。
const colorCode = {

  red(value) {
    hex1 = (Math.floor(value / 16)).toString(16)
    hex2 = (value % 16).toString(16)
    model.finalRendering()
  },

  green(value) {
    hex3 = (Math.floor(value / 16)).toString(16)
    hex4 = (value % 16).toString(16)
    model.finalRendering()
  },

  blue(value) {
    hex5 = (Math.floor(value / 16)).toString(16)
    hex6 = (value % 16).toString(16)
    model.finalRendering()
  }
}

const model = {

  // 組合六個數字
  combineHexNum() {
    hexCode =
      String(hex1) + String(hex2) + String(hex3) +
      String(hex4) + String(hex5) + String(hex6)
  },

  // 在HTML中插入最終結果
  printHexCode() {
    document.querySelector('#colorDisplay').innerText = `#${hexCode}`
  },

  // 組合以上兩個函式並且改變背景顏色
  finalRendering() {
    model.combineHexNum()
    model.printHexCode()
    document.body.style.background = `#${hexCode}`;
  }
}