let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let canva = document.getElementById("my");
let ct = canvas.getContext("2d");
let targetArea = document.querySelector(".target");
let i = 0;
let iy = 0;
let ii = 0;
let c = 0;
let l = 100;
let x = 0;
let y = 0;
let time = 0;
let timem = 0;
let nenn = 0;
let ka = 0;
let hi = 0;
let zi = 0;
let ll = 0;
let data = new Array(7);
for (i = 0; i < 7; i++) {
  data[i] = new Array(7);
  for (iy = 0; iy < 7; iy++) {
    ii++;
  }
}

ii = 1;

for (i = 0; i < 4; i++) {
  for (iy = 0; iy < 4; iy++) {
    data[iy][i] = 0;
  }
}

for (ii = 0; ii < 16; ii++) {
  do {
    i = Math.floor(Math.random() * 4);
    iy = Math.floor(Math.random() * 4);
    if (data[i][iy] == 0) {
      data[i][iy] = ii;
    }
  } while (data[i][iy] != ii);
}

ll = 2;

function kakuy() {
  ct.beginPath();
  ct.rect((i * l) / ll + 455, ((iy + 0) * l) / ll, l / ll, l / ll);
  ct.fill();
  ct.closePath();
}

function kakuyy() {
  ii = 0;
  for (iy = 0; iy < 4; iy++) {
    for (i = 0; i < 4; i++) {
      ii++;
      if (ii == 1) {
        ct.fillStyle = "#000000";
        kakuy();
      } else if (ii == 2) {
        ct.fillStyle = "#111111";
        kakuy();
      } else if (ii == 3) {
        ct.fillStyle = "#222222";
        kakuy();
      } else if (ii == 4) {
        ct.fillStyle = "#333333";
        kakuy();
      } else if (ii == 5) {
        ct.fillStyle = "#444444";
        kakuy();
      } else if (ii == 6) {
        ct.fillStyle = "#555555";
        kakuy();
      } else if (ii == 7) {
        ct.fillStyle = "#666666";
        kakuy();
      } else if (ii == 8) {
        ct.fillStyle = "#777777";
        kakuy();
      } else if (ii == 9) {
        ct.fillStyle = "#888888";
        kakuy();
      } else if (ii == 10) {
        ct.fillStyle = "#999999";
        kakuy();
      } else if (ii == 11) {
        ct.fillStyle = "#aaaaaa";
        kakuy();
      } else if (ii == 12) {
        ct.fillStyle = "#bbbbbb";
        kakuy();
      } else if (ii == 13) {
        ct.fillStyle = "#cccccc";
        kakuy();
      } else if (ii == 14) {
        ct.fillStyle = "#dddddd";
        kakuy();
      } else if (ii == 15) {
        ct.fillStyle = "#eeeeee";
        kakuy();
      }
    }
  }
}

//最初の色ずけ
ctx.clearRect(0, 0, canvas.width, canvas.height);
kakuyy();
for (iy = 0; iy < 4; iy++) {
  for (i = 0; i < 4; i++) {
    if (data[i][iy] == 1) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#000000";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 2) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#111111";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 3) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#222222";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 4) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#333333";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 5) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#444444";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 6) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#555555";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 7) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#666666";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 8) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#777777";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 9) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#888888";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 10) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#999999";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 11) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#aaaaaa";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 12) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#bbbbbb";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 13) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#cccccc";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 14) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#dddddd";
      ctx.fill();
      ctx.closePath();
    }
    if (data[i][iy] == 15) {
      ctx.beginPath();
      ctx.rect(i * l, iy * l, l, l);
      ctx.fillStyle = "#eeeeee";
      ctx.fill();
      ctx.closePath();
    }
  }
}

kaku();

setInterval(() => {
  kaku();
  time++;
  if (time > 59) {
    timem++;
    time = 0;
  }
  if (timem > 59) {
    zi++;
    timem = 0;
  }
  if (zi > 23) {
    hi++;
    zi = 0;
  }
  document.getElementById("time").innerHTML = time;
  document.getElementById("timem").innerHTML = timem;
}, 1000);

function kaku() {}

window.addEventListener("load", function () {
  window.onmousemove = function (e) {
    x = e.pageX;
    y = e.pageY;
  };
});

targetArea.addEventListener("mousedown", () => {
  //チート
  if ((Math.floor(x / l) == 5) & (Math.floor(y / l) == 1)) {
    ii = 1;
    for (i = 0; i < 4; i++) {
      for (iy = 0; iy < 4; iy++) {
        data[iy][i] = ii;
        ii++;
      }
    }
    data[3][3] = 15;
    data[2][3] = 0;
  }
  //動かす
  y = y - 100;
  if (data[Math.floor(x / l)][Math.floor(y / l)] != 0) {
    if (data[Math.floor(x / l) + 1][Math.floor(y / l)] == 0) {
      data[Math.floor(x / l) + 1][Math.floor(y / l)] =
        data[Math.floor(x / l)][Math.floor(y / l)];
      data[Math.floor(x / l)][Math.floor(y / l)] = 0;
    } else if (Math.floor(x / l) != 0) {
      if (data[Math.floor(x / l) - 1][Math.floor(y / l)] == 0) {
        data[Math.floor(x / l) - 1][Math.floor(y / l)] =
          data[Math.floor(x / l)][Math.floor(y / l)];
        data[Math.floor(x / l)][Math.floor(y / l)] = 0;
      }
    }
    if (data[Math.floor(x / l)][Math.floor(y / l) + 1] == 0) {
      data[Math.floor(x / l)][Math.floor(y / l) + 1] =
        data[Math.floor(x / l)][Math.floor(y / l)];
      data[Math.floor(x / l)][Math.floor(y / l)] = 0;
    } else if (Math.floor(y / l) != 0) {
      if (data[Math.floor(x / l)][Math.floor(y / l - 1)] == 0) {
        data[Math.floor(x / l)][Math.floor(y / l - 1)] =
          data[Math.floor(x / l)][Math.floor(y / l)];
        data[Math.floor(x / l)][Math.floor(y / l)] = 0;
      }
    }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  kakuyy();
  for (iy = 0; iy < 4; iy++) {
    for (i = 0; i < 4; i++) {
      if (data[i][iy] == 1) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 2) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#111111";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 3) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#222222";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 4) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#333333";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 5) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#444444";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 6) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#555555";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 7) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#666666";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 8) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#777777";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 9) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#888888";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 10) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#999999";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 11) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#aaaaaa";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 12) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#bbbbbb";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 13) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#cccccc";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 14) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#dddddd";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 15) {
        ctx.beginPath();
        ctx.rect(i * l, iy * l, l, l);
        ctx.fillStyle = "#eeeeee";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
  //クリアしてるか判定
  ii = 1;
  c = 0;
  for (i = 0; i < 4; i++) {
    for (iy = 0; iy < 4; iy++) {
      if (data[iy][i] == ii) {
        c++;
      }
      ii++;
    }
  }
  //もしクリアしてたら
  if (c == 15) {
    alert(
      "クリア‼あなたは天才です‼クリアタイムは" +
        hi +
        "日" +
        zi +
        "時間" +
        timem +
        "分" +
        time +
        "秒でした‼"
    );
    //リセット
    hi = 0;
    zi = 0;
    time = 0;
    timem = 0;
    for (i = 0; i < 4; i++) {
      for (iy = 0; iy < 4; iy++) {
        data[iy][i] = 0;
      }
    }
    for (ii = 0; ii < 16; ii++) {
      do {
        i = Math.floor(Math.random() * 4);
        iy = Math.floor(Math.random() * 4);
        if (data[i][iy] == 0) {
          data[i][iy] = ii;
        }
      } while (data[i][iy] != ii);
    }
    //最初の色ずけ
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    kakuyy();
    for (iy = 0; iy < 4; iy++) {
      for (i = 0; i < 4; i++) {
        if (data[i][iy] == 1) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#000000";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 2) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#111111";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 3) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#222222";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 4) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#333333";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 5) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#444444";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 6) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#555555";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 7) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#666666";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 8) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#777777";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 9) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#888888";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 10) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#999999";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 11) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#aaaaaa";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 12) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#bbbbbb";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 13) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#cccccc";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 14) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#dddddd";
          ctx.fill();
          ctx.closePath();
        }
        if (data[i][iy] == 15) {
          ctx.beginPath();
          ctx.rect(i * l, iy * l, l, l);
          ctx.fillStyle = "#eeeeee";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
});
