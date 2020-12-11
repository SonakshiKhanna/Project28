class Mango {
    constructor(x, y, r){
        var options= {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.image = loadImage("Sprites/mango.png");
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push()
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        image(this.image, 0, 0, 50, 50);
        pop();
    }

}