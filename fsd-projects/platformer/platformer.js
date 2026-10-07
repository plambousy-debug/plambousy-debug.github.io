$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(50,175,100,20)
createPlatform(175,280,100,20)
createPlatform(30,400,100,20)
createPlatform(175,520,100,20)
createPlatform(50,640,100,20)
createPlatform(270,0,15,620)
createPlatform(280,600,100,20)
createPlatform(450,150,15,800)
createPlatform(365, 470, 100, 20)
createPlatform(280, 350, 100,20)
createPlatform(280, 230, 100,20)
createPlatform(460, 150,340,20)
createPlatform(800,150,15,300)
createPlatform(680,560,280,20)
createPlatform(900,150,15,300)
createPlatform(970,500,200,20)
createPlatform(1200,150,15,370)
createPlatform(1100,410,100,20)
createPlatform(900,340,100,20)
createPlatform(1100,280,100,20)
createPlatform(900,210,100,20)
createPlatform(1200,150,100,20)
// TODO 3 - Create Collectables
createCollectable("diamond", 80, 350, 0, 0.7);
createCollectable("diamond",382,420, 0,0.7)
createCollectable("diamond",700,520,0,0.07)
createCollectable("diamond",840,460,0,0.07)
createCollectable("diamond",1320,400,0,0.07)
createCollectable("diamond",1200,530,0,0.07)
    
    // TODO 4 - Create Cannons
createCannon("top",200,500)
createCannon("left",200,900)
createCannon("left",600,1500)
createCannon("top",600,700)
createCannon("top",800,700)
createCannon("top",1000,800)
createCannon("right",180,1500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
