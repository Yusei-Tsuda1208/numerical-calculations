var canvas3 = document.getElementById('canvas3');
var d = canvas3.getContext('2d');

//クリック処理
var count2 = 0;
function next2(){
    count2++;
    if(count2 == 1){
        d.beginPath();
        d.setLineDash([0, 0]);
        d.strokeStyle = "red" ;
        d.moveTo(55, 309);
        d.lineTo(380, 199);
        d.stroke();
    }else if(count2 == 2){
        d.beginPath();
        d.setLineDash([2, 2]);
        d.strokeStyle = "black" ;
        d.moveTo(270, 350);
        d.lineTo(270, 240);
        d.stroke();

        d.beginPath();
        d.arc(270,237,3,0,2*Math.PI,false);
        d.fill();
        d.stroke();
    }else if(count2 == 3){
        d.strokeStyle = "black" ;
        d.moveTo(55, 237);
        d.lineTo(270, 237);
        d.stroke();

        d.beginPath();
        d.setLineDash([0, 0]);
        d.moveTo(40, 237);
        d.lineTo(60, 237);
        d.stroke();
        d.fillText('y1', 23, 237);
    }
    
};

d.beginPath();
//x軸
d.moveTo(25, 350);
d.lineTo(350, 350);
//y軸
d.moveTo(50, 375);
d.lineTo(50, 15);

//x軸メモリ
d.moveTo(120, 340);
d.lineTo(120, 360);
d.moveTo(270, 340);
d.lineTo(270, 360);

//y軸目盛
d.moveTo(40, 285);
d.lineTo(60, 285);

//文字
d.font = 'bold 20px serif'; 
d.fillText('X軸', 350, 380);
d.fillText('Y軸', 10, 30);

d.font = 'bold 15px serif'; 
d.fillText('x0', 118, 375);
d.fillText('x1', 265, 375);
d.fillText('y0', 23, 287);
d.fillText('h', 190,340);

d.stroke();


//関数
d.beginPath();
d.arc(30,0, 300, 0.55, 1.45, false);
d.stroke();

//括弧
d.beginPath();
d.arc(240, 389, 50, 5.0, 5.40, false);
d.stroke();

d.beginPath();
d.arc(153, 389, 50, 4.0, 4.40, false);
d.stroke();

//点線
d.beginPath();
d.setLineDash([2, 2]);

d.moveTo(120, 350);
d.lineTo(120, 285);

d.moveTo(50, 285);
d.lineTo(120, 285);

d.stroke();


//点
d.beginPath();
d.arc(120,285,3,0,2*Math.PI,false);
d.fill();
d.stroke();
