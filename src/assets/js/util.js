/**
 * 公共方法
 */
const util = {
  /**
   * 6位随机验证码
   * @returns {string}
   */
  sendCode() {
    const arr = [];
    for (let i = 0; i <= 5; i++) {
      arr[i] = ~~(Math.random() * 10);
    }
    return arr.join('');
  },

};
//
export default util;