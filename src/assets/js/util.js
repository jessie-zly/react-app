/**
 * 公共方法
 */
export default util = {
  sendCode() {
    let arr = [];
    for (let i = 0; i <= 5; i++) {
      arr[i] = Math.floor(Math.random() * 10);
    }
    return arr.join("");
  }
}