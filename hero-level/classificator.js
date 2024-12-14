const hero = {
  name: "Hattori",
  xp: 11111,
  level: ""
}

if (hero.xp <= 1000) {
  hero.level = "Ferro"
} else if (1001 < hero.xp && hero.xp <= 2000) {
  hero.level = "Bronze"
} else if (2001 < hero.xp && hero.xp <= 5000) {
  hero.level = "Prata"
} else if (5001 < hero.xp && hero.xp <= 7000) {
  hero.level = "Ouro"
} else if (7001 < hero.xp && hero.xp <= 8000) {
  hero.level = "Platina"
} else if (8001 < hero.xp && hero.xp <= 9000) {
  hero.level = "Ascendente"
} else if (9001 < hero.xp && hero.xp <= 10000) {
  hero.level = "Imortal"
} else if (hero.xp >= 10001) {
  hero.level = "Radiante"
} else {
  console.error("Algo deu errado")
}

console.log(`O herói de nome ${hero.name} está no nível ${hero.level}.`)