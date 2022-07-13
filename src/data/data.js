const data = {
  ballObj: {
    x: 480,
    y: 400,
    dx: 5,
    dy: -6,
    rad: 15,
    speed: 6,
  },
  brickObj: {
    x: 0.5,
    y: 50,
    height: 50,
    density: 2,
    colors: ["red", "#7e3a2a"],
  },
  player: {
    lives: 3,
    score: 0,
    level: 1,
  },
  paddleProps: {
    height: 20,
    width: 200,
    x: 380,
    color: "orange",
  },
};

export default data;
