export default function PlayerStats(ctx, player, canvas) {
  ctx.font = "20px Arial";
  ctx.fillStyle = "red";
  let gap = 0;

  for (let i = 0; i < player.lives; i++) {
    ctx.fillText("❤️", 20 + gap, 30);
    gap += 30;
  }

  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`Score: ${player.score}`, canvas.width - 140, 30);
}
