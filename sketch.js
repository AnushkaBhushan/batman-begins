const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var maxDrops=100,drops=[],rain;

function preload(){
  thunder1 = loadImage('1.png');
  thunder2 = loadImage('2.png');
  thunder3 = loadImage('3.png');
  thunder4 = loadImage('4.png');
}

/*function setup(){
    createCanvas(500,750);
    engine = Engine.create();
    world = engine.world;
    
    var d = new Drops(100,100); 
    drops.push(d);
}

function draw(){
    background('yellow');
    Engine.update(engine);

    //createDrops();
    drops[0].show();
    drawSprites();
}   

function createDrops(){
    if (frameCount%60==0){
        for (var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
            //pop();
        }
    }
    rain.create(drops);
    //this.rain.display();
    if (this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,500),y:random(0,400)});
    }
}

function repositionDrops(){
    
}*/
function setup(){ 
    engine = Engine.create(); 
    world = engine.world; createCanvas(600,900); 
    umbrella = new Umbrella(225,380,150); 
     //creating drops 
      if(frameCount % 150 === 0){ 
        for(var i=0; i<maxDrops; i++){ 
            drops.push(new Drops(random(0,600), random(0,400)));
         }
        }
    
}

function draw(){
     Engine.update(engine);
      background(0);
    
      //creating thunder 
    rand = Math.round(random(1,4)); 
    if(frameCount%80===0){ 
        thunderCreatedFrame = frameCount; 
        thunder = createSprite(random(10,600), random(10,30), 10, 10); 
        switch(rand){ 
            case 1: thunder.addImage(thunder1); 
            break; 
            case 2: thunder.addImage(thunder2); 
            break; 
            case 3: thunder.addImage(thunder3); 
            break; 
            case 4: thunder.addImage(thunder4); 
            break; 
            default: break; 
        } 
        thunder.scale = random(0.3,0.6) 
        thunder.lifetime=10;
    } 
    /*if(thunderCreatedFrame + 10 ===frameCount && thunder){ 
        thunder.destroy();
    }*/
      umbrella.display(); 
      //displaying rain drops
       for(var i = 0; i<maxDrops; i++){
            drops[i].showDrop(); 
            drops[i].updateY();
        } 
        drawSprites(); 
    }

    /*function setup(){ 
        engine = Engine.create(); 
        world = engine.world; createCanvas(400,700); 
        //umbrella = new Umbrella(200,500); 
        //creating drops
        if(frameCount % 150 === 0){ 
            for(var i=0; i<maxDrops; i++){ 
                drops.push(new Drops(random(0,400), random(0,400)));
             }
    
         } 
    }
    
    function draw(){
         Engine.update(engine);
          background(0); 
          //creating thunder 
       /* rand = Math.round(random(1,4)); 
        if(frameCount%80===0){ 
            thunderCreatedFrame=frameCount; 
            thunder = createSprite(random(10,370), random(10,30), 10, 10); 
            switch(rand){ 
                case 1: thunder.addImage(thunder1); 
                break; 
                case 2: thunder.addImage(thunder2); 
                break; 
                case 3: thunder.addImage(thunder3); 
                break; 
                case 4: thunder.addImage(thunder4); 
                break; 
                default: break; 
            } 
            thunder.scale = random(0.3,0.6) 
        } 
        if(thunderCreatedFrame + 10 ===frameCount && thunder){ 
            thunder.destroy();
        }*/
          //umbrella.display(); 
          //displaying rain drops
           /*for(var i = 0; i<maxDrops; i++){
                drops[i].showDrop(); 
                drops[i].updateY() 
            } 
            drawSprites(); 
        }*/
    
