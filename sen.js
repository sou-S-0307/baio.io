let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let n = document.getElementById("textbox1").value;
let x = 100;
let y = 100;
let kaku = 0;
let kaku2 = 0;
let mx = 100;
let my = 100;
let sen = 250;
let i = 0;
let huyasu1 = 0;
let herasu1 = 0;

ctx.beginPath();
ctx.rect(0, 0, 580, 460);
ctx.fillStyle = "#ffffff";
ctx.fill();
ctx.closePath();

function start() {
  huyasu1 = 0;
  herasu1 = 0;
  kaku2 = 0;
  n = Number(document.getElementById("textbox1").value);
  n = n + "";
  document.getElementById("kazu").innerHTML = n;
  kaku = 180 - 360 / n;
  //alert(kaku);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i < n + 1; i++) {
    if (i == 0) {
      y = sen + Math.sin(kaku2) * sen;
      x = sen + Math.cos(kaku2) * sen;
      mx = x;
      my = y;
    } else {
      kaku2 = (kaku2 + kaku) % 360;
      y = sen + Math.sin(kaku2) * sen;
      x = sen + Math.cos(kaku2) * sen;
      ctx.beginPath();
      ctx.moveTo(mx, my);
      ctx.lineTo(x, y);
      ctx.stroke();
      mx = x;
      my = y;
    }
  }
}

function huyasu() {
  huyasu1++;
  kaku2 = 0;
  n = Number(document.getElementById("textbox1").value) + huyasu1 - herasu1;
  document.getElementById("kazu").innerHTML = n;
  n = n + "";
  kaku = 180 - 360 / n;
  //alert(kaku);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i < n + 1; i++) {
    if (i == 0) {
      y = sen + Math.sin(kaku2) * sen;
      x = sen + Math.cos(kaku2) * sen;
      mx = x;
      my = y;
    } else {
      kaku2 = (kaku2 + kaku) % 360;
      y = sen + Math.sin(kaku2) * sen;
      x = sen + Math.cos(kaku2) * sen;
      ctx.beginPath();
      ctx.moveTo(mx, my);
      ctx.lineTo(x, y);
      ctx.stroke();
      mx = x;
      my = y;
    }
  }
}

function herasu() {
  herasu1++;
  kaku2 = 0;
  n = Number(document.getElementById("textbox1").value) + huyasu1 - herasu1;
  document.getElementById("kazu").innerHTML = n;
  n = n + "";
  kaku = 180 - 360 / n;
  //alert(kaku);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (i = 0; i < n + 1; i++) {
    if (i == 0) {
      y = sen + Math.sin(kaku2) * sen;
      x = sen + Math.cos(kaku2) * sen;
      mx = x;
      my = y;
    } else {
      kaku2 = (kaku2 + kaku) % 360;
      y = sen + Math.sin(kaku2) * sen;
      x = sen + Math.cos(kaku2) * sen;
      ctx.beginPath();
      ctx.moveTo(mx, my);
      ctx.lineTo(x, y);
      ctx.stroke();
      mx = x;
      my = y;
    }
  }
}
