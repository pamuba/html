var canvas = document.getElementById('canvas');
// console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//  c.fillStyle = 'rgba(255,0,0,.3)';
//  c.fillRect(100,100,100,100);
//  c.fillStyle = 'rgba(0,0,255,.3)';
//  c.fillRect(200,200,100,100);
//  c.fillStyle = 'rgba(0,255,0,.3)';
//  c.fillRect(300,300,100,100);

// //Line
//  c.beginPath();
//  c.moveTo(50, 300);
//  c.lineTo(300,100);
//  c.lineTo(400,300);
//  c.lineTo(1,1);
//  c.strokeStyle = "red";
//  c.stroke();

//Arc
//  for (let i = 0; i < 300; i++) {
//        var x = Math.random() * window.innerWidth ;
//        var y = Math.random() * window.innerHeight;
//        c.beginPath();
//        c.arc(x,y,30,0,Math.PI*2,true);
//        c.strokeStyle = 'blue';
//        c.stroke();
//  }


 var x = Math.random()*innerWidth;
 var y = Math.random()*innerHeight;
 var dx = (Math.random() - 0.5) * 18;
 var dy = (Math.random() - 0.5) * 18;
var radius = 30;
 function animate(){
       requestAnimationFrame(animate);
       c.clearRect(0,0,innerWidth, innerHeight);
       c.beginPath();
       c.arc(x,y,30,0,Math.PI*2,true);
       c.strokeStyle = 'blue';
       c.stroke();
      if(x+radius > innerWidth || x-radius <0)
      {
         dx = -dx;
      }

    if(y+radius > innerHeight || y-radius <0)
    {
        dy = -dy;
    }
       x+=dx;
       y+=dy;
 }

 animate();