canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;

function add() {
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;

    greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src=greencar_image;

}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);

}


window.addEventListener("keydown", my_keydown);
function my_keydown(e){
	key= e.keyCode;
	console.log(key);
		if(key=="37"){
			move_left();
		}

		if(key=="38"){
			move_up();
		}

		if(key=="39"){
			move_right();
		}

		if(key=="40"){
			move_down();
		}
		
		
}

function move_up()
{
	if(greencar_y >0)
	{
		greencar_y = greencar_y - 10;
		uploadBackground();
		uploadgreencar();
	}
}

function move_down()
{
	if(greencar_y <510)
	{
		greencar_y = greencar_y + 10;
		uploadBackground();
		uploadgreencar();
	}
}

function move_left()
{ 
	if(greencar_x >0)
	{
		greencar_x = greencar_x - 10;
		uploadBackground();
		uploadgreencar();
	}
}


function move_right()
{
	if(greencar_x <700)
	{
		greencar_x = greencar_x + 10;
		uploadBackground();
		uploadgreencar();
	}
}

