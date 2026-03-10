let s11 = 0;
let s12 = 0;
let s13 = 0;
let s21 = 0;
let s22 = 0;
let s23 = 0;
let s31 = 0;
let s32 = 0;
let s33 = 0;
let s1s = 0;
let s2s = 0;
let s3s = 0;
let zenngaku = 100000;
let kakegaku = 0;
let sorou = 0;
let atari = 0;
let atari2 = 0;
let atari3 = 0;
let atari4 = 0;
let atari5 = 0;
let atari6 = 0;
let atari7 = 0;
let atari8 = 0;
let start = 0;
let kekka = 0;

setInterval(() => {
  if (s1s == 0) {
    s12++;
    s13 = s12;
    s12 = s11;
    s11 = Math.floor(Math.random() * 4) + 4;
  }
  document.getElementById("1-1").innerHTML = s11;
  document.getElementById("1-2").innerHTML = s12;
  document.getElementById("1-3").innerHTML = s13;
  if (s2s == 0) {
    s22++;
    s23 = s22;
    s22 = s21;
    s21 = Math.floor(Math.random() * 4) + 4;
  }
  document.getElementById("2-1").innerHTML = s21;
  document.getElementById("2-2").innerHTML = s22;
  document.getElementById("2-3").innerHTML = s23;
  if (s3s == 0) {
    s32++;
    s33 = s32;
    s32 = s31;
    s31 = Math.floor(Math.random() * 4) + 4;
  }
  document.getElementById("3-1").innerHTML = s31;
  document.getElementById("3-2").innerHTML = s32;
  document.getElementById("3-3").innerHTML = s33;
}, 100);

setInterval(() => {
  if ((s1s == 1) & (s2s == 1) & (s3s == 1) & (kekka == 0)) {
    document.getElementById("1-1").innerHTML = s11;
    document.getElementById("1-2").innerHTML = s12;
    document.getElementById("1-3").innerHTML = s13;
    document.getElementById("2-1").innerHTML = s21;
    document.getElementById("2-2").innerHTML = s22;
    document.getElementById("2-3").innerHTML = s23;
    document.getElementById("3-1").innerHTML = s31;
    document.getElementById("3-2").innerHTML = s32;
    document.getElementById("3-3").innerHTML = s33;
    if ((s11 == s21) & (s11 == s31)) {
      sorou += 1;
      atari = 1;
    }
    if ((s12 == s22) & (s12 == s32)) {
      sorou += 1;
      atari2 = 1;
    }
    if ((s13 == s23) & (s13 == s33)) {
      sorou += 1;
      atari3 = 1;
    }
    if ((s11 == s22) & (s11 == s33)) {
      sorou += 1;
      atari4 = 1;
    }
    if ((s13 == s22) & (s13 == s31)) {
      sorou += 1;
      atari5 = 1;
    }
    if ((s11 == s12) & (s11 == s13)) {
      sorou += 1;
      atari6 = 1;
    }
    if ((s21 == s22) & (s21 == s23)) {
      sorou += 1;
      atari7 = 1;
    }
    if ((s31 == s32) & (s31 == s33)) {
      sorou += 1;
      atari8 = 1;
    }

    if (sorou == 1) {
      zenngaku += kakegaku * 2;
    } else if (sorou == 2) {
      zenngaku += kakegaku * 3;
    } else if (sorou == 3) {
      zenngaku += kakegaku * 4;
    } else if (sorou == 4) {
      zenngaku += kakegaku * 5;
    } else if (sorou == 5) {
      zenngaku += kakegaku * 6;
    } else if (sorou == 6) {
      zenngaku += kakegaku * 7;
    } else if (sorou == 7) {
      zenngaku += kakegaku * 8;
    } else if (sorou == 8) {
      zenngaku += kakegaku * 9;
    }

    if (atari == 1) {
      document.getElementById("1-1").style.color = "red";
      document.getElementById("2-1").style.color = "red";
      document.getElementById("3-1").style.color = "red";
    }
    if (atari2 == 1) {
      document.getElementById("1-2").style.color = "red";
      document.getElementById("2-2").style.color = "red";
      document.getElementById("3-2").style.color = "red";
    }
    if (atari3 == 1) {
      document.getElementById("1-3").style.color = "red";
      document.getElementById("2-3").style.color = "red";
      document.getElementById("3-3").style.color = "red";
    }
    if (atari4 == 1) {
      document.getElementById("1-1").style.color = "red";
      document.getElementById("2-2").style.color = "red";
      document.getElementById("3-3").style.color = "red";
    }
    if (atari5 == 1) {
      document.getElementById("1-3").style.color = "red";
      document.getElementById("2-2").style.color = "red";
      document.getElementById("3-1").style.color = "red";
    }
    if (atari6 == 1) {
      document.getElementById("1-1").style.color = "red";
      document.getElementById("1-2").style.color = "red";
      document.getElementById("1-3").style.color = "red";
    }
    if (atari7 == 1) {
      document.getElementById("2-1").style.color = "red";
      document.getElementById("2-2").style.color = "red";
      document.getElementById("2-3").style.color = "red";
    }
    if (atari8 == 1) {
      document.getElementById("3-1").style.color = "red";
      document.getElementById("3-2").style.color = "red";
      document.getElementById("3-3").style.color = "red";
    }

    atari = 0;
    atari2 = 0;
    atari3 = 0;
    atari4 = 0;
    atari5 = 0;
    atari6 = 0;
    atari7 = 0;
    atari8 = 0;
    kakegaku = 0;
    sorou = 0;
    start = 0;
    document.getElementById("senngaku").innerHTML = zenngaku;
    document.getElementById("kakegaku").innerHTML = kakegaku;
    kekka = 1;
  }
  if ((zenngaku < 1000) & (kakegaku == 0)) {
    alert("ゲームオーバー");
    atari = 0;
    atari2 = 0;
    atari3 = 0;
    atari4 = 0;
    atari5 = 0;
    atari6 = 0;
    atari7 = 0;
    atari8 = 0;
    kakegaku = 0;
    sorou = 0;
    start = 0;
    kekka = 1;
    zenngaku = 100000;
    document.getElementById("senngaku").innerHTML = zenngaku;
    document.getElementById("kakegaku").innerHTML = kakegaku;
  } else if (zenngaku > 9999999) {
    alert("ゲームクリア");
    atari = 0;
    atari2 = 0;
    atari3 = 0;
    atari4 = 0;
    atari5 = 0;
    atari6 = 0;
    atari7 = 0;
    atari8 = 0;
    kakegaku = 0;
    sorou = 0;
    start = 0;
    kekka = 1;
    zenngaku = 100000;
    document.getElementById("senngaku").innerHTML = zenngaku;
    document.getElementById("kakegaku").innerHTML = kakegaku;
  }
}, 10);

function s1() {
  s1s = 1;
}
function s2() {
  s2s = 1;
}
function s3() {
  s3s = 1;
}

function kakeru() {
  if ((start == 0) & (zenngaku > 999)) {
    zenngaku += -1000;
    kakegaku += 1000;
    document.getElementById("senngaku").innerHTML = zenngaku;
    document.getElementById("kakegaku").innerHTML = kakegaku;
  }
}
function kakeru2() {
  if ((start == 0) & (zenngaku > 9999)) {
    zenngaku += -10000;
    kakegaku += 10000;
    document.getElementById("senngaku").innerHTML = zenngaku;
    document.getElementById("kakegaku").innerHTML = kakegaku;
  }
}
function kakeru3() {
  if ((start == 0) & (zenngaku > 99999)) {
    zenngaku += -100000;
    kakegaku += 100000;
    document.getElementById("senngaku").innerHTML = zenngaku;
    document.getElementById("kakegaku").innerHTML = kakegaku;
  }
}
function kakeru4() {
  if ((start == 0) & (zenngaku > 999999)) {
    zenngaku += -1000000;
    kakegaku += 1000000;
    document.getElementById("senngaku").innerHTML = zenngaku;
    document.getElementById("kakegaku").innerHTML = kakegaku;
  }
}
function allin() {
  if (start == 0) {
    kakegaku += zenngaku;
    zenngaku = 0;
    document.getElementById("senngaku").innerHTML = zenngaku;
    document.getElementById("kakegaku").innerHTML = kakegaku;
  }
}

function s0() {
  start = 1;
  s1s = 0;
  s2s = 0;
  s3s = 0;
  kekka = 0;
  document.getElementById("1-1").style.color = "black";
  document.getElementById("2-1").style.color = "black";
  document.getElementById("3-1").style.color = "black";
  document.getElementById("1-2").style.color = "black";
  document.getElementById("2-2").style.color = "black";
  document.getElementById("3-2").style.color = "black";
  document.getElementById("1-3").style.color = "black";
  document.getElementById("2-3").style.color = "black";
  document.getElementById("3-3").style.color = "black";
}
