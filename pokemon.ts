// change the pokemon names
// change the each pokemon HP
// battle continues until 1 pokemon faints (0 HP)
const pokemonA: string = 'Snorlax'
const pokemonB: string = 'Mr. Mime'
let aHP: number = 300
let bHP: number = 188
const aAtk: number = 25
const bAtk: number = 30
const aDefend: number = 10
const bDefend: number = 2
const aSkilldmg: number = 4
const bSkilldmg: number = 3
const aDamage = (aAtk - bDefend) * aSkilldmg
const bDamage = (bAtk - aDefend) * bSkilldmg
//const aDamage = 50
//const bDamage = 80

console.log('You are now battling Sabrina')
console.log('I am Sabrina, try to defeat me.')
console.log('Sabrina sent out ' + pokemonB)
console.log('Go, ' + pokemonA)

console.log(`${pokemonA} has ${aHP} HP'`)
console.log(`${pokemonB} has ${bHP} HP'`)

const performMove = (attacker, defender, damage, defenderHP) => {
  console.log(`${attacker} hits ${defender} for ${damage} damage`)
  defenderHP = defenderHP - damage
  if (defenderHP < 0) {
    defenderHP = 0
  }
  console.log(`${defender}'s HP is reduced to ${defenderHP} HP`)
  return defenderHP
}

console.log('----------------------')
let isMyTurn = true
while (aHP > 0 && bHP > 0) {
  if (isMyTurn) {
    console.log('You picked Body Slam')
    bHP = performMove(pokemonA, pokemonB, aDamage, bHP)
  } else {
    console.log(pokemonB + ' uses Psychic')
    aHP = performMove(pokemonB, pokemonA, bDamage, aHP)
  }
  console.log('----------------------')
  isMyTurn = !isMyTurn
}

if (aHP <= 0) {
  console.log(pokemonA + ' fainted')
  console.log('You lost, GAME OVER')
} else {
  console.log(pokemonB + ' fainted')
  console.log('You won, GAME OVER')
}

// TODO: 7. Set the trainer's pokemon to 'x' for the defeated one.
// TODO: 8. Another trainer's pokemon wil appear.
// TODO: 9. Repeat step 4 to step 7 untill all trainer's pokemons are defeated.
