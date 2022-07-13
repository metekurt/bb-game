import data from "../data/data";
import ResetBall from "./ResetBall";
export default function AllBroken(bricks, player, ballObj) {
  let { brickObj, paddleProps } = data;
  let total = 0;

  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].broke === true) {
      total++;
    }
  }

  if (total === bricks.length) {
    player.level++;
    ResetBall(ballObj, paddleProps);
    brickObj.y = 50;
  }
}
