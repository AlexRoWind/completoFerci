var bgStart, bgroomImg;


function preload() {

  bgStart = loadImage("./assets/inicioSolito.png");
  bgroomImg = loadImage("./assets/fondoFerci.png");

  niño_running = loadImage("./assets/Niño.png", "./assets/Niño1.png", "./assets/Niño2.png", "./assets/Niño3.png",
    "./assets/Niño4.png", "./assets/Niño5.png", "./assets/Niño6.png", "./assets/Niño7.png");

  niño_running = loadAnimation("Niño.png", "Niño1.png", "Niño2.png",
    "Niño3.png", "Niño4.png", "Niño5.png", "Niño6.png", "Niño7.png");
  niño_collided = loadAnimation("./assets/gameOverFerci.png");

  groundImage = loadImage("./assets/inicioLargo.png");

  points = loadImage("./assets/puntos.png");
  points = loadImage("./assets/puntos1.png");
  points = loadImage("./assets/puntos2.png");
  points = loadImage("./assets/puntos3.png");
  points = loadImage("./assets/puntos4.png");

  obstacle = loadImage("./assets/obstaculo.png");

}
function setup() {
  createCanvas(windowWidth, windowHeight);

  niño = createSprite(50, 180, 20, 50);
  niño_running.addAnimation("running", niño_running);
  niño_collided.addAnimation("collided", niño_collided);
  niño.scale = 1;

  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;

  //crear grupos de obstáculos (baterias)
  obstaclesGroup = new Group();
  //crear grupos de puntos (mounstros)
  pointsGroup = new Group();
//el inicio
  start = new Start()
  start.display()
}

function draw() {

  //aparecer obstáculos en el suelo
  spawnObstacles();
  spawnPoints();

  background(bgStart);

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(400, 165, 10, 40);
    obstacle.velocityX = -6;


    //generar obstáculos al azar
    var rand = Math.round(random(1, 3));
    switch (rand) {
      case 1: obstacle.addImage(obstaculo);
        break;
      case 2: obstacle.addImage(obstaculo1);
        break;
      case 3: obstacle.addImage(obstaculo2);
        break;
      default: break;
    }

    //asignar escala y ciclo de vida al obstáculo          
    obstacle.scale = 2;
    obstacle.lifetime = 300;

    //agregar cada obstáculo al grupo
    obstaclesGroup.add(obstacle);
  }

  function spawnPoints() {
    if (frameCount % 60 === 0) {
      var point = createSprite(400, 165, 10, 40);
      point.velocityX = -4;


      //generar obstáculos al azar
      var rand = Math.round(random(1, 4));
      switch (rand) {
        case 1: point.addImage(puntos1);
          break;
        case 2: point.addImage(puntos2);
          break;
        case 3: point.addImage(puntos3);
          break;
        case 4: point.addImage(puntos4);
          break;
        default: break;
      }

      //asignar escala y ciclo de vida al obstáculo          
      point.scale = 1;
      point.lifetime = 300;

      //agregar cada obstáculo al grupo
      pointsGroup.add(point);
    }
  }