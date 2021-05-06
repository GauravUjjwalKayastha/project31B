class Drop{
    constructor(x,y)
    {
        var options={
            isStatic:false,
            //friction:0.2
            //frictionAir:0.2
        };
        this.body=Bodies.circle(x,y,5,options);
        this.radius=5,
        World.add(world,this.body)


    }
    updateY(){
        if(this.body.position.y>500){
            Matter.Body.setPosition(this.body,{x:random(0,780),y:random(0,100)})
        }
    }

    display(){
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,5,5);

    }
}