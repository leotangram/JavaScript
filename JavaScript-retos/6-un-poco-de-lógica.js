function isAlive(playerName, points) {
	if ((playerName === "ikk" && points > 30) || (playerName === "gut" && points > 10)) {
		return isAlive = true;
	} 
	else {
		return isAlive = false;
	};
};



//O también 

function isAlive(playerName, points) {
  return (playerName === "ikk" && points > 30) || (playerName === "gut" && points > 10)
}