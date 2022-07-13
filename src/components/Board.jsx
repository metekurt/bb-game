import React, { useEffect, useRef, useState, useReducer } from "react";
import data from "../data/data";
import AllBroken from "../tools/AllBroke";
import { BallMovement } from "../tools/BallMovement";
import Brick from "../tools/Brick";
import BrickCollision from "../tools/BrickCollision";
import Paddle from "../tools/Paddle";
import PaddleHit from "../tools/PaddleHit";
import PlayerStats from "../tools/PlayerStats";
import ResetBall from "../tools/ResetBall";
import WallCollision from "../tools/WallCollision";
import { Link } from "react-router-dom";
import brickUrl from "../music/brick.mp3";
import gameOver from "../music/gameover.mp3";
let { ballObj, paddleProps, player, brickObj } = data;
let bricks = [];

const Board = () => {
  const canvasRef = useRef(null);
  let leftPressed = false;
  let rightPressed = false;

  useEffect(() => {
    let brickMusic = new Audio(brickUrl);
    let gameOverMusic = new Audio(gameOver);

    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      paddleProps.y = canvas.height - 30;
      let newBrickSet = Brick(player.level, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      PlayerStats(ctx, player, canvas);
      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      BallMovement(ctx, ballObj);

      AllBroken(bricks, player, brickObj);

      if (player.lives === 0) {
        manageAudioGameOver();
        alert("Press OK to start new game..");
        player.lives = 3;
        player.level = 1;
        player.score = 0;
        ResetBall(ballObj, paddleProps);
        bricks.length = 0;
      }

      WallCollision(ballObj, canvas, player, paddleProps);

      let brickCollision;

      for (let i = 0; i < bricks.length; i++) {
        brickCollision = BrickCollision(ballObj, bricks[i]);

        if (brickCollision.hit && !bricks[i].broke) {
          manageAudioBricks();
          if (brickCollision.axis === "X") {
            ballObj.dx *= -1;
            bricks[i].broke = true;
          } else if (brickCollision.axis === "Y") {
            ballObj.dy *= -1;
            bricks[i].broke = true;
          }
          player.score += 10;
        }
      }

      if (leftPressed && paddleProps.x > 0) {
        paddleProps.x -= 14;
      } else if (
        rightPressed &&
        paddleProps.x < canvas.width - paddleProps.width
      ) {
        paddleProps.x += 14;
      }

      Paddle(ctx, canvas, paddleProps);

      PaddleHit(ballObj, paddleProps);

      requestAnimationFrame(render);
      if (player.score > 0) {
      }
    };

    function manageAudioBricks() {
      brickMusic.play();
    }
    function manageAudioGameOver() {
      gameOverMusic.play();
    }

    render();
  }, []);

  function handleDown(event) {
    if (event.keyCode === 37) {
      leftPressed = true;
    } else if (event.keyCode === 39) {
      rightPressed = true;
    }
  }
  function handleUp(event) {
    if (event.keyCode === 37) {
      leftPressed = false;
    } else if (event.keyCode === 39) {
      rightPressed = false;
    }
  }

  return (
    <div className="">
      <canvas
        ref={canvasRef}
        id="canvas"
        width={1920 / 2}
        height={1080 / 2 - 50}
        tabIndex="0"
        onKeyDown={handleDown}
        onKeyUp={handleUp}
      ></canvas>
      <div className="px-4 gohome">
        <Link to="/">
          <h1 className="text-center py-1 px-6 gohome-text uppercase font-bold transition-all duration-100 hover:text-yellow-500">
            Home Page
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Board;
