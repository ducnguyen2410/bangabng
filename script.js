const parallaxEl = document.querySelectorAll(".parallax");
const parallaxCloudEl = document.querySelectorAll(".parallax_cloud");

let xValue = 0;
let yValue = 0;

function update1(cursorPosition) {
  parallaxEl.forEach((el) => {
    let speedX = el.dataset.speedx;
    el.style.transform = `translateX(${cursorPosition * speedX}px)`;
  });
}

function update2(x, y) {
  parallaxCloudEl.forEach((el) => {
    let speedX = el.dataset.speedx;
    let speedY = el.dataset.speedy;
    el.style.transform = `translateX(${x * speedX}px) translateY(${
      y * speedY
    }px)`;
  });
}

function addTransition() {
  parallaxEl.forEach((el) => {
    el.style.opacity = "1";
    el.style.transition = `0.3s`;
  });
  parallaxCloudEl.forEach((el) => {
    el.style.opacity = "1";
    el.style.transition = `0.3s`;
  });
}

update1(0);
update2(0, 0);
setTimeout(() => {
  addTransition();
}, 850);

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerHeight / 2;
  yValue = e.clientY - window.innerWidth / 2;
  update1(e.clientX);
  update2(e.clientX, e.clientY);
});
