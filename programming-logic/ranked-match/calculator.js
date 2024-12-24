const player1 = {
  name: "hattori",
  rank: "",
  wins: 324,
  losses: 213,
  winningBalance: 0,
};

function calculator(player) {
  player.winningBalance = player.wins - player.losses;

  if (player.winningBalance < 10) {
    player.rank = "Ferro";
  } else if (11 < player.winningBalance && player.winningBalance < 20) {
    player.rank = "Bronze";
  } else if (21 < player.winningBalance && player.winningBalance < 50) {
    player.rank = "Prata";
  } else if (51 < player.winningBalance && player.winningBalance < 80) {
    player.rank = "Ouro";
  } else if (81 < player.winningBalance && player.winningBalance < 90) {
    player.rank = "Diamante";
  } else if (91 < player.winningBalance && player.winningBalance < 100) {
    player.rank = "Lendário";
  } else if (player.winningBalance >= 101) {
    player.rank = "Imortal";
  }

  return console.log(
    `O herói ${player.name} tem saldo de ${player.winningBalance} e está no nível ${player.rank}`
  );
}

calculator(player1);
