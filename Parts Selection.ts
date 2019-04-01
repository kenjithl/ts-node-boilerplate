import { question } from 'readline-sync';

// Laptop Builder
// Allow users to select computer parts to create their laptop
// Display total price with selected parts

//  Step 1 : List down possible parts to select
let screenResolution = ''
let HDD = '' // 128 GB, 256 GB, 1TB
let RAM = '' // 8GB, 16GB, 32 GB
let processor = '' // i5, i7

let totalPrice = 0
// Step 2 : Display possible options for each part
// const screenResolutionOptions = ['1920 x 1080', '2560 x 1440', '3280 x 1620']
const screenResolutionOptions = {
  '1920 x 1080': 200,
  '2560 x 1440': 400,
  '3280 x 1620': 600,
}

const hddOptions = {'128GB': 200, '256GB': 400, '1TB': 600}
const RAMOptions = {'8GB': 200, '16GB': 500, '32GB': 800}
const processorOptions = {'i5': 400, 'i7': 700}

console.log('Screen Options')
for (let i in screenResolutionOptions) {
  console.log(`${i} RM ${screenResolutionOptions[i]}`)
}
//screenResolutionOptions["1920 x 1080"] == 200
let screenOptionIndex = question('Please select a screen option index\n')
screenResolution = Object.keys(screenResolutionOptions)[screenOptionIndex]
//screenResolution = screenResolutionOptions[screenOptionIndex]

console.log()

console.log('HDD Options')
for (let i in hddOptions) {
  console.log(`${i} RM ${hddOptions[i]}`)
}
//hddOptions["1920 x 1080"] == 200
let hddOptionIndex = question('Please select a HDD option index\n')
HDD = hddOptions[hddOptionIndex]

console.log()

console.log('RAM Options')
for (let i in RAMOptions) {
  console.log(`${i} RM ${RAMOptions[i]}`)
}
//RAMOptions["1920 x 1080"] == 200
let ramOptionIndex = question('Please select a RAM option index\n')
RAM = RAMOptions[ramOptionIndex]

console.log()

console.log('Processor Options')
for (let i in processorOptions) {
  console.log(`${i} RM ${processorOptions[i]}`)
}
//processorOptions["1920 x 1080"] == 200
let processorIndex = question('Please select a Processor option index\n')
processor = processorOptions[processorIndex]

console.log()
// console.log('HDD Options')
// for (let i in hddOptions) {
//   console.log(`${i}. ${hddOptions[i]}`)
// }
// let hddOptionIndex = question('Please select a hdd option index\n')
// HDD = hddOptions[hddOptionIndex]

// console.log()
// console.log('RAM Options')
// for (let i in RAMOptions) {
//   console.log(`${i}. ${RAMOptions[i]}`)
// }
// let ramOptionIndex = question('Please select a ram option index\n')
// RAM = RAMOptions[ramOptionIndex]

// console.log()
// console.log('processor Options')
// for (let i in processorOptions) {
//   console.log(`${i}. ${processorOptions[i]}`)
// }
// let processorOptionIndex = question('Please select a processor option index\n')
// processor = processorOptions[processorOptionIndex]
//  Step 3 : List price for each selected part

//  Step 4 : Select Option

//  Step 5 : Display all selected options
console.log('\nYour selected options are:')
console.log(screenResolution)
console.log(HDD)
console.log(RAM)
console.log(processor)

totalPrice = screenResolutionOptions[screenResolution]

console.log(`Your total price: ${totalPrice}`)