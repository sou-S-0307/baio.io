let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let targetArea = document.querySelector(".target");
//変数の定義
//雑用
let i = 0;
let iy = 0;
let ii = 0;
let iyy = 0;
let iiyy = 0;
let iii = 0;
//スタートしたか
let start = 0;
//スコア
let score = 0;
//ブッロク縦横
let yoko = 10;
let tate = 20;
let l = 25;
let ll = 0;
//ブロックの構成数
let blocknumber = 0;
//ブロックの種類
let blocksyurui = 7;
//ブロック今何回目
let blockkaisuu = 0;
//ブッロク落ちる速さ(0.1秒単位)
let speed = 10;
//ブロックの速度の増加（十秒で何倍化）
let speeder = 0.5;
//消す用
let imakesu = 0;
let kesu = 0;
let kesubyousuu = 10;
//ブロック落とす処理
let move2 = 0;
//ブッロク操作済み
let sousa = 0;
//hold機能
let hold = 0;
let holdsita = 0;
//新しいブロック
let block = 0;
let nextblock = new Array(6);
for (i = 0; i < 6; i++) {
  nextblock[i] = 0;
}
//ブロック動かす
let move = 0;
//ブロックの座標
let bx = 0;
let by = 0;
//揃ったら消す
let kakuninn1 = 0;
let kutu = 0;
//マスつくり
let data = new Array(yoko);
for (i = 0; i < yoko; i++) {
  data[i] = new Array(tate);
  for (iy = 0; iy < tate; iy++) {
    ii++;
  }
}
for (i = 0; i < tate; i++) {
  for (iy = 0; iy < yoko; iy++) {
    data[iy][i] = 0;
  }
}
//マスつくり：色決め
let iro = new Array(yoko);
for (i = 0; i < yoko; i++) {
  iro[i] = new Array(tate);
  for (iy = 0; iy < tate; iy++) {
    ii++;
  }
}
for (i = 0; i < tate; i++) {
  for (iy = 0; iy < yoko; iy++) {
    iro[iy][i] = 0;
  }
}
//ブロック順番決めに使う
let blockkime = [];
for (i = 0; i < blocksyurui; i++) {
  blockkime.push(i + 1);
}
blockkaisuu = 0;
for (ii = 0; ii < 6; ii++) {
  i = Math.floor(Math.random() * (blocksyurui - blockkaisuu));
  nextblock[ii] = blockkime.slice(i, i + 1);
  blockkime.splice(i, 1);
  blockkaisuu++;
}
//モジュール
//マスつくり
let mo = new Array(4);
for (i = 0; i < 4; i++) {
  mo[i] = new Array(4);
  for (iy = 0; iy < 4; iy++) {
    ii++;
  }
}
for (i = 0; i < 4; i++) {
  for (iy = 0; iy < 4; iy++) {
    mo[iy][i] = 0;
  }
}
//モジュール
//仮
let kari = new Array(4);
for (i = 0; i < 4; i++) {
  kari[i] = new Array(4);
  for (iy = 0; iy < 4; iy++) {
    ii++;
  }
}
for (i = 0; i < 4; i++) {
  for (iy = 0; iy < 4; iy++) {
    kari[iy][i] = 0;
  }
}
//次のブロック
let next = new Array(4);
for (i = 0; i < 4; i++) {
  next[i] = new Array(19);
  for (iy = 0; iy < 19; iy++) {
    next[i][iy] = 0;
  }
}
//hold
let holder = new Array(4);
for (i = 0; i < 4; i++) {
  holder[i] = new Array(4);
  for (iy = 0; iy < 4; iy++) {
    holder[i][iy] = 0;
  }
}
//保存
let hozon = 0;
let hozon2 = 0;
//ブロック作る
//作る
if (sousa == 0) {
  tukuru();
  sousa = 1;
}
ll = 2;
//スタート
function sttart() {
  if (start == 0) {
    start = 1;
    document.getElementById("ボタン").innerHTML = "一時停止";
  } else {
    start = 0;
    document.getElementById("ボタン").innerHTML = "スタート";
  }
}
function kakuy() {
  ctx.beginPath();
  ctx.rect((i * l) / ll + 455, ((iy + 0) * l) / ll, l / ll, l / ll);
  ctx.fill();
  ctx.closePath();
}

function irotuke() {
  if (iiyy == 1) {
    ctx.fillStyle = "#ff8009";
  } else if (iiyy == 2) {
    ctx.fillStyle = "#f6ff00";
  } else if (iiyy == 3) {
    ctx.fillStyle = "#0d00ff";
  } else if (iiyy == 4) {
    ctx.fillStyle = "#00f7ff";
  } else if (iiyy == 5) {
    ctx.fillStyle = "#9d00ff";
  } else if (iiyy == 6) {
    ctx.fillStyle = "#0bed0b";
  } else if (iiyy == 7) {
    ctx.fillStyle = "#ff0000";
  }
}

function kaku() {
  //色設定
  for (i = 0; i < tate; i++) {
    for (iy = 0; iy < yoko; iy++) {
      if (data[iy][i] == 2) {
        for (iii = 1; iii < blocksyurui + 1; iii++) {
          if (block == iii) {
            iro[iy][i] = iii;
          }
        }
      }
    }
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  iii = 4 * l;
  //本体
  for (iy = 0; iy < tate; iy++) {
    for (i = 0; i < yoko; i++) {
      if (data[i][iy] == 0) {
        ctx.beginPath();
        ctx.rect(iii + i * l, iy * l, l, l);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(iii + i * l + 1, iy * l + 1, l - 2, l - 2);
        ctx.fillStyle = "#555555";
        ctx.fill();
        ctx.closePath();
      }
      if (data[i][iy] == 1) {
        ctx.beginPath();
        ctx.rect(iii + i * l, iy * l, l, l);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
        for (iiyy = 0; iiyy < blocksyurui + 1; iiyy++) {
          if (iro[i][iy] == iiyy) {
            ctx.beginPath();
            ctx.rect(iii + i * l + 1, iy * l + 1, l - 2, l - 2);
            irotuke();
            ctx.fill();
            ctx.closePath();
          }
        }
      }
      if (data[i][iy] == 2) {
        ctx.beginPath();
        ctx.rect(iii + i * l, iy * l, l, l);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
        for (iiyy = 0; iiyy < blocksyurui + 1; iiyy++) {
          if (iro[i][iy] == iiyy) {
            ctx.beginPath();
            ctx.rect(iii + i * l + 1, iy * l + 1, l - 2, l - 2);
            irotuke();
            ctx.fill();
            ctx.closePath();
          }
        }
      }
      if (data[i][iy] == 3) {
        ctx.beginPath();
        ctx.rect(iii + i * l, iy * l, l, l);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(iii + i * l + 1, iy * l + 1, l - 2, l - 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
  //nextblock
  ctx.beginPath();
  ctx.rect(iii + yoko * l, 0, l * 4, l * 19);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(iii + yoko * l + 1, 2, l * 4 - 3, l * 19 - 4);
  ctx.fillStyle = "#555555";
  ctx.fill();
  ctx.closePath();
  for (iy = 0; iy < 19; iy++) {
    for (i = 0; i < 4; i++) {
      if (next[i][iy] == 1) {
        ctx.beginPath();
        ctx.rect(iii + yoko * l + i * (l / 1), iy * (l / 1), l / 1, l / 1);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();

        iiyy = nextblock[Math.floor(iy / 3)];
        ctx.beginPath();
        ctx.rect(
          iii + yoko * l + i * (l / 1) + 1,
          iy * (l / 1) + 1,
          l - 2,
          l - 2,
        );
        irotuke();
        ctx.fill();
        ctx.closePath();
      }
    }
  }
  //hold表示
  ctx.beginPath();
  ctx.rect(iii - 4 * l, 0, l * 4, l * 4);
  ctx.fillStyle = "#000000";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(iii - 4 * l + 2, 2, l * 4 - 3, l * 4 - 4);
  ctx.fillStyle = "#555555";
  ctx.fill();
  ctx.closePath();
  for (iy = 0; iy < 4; iy++) {
    for (i = 0; i < 4; i++) {
      if (holder[i][iy] == 1) {
        ctx.beginPath();
        ctx.rect(iii - 4 * l + i * (l / 1), iy * (l / 1), l / 1, l / 1);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();

        iiyy = hold;
        ctx.beginPath();
        ctx.rect(iii - 4 * l + i * (l / 1) + 1, iy * (l / 1) + 1, l - 2, l - 2);
        irotuke();
        ctx.fill();
        ctx.closePath();
      }
    }
  }
  document.getElementById("bx").innerHTML = bx;
  document.getElementById("by").innerHTML = by;
}

function zikkou() {
  iii = 0;
  for (i = 0; i < 4; i++) {
    for (iy = 0; iy < 4; iy++) {
      if (
        (iii == 0) &
        (kari[i][iy] == 1) &
        (i + bx - 1 < 0 ||
          yoko - 1 < i + bx - 1 ||
          iy + by - 2 < 0 ||
          tate - 1 < iy + by - 2)
      ) {
        iii++;
      } else if (
        (iii == 0) &
        (kari[i][iy] == 1) &
        (-1 < i + bx - 1 < yoko) &
        (-1 < iy + by - 2 < tate)
      ) {
        if (data[i + bx - 1][iy + by - 2] == 1) {
          iii++;
        }
      }
    }
  }
  if (iii == 0) {
    for (i = 0; i < 4; i++) {
      for (iy = 0; iy < 4; iy++) {
        mo[i][iy] = kari[i][iy];
      }
    }
    for (i = 0; i < tate; i++) {
      for (iy = 0; iy < yoko; iy++) {
        if (data[iy][i] == 2) {
          data[iy][i] = 0;
        }
      }
    }
    for (i = 0; i < 4; i++) {
      for (iy = 0; iy < 4; iy++) {
        if (mo[iy][i] == 1) {
          data[bx + iy - 1][by + i - 2] = 2;
        }
      }
    }
    kaku();
    kutu = 0;
  }
}

function zyuuryou() {
  //色設定
  for (i = 0; i < tate; i++) {
    for (iy = 0; iy < yoko; iy++) {
      if (data[iy][i] == 2) {
        for (iii = 1; iii < blocksyurui + 1; iii++) {
          if (block == iii) {
            iro[iy][i] = iii;
          }
        }
      }
    }
  }
  //危険？
  for (i = yoko - 1; i > -1; i--) {
    if (data[i][tate - 1] == 2) {
      data[i][tate - 1] = 1;
    }
  }
  //下に移動
  move2 = 0;
  //動けるかチェック
  for (iy = tate - 2; iy > -1; iy--) {
    for (i = yoko - 1; i > -1; i--) {
      if ((data[i][iy] == 2) & (data[i][iy + 1] == 0 || data[i][iy + 1] == 2)) {
        move2++;
      }
    }
  }
  //動く
  if (move2 == blocknumber) {
    for (iy = tate - 2; iy > -1; iy--) {
      for (i = yoko - 1; i > -1; i--) {
        if (data[i][iy] == 2) {
          data[i][iy] = 0;
          data[i][iy + 1] = 2;
        }
      }
    }
    by++;
  } else if (move2 != blocknumber) {
    for (iy = tate - 1; iy > -1; iy--) {
      for (i = yoko - 1; i > -1; i--) {
        if (data[i][iy] == 2) {
          data[i][iy] = 1;
        }
      }
    }
  }
  //チェック表す
  for (i = 0; i < tate; i++) {
    kakuninn1 = 0;
    for (iy = 0; iy < yoko; iy++) {
      if (data[iy][i] == 1) {
        kakuninn1++;
      }
      if (kakuninn1 == yoko) {
        for (iy = 0; iy < yoko; iy++) {
          data[iy][i] = 3;
          imakesu = 1;
        }
      }
    }
  }
  kaku();
}

function tukuru() {
  holdsita--;
  if (holdsita < 0) {
    holdsita = 0;
  }
  block = nextblock[0];
  for (i = 0; i < 5; i++) {
    nextblock[i] = nextblock[i + 1];
  }
  i = Math.floor(Math.random() * (blocksyurui - blockkaisuu));
  nextblock[5] = blockkime.slice(i, i + 1);
  blockkime.splice(i, 1);
  blockkaisuu++;
  if (blockkaisuu + 1 > blocksyurui) {
    blockkaisuu = 0;
    blockkime = [];
    for (i = 0; i < blocksyurui; i++) {
      blockkime.push(i + 1);
    }
  }
  for (i = 0; i < 4; i++) {
    for (iy = 0; iy < 4; iy++) {
      mo[i][iy] = 0;
    }
  }
  if (block == 1) {
    bx = Math.round(yoko / 2) - 1;
    by = 1;
    mo[0][2] = 1;
    mo[1][2] = 1;
    mo[2][2] = 1;
    mo[2][1] = 1;
    blocknumber = 4;
  } else if (block == 2) {
    bx = Math.round(yoko / 2) - 1;
    by = 1;
    mo[1][1] = 1;
    mo[2][1] = 1;
    mo[1][2] = 1;
    mo[2][2] = 1;
    blocknumber = 4;
  } else if (block == 3) {
    bx = Math.round(yoko / 2) - 1;
    by = 1;
    mo[1][2] = 1;
    mo[2][2] = 1;
    mo[3][2] = 1;
    mo[1][1] = 1;
    blocknumber = 4;
  } else if (block == 4) {
    bx = Math.round(yoko / 2) - 1;
    by = 1;
    mo[0][1] = 1;
    mo[1][1] = 1;
    mo[2][1] = 1;
    mo[3][1] = 1;
    blocknumber = 4;
  } else if (block == 5) {
    bx = Math.round(yoko / 2);
    by = 1;
    mo[1][1] = 1;
    mo[0][2] = 1;
    mo[1][2] = 1;
    mo[2][2] = 1;
    blocknumber = 4;
  } else if (block == 6) {
    bx = Math.round(yoko / 2) - 1;
    by = 1;
    mo[2][1] = 1;
    mo[3][1] = 1;
    mo[1][2] = 1;
    mo[2][2] = 1;
    blocknumber = 4;
  } else if (block == 7) {
    bx = Math.round(yoko / 2);
    by = 1;
    mo[0][1] = 1;
    mo[1][1] = 1;
    mo[2][2] = 1;
    mo[1][2] = 1;
    blocknumber = 4;
  }
  //nextblock
  for (i = 0; i < 4; i++) {
    for (iy = 0; iy < 19; iy++) {
      next[i][iy] = 0;
    }
  }
  for (i = 0; i < 6; i++) {
    if (nextblock[i] == 1) {
      next[0][i * 3 + 2] = 1;
      next[1][i * 3 + 2] = 1;
      next[2][i * 3 + 2] = 1;
      next[2][i * 3 + 1] = 1;
    } else if (nextblock[i] == 2) {
      next[1][i * 3 + 1] = 1;
      next[2][i * 3 + 1] = 1;
      next[1][i * 3 + 2] = 1;
      next[2][i * 3 + 2] = 1;
    } else if (nextblock[i] == 3) {
      next[1][i * 3 + 2] = 1;
      next[2][i * 3 + 2] = 1;
      next[3][i * 3 + 2] = 1;
      next[1][i * 3 + 1] = 1;
    } else if (nextblock[i] == 4) {
      next[0][i * 3 + 1] = 1;
      next[1][i * 3 + 1] = 1;
      next[2][i * 3 + 1] = 1;
      next[3][i * 3 + 1] = 1;
    } else if (nextblock[i] == 5) {
      next[1][i * 3 + 1] = 1;
      next[0][i * 3 + 2] = 1;
      next[1][i * 3 + 2] = 1;
      next[2][i * 3 + 2] = 1;
    } else if (nextblock[i] == 6) {
      next[2][i * 3 + 1] = 1;
      next[3][i * 3 + 1] = 1;
      next[1][i * 3 + 2] = 1;
      next[2][i * 3 + 2] = 1;
    } else if (nextblock[i] == 7) {
      next[0][i * 3 + 1] = 1;
      next[1][i * 3 + 1] = 1;
      next[2][i * 3 + 2] = 1;
      next[1][i * 3 + 2] = 1;
    }
  }
  for (i = 0; i < 4; i++) {
    for (iy = 0; iy < 4; iy++) {
      if (mo[i][iy] == 1) {
        data[bx + i - 1][by + iy - 2] = 2;
      }
    }
  }
  kaku();
}

function kuttuku() {
  //色設定
  for (i = 0; i < tate; i++) {
    for (iy = 0; iy < yoko; iy++) {
      if (data[iy][i] == 2) {
        for (iii = 1; iii < blocksyurui + 1; iii++) {
          if (block == iii) {
            iro[iy][i] = iii;
          }
        }
      }
    }
  }
  //下をチェックする
  move2 = 0;
  //動けるかチェック
  for (iy = tate - 1; iy > -1; iy--) {
    for (i = yoko - 1; i > -1; i--) {
      if ((data[i][iy] == 2) & (data[i][iy + 1] == 0 || data[i][iy + 1] == 2)) {
        move2++;
      }
    }
  }
  if (move2 != blocknumber) {
    for (iy = tate - 1; iy > -1; iy--) {
      for (i = yoko - 1; i > -1; i--) {
        if (data[i][iy] == 2) {
          data[i][iy] = 1;
        }
      }
    }
  }
  //チェック表す
  for (i = 0; i < tate; i++) {
    kakuninn1 = 0;
    for (iy = 0; iy < yoko; iy++) {
      if (data[iy][i] == 1) {
        kakuninn1++;
      }
      if (kakuninn1 == yoko) {
        for (iy = 0; iy < yoko; iy++) {
          data[iy][i] = 3;
          imakesu = 1;
        }
      }
    }
  }
  //ゲームオーバーかチェック
  for (iy = 0; iy < yoko; iy++) {
    if (data[iy][0] == 1) {
      iy = yoko;
      start = 0;
      alert("ゲームオーバー");
    }
  }
  kaku();
}

//キーの入力
document.addEventListener("keydown", keydownEvent, false);
function keydownEvent(e) {
  if (start == 1) {
    if (e.code === "KeyW") {
      for (i = 0; i < 4; i++) {
        for (iy = 0; iy < 4; iy++) {
          kari[iy][i] = 0;
        }
      }
      //回転1
      kari[1][2] = mo[1][1];
      kari[2][2] = mo[1][2];
      kari[2][1] = mo[2][2];
      kari[1][1] = mo[2][1];
      //回転2
      kari[0][3] = mo[0][0];
      kari[3][3] = mo[0][3];
      kari[3][0] = mo[3][3];
      kari[0][0] = mo[3][0];
      //回転3
      kari[0][1] = mo[2][0];
      kari[1][3] = mo[0][1];
      kari[3][2] = mo[1][3];
      kari[2][0] = mo[3][2];
      //回転4
      kari[1][0] = mo[3][1];
      kari[0][2] = mo[1][0];
      kari[2][3] = mo[0][2];
      kari[3][1] = mo[2][3];
      //する
      zikkou();
    }
    if (e.code === "KeyD") {
      move = 0;
      //右に移動
      //動けるかチェック
      for (iy = tate - 1; iy > -1; iy--) {
        for (i = yoko - 2; i > -1; i--) {
          if ((data[i][iy] == 2) & (data[i + 1][iy] != 1)) {
            move++;
          }
        }
      }
      //動く
      if (move == blocknumber) {
        for (iy = tate - 1; iy > -1; iy--) {
          for (i = yoko - 2; i > -1; i--) {
            if (data[i][iy] == 2) {
              data[i][iy] = 0;
              data[i + 1][iy] = 2;
            }
          }
        }
        bx++;
        kutu = 0;
      }
      kaku();
    }
    if (e.code === "KeyS") {
      move = 0;
      //下に移動
      //動けるかチェック
      for (iy = tate - 2; iy > -1; iy--) {
        for (i = yoko - 1; i > -1; i--) {
          if ((data[i][iy] == 2) & (data[i][iy + 1] != 1)) {
            move++;
          }
        }
      }
      //動く
      if (move == blocknumber) {
        for (iy = tate - 2; iy > -1; iy--) {
          for (i = yoko - 1; i > -1; i--) {
            if (data[i][iy] == 2) {
              data[i][iy] = 0;
              data[i][iy + 1] = 2;
            }
          }
        }
        by++;
        kutu = 0;
      }
      kaku();
    }
    if (e.code === "KeyQ") {
      //下に急速めちゃくちゃはやい移動
      //動けるかチェック
      for (iii = 0; iii < tate; iii++) {
        move = 0;
        for (iy = tate - 2; iy > -1; iy--) {
          for (i = yoko - 1; i > -1; i--) {
            if ((data[i][iy] == 2) & (data[i][iy + 1] != 1)) {
              move++;
            }
          }
        }
        //動く
        if (move == blocknumber) {
          for (iy = tate - 2; iy > -1; iy--) {
            for (i = yoko - 1; i > -1; i--) {
              if (data[i][iy] == 2) {
                data[i][iy] = 0;
                data[i][iy + 1] = 2;
              }
            }
          }
          by++;
        } else if (move == blocknumber) {
          iii = tate;
        }
      }
      kuttuku();
      kaku();
    }
    if (e.code === "KeyA") {
      let move = 0;
      //左に移動
      //動けるかチェック
      for (iy = tate - 1; iy > -1; iy--) {
        for (i = yoko - 1; i > 0; i--) {
          if ((data[i][iy] == 2) & (data[i - 1][iy] != 1)) {
            move++;
          }
        }
      }
      //動く
      if (move == blocknumber) {
        for (i = 0; i < tate; i++) {
          for (iy = 1; iy < yoko; iy++) {
            if (data[iy][i] == 2) {
              data[iy][i] = 0;
              data[iy - 1][i] = 2;
            }
          }
        }
        bx--;
        kutu = 0;
      }
      kaku();
    }
    if (e.code === "KeyH") {
      //hold機能
      if (holdsita == 0) {
        if (hold == 0) {
          hold = block;
          for (i = 0; i < tate; i++) {
            for (iy = 0; iy < yoko; iy++) {
              if (data[iy][i] == 2) {
                data[iy][i] = 0;
              }
            }
          }
          sousa = 0;
          holdsita = 2;
        } else {
          i = block;
          block = hold;
          hold = i;
          holdsita = 1;
          for (i = 0; i < tate; i++) {
            for (iy = 0; iy < yoko; iy++) {
              if (data[iy][i] == 2) {
                data[iy][i] = 0;
              }
            }
          }
          for (i = 0; i < 4; i++) {
            for (iy = 0; iy < 4; iy++) {
              mo[i][iy] = 0;
            }
          }
          if (block == 1) {
            bx = Math.round(yoko / 2) - 1;
            by = 1;
            mo[0][2] = 1;
            mo[1][2] = 1;
            mo[2][2] = 1;
            mo[2][1] = 1;
            blocknumber = 4;
          } else if (block == 2) {
            bx = Math.round(yoko / 2) - 1;
            by = 1;
            mo[1][1] = 1;
            mo[2][1] = 1;
            mo[1][2] = 1;
            mo[2][2] = 1;
            blocknumber = 4;
          } else if (block == 3) {
            bx = Math.round(yoko / 2) - 1;
            by = 1;
            mo[1][2] = 1;
            mo[2][2] = 1;
            mo[3][2] = 1;
            mo[1][1] = 1;
            blocknumber = 4;
          } else if (block == 4) {
            bx = Math.round(yoko / 2) - 1;
            by = 1;
            mo[0][1] = 1;
            mo[1][1] = 1;
            mo[2][1] = 1;
            mo[3][1] = 1;
            blocknumber = 4;
          } else if (block == 5) {
            bx = Math.round(yoko / 2);
            by = 1;
            mo[1][1] = 1;
            mo[0][2] = 1;
            mo[1][2] = 1;
            mo[2][2] = 1;
            blocknumber = 4;
          } else if (block == 6) {
            bx = Math.round(yoko / 2) - 1;
            by = 1;
            mo[2][1] = 1;
            mo[3][1] = 1;
            mo[1][2] = 1;
            mo[2][2] = 1;
            blocknumber = 4;
          } else if (block == 7) {
            bx = Math.round(yoko / 2);
            by = 1;
            mo[0][1] = 1;
            mo[1][1] = 1;
            mo[2][2] = 1;
            mo[1][2] = 1;
            blocknumber = 4;
          }
          for (i = 0; i < 4; i++) {
            for (iy = 0; iy < 4; iy++) {
              if (mo[i][iy] == 1) {
                data[bx + i - 1][by + iy - 2] = 2;
              }
            }
          }
        }
        //holder
        for (i = 0; i < 4; i++) {
          for (iy = 0; iy < 4; iy++) {
            holder[i][iy] = 0;
          }
        }
        if (hold == 1) {
          holder[0][2] = 1;
          holder[1][2] = 1;
          holder[2][2] = 1;
          holder[2][1] = 1;
        } else if (hold == 2) {
          holder[1][1] = 1;
          holder[2][1] = 1;
          holder[1][2] = 1;
          holder[2][2] = 1;
        } else if (hold == 3) {
          holder[1][2] = 1;
          holder[2][2] = 1;
          holder[3][2] = 1;
          holder[1][1] = 1;
        } else if (hold == 4) {
          holder[0][1] = 1;
          holder[1][1] = 1;
          holder[2][1] = 1;
          holder[3][1] = 1;
        } else if (hold == 5) {
          holder[1][1] = 1;
          holder[0][2] = 1;
          holder[1][2] = 1;
          holder[2][2] = 1;
        } else if (hold == 6) {
          holder[2][1] = 1;
          holder[3][1] = 1;
          holder[1][2] = 1;
          holder[2][2] = 1;
        } else if (hold == 7) {
          holder[0][1] = 1;
          holder[1][1] = 1;
          holder[2][2] = 1;
          holder[1][2] = 1;
        }
        kaku();
      }
    }
  }
}

//揃ったら消す
function kakuninn() {
  kakuninn1 = 0;
  for (i = 0; i < tate; i++) {
    if (data[0][i] == 3) {
      kakuninn1++;
      for (iy = 0; iy < yoko; iy++) {
        data[iy][i] = 0;
      }
      for (iyy = i; iyy > 0; iyy--) {
        for (ii = yoko - 1; ii > -1; ii--) {
          if ((data[ii][iyy] != 2) & (data[ii][iyy - 1] != 2)) {
            data[ii][iyy] = data[ii][iyy - 1];
            iro[ii][iyy] = iro[ii][iyy - 1];
          }
        }
      }
    }
  }
  score = score + 100 * kakuninn1 ** 2;
  document.getElementById("score").innerHTML = score;
  kakuninn1 = 0;
}

//常時実行：重力
setInterval(() => {
  if (start == 1) {
    //チェック表す
    for (i = 0; i < tate; i++) {
      kakuninn1 = 0;
      for (iy = 0; iy < yoko; iy++) {
        if (data[iy][i] == 1) {
          kakuninn1++;
        }
        if (kakuninn1 == yoko) {
          for (iy = 0; iy < yoko; iy++) {
            data[iy][i] = 3;
            imakesu = 1;
          }
        }
      }
    }
    zyuuryou();
    kaku();
  }
}, speed * 100);

//常時実行:スピード上昇
setInterval(() => {
  if (start == 1) {
    speed = speed * speeder;
  }
}, 1000);

//常時実行：くっつく
setInterval(() => {
  if (start == 1) {
    if (imakesu == 1) {
      kesu++;
      if (kesu > kesubyousuu) {
        kakuninn();
        kesu = 0;
        imakesu = 0;
      }
    }
    //チェック
    ii = 0;
    for (iy = tate - 1; iy > -1; iy--) {
      for (i = yoko - 1; i > -1; i--) {
        if (data[i][iy] == 2) {
          ii++;
        }
      }
    }
    if (ii == 0) {
      kutu++;
    }
    if (kutu == 4) {
      kuttuku();
      //チェック
      ii = 0;
      for (iy = tate - 1; iy > -1; iy--) {
        for (i = yoko - 1; i > -1; i--) {
          if (data[i][iy] == 2) {
            ii++;
          }
        }
      }
      if (ii == 0) {
        sousa = 0;
      }
      //作る
      kaku();
      kutu = 0;
    }
    if (sousa == 0) {
      tukuru();
      sousa = 1;
    }
  }
}, 50);
