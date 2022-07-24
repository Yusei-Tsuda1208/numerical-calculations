
var canvas1 = document.getElementById('canvas1');
var c = canvas1.getContext('2d');

c.beginPath();
//x軸
c.moveTo(25, 350);
c.lineTo(350, 350);
//y軸
c.moveTo(50, 375);
c.lineTo(50, 15);
//関数
c.moveTo(50, 350);
c.lineTo(265, 15);


//x軸メモリ
c.moveTo(120, 340);
c.lineTo(120, 360);

c.moveTo(200, 340);
c.lineTo(200, 360);

//y軸メモリ
c.moveTo(40, 115);
c.lineTo(60, 115);

c.moveTo(40, 240);
c.lineTo(60, 240);

//文字
c.font = 'bold 20px serif'; 
c.fillText('X軸', 350, 380);
c.fillText('Y軸', 10, 30);

c.font = 'bold 15px serif'; 
c.fillText('1', 118, 375);
c.fillText('2', 198, 375);

c.fillText('2', 30, 248);
c.fillText('4', 30, 118);

c.stroke();

//点線
c.beginPath();
c.setLineDash([2, 2]);

c.moveTo(120, 350);
c.lineTo(120, 240);
c.moveTo(200, 350);
c.lineTo(200, 115);

c.moveTo(50, 115);
c.lineTo(200, 115);
c.moveTo(50, 240);
c.lineTo(120, 240);

c.stroke();
