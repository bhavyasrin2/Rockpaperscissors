let text = document.querySelector(".output");
let uscore = document.querySelector(".userscore");
let pscore = document.querySelector(".pcscore");
let uadd = 0,
  padd = 0;

function rock() {
  document.querySelector(".user").src = "rock.png";
  let a = Math.random();
  a = Math.ceil(a * 3);
  if (a == 1) {
    document.querySelector(".pc").src = "rock.png";
    result("rock", "rock");
  } else if (a == 2) {
    document.querySelector(".pc").src = "paper.png";
    result("rock", "paper");
  } else if (a == 3) {
    document.querySelector(".pc").src = "scissors.png";
    result("rock", "scissors");
  }
  document.querySelector(".user").style.width = "130px";
  document.querySelector(".user").style.height = "130px";
  document.querySelector(".pc").style.width = "130px";
  document.querySelector(".pc").style.height = "130px";
}

function paper() {
  document.querySelector(".user").src = "paper.png";
  let a = Math.random();
  a = Math.ceil(a * 3);
  if (a == 1) {
    document.querySelector(".pc").src = "rock.png";
    result("paper", "rock");
  } else if (a == 2) {
    document.querySelector(".pc").src = "paper.png";
    result("paper", "paper");
  } else if (a == 3) {
    document.querySelector(".pc").src = "scissors.png";
    result("paper", "scissors");
  }
  document.querySelector(".user").style.width = "130px";
  document.querySelector(".user").style.height = "130px";
  document.querySelector(".pc").style.width = "130px";
  document.querySelector(".pc").style.height = "130px";
}

function scissors() {
  document.querySelector(".user").src = "scissors.png";
  let a = Math.random();
  a = Math.ceil(a * 3);
  if (a == 1) {
    document.querySelector(".pc").src = "rock.png";
    result("scissors", "rock");
  } else if (a == 2) {
    document.querySelector(".pc").src = "paper.png";
    result("scissors", "paper");
  } else if (a == 3) {
    document.querySelector(".pc").src = "scissors.png";
    result("scissors", "scissors");
  }
  document.querySelector(".user").style.width = "130px";
  document.querySelector(".user").style.height = "130px";
  document.querySelector(".pc").style.width = "130px";
  document.querySelector(".pc").style.height = "130px";
}

function result(para1, para2) {
  if (para1 == para2) {
    text.innerHTML = "MATCH TIES";
  } else if (
    (para1 === "rock" && para2 === "scissors") ||
    (para1 === "scissors" && para2 === "paper") ||
    (para1 === "paper" && para2 === "rock")
  ) {
    text.innerHTML = "USER WINS";
    uadd++;
  } else if (
    (para2 === "rock" && para1 === "scissors") ||
    (para2 === "scissors" && para1 === "paper") ||
    (para2 === "paper" && para1 === "rock")
  ) {
    text.innerHTML = "COMPUTER WINS";
    padd++;
  }
  text.style.color = "#0D98BA";
  uscore.innerHTML = `${uadd}`;
  pscore.innerHTML = `${padd}`;
  uscore.style.color = "#0D98BA";
  pscore.style.color = "#0D98BA";
}
