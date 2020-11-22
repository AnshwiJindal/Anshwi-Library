function isTouching(rect1,rect2){

    if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
      && rect2.x - rect1.x < rect2.width/2 + rect1.width/2
      && rect1.y - rect2.y < rect2.height/2 + rect1.height/2
      && rect2.y - rect1.y < rect2.height/2 + rect1.height/2) {
      return true;
    }
     else {
     return false;
    }

}

function bounce(rect3,rect4){
if (rect3.x - rect4.x < rect4.width/2 + rect3.width/2
    && rect4.x - rect3.x < rect4.width/2 + rect3.width/2) {
  rect3.velocityX = rect3.velocityX * (-1);
  rect4.velocityX = rect4.velocityX * (-1);
}
if (rect3.y - rect4.y < rect4.height/2 + rect3.height/2
  && rect4.y - rect3.y < rect4.height/2 + rect3.height/2){
  rect3.velocityY = rect3.velocityY * (-1);
  rect4.velocityY = rect4.velocityY * (-1);
  }
}