
let count = 0
const btns = document.querySelectorAll(".btn")
const values  = document.getElementById('value')


btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains("decrease")) {
        count--;
      } else if (styles.contains("increase")) {
        count++;
      } else {
        count = 0;
      }
  
      if (count > 0) {
        values.style.color = "green";
      }
      if (count <= 0) {
        values.style.color = "red";
        count = 0
      }
      if (count === 0) {
        values.style.color = "#222";
      }
      values.textContent = count;
    });
  });
  
   