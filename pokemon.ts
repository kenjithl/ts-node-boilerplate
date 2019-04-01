// change the pokemon names
// change the each pokemon HP
// battle continues until 1 pokemon faints (0 HP)
const pokemonA: string = 'Snorlax'
const pokemonB: string = 'Mr. Mime'
let aHP: number = 300
let bHP: number = 188
const damage = 50

console.log('You are now battling Sabrina')
console.log('I am Sabrina, try to defeat me.')
console.log('Sabrina sent out ' + pokemonB)
console.log('Go, ' + pokemonA)

console.log(`${pokemonA} has ${aHP} HP'`)
console.log(`${pokemonB} has ${bHP} HP'`)

// start with pokemonA turn
// pokemonA does its move
// check if pokemonB has fainted, stop the whole game
// switch to pokemonB
// pokemonB does its move
// check if pokemonA has fainted, stop the whole game
// repeat

// condition to keep the game going
// pokemonA's HP is more than 0 and pokemonB's HP is more than 0
// pokemonA's HP is less or equal to 0
console.log('----------------------')
let isMyTurn = true
while (aHP > 0 && bHP > 0) {
  if (isMyTurn) {
    // i can pick a move
    console.log('You picked Body Slam')
    // my pokemon hits opp pokemon
    console.log(`${pokemonA} hits ${pokemonB} for ${damage} damage`)
    bHP = bHP - damage
    console.log(`${pokemonB}'s HP is reduced to ${bHP} HP`)
    isMyTurn = !isMyTurn
  } else {
    // i cannot pick a move
    console.log(pokemonB + ' uses Psychic')
    // opp pokemon hits my pokemon
    console.log(`${pokemonB} hits ${pokemonA} for ${damage} damage`)
    aHP = aHP - damage
    console.log(`${pokemonA}'s HP is reduced to ${aHP} HP`)
    isMyTurn = !isMyTurn
  }
  console.log('----------------------')
 
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
