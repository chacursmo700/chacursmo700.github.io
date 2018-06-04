var canvas = document.querySelector('.canvas');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(256,128,0)';
ctx.fillRect(0,0,width,height);


function degToRad(degrees) {
    return degrees * Math.PI / 180;
}


ctx.fillStyle = 'rgb(0,128,0)';
ctx.beginPath();
var midW = width/2;
var midH = height/2;
ctx.moveTo(midW,midH);

ctx.lineTo(midW+100,midH);
var triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(midW+50,midH+triHeight);
ctx.lineTo(midW,midH);
ctx.fill();


ctx.fillStyle = 'rgb(0,0,64)'
ctx.beginPath();
ctx.arc(150,106,50, degToRad(0), degToRad(360), false);
ctx.fill();

ctx.strokeStyle = 'black'
ctx.lineWidth = 1;
ctx.font = '12px arial';
ctx.fillText('Downtown',midW+25,midH+25);

var i;
var temp;
for (i = 0; i < tuppo.length; i++){
    temp = tuppo[i].split(",")
    console.log(latLongToLoc(temp[1],temp[2]));
}

function latLongToLoc(la, lo){
    return [parseFloat(la),parseFloat(lo)];
}
