canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use a função beginPath() para começar um caminho.
    Então, use strokeStyle para ajustar a cor para "grey".
    Use lineWidth e ajusta a width para 1.
    Use rect() para criar um retângulo em 150 e 143 com 430 width e 200 height.
*/

ctx.beginPath;
ctx.stronkeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150,143,430,200, 2*Math.PI);
ctx.stroke();

/*
    Use a função beginPath() para começar um caminho.
    Então, use strokeStyle para ajustar a cor para "blue".
    Use lineWidth e ajuste a width para 5.
    Use arc() para criar um círculo em  x = 150 e y = 143
with 40 como radius, 0 startAngle e 2 * Math.PI endAngle.
*/

ctx.beginPath;
ctx.stronkeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(150,143,40,0, 2*Math.PI);
ctx.stroke();

// De modo parecido, crie um círculo preto com posição 350 e 210
ctx.beginPath;
ctx.stronkeStyle= "black";
ctx.lineWidth=7;
ctx.arc(y,x,2*Math.PI);
ctx.stroke();

// De modo parecido, crie um círculo vermelho com posição 210 e 40
ctx.beginPath;
ctx.stronkeStyle="red";
ctx.lineWidth=10;
ctx.arc(210,40,2*Math.PI);
ctx.stroke();

// De modo parecido, crie um círculo laranja com posição  300 e 250
ctx.beginPath;
ctx.stronkeStyle="orange";
ctx.lineWidth=13;
ctx.arc(300,250,2*Math.PI);
ctx.stroke();

// De modo parecido, crie um círculo verde com posição 400 e 250
 ctx.beginPath;
ctx.stronkeStyle="green";
ctx.lineWidth=16;
ctx.arc(400,250,2*Math.PI);
ctx.stroke();
