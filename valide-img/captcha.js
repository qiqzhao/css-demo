const captcha = document.querySelector("#captcha");
const handle = document.querySelector("#handle");
const button = document.querySelector("#handle span");
const body = document.querySelector("body");

const oLeft = handle.getBoundingClientRect().left;
const buttonWidth = handle.getBoundingClientRect().width;

let flag = false;

button.addEventListener("mousedown", (e) => {
  flag = true;
});

window.addEventListener("mousemove", (e) => {
  if (flag) {
    captcha.style.setProperty(
      "--moved",
      `${e.clientX - oLeft - buttonWidth / 2}px`
    );
  }
});

window.addEventListener("mouseup", (e) => {
  if (flag) {
    const dis = e.clientX - oLeft;
    if (dis >= 710 && dis <= 716) {
      captcha.classList.add("passed");
    } else {
      captcha.style.setProperty("--moved", "0px");
    }
    flag = false;
  }
});
