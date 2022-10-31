




function setup()
{
    var video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,160);
    poseNet=ml5.poseNet(video,modelLoaded);

    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("poseNet se inicializo");
}
function gotPoses(results)
{
    if(results.length>0)
    {

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log('posicion de muñeca derecha es '+rightWristX+'posicion de muñeca izquierda es'+leftWristX+'la diferencia entre las muñecas es '+difference);

    }
}