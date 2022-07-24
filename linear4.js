var canvas4 = document.getElementById('canvas4');
var e = canvas4.getContext('2d');

//クリック処理
var count3 = 0;
var final;
function next3(){
    count3++;
    if(count3 == 1){
        e.beginPath();
        e.setLineDash([0, 0]);
        e.strokeStyle = "red" ;
        e.moveTo(60, 305);
        e.lineTo(370, 230);
        e.stroke();
    }else if(count3 == 2){
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 265);
        e.stroke();
    }else if(count3 == 3){
        e.clearRect(60,60,310,260);
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(205,270,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        e.strokeStyle = "black" ;
        //関数
        e.beginPath();
        e.arc(15,-200, 500, 0.85, 1.45, false);
        e.stroke();
    
        //点
        e.beginPath();
        e.arc(120,290,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //k1
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 265);
        e.stroke();

        //接線
        e.beginPath();
        e.setLineDash([0, 0]);
        e.strokeStyle = "red" ;
        e.moveTo(60, 305);
        e.lineTo(370, 230);
        e.stroke();
    }else if(count3 == 4){
        e.clearRect(60,60,310,260);
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(205,270,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        e.strokeStyle = "black" ;
        //関数
        e.beginPath();
        e.arc(15,-200, 500, 0.85, 1.45, false);
        e.stroke();
    
        //点
        e.beginPath();
        e.arc(120,290,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //k1
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 270);
        e.stroke();
        
        //2点を通る曲線
        e.beginPath();
        e.strokeStyle = "red" ;
        e.setLineDash([2, 2]);
        e.arc(53,-205, 500, 0.95, 1.55, false);
        e.stroke();
    }else if(count3 == 5){
        e.clearRect(60,60,310,260);
        
        //接線
        e.beginPath();
        e.setLineDash([0, 0]);
        e.strokeStyle = "red" ;
        e.moveTo(150, 290);
        e.lineTo(270, 250);
        e.stroke();

        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(205,270,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        e.strokeStyle = "black" ;
        //関数
        e.beginPath();
        e.arc(15,-200, 500, 0.85, 1.45, false);
        e.stroke();
    
        //点
        e.beginPath();
        e.arc(120,290,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //k1
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 270);
        e.stroke();
        
        //2点を通る曲線
        e.beginPath();
        e.strokeStyle = "red" ;
        e.setLineDash([2, 2]);
        e.arc(53,-205, 500, 0.95, 1.55, false);
        e.stroke();
    }else if(count3 == 6){
        e.clearRect(60,60,310,260);
        
        //接線
        e.beginPath();
        e.setLineDash([0, 0]);
        e.strokeStyle = "red" ;
        e.moveTo(80, 305);
        e.lineTo(300,225);
        e.stroke();

        e.strokeStyle = "black" ;
        //関数
        e.beginPath();
        e.arc(15,-200, 500, 0.85, 1.45, false);
        e.stroke();
    
        //x0
        e.beginPath();
        e.arc(120,290,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //k1
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 265);
        e.stroke();

        //k2
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,229,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k2', 295, 240);
        e.stroke();

        //k2の中点
        e.beginPath();
        e.arc(205,260,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();
    }else if(count3 == 7){
        e.clearRect(60,60,310,260);

        e.strokeStyle = "black" ;
        //関数
        e.beginPath();
        e.arc(15,-200, 500, 0.85, 1.45, false);
        e.stroke();

        //x0
        e.beginPath();
        e.arc(120,290,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //k1
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 265);
        e.stroke();

        //k2
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,229,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k2', 295, 240);
        e.stroke();

        //k2の中点
        e.beginPath();
        e.arc(205,260,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //2点を通る曲線
        e.beginPath();
        e.strokeStyle = "red" ;
        e.setLineDash([2, 2]);
        e.arc(-1,-195, 500, 0.8, 1.4, false);
        e.stroke();
    }else if(count3 == 8){
        //接線
        e.beginPath();
        e.setLineDash([0, 0]);
        e.strokeStyle = "red" ;
        e.moveTo(150, 290);
        e.lineTo(270,230);
        e.stroke();
    }else if(count3 == 9){
        e.clearRect(60,60,310,260);

        e.strokeStyle = "black" ;
        //関数
        e.beginPath();
        e.arc(15,-200, 500, 0.85, 1.45, false);
        e.stroke();

        //x0
        e.beginPath();
        e.arc(120,290,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //k1
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 265);
        e.stroke();

        //k2
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,229,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k2', 295, 240);
        e.stroke();

        //接線
        e.beginPath();
        e.setLineDash([0, 0]);
        e.strokeStyle = "red" ;
        e.moveTo(80, 305);
        e.lineTo(320,205);
        e.stroke();

        //k3
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,217,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k3', 295, 225);
        e.stroke();

        //中点
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(205,253,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();
    }else if(count3 == 10){
        e.clearRect(60,60,310,260);
        e.strokeStyle = "black" ;
        //関数
        e.beginPath();
        e.arc(15,-200, 500, 0.85, 1.45, false);
        e.stroke();

        //x0
        e.beginPath();
        e.arc(120,290,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //k1
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 265);
        e.stroke();

        //k2
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,229,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k2', 295, 240);
        e.stroke();

        //k3
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,217,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k3', 295, 225);
        e.stroke();

        //中点
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(205,253,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        e.beginPath();
        e.strokeStyle = "red" ;
        e.setLineDash([2, 2]);
        e.arc(-35,-186, 500, 0.7, 1.3, false);
        e.stroke();
    }else if(count3 == 11){
        e.clearRect(60,60,310,260);
        e.strokeStyle = "black" ;
        //関数
        e.beginPath();
        e.setLineDash([0, 0]);
        e.arc(15,-200, 500, 0.85, 1.45, false);
        e.stroke();

        //x0
        e.beginPath();
        e.arc(120,290,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //k1
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 265);
        e.stroke();

        //k2
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,229,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k2', 295, 240);
        e.stroke();

        //k3
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,217,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k3', 295, 225);
        e.stroke();

        //中点
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(205,253,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        e.beginPath();
        e.strokeStyle = "red" ;
        e.setLineDash([2, 2]);
        e.arc(-35,-186, 500, 0.7, 1.3, false);
        e.stroke();

        //接線
        e.beginPath();
        e.setLineDash([0, 0]);
        e.strokeStyle = "red" ;
        e.moveTo(165, 275);
        e.lineTo(245,230);
        e.stroke();
    }else if(count3 == 12){
        e.clearRect(60,60,310,260);
        e.strokeStyle = "black" ;
        //関数
        e.beginPath();
        e.setLineDash([0, 0]);
        e.arc(15,-200, 500, 0.85, 1.45, false);
        e.stroke();

        //x0
        e.beginPath();
        e.arc(120,290,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //k1
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 265);
        e.stroke();

        //k2
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,229,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k2', 295, 240);
        e.stroke();

        //k3
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,217,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k3', 295, 225);
        e.stroke();

        //k4
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,188,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k4', 295, 200);
        e.stroke();

        //接線
        e.beginPath();
        e.setLineDash([0, 0]);
        e.strokeStyle = "red" ;
        e.moveTo(80, 315);
        e.lineTo(320,170);
        e.stroke();

    }else if(count3 == 12){
        e.clearRect(60,60,310,260);
        e.strokeStyle = "black" ;
        //関数
        e.beginPath();
        e.setLineDash([0, 0]);
        e.arc(15,-200, 500, 0.85, 1.45, false);
        e.stroke();

        //x0
        e.beginPath();
        e.arc(120,290,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //k1
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 265);
        e.stroke();

        //k2
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,229,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k2', 295, 240);
        e.stroke();

        //k3
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,217,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k3', 295, 225);
        e.stroke();

        //中点
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(205,253,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        e.beginPath();
        e.strokeStyle = "red" ;
        e.setLineDash([2, 2]);
        e.arc(-35,-186, 500, 0.7, 1.3, false);
        e.stroke();

        //接線
        e.beginPath();
        e.setLineDash([0, 0]);
        e.strokeStyle = "red" ;
        e.moveTo(165, 275);
        e.lineTo(245,230);
        e.stroke();
    }else if(count3 == 13){
        e.clearRect(60,60,310,260);
        e.strokeStyle = "black" ;
        //関数
        e.beginPath();
        e.setLineDash([0, 0]);
        e.arc(15,-200, 500, 0.85, 1.45, false);
        e.stroke();

        //x0
        e.beginPath();
        e.arc(120,290,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        /*k1
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,250,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k1', 295, 265);
        e.stroke();

        //k2
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,229,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k2', 295, 240);
        e.stroke();

        //k3
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,217,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k3', 295, 225);
        e.stroke();

        //k4
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,188,3,0,2*Math.PI,false);
        e.fill();
        e.fillText('k4', 295, 200);
        e.stroke();*/

        //final
        final =(250+2*229+2*217+188)/6;
        e.beginPath();
        e.strokeStyle = "blue" ;
        e.arc(290,final,3,0,2*Math.PI,false);
        e.fill();
        e.stroke();

        //点線
        e.beginPath();
        e.strokeStyle = "black" ;
        e.setLineDash([2, 2]);
        e.moveTo(290, final);
        e.lineTo(290, 350);
        e.moveTo(50, final);
        e.lineTo(290, final);
        e.stroke();

        //y軸目盛
        e.moveTo(40, final);
        e.lineTo(60, final);
        e.fillText('y1', 23, final);

    }

        
};

e.beginPath();
//x軸
e.moveTo(25, 350);
e.lineTo(350, 350);
//y軸
e.moveTo(50, 375);
e.lineTo(50, 15);

//x軸メモリ
e.moveTo(120, 340);
e.lineTo(120, 360);

e.moveTo(205, 340);
e.lineTo(205, 360);

e.moveTo(290, 340);
e.lineTo(290, 360);

//y軸目盛
e.moveTo(40, 290);
e.lineTo(60, 290);

//文字
e.font = 'bold 20px serif'; 
e.fillText('X軸', 350, 380);
e.fillText('Y軸', 10, 30);

e.font = 'bold 15px serif'; 
e.fillText('x0', 115, 375);
e.fillText('x1', 285, 375);
e.fillText('y0', 23, 287);
e.fillText('h', 210,330);
e.fillText('h/2', 153,343);
e.stroke();

//関数
e.beginPath();
e.arc(15,-200, 500, 0.85, 1.45, false);
e.stroke();

//括弧
e.beginPath();
e.arc(257, 389, 50, 5.0, 5.40, false);
e.stroke();

e.beginPath();
e.arc(153, 389, 50, 4.0, 4.40, false);
e.stroke();

e.beginPath();
e.arc(175, 389, 50, 5.0, 5.40, false);
e.stroke();


//点
e.beginPath();
e.arc(120,290,3,0,2*Math.PI,false);
e.fill();
e.stroke();

