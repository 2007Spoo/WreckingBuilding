class Ball
{
   constructor(x, y, height, width, angle)
{
   var options=
   {
       density: 1,
       frictionAir: 0.00
   };

   this.body= Bodies.rectangle(x, y, width, height, options);
   this.width= width;
   this.height= height;
   World.add(world, this.body);

}

    display()
    {
        var angle= this.body.angle;
        var pos= this.body.position;
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        ellipse(0,0, this.width, this.height)
        pop()
    }
}