class Hexa{
    constructor(x,y){
        var options={
            //'restitution':0.8,
            'frictionAir':0.005,
            'density':1
        }
        this.ball=Bodies.rectangle(x,y,70,70,options)
        this.width=70
        this.height=70

        World.add(world,this.ball)
    }
display(){
    var pos = this.ball.position
    var angle= this.ball.angle

    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    fill ("red")
    //ellipseMode(CENTER)
    ellipse(0,0,this.width,this.height)
    pop ()

}
} 

