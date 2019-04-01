interface Pokemon {
    name: string
    hp: number
    atk: number
    def: number
  }
  
  const pknA: Pokemon = {
    name: 'Snorlax',
    hp: 100,
    atk: 30,
    def: 20,
  }
  const pknB: Pokemon = {
    name: 'Mr. Mime',
    hp: 200,
    atk: 25,
    def: 25,
  }
  
  console.log('You are now battling Sabrina')
  console.log('I am Sabrina, try to defeat me.')
  console.log('Sabrina sent out ' + pknB.name)
  console.log('Go, ' + pknA.name)
  
  console.log(`${pknA.name} has ${pknA.hp} HP'`)
  console.log(`${pknB.name} has ${pknB.hp} HP'`)
  
  const performMove = (attacker, defender) => {
    const damage = attacker.atk - defender.def
    console.log(`${attacker.name} hits ${defender.name} for ${damage} damage`)
    defender.hp = defender.hp - damage
  
    if (defender.hp < 0) {
      defender.hp = 0
    }
  
    console.log(`${defender.name}'s HP is reduced to ${defender.hp} HP`)
    return defender.hp
  }
  
  console.log('----------------------')
  let isMyTurn = true
  while (pknA.hp > 0 && pknB.hp > 0) {
    if (isMyTurn) {
      console.log('You picked Body Slam')
      pknB.hp = performMove(pknA, pknB)
    } else {
      console.log(pknB.name + ' uses Psychic')
      pknA.hp = performMove(pknB, pknA)
    }
    console.log('----------------------')
    isMyTurn = !isMyTurn
  }
  
  if (pknA.hp <= 0) {
    console.log(pknA.name + ' fainted')
    console.log('You lost, GAME OVER')
  } else {
    console.log(pknB.name + ' fainted')
    console.log('You won, GAME OVER')
  }
  
  // TODO: 7. Set the trainer's pokemon to 'x' for the defeated one.
  // TODO: 8. Another trainer's pokemon wil appear.
  // TODO: 9. Repeat step 4 to step 7 untill all trainer's pokemons are defeated.
  