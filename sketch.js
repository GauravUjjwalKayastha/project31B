const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var rain =[];
var thunder,tframe;

function preload(){
    t1=loadImage("1.png")
    t2=loadImage("2.png")
    t3=loadImage("3.png")
    t4=loadImage("4.png")
    
}

function setup(){
    createCanvas(800,500)

engine=Engine.create();
world=engine.world;

if (frameCount%150===0){
for(i=0;i<=100;i++){
   rain.push(new Drop(random(0,780),random(0,100)))}
   }

umbrella=new Umbrella(400,400);

}


function draw(){
    background("black")
    Engine.update(engine);
   for(i=0;i<=100;i++){
       rain[i].display();
       rain[i].updateY();
   } 
   umbrella.display();
   callThunder();
   drawSprites();
}   
function callThunder()
{
    var rand=Math.round(random(1,4))
    if(frameCount%80===0){
        thunder=createSprite(random(10,780),random(40,100),50,50)
        tframe=frameCount;

        switch(rand){
            case 1:thunder.addImage(t1);
            break;
            case 2:thunder.addImage(t2);
            break;
            case 3:thunder.addImage(t3);
            break;
            case 4:thunder.addImage(t4);
            break;
            default: break;
        }
        thunder.scale=random(0.6,0.8)
    }
    if(frameCount%(tframe+10)===0){
        thunder.destroy();

    }
}
