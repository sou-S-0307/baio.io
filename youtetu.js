let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let targetArea = document.querySelector(".target");
//変数の定義
//雑用
let i = 0;
let iy = 0;
let ik = 0;
//難易度
let n = 5;
//時間
let time = 0;
//マウス座標
let x = 0;
let y = 0;
//スタート管理
let start = 0;
let over = 0;
//プレイヤーHP
let hp = 100;
//手
let tx, ty, tm;
//弾設定
let hayasa = 5;
//攻撃力
let kou = 1;
//残弾数
let tama = 6;
//リロード
let re = 0;
//リロード速度
let rer = 300;
//リロード速度・建前
let riro = 1;
//壁の防御力
let kabe = 1;
//報酬
let housyu = 0;
//日
let day = 1;
//時間
let timem = 0;
//弾丸1から６
//1
let tama1x;
let tama1y;
let tama1m;
let tama1a = 0;
//2
let tama2x;
let tama2y;
let tama2m;
let tama2a = 0;
//3
let tama3x;
let tama3y;
let tama3m;
let tama3a = 0;
//4
let tama4x;
let tama4y;
let tama4m;
let tama4a = 0;
//5
let tama5x;
let tama5y;
let tama5m;
let tama5a = 0;
//6
let tama6x;
let tama6y;
let tama6m;
let tama6a = 0;
//弾丸数
let da = 111111;
//敵1~10
//敵代用変数
let tekia;
let tekix;
let tekiy;
let tekis;
let tekih;
let tekish;
let tekit;
let tekiti;
let tekik;
let tekid;
let tekisc;
//敵.雑魚1
let teki1a = 1;
let teki1x = 800;
let teki1y = 300;
let teki1s = 1;
let teki1h;
let teki1t = 1;
let teki1ti = 100;
let teki1k = 10;
//敵.雑魚2
let teki2a = 0;
let teki2x = 0;
let teki2y = 0;
let teki2s = 1;
let teki2h;
let teki2t = 1;
let teki2ti = 100;
let teki2k = 10;
//敵.雑魚3
let teki3a = 0;
let teki3x = 0;
let teki3y = 0;
let teki3s = 1;
let teki3h;
let teki3t = 50;
let teki3ti = 100;
let teki3k = 10;
//敵.ちょいつよ.4
let teki4a = 0;
let teki4x = 0;
let teki4y = 0;
let teki4s = 1;
let teki4h = 2;
let teki4sh = 2;
let teki4t = 250;
let teki4ti = 1000;
let teki4k = 20;
let teki4d = 40;
let teki4sc = 100;
//敵.ちょいつよ.5
let teki5a = 0;
let teki5x = 0;
let teki5y = 0;
let teki5s = 20;
let teki5h = 1;
let teki5sh = 1;
let teki5t = 0;
let teki5ti = 1500;
let teki5k = 30;
let teki5d = 20;
let teki5sc = 200;
//敵.ボス.6
let teki6a = 0;
let teki6x = 0;
let teki6y = 0;
let teki6s = 1;
let teki6h = 10;
let teki6sh = 10;
let teki6t = 0;
let teki6ti = 2000;
let teki6k = 50;
let teki6d = 60;
let teki6sc = 1000;
//敵.強いボス.7
let teki7a = 0;
let teki7x = 0;
let teki7y = 0;
let teki7s = 10;
let teki7h = 1;
let teki7sh = 1;
let teki7t = 0;
let teki7ti = 2000;
let teki7k = 50;
let teki7d = 100;
let teki7sc = 1000;
//ラスボス
let tekiba = 0;
let tekibx = 800;
let tekiby = 100;
let tekibs = 4;
let tekibh = 50;
let tekibsh = 50;
let tekibt = 0;
let tekibti = 0;
let tekibk = 750;
let tekibd = 20;
let tekibsc = 1000;
let bostate = 300;
let bostt = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (start == 1) {
    kakuyo();
    zyu();
    teki();
  } else if (start == 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    kakuyo();
  } else if (start == 3) {
    kakuyo();
  } else if (start == 2) {
    kakuyo();
    zyu();
    bos();
    if (tekiba == 0) {
      alert("ゲームクリア‼あなたのスコアは" + time + "点でした‼");
      start = 0;
    }
  }
  if ((over == 1) & (start == 1)) {
    alert(
      "あなたは" +
        day +
        "日間壁を守りつずけ、" +
        "スコアは" +
        time +
        "点でした‼"
    );
    start = 0;
  }
  if (tama == 0) {
    if (re == 10) {
      document.getElementById("tama").innerHTML = "リロード中・";
    } else if (re == rer - Math.abs(rer / 3) * 2) {
      document.getElementById("tama").innerHTML = "リロード中・・";
    } else if (re == rer - Math.abs(rer / 3)) {
      document.getElementById("tama").innerHTML = "リロード中・・・";
    } else if (re == rer) {
      tama = 6;
      document.getElementById("tama").innerHTML = tama;
    }
    re++;
  }
}

function sttart() {
  if (over == 0) {
    start = 1;
  }
}

setInterval(draw, 10);

function tim() {
  if (start == 1) {
    time++;
    document.getElementById("score").innerHTML = time;
    timem++;
    if (timem > 150) {
      timem = 0;
      alert(day + "日目が終わりました。報酬を選んでください。");
      day++;
      document.getElementById("day").innerHTML = day;
      start = 3;
      teki1a = 0;
      teki2a = 0;
      teki3a = 0;
      teki4a = 0;
      teki5a = 0;
      teki6a = 0;
      teki7a = 0;
      tama1a = 0;
      tama2a = 0;
      tama3a = 0;
      tama4a = 0;
      tama5a = 0;
      tama6a = 0;
      document.getElementById("housyu").innerHTML = "　報酬";
      housyu = Math.floor(Math.random() * 3);
      if (housyu == 0) {
        document.getElementById("1").innerHTML = "弾速＋１";
        document.getElementById("2").innerHTML = "攻撃力＋１";
        document.getElementById("3").innerHTML = "リロード速度＋１";
        document.getElementById("4").innerHTML = "壁の防御力＋１";
      } else if (housyu == 1) {
        document.getElementById("1").innerHTML = "攻撃力＋１";
        document.getElementById("2").innerHTML = "リロード速度＋１";
        document.getElementById("3").innerHTML = "壁の修理";
        document.getElementById("4").innerHTML = "敵の出現頻度低下";
      } else if (housyu == 2) {
        document.getElementById("1").innerHTML = "壁の防御力＋１";
        document.getElementById("2").innerHTML = "敵の出現頻度低下";
        document.getElementById("3").innerHTML = "壁の修理";
        document.getElementById("4").innerHTML = "敵の移動速度低下";
      }
    }
    if (day > 10) {
      start = 4;
      tekiba = 1;
    }
  }
}
setInterval(tim, 100);

function h1() {
  if (start == 3 || start == 4) {
    if (housyu == 0) {
      if (hayasa < 14) {
        hayasa++;
        document.getElementById("hayasa").innerHTML = hayasa - 4;
      } else if (hayasa == 14) {
        hayasa++;
        document.getElementById("hayasa").innerHTML = "MAX";
      }
    } else if (housyu == 1) {
      if (kou < 9) {
        kou++;
        document.getElementById("kou").innerHTML = kou;
      } else if (kou == 9) {
        kou++;
        document.getElementById("kou").innerHTML = "MAX";
      }
    } else if (housyu == 2) {
      if (kabe < 9) {
        kabe++;
        document.getElementById("bou").innerHTML = kabe;
      } else if (kabe == 9) {
        kabe++;
        document.getElementById("bou").innerHTML = "MAX";
      }
    }
    if (day < 11) {
      alert(day + "日目がはじまります");
    } else {
      alert("ボス戦がはじまります");
    }
    if (start == 3) {
      start = 1;
    } else {
      start = 2;
    }
    document.getElementById("housyu").innerHTML = "";
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
  }
}

function h2() {
  if (start == 3 || start == 4) {
    if (housyu == 0) {
      if (kou < 9) {
        kou++;
        document.getElementById("kou").innerHTML = kou;
      } else if (kou == 9) {
        kou++;
        document.getElementById("kou").innerHTML = "MAX";
      }
    } else if (housyu == 1) {
      if (riro < 9) {
        riro++;
        rer = rer - 30;
        document.getElementById("re").innerHTML = riro;
      } else if (riro == 9) {
        riro++;
        rer = rer - 30;
        document.getElementById("re").innerHTML = "MAX";
      }
    } else if (housyu == 2) {
      teki1ti = 100;
      teki2ti = 100;
      teki3ti = 100;
      teki4ti = 1000;
      teki5ti = 1500;
      teki6ti = 2000;
      teki7ti = 200;
    }
    if (day < 11) {
      alert(day + "日目がはじまります");
    } else {
      alert("ボス戦がはじまります");
    }
    if (start == 3) {
      start = 1;
    } else {
      start = 2;
    }
    document.getElementById("housyu").innerHTML = "";
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
  }
}

function h3() {
  if (start == 3 || start == 4) {
    if (housyu == 0) {
      if (riro < 9) {
        riro++;
        rer = rer - 30;
        document.getElementById("re").innerHTML = riro;
      } else if (riro == 9) {
        riro++;
        rer = rer - 30;
        document.getElementById("re").innerHTML = "MAX";
      }
    } else if (housyu == 1) {
      hp = 100;
    } else if (housyu == 2) {
      hp = 100;
    }
    if (day < 11) {
      alert(day + "日目がはじまります");
    } else {
      alert("ボス戦がはじまります");
    }
    if (start == 3) {
      start = 1;
    } else {
      start = 2;
    }
    document.getElementById("housyu").innerHTML = "";
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
  }
}

function h4() {
  if (start == 3 || start == 4) {
    if (housyu == 0) {
      if (kabe < 9) {
        kabe++;
        document.getElementById("bou").innerHTML = kabe;
      } else if (kabe == 9) {
        kabe++;
        document.getElementById("bou").innerHTML = "MAX";
      }
    } else if (housyu == 1) {
      teki1ti = 100;
      teki2ti = 100;
      teki3ti = 100;
      teki4ti = 1000;
      teki5ti = 1500;
      teki6ti = 2000;
      teki7ti = 200;
    } else if (housyu == 2) {
      teki1s = teki1s - 4;
      teki2s = teki2s - 4;
      teki3s = teki3s - 4;
      teki4s = teki4s - 4;
      teki5s = teki5s - 4;
      teki6s = teki6s - 4;

      teki7s = teki7s - 4;
      n++;
    }
    if (day < 11) {
      alert(day + "日目がはじまります");
    } else {
      alert("ボス戦がはじまります");
    }
    if (start == 3) {
      start = 1;
    } else {
      start = 2;
    }
    document.getElementById("housyu").innerHTML = "";
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
  }
}

function kakuyo() {
  //空
  ctx.beginPath();
  ctx.rect(0, 0, 800, 440);
  ctx.fillStyle = "#7777ff";
  ctx.fill();
  ctx.closePath();

  if (over == 0) {
    //壁
    ctx.beginPath();
    ctx.rect(0, 0, 20, 400);
    ctx.fillStyle = "#cccccc";
    ctx.fill();
    ctx.closePath();
  }

  //HPバー
  ctx.beginPath();
  ctx.rect(25, 25, 750, 40);
  ctx.fillStyle = "#555555";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(30, 30, 740, 30);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  if (hp > 0) {
    ctx.beginPath();
    ctx.rect(30, 30, (740 * hp) / 100, 30);
    ctx.fillStyle = "#00ff00";
    ctx.fill();
    ctx.closePath();
  }

  //地面
  ctx.beginPath();
  ctx.rect(0, 400, 800, 40);
  ctx.fillStyle = "#00bf00";
  ctx.fill();
  ctx.closePath();

  //棒人間
  //頭
  ctx.beginPath();
  ctx.arc(25, 200, 25, 0, 20);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(25, 200, 22, 0, 20);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.closePath();

  //体
  ctx.beginPath();
  ctx.moveTo(25, 225);
  ctx.lineTo(25, 300);
  ctx.stroke();

  //足
  ctx.beginPath();
  ctx.moveTo(25, 300);
  ctx.lineTo(10, 400);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(25, 300);
  ctx.lineTo(40, 400);
  ctx.stroke();

  //腕
  ctx.beginPath();
  ctx.moveTo(25, 235);
  ctx.lineTo(5, 300);
  ctx.stroke();

  i = Math.abs(25 - x);
  iy = Math.abs(235 - y);
  tx = 25 + i / (Math.sqrt(i ** 2 + iy ** 2) / 67.5);
  ty = iy / (Math.sqrt(i ** 2 + iy ** 2) / 65.5);
  if (235 < y) {
    ty = 235 + ty;
  } else {
    ty = 235 - ty;
  }
  ctx.beginPath();
  ctx.moveTo(25, 235);
  ctx.lineTo(tx, ty);
  ctx.stroke();

  ctx.lineWidth = 10;
  //銃
  if (235 < y) {
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(
      tx + i / (Math.sqrt(i ** 2 + iy ** 2) / 40.5),
      ty + iy / (Math.sqrt(i ** 2 + iy ** 2) / 40.5)
    );
    ctx.stroke();
  } else {
    ctx.beginPath();
    ctx.moveTo(tx, ty);
    ctx.lineTo(
      tx + i / (Math.sqrt(i ** 2 + iy ** 2) / 40.5),
      ty - iy / (Math.sqrt(i ** 2 + iy ** 2) / 40.5)
    );
    ctx.stroke();
  }
  ctx.lineWidth = 1;
}

window.addEventListener("load", function () {
  window.onmousemove = function (e) {
    x = e.pageX;
    y = e.pageY;
  };
});

function zyu() {
  if (tama1a == 1) {
    i = hayasa / Math.sqrt(hayasa ** 2 + tama1m ** 2);
    tama1x = tama1x + hayasa * i;
    tama1y = tama1y + tama1m * hayasa * i;
    if (tama1m > 180) {
    } else {
    }
    //弾
    ctx.beginPath();
    ctx.arc(tama1x, tama1y, 5, 0, 20);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    if (tama1x > 799 || tama1y > 440 || tama1y < 0) {
      tama1a = 0;
    }
  }
  if (tama2a == 1) {
    i = hayasa / Math.sqrt(hayasa ** 2 + tama2m ** 2);
    tama2x = tama2x + hayasa * i;
    tama2y = tama2y + tama2m * hayasa * i;
    if (tama2m > 180) {
    } else {
    }
    //弾
    ctx.beginPath();
    ctx.arc(tama2x, tama2y, 5, 0, 20);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    if (tama2x > 799 || tama2y > 440 || tama2y < 0) {
      tama2a = 0;
    }
  }
  if (tama3a == 1) {
    i = hayasa / Math.sqrt(hayasa ** 2 + tama3m ** 2);
    tama3x = tama3x + hayasa * i;
    tama3y = tama3y + tama3m * hayasa * i;
    if (tama3m > 180) {
    } else {
    }
    //弾
    ctx.beginPath();
    ctx.arc(tama3x, tama3y, 5, 0, 20);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    if (tama3x > 799 || tama3y > 440 || tama3y < 0) {
      tama3a = 0;
    }
  }
  if (tama4a == 1) {
    i = hayasa / Math.sqrt(hayasa ** 2 + tama4m ** 2);
    tama4x = tama4x + hayasa * i;
    tama4y = tama4y + tama4m * hayasa * i;
    if (tama4m > 180) {
    } else {
    }
    //弾
    ctx.beginPath();
    ctx.arc(tama4x, tama4y, 5, 0, 20);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    if (tama4x > 799 || tama4y > 440 || tama4y < 0) {
      tama4a = 0;
    }
  }
  if (tama5a == 1) {
    i = hayasa / Math.sqrt(hayasa ** 2 + tama5m ** 2);
    tama5x = tama5x + hayasa * i;
    tama5y = tama5y + tama5m * hayasa * i;
    if (tama5m > 180) {
    } else {
    }
    //弾
    ctx.beginPath();
    ctx.arc(tama5x, tama5y, 5, 0, 20);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    if (tama5x > 799 || tama5y > 440 || tama5y < 0) {
      tama5a = 0;
    }
  }
  if (tama6a == 1) {
    i = hayasa / Math.sqrt(hayasa ** 2 + tama6m ** 2);
    tama6x = tama6x + hayasa * i;
    tama6y = tama6y + tama6m * hayasa * i;
    if (tama6m > 180) {
    } else {
    }
    //弾
    ctx.beginPath();
    ctx.arc(tama6x, tama6y, 5, 0, 20);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    if (tama6x > 799 || tama6y > 440 || tama6y < 0) {
      tama6a = 0;
    }
  }
  if (tama1a == 0) {
    tama1x = -30;
    tama1y = -30;
  }
  if (tama2a == 0) {
    tama2x = -30;
    tama2y = -30;
  }
  if (tama3a == 0) {
    tama3x = -30;
    tama3y = -30;
  }
  if (tama4a == 0) {
    tama4x = -30;
    tama4y = -30;
  }
  if (tama5a == 0) {
    tama5x = -30;
    tama5y = -30;
  }
  if (tama6a == 0) {
    tama6x = -30;
    tama6y = -30;
  }
}

targetArea.addEventListener("mousedown", () => {
  if ((start == 1 || start == 2) & (tama > 0)) {
    if (tama1a == 0) {
      tama1x = tx;
      tama1y = ty;
      tama1a = 1;
      i = Math.abs(tx - x);
      iy = Math.abs(ty - y);
      if (235 < y) {
        tama1m = iy / i;
      } else {
        tama1m = (iy / i) * -1;
      }
    } else if (tama2a == 0) {
      tama2x = tx;
      tama2y = ty;
      tama2a = 1;
      i = Math.abs(tx - x);
      iy = Math.abs(ty - y);
      if (235 < y) {
        tama2m = iy / i;
      } else {
        tama2m = (iy / i) * -1;
      }
    } else if (tama3a == 0) {
      tama3x = tx;
      tama3y = ty;
      tama3a = 1;
      i = Math.abs(tx - x);
      iy = Math.abs(ty - y);
      if (235 < y) {
        tama3m = iy / i;
      } else {
        tama3m = (iy / i) * -1;
      }
    } else if (tama4a == 0) {
      tama4x = tx;
      tama4y = ty;
      tama4a = 1;
      i = Math.abs(tx - x);
      iy = Math.abs(ty - y);
      if (235 < y) {
        tama4m = iy / i;
      } else {
        tama4m = (iy / i) * -1;
      }
    } else if (tama5a == 0) {
      tama5x = tx;
      tama5y = ty;
      tama5a = 1;
      i = Math.abs(tx - x);
      iy = Math.abs(ty - y);
      if (235 < y) {
        tama5m = iy / i;
      } else {
        tama5m = (iy / i) * -1;
      }
    } else if (tama6a == 0) {
      tama6x = tx;
      tama6y = ty;
      tama6a = 1;
      i = Math.abs(tx - x);
      iy = Math.abs(ty - y);
      if (235 < y) {
        tama6m = iy / i;
      } else {
        tama6m = (iy / i) * -1;
      }
    }
    tama = tama - 1;
    document.getElementById("tama").innerHTML = tama;
    if (tama == 0) {
      re = 0;
    }
  }
});

function teki() {
  if (teki1a == 1) {
    teki1x = teki1x - teki1s / n;
    if (teki1x < 25) {
      teki1a = 0;
      hp = hp - teki1k / kabe;
      if (hp < 0.000000000000000000000000001) {
        alert("ゲームオーバー");
        over = 1;
      }
    }
    ctx.beginPath();
    ctx.arc(teki1x, teki1y, 30, 0, 20);
    ctx.fillStyle = "#aaaaaa";
    ctx.fill();
    ctx.closePath();

    if (
      Math.sqrt(
        Math.abs(teki1x - tama1x) ** 2 + Math.abs(teki1y - tama1y) ** 2
      ) < 30
    ) {
      teki1a = 0;
      tama1a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki1x - tama2x) ** 2 + Math.abs(teki1y - tama2y) ** 2
      ) < 30
    ) {
      teki1a = 0;
      tama2a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki1x - tama3x) ** 2 + Math.abs(teki1y - tama3y) ** 2
      ) < 30
    ) {
      teki1a = 0;
      tama3a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki1x - tama4x) ** 2 + Math.abs(teki1y - tama4y) ** 2
      ) < 30
    ) {
      teki1a = 0;
      tama4a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki1x - tama5x) ** 2 + Math.abs(teki1y - tama5y) ** 2
      ) < 30
    ) {
      teki1a = 0;
      tama5a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki1x - tama6x) ** 2 + Math.abs(teki1y - tama6y) ** 2
      ) < 30
    ) {
      teki1a = 0;
      tama6a = 0;
    }
  } else if (teki1t == teki1ti) {
    teki1a = 1;
    teki1x = 800;
    teki1t = 0;
    teki1y = Math.floor(Math.random() * 400);
    teki1s++;
  } else {
    teki1t++;
  }

  if (teki2a == 1) {
    teki2x = teki2x - teki2s / n;
    if (teki2x < 25) {
      teki2a = 0;
      hp = hp - teki2k / kabe;
      if (hp < 0.000000000000000000000000001) {
        alert("ゲームオーバー");
        over = 1;
      }
    }
    ctx.beginPath();
    ctx.arc(teki2x, teki2y, 30, 0, 20);
    ctx.fillStyle = "#aaaaaa";
    ctx.fill();
    ctx.closePath();

    if (
      Math.sqrt(
        Math.abs(teki2x - tama1x) ** 2 + Math.abs(teki2y - tama1y) ** 2
      ) < 30
    ) {
      teki2a = 0;
      tama1a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki2x - tama2x) ** 2 + Math.abs(teki2y - tama2y) ** 2
      ) < 30
    ) {
      teki2a = 0;
      tama2a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki2x - tama3x) ** 2 + Math.abs(teki2y - tama3y) ** 2
      ) < 30
    ) {
      teki2a = 0;
      tama3a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki2x - tama4x) ** 2 + Math.abs(teki2y - tama4y) ** 2
      ) < 30
    ) {
      teki2a = 0;
      tama4a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki2x - tama5x) ** 2 + Math.abs(teki2y - tama5y) ** 2
      ) < 30
    ) {
      teki2a = 0;
      tama5a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki2x - tama6x) ** 2 + Math.abs(teki2y - tama6y) ** 2
      ) < 30
    ) {
      teki2a = 0;
      tama6a = 0;
    }
  } else if (teki2t == teki2ti) {
    teki2a = 1;
    teki2x = 800;
    teki2t = 0;
    teki2y = Math.floor(Math.random() * 400);
    teki2s++;
  } else {
    teki2t++;
  }

  if (teki3a == 1) {
    teki3x = teki3x - teki3s / n;
    if (teki3x < 25) {
      teki3a = 0;
      hp = hp - teki3k / kabe;
      if (hp < 0.000000000000000000000000001) {
        alert("ゲームオーバー");
        over = 1;
      }
    }
    ctx.beginPath();
    ctx.arc(teki3x, teki3y, 30, 0, 20);
    ctx.fillStyle = "#aaaaaa";
    ctx.fill();
    ctx.closePath();

    if (
      Math.sqrt(
        Math.abs(teki3x - tama1x) ** 2 + Math.abs(teki3y - tama1y) ** 2
      ) < 30
    ) {
      teki3a = 0;
      tama1a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki3x - tama2x) ** 2 + Math.abs(teki3y - tama2y) ** 2
      ) < 30
    ) {
      teki3a = 0;
      tama2a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki3x - tama3x) ** 2 + Math.abs(teki3y - tama3y) ** 2
      ) < 30
    ) {
      teki3a = 0;
      tama3a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki3x - tama4x) ** 2 + Math.abs(teki3y - tama4y) ** 2
      ) < 30
    ) {
      teki3a = 0;
      tama4a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki3x - tama5x) ** 2 + Math.abs(teki3y - tama5y) ** 2
      ) < 30
    ) {
      teki3a = 0;
      tama5a = 0;
    }
    if (
      Math.sqrt(
        Math.abs(teki3x - tama6x) ** 2 + Math.abs(teki3y - tama6y) ** 2
      ) < 30
    ) {
      teki3a = 0;
      tama6a = 0;
    }
  } else if (teki3t == teki3ti) {
    teki3a = 1;
    teki3x = 800;
    teki3t = 0;
    teki3y = Math.floor(Math.random() * 400);
    teki3s++;
  } else {
    teki3t++;
  }

  tekia = teki4a;
  tekix = teki4x;
  tekiy = teki4y;
  tekis = teki4s;
  tekih = teki4h;
  tekish = teki4sh;
  tekit = teki4t;
  tekiti = teki4ti;
  tekik = teki4k;
  tekid = teki4d;
  tekisc = teki4sc;
  if (tekia == 1) {
    tekix = tekix - tekis / n;
    if (tekix < 25) {
      tekia = 0;
      hp = hp - tekik / kabe;
      if (hp < 0.000000000000000000000000001) {
        alert("ゲームオーバー");
        over = 1;
      }
    }

    if (
      Math.sqrt(Math.abs(tekix - tama1x) ** 2 + Math.abs(tekiy - tama1y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama1a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama2x) ** 2 + Math.abs(tekiy - tama2y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama2a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama3x) ** 2 + Math.abs(tekiy - tama3y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama3a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama4x) ** 2 + Math.abs(tekiy - tama4y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama4a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama5x) ** 2 + Math.abs(tekiy - tama5y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama5a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama6x) ** 2 + Math.abs(tekiy - tama6y) ** 2) <
      tekid
    ) {
      tekih = tekih - 1;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama6a = 0;
    }

    ctx.beginPath();
    ctx.arc(tekix, tekiy, tekid, 0, 20);
    ctx.fillStyle = "#aaaaaa";
    ctx.fill();
    ctx.closePath();

    if (tekish > 1) {
      ctx.beginPath();
      ctx.rect(tekix - tekid - 5, tekiy - tekid + 2, tekid * 2 + 10, 5);
      ctx.fillStyle = "#000000";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(
        tekix - tekid - 5,
        tekiy - tekid + 2,
        ((tekid * 2 + 10) * tekih) / tekish,
        5
      );
      ctx.fillStyle = "#00ff00";
      ctx.fill();
      ctx.closePath();
    }
  } else if (tekit == tekiti) {
    tekia = 1;
    tekix = 800;
    tekit = 0;
    tekiy = Math.floor(Math.random() * (400 - tekid)) + tekid;
    tekis++;
    tekih = tekish;
    tekiti = tekiti - 10;
  } else {
    tekit++;
  }
  teki4a = tekia;
  teki4x = tekix;
  teki4y = tekiy;
  teki4s = tekis;
  teki4h = tekih;
  teki4t = tekit;
  teki4ti = tekiti;
  teki4k = tekik;

  tekia = teki5a;
  tekix = teki5x;
  tekiy = teki5y;
  tekis = teki5s;
  tekih = teki5h;
  tekish = teki5sh;
  tekit = teki5t;
  tekiti = teki5ti;
  tekik = teki5k;
  tekid = teki5d;
  tekisc = teki5sc;
  if (tekia == 1) {
    tekix = tekix - tekis / n;
    if (tekix < 25) {
      tekia = 0;
      hp = hp - tekik / kabe;
      if (hp < 0.000000000000000000000000001) {
        alert("ゲームオーバー");
        over = 1;
      }
    }

    if (
      Math.sqrt(Math.abs(tekix - tama1x) ** 2 + Math.abs(tekiy - tama1y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama1a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama2x) ** 2 + Math.abs(tekiy - tama2y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama2a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama3x) ** 2 + Math.abs(tekiy - tama3y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama3a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama4x) ** 2 + Math.abs(tekiy - tama4y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama4a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama5x) ** 2 + Math.abs(tekiy - tama5y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama5a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama6x) ** 2 + Math.abs(tekiy - tama6y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama6a = 0;
    }

    ctx.beginPath();
    ctx.arc(tekix, tekiy, tekid, 0, 20);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();

    if (tekish > 1) {
      ctx.beginPath();
      ctx.rect(tekix - tekid - 5, tekiy - tekid + 2, tekid * 2 + 10, 5);
      ctx.fillStyle = "#000000";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(
        tekix - tekid - 5,
        tekiy - tekid + 2,
        ((tekid * 2 + 10) * tekih) / tekish,
        5
      );
      ctx.fillStyle = "#00ff00";
      ctx.fill();
      ctx.closePath();
    }
  } else if (tekit == tekiti) {
    tekia = 1;
    tekix = 800;
    tekit = 0;
    tekiy = Math.floor(Math.random() * (400 - tekid)) + tekid;
    tekis++;
    tekih = tekish;
    tekiti = tekiti - 10;
  } else {
    tekit++;
  }
  teki5a = tekia;
  teki5x = tekix;
  teki5y = tekiy;
  teki5s = tekis;
  teki5h = tekih;
  teki5t = tekit;
  teki5ti = tekiti;
  teki5k = tekik;

  tekia = teki6a;
  tekix = teki6x;
  tekiy = teki6y;
  tekis = teki6s;
  tekih = teki6h;
  tekish = teki6sh;
  tekit = teki6t;
  tekiti = teki6ti;
  tekik = teki6k;
  tekid = teki6d;
  tekisc = teki6sc;
  if (tekia == 1) {
    tekix = tekix - tekis / n;
    if (tekix < 25) {
      tekia = 0;
      hp = hp - tekik / kabe;
      if (hp < 0.000000000000000000000000001) {
        alert("ゲームオーバー");
        over = 1;
      }
    }

    if (
      Math.sqrt(Math.abs(tekix - tama1x) ** 2 + Math.abs(tekiy - tama1y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama1a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama2x) ** 2 + Math.abs(tekiy - tama2y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama2a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama3x) ** 2 + Math.abs(tekiy - tama3y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama3a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama4x) ** 2 + Math.abs(tekiy - tama4y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama4a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama5x) ** 2 + Math.abs(tekiy - tama5y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama5a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama6x) ** 2 + Math.abs(tekiy - tama6y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama6a = 0;
    }

    ctx.beginPath();
    ctx.arc(tekix, tekiy, tekid, 0, 20);
    ctx.fillStyle = "#0000ff";
    ctx.fill();
    ctx.closePath();

    if (tekish > 1) {
      ctx.beginPath();
      ctx.rect(tekix - tekid - 5, tekiy - tekid + 2, tekid * 2 + 10, 5);
      ctx.fillStyle = "#000000";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(
        tekix - tekid - 5,
        tekiy - tekid + 2,
        ((tekid * 2 + 10) * tekih) / tekish,
        5
      );
      ctx.fillStyle = "#00ff00";
      ctx.fill();
      ctx.closePath();
    }
  } else if (tekit == tekiti) {
    tekia = 1;
    tekix = 800;
    tekit = 0;
    tekiy = Math.floor(Math.random() * (400 - tekid)) + tekid;
    tekis = tekis + 0.1;
    tekih = tekish;
    tekiti = tekiti - 10;
  } else {
    tekit++;
  }
  teki6a = tekia;
  teki6x = tekix;
  teki6y = tekiy;
  teki6s = tekis;
  teki6h = tekih;
  teki6t = tekit;
  teki6ti = tekiti;
  teki6k = tekik;

  tekia = teki7a;
  tekix = teki7x;
  tekiy = teki7y;
  tekis = teki7s;
  tekih = teki7h;
  tekish = teki7sh;
  tekit = teki7t;
  tekiti = teki7ti;
  tekik = teki7k;
  tekid = teki7d;
  tekisc = teki7sc;
  if (tekia == 1) {
    tekix = tekix - tekis / n;
    if (tekix < 25) {
      tekia = 0;
      hp = hp - tekik / kabe;
      if (hp < 0.000000000000000000000000001) {
        alert("ゲームオーバー");
        over = 1;
      }
    }

    if (
      Math.sqrt(Math.abs(tekix - tama1x) ** 2 + Math.abs(tekiy - tama1y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama1a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama2x) ** 2 + Math.abs(tekiy - tama2y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama2a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama3x) ** 2 + Math.abs(tekiy - tama3y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama3a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama4x) ** 2 + Math.abs(tekiy - tama4y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama4a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama5x) ** 2 + Math.abs(tekiy - tama5y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama5a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama6x) ** 2 + Math.abs(tekiy - tama6y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama6a = 0;
    }

    ctx.beginPath();
    ctx.arc(tekix, tekiy, tekid, 0, 20);
    ctx.fillStyle = "#ff00ff";
    ctx.fill();
    ctx.closePath();

    if (tekish > 1) {
      ctx.beginPath();
      ctx.rect(tekix - tekid - 5, tekiy - tekid + 2, tekid * 2 + 10, 5);
      ctx.fillStyle = "#000000";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(
        tekix - tekid - 5,
        tekiy - tekid + 2,
        ((tekid * 2 + 10) * tekih) / tekish,
        5
      );
      ctx.fillStyle = "#00ff00";
      ctx.fill();
      ctx.closePath();
    }
  } else if (tekit == tekiti) {
    tekia = 1;
    tekix = 800;
    tekit = 0;
    tekiy = Math.floor(Math.random() * (400 - tekid)) + tekid;
    tekis = tekis + 0.1;
    tekih = tekish;
    tekiti = tekiti - 10;
  } else {
    tekit++;
  }
  teki7a = tekia;
  teki7x = tekix;
  teki7y = tekiy;
  teki7s = tekis;
  teki7h = tekih;
  teki7t = tekit;
  teki7ti = tekiti;
  teki7k = tekik;
}

function bos() {
  tekia = tekiba;
  tekix = tekibx;
  tekiy = tekiby;
  tekis = tekibs;
  tekih = tekibh;
  tekish = tekibsh;
  tekit = tekibt;
  tekiti = tekibti;
  tekik = tekibk;
  tekid = tekibd;
  tekisc = tekibsc;
  if (tekia == 1) {
    bostt++;
    if (bostt > 50) {
      if (tekiy < 100) {
        tekiy = tekiy + 50;
      } else if (tekiy > 340) {
        tekiy = tekiy - 50;
      } else {
        if (Math.floor(Math.random() * 2) == 0) {
          tekiy = tekiy + 50;
        } else {
          tekiy = tekiy - 50;
        }
      }
      bostt = 0;
    }
    tekix = tekix - tekis / n / 2;
    if (tekix < 25) {
      tekia = 2;
      hp = hp - tekik / kabe;
      if (hp < 0.000000000000000000000000001) {
        alert("ゲームオーバー。ボスに敗北しました。");
        over = 1;
        alert("あなたのスコアは" + time + "でした。");
        start = 0;
      }
    }

    if (
      Math.sqrt(Math.abs(tekix - tama1x) ** 2 + Math.abs(tekiy - tama1y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama1a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama2x) ** 2 + Math.abs(tekiy - tama2y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama2a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama3x) ** 2 + Math.abs(tekiy - tama3y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama3a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama4x) ** 2 + Math.abs(tekiy - tama4y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama4a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama5x) ** 2 + Math.abs(tekiy - tama5y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama5a = 0;
    }
    if (
      Math.sqrt(Math.abs(tekix - tama6x) ** 2 + Math.abs(tekiy - tama6y) ** 2) <
      tekid
    ) {
      tekih = tekih - kou;
      if (tekih < 1) {
        tekia = 0;
        time = time + tekisc;
      }
      tama6a = 0;
    }

    ctx.beginPath();
    ctx.arc(tekix, tekiy, tekid, 0, 20);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.closePath();

    if (tekish > 1) {
      ctx.beginPath();
      ctx.rect(tekix - tekid - 5, tekiy - tekid + 2, tekid * 2 + 10, 5);
      ctx.fillStyle = "#000000";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.rect(
        tekix - tekid - 5,
        tekiy - tekid + 2,
        ((tekid * 2 + 10) * tekih) / tekish,
        5
      );
      ctx.fillStyle = "#00ff00";
      ctx.fill();
      ctx.closePath();
    }
  }
  tekiba = tekia;
  tekibx = tekix;
  tekiby = tekiy;
  tekibs = tekis;
  tekibh = tekih;
  tekibt = tekit;
  tekibti = tekiti;
  tekibk = tekik;
}
