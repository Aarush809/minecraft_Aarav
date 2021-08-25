 var canvas= new fabric.Canvas("canvas");
 var player_x=10;
 var player_y=10;
 var block_width=30;
 var block_height=30;

 var player_object="";
 var block_object="";

 function update_player(){
     fabric.Image.fromURL("player.png", function(Img){
         player_object=Img;
         player_object.scaleToWidth(100);
         player_object.scaleToHeight(100);
         player_object.set({top:player_y,left:player_x});
         canvas.add(player_object);
     });
 }

 function update_block(image_get){
     fabric.Image.fromURL(image_get, function(Img){
         block_object=Img;
         block_object.scaleToWidth(block_width);
         block_object.scaleToHeight(block_height);
         block_object.set({top:player_y,left:player_x});
         canvas.add(block_object);
     });
 }

 window.addEventListener("keydown",key_down);

 function key_down(e){
var keypress=e.keyCode;

if (e.shiftKey && keypress=="81"){
    block_width= block_width+ 10;
    block_height= block_height+ 10;
    document.getElementById("width").innerHTML=block_width;
    document.getElementById("height").innerHTML=block_height;
    console.log("shift+q");
}

if (e.shiftKey && keypress=="77"){
    block_width= block_width- 10;
    block_height= block_height- 10;
    document.getElementById("width").innerHTML=block_width;
    document.getElementById("height").innerHTML=block_height;
    console.log("shift+m");
}

if (keypress=="37"){
    left();
    console.log("left");
}
if (keypress=="38"){
    up();
    console.log("up");
}

if (keypress=="39"){
    right();
    console.log("right");
}

if (keypress=="40"){
    down();
    console.log("down");
}

if (keypress=="83"){
    update_block("cloud.jpg");
    console.log("s");
}
if (keypress=="68"){
    update_block("dark_green.png");
    console.log("d");
}
if (keypress=="71"){
    update_block("ground.png");
    console.log("g");
}
if (keypress=="76"){
    update_block("light_green.png");
    console.log("l");
}
if (keypress=="82"){
    update_block("roof.jpg");
    console.log("r");
}
if (keypress=="84"){
    update_block("trunk.jpg");
    console.log("t");
}
if (keypress=="85"){
    update_block("unique.png");
    console.log("u");
}
if (keypress=="87"){
    update_block("wall.jpg");
    console.log("w");
}
if (keypress=="89"){
    update_block("yellow_wall.png");
    console.log("y");
}

}

function left(){
    if (player_x>=0){
        player_x= player_x-10;
        canvas.remove(player_object);
        update_player();
    }
}

function up(){
    if (player_y>=0){
        player_y= player_y-10;
        canvas.remove(player_object);
        update_player();
    }
}

function right(){
    if (player_x<=500){
        player_x= player_x+10;
        canvas.remove(player_object);
        update_player();
    }
}

function down(){
    if (player_y<=700){
        player_y= player_y+10;
        canvas.remove(player_object);
        update_player();
    }
}