# 五星好评样式，纯CSS实现

不多废话，直接上代码：
```html
<!DOCTYPE html>

<head></head>
<style>
  /* 消除单选框默认样式 */
  input {
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .rate-content {
    display: flex;
    /*弹性容器，按比例继承宽高*/
    float: left;
    margin-top: 200px;
    margin-left: 200px;
  }

  /* 选中所有为name属性的选择器 */
  input[name="rate"] {
    font-family: "iconfont";
    font-size: 30px;
    padding-right: 10px;
    transition: all 0.4s ease;
    /*元素变化的过渡时间*/
  }

  input[name="rate"]::after {
    content: "★";
    color: #999;
  }

  input[name="rate"]:checked::after {
    content: "★";
    color: #ffa822;
  }

  input[name="rate"]:hover {
    transform: scale(1.2);
    /*缩放*/
  }

  input[name="rate"]:hover::after {
    content: "★";
    color: #ffa822;
  }

  /* 如果该元素有被选中的兄弟元素，则该元素的样式生效 */
  input[name="rate"]:has(~ input[name="rate"]:checked)::after {
    content: "★";
    color: #ffa822;
  }

  input[name="rate"]:has(~ input[name="rate"]:hover)::after {
    content: "★";
    color: #ffa822;
  }
</style>

<body>
  <div class="rate-content">
    <input type="radio" name="rate">
    <input type="radio" name="rate">
    <input type="radio" name="rate">
    <input type="radio" name="rate">
    <input type="radio" name="rate">
  </div>
</body>
```