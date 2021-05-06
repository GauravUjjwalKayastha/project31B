class Umbrella{
    //constructor(x)
    constructor(x,y)
    {
        var options={
            isStatic:true,
            //friction:0.2
            //frictionAir:0.2
        };
        this.body=Bodies.circle(x,y,100,options);
        this.radius=5;
        this.image=loadImage("images/Walking Frame/walking_1.png");


        World.add(world,this.body)


    }
    


    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,200,200)

    }
}