var close = document.getElementById("close");
var popup = document.querySelector(".popup");

close.addEventListener("click", function () {
  popup.classList.add("hidden");
});

const container = document.querySelector(".box");
const btns = document.querySelectorAll(".btn");
const imgList = ["20", "21", "22", "23", "24"];
let index = 0;

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("clicked");
    if (button.classList.contains("btn-left")) {
      index--;
      if (index < 0) {
        index = imgList.length - 1;
      }
    } else {
      index++;
      if (index === imgList.length) {
        index = 0; // Wrap around to the first image
      }
    }
    container.style.background = `url("/nostar-ecommerce/${imgList[index]}.jpg") center/cover fixed no-repeat `;
    container.style.backgroundSize = "100% 100%";
    container.style.backgroundAttachment = "scroll";
  });
});
