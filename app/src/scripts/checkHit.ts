type BoxCollision = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export function checkHit(x : number, y : number, boxCollision: BoxCollision) {
  const checkX: boolean = boxCollision.x <= x && x <= boxCollision.x + boxCollision.width
  const checkY: boolean = boxCollision.y <= y && y <= boxCollision.y + boxCollision.height

  if (checkX && checkY){
    console.log('touch object')
    return true
  }
  else{
    return false
  }
}