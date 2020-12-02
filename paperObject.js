class Paper{
      

    constructor(x,y,r)
    {
        var option = {
            isStatic    :   false,
            restitution :   0.3,
            frition :   0.5,
            density :   1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x ,this.y ,this.r/2 ,option)
    }
    
     display()
     {
         var paperpos = this.body.position

         Push()
         transilation(paperpos.x ,paperpos.y);
         rectMode(CENTER);
         strokeWeight(3);
         Fill(255,0,255);
         ellipse(0,0, this.r, this.r);
         pop()
     }
}
