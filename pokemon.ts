import { question } from 'readline-sync'

let freeze = 0
let effectDmg: number = 0

interface Skill {
  name: string
  damage: number
  effect: string
}

interface Pokemon {
  name: string
  hp: number
  atk: number
  def: number
  skills: Skill[]
}

const pknA: Pokemon = {
  name: 'Snorlax',
  hp: 100,
  atk: 30,
  def: 20,
  skills: [
    {
      name: 'Tackle',
      damage: 50,
      effect: 'Sleep'
    },
    {
      name: 'Bubblebeam',
      damage: 70,
      effect: ''
    },
  ],
}

const pknB: Pokemon = {
  name: 'Mr. Mime',
  hp: 200,
  atk: 25,
  def: 25,
  skills: [
    {
      name: 'Psychic',
      damage: 70,
      effect: 'Poison'
    },
  ],
}

console.log('You are now battling Sabrina')
console.log('I am Sabrina, try to defeat me.')
console.log('Sabrina sent out ' + pknB.name)
console.log('Go, ' + pknA.name)

console.log(`${pknA.name} has ${pknA.hp} HP'`)
console.log(`${pknB.name} has ${pknB.hp} HP'`)

const performMove = (attacker, defender, skill) => {
  console.log('**********************')
  if (freeze){
    //Display freeze
    freeze = 0
    console.log(`${defender.name} you being freeze for one round`)
  }
  else{
    //skill 1
    if (skill.effect == 'Poison'){
      console.log(`${attacker.name} uses ${skill.name} with ${skill.effect} effect`)
      let damage: number = attacker.atk - defender.def + skill.damage
      defender.hp = defender.hp - damage
      effectDmg = defender.hp/10
      damage = damage + effectDmg
      defender.hp = defender.hp - effectDmg
      console.log(`${attacker.name} hits ${defender.name} for ${damage} damage`)
          }
    else {
      if (skill.effect == 'Sleep'){
        //skill 2
        console.log(`${attacker.name} uses ${skill.name} with ${skill.effect} effect`)
        const damage = attacker.atk - defender.def + skill.damage
        console.log(`${attacker.name} hits ${defender.name} for ${damage} damage`)
        defender.hp = defender.hp - damage
        freeze = 1
      }
      else {
        console.log(`${attacker.name} uses ${skill.name}`)
        const damage = attacker.atk - defender.def + skill.damage
        console.log(`${attacker.name} hits ${defender.name} for ${damage} damage`)
        defender.hp = defender.hp - damage
      }
    }
    
  }

 // console.log(`${attacker.name} uses ${skill.name}`)
 // const damage = attacker.atk - defender.def + skill.damage
 // console.log(`${attacker.name} hits ${defender.name} for ${damage} damage`)
 // defender.hp = defender.hp - damage

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
    // display list of skills
    for (const index in pknA.skills) {
      console.log(`${index}: ${pknA.skills[index].name}`)
    }

    const skillIndex = question('Please pick a skill\n')
    const skill = pknA.skills[skillIndex]

    pknB.hp = performMove(pknA, pknB, skill)
  } 
  else {
    for (const index in pknB.skills) {
        console.log(`${index}: ${pknB.skills[index].name}`)
    }
  
    const skillIndex = question('Please pick a skill\n')
    const skill = pknB.skills[skillIndex]
    pknA.hp = performMove(pknB, pknA, skill)
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
