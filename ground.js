class ground {
    constructor (x , y , w , h) {
        let chao_options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
      
        this.w = w;
        this.h = h; 
        this.body = Bodies.rectangle(x , y , w , h , chao_options);
        World.add(world, this.body);
    }




    show() { 
        var pos = this.body.position;
        push();
        strokeWeight(4);
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255,255,0);
        rect(0, 0, this.w, this.h);
        pop();
    }

}   