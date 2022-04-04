let factorValue = 1;

let fontFamily = "65px 'Gill Sans Ultra', sans-serif";

let ctx;

function init() {
  ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = fontFamily;
  ctx.save();
  dologo();
}
init();

function dologo() {
  let offsetY = 80;

  ctx.restore();
  ctx.save();

  ctx.clearRect(0, 0, 600, 400);
  ctx.scale(factorValue, factorValue);
  ctx.fillText("HTML", 31, 60);
  ctx.translate(0, offsetY);

  ctx.fillStyle = "#e34c26";
  ctx.beginPath();
  ctx.moveTo(39, 250);
  ctx.lineTo(17, 0);
  ctx.lineTo(262, 0);
  ctx.lineTo(239, 250);
  ctx.lineTo(139, 278);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#f06529";
  ctx.beginPath();
  ctx.moveTo(139, 257);
  ctx.lineTo(220, 234);
  ctx.lineTo(239, 20);
  ctx.lineTo(139, 20);
  ctx.closePath();
  ctx.fill();
}
