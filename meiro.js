let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let targetArea = document.querySelector(".target");
let x = 1;
let y = 1;
let m = 3;
let l = 50;
let ii;
let time = 0;
let hun = 0;
let data = new Array(10);
for (let i = 0; i < 10; i++) {
  data[i] = new Array(10);
  for (let iy = 0; iy < 10; iy++) {
    data[i][iy] = 1;
  }
}
data[3][3] = 2;
data[6][3] = 2;
data[6][6] = 2;
data[3][6] = 2;
data[0][0] = 2;
data[0][9] = 2;
data[9][0] = 2;
data[9][9] = 2;

setInterval(() => {
  for (iy = 0; iy < 10; iy++) {
    for (i = 0; i < 10; i++) {
      if (data[iy][i] == 1) {
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.rect(i * l, iy * l, l, l);
        ctx.fill();
        ctx.closePath();
      } else if (data[iy][i] == 2) {
        ctx.beginPath();
        ctx.fillStyle = "#ffffff";
        ctx.rect(i * l, iy * l, l, l);
        ctx.fill();
        ctx.closePath();
      }
    }
  }
  ii = 0;
  for (iy = 0; iy < 10; iy++) {
    for (i = 0; i < 10; i++) {
      if (data[iy][i] == 2) {
        ii++;
      }
      if (ii == 100) {
        for (let i = 0; i < 10; i++) {
          for (let iy = 0; iy < 10; iy++) {
            data[i][iy] = 1;
          }
        }
        data[3][3] = 2;
        data[6][3] = 2;
        data[6][6] = 2;
        data[3][6] = 2;
        data[0][0] = 2;
        data[0][9] = 2;
        data[9][0] = 2;
        data[9][9] = 2;
        alert(
          "ゲームクリア‼ あなたのクリアタイムは" +
            hun +
            "分" +
            time +
            "秒でした‼"
        );
        time = 0;
        hun = 0;
        document.getElementById("byou").innerHTML = time;
        document.getElementById("hun").innerHTML = hun;
      }
    }
  }
}, 10);

setInterval(() => {
  time++;
  if (time == 60) {
    time = 0;
    hun++;
  }
  document.getElementById("byou").innerHTML = time;
  document.getElementById("hun").innerHTML = hun;
}, 1000);

window.addEventListener("load", function () {
  window.onmousemove = function (e) {
    x = e.pageX;
    y = e.pageY;
  };
});

targetArea.addEventListener("mousedown", () => {
  data[Math.floor(y / l)][Math.floor(x / l)]++;
  if (Math.floor(y / l) < 9) {
    data[Math.floor(y / l) + 1][Math.floor(x / l)]++;
  }
  if (Math.floor(y / l) > 0) {
    data[Math.floor(y / l) - 1][Math.floor(x / l)]++;
  }
  if (Math.floor(x / l) < 9) {
    data[Math.floor(y / l)][Math.floor(x / l) + 1]++;
  }
  if (Math.floor(x / l) > 0) {
    data[Math.floor(y / l)][Math.floor(x / l) - 1]++;
  }
  for (let i = 0; i < 10; i++) {
    for (let iy = 0; iy < 10; iy++) {
      if (data[i][iy] == 3) {
        data[i][iy] = 1;
      }
    }
  }
});
