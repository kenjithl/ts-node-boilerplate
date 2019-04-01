import { question } from 'readline-sync'

// Laptop Builder
// Allow users to select computer parts to create their laptop
// Display total price with selected parts

//  Step 1 : List down possible parts to select
// let screenResolution = ''
// let HDD = '' // 128 GB, 256 GB, 1TB
// let RAM = '' // 8GB, 16GB, 32 GB
// let processor = '' // i5, i7

let laptop = ['', '', '', '']

let totalPrice = 0
// Step 2 : Display possible options for each part
// const screenResolutionOptions = ['1920 x 1080', '2560 x 1440', '3280 x 1620']
const screenResolutionOptions = {
  '1920 x 1080': 200,
  '2560 x 1440': 400,
  '3280 x 1620': 600,
}

const hddOptions = {
  '128GB': 200,
  '256GB': 400,
  '1TB': 600,
}

const RAMOptions = {
  '8GB': 200,
  '16GB': 500,
  '32GB': 800,
}
const processorOptions = {
  i5: 400,
  i7: 700,
}

const options = [
  screenResolutionOptions,
  hddOptions,
  RAMOptions,
  processorOptions,
]

for (let index in options) {
  // console.log('Part ')
  const partsOptions = options[index]
  for (let i in partsOptions) {
    console.log(`${i} RM ${partsOptions[i]}`)
  }
  let optionIndex = question('Please select a item option index\n')
  const selectedOption = Object.keys(partsOptions)[optionIndex]

  laptop[index] = selectedOption

  totalPrice = totalPrice + options[index][selectedOption]
  console.log()
}

//  Step 3 : List price for each selected part

//  Step 4 : Select Option

//  Step 5 : Display all selected options
console.log('\nYour selected options are:')
// console.log(screenResolution)
// console.log(HDD)
// console.log(RAM)
// console.log(processor)
// totalPrice = screenResolutionOptions[screenResolution]

for (let part of laptop) {
  console.log(part)
}
console.log(`Your total price: ${totalPrice}`)
