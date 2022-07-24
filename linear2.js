
var canvas2 = document.getElementById('canvas2');
var c = canvas2.getContext('2d');

//クリック処理
var count = 0;
function next1(){
    count++;
    if(count == 1){
        c.font = 'bold 15px serif'; 
        c.fillText(count, 157,340);
        c.fillText('y=2+2×1',220,115);
    }else if(count == 2){
        c.font = 'bold 15px serif'; 
        c.clearRect(155,330,10,10);
        c.fillText('h', 157,340);
        c.clearRect(222,105,70,50);
        c.fillText('y=2+2×h',220,115);
    }else{
        ;
    }
    
};

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
c.moveTo(125, 340);
c.lineTo(125, 360);

c.moveTo(200, 340);
c.lineTo(200, 360);

//y軸メモリ
c.moveTo(40, 115);
c.lineTo(60, 115);

c.moveTo(40, 240);
c.lineTo(60, 240);

c.stroke();

//文字
c.font = 'bold 20px serif'; 
c.fillText('X軸', 350, 380);
c.fillText('Y軸', 10, 30);

c.font = 'bold 15px serif'; 
c.fillText('x1', 122, 375);
c.fillText('xi', 198, 375);

c.fillText('y1', 25, 248);
c.fillText('yi', 25, 118);


//括弧
c.beginPath();
c.arc(170, 389, 50, 5.0, 5.40, false);
c.stroke();

c.beginPath();
c.arc(156, 389, 50, 4.0, 4.40, false);
c.stroke();

//点線
c.beginPath();
c.setLineDash([2, 2]);
c.moveTo(200, 350);
c.lineTo(200, 115);
c.moveTo(50, 115);
c.lineTo(200, 115);
c.stroke();

//点
c.beginPath();
c.arc(200,115,4,0,2*Math.PI,false);
c.fill();
c.stroke();