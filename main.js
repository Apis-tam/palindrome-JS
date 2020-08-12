let input = document.getElementById("input");
const btn = document.getElementById("btnOk");
let res = document.getElementById("result");

btn.addEventListener("click", () => {
  res.innerText = "";
  if (input.value != "") {
    let strReverse = input.value.split("").reverse().join("");

    if (input.value === strReverse) {
      res.innerText = "true : Палиндром ";
    } else {
      res.innerText = "false : HE Палиндром ";
    }
  } else {
    res.innerText = "Введите текст ";
  }
});
