import { question } from 'readline-sync'

// Laptop Builder
// Allow users to select computer parts to create their laptop
// Display total price with selected parts

//  Step 1 : List down possible parts to select
let screenResolution = ''
let HDD = '' // 128 GB, 256 GB, 1TB
let RAM = '' // 8GB, 16GB, 32 GB
let processor = '' // i5, i7
// Step 2 : Display possible options for each part
const screenResolutionOptions = [
  '1920 x 1080 : RM 200',
  '2560 x 1440 : RM 400',
  '3280 x 1620 : RM 600',
]
const hddOptions = ['128GB : RM 200', '256GB : RM 400', '1TB : RM 600']
const RAMOptions = ['8GB : RM 200', '16GB : RM 500', '32GB : RM 800']
const processorOptions = ['i5 : RM 400', 'i7 : RM 700']
const Opt = ['Screen', 'HDD', 'RAM', 'Processor']

//console.log(`${Opt[e]} Opstions`)

console.log('Screen Options')
for (let i in screenResolutionOptions) {
    console.log(`${i}. ${screenResolutionOptions[i]}`)
}
let screenOptionIndex = question('Please select a screen option index\n')
screenResolution = screenResolutionOptions[screenOptionIndex]

console.log()
console.log('HDD Options')
for (let i in hddOptions) {
    console.log(`${i}. ${hddOptions[i]}`)
}
let hddOptionsIndex = question('Please select a HDD option index\n')
HDD = hddOptions[hddOptionsIndex]

console.log()
console.log('RAM Options')
for (let i in RAMOptions) {
    console.log(`${i}. ${RAMOptions[i]}`)
}
let RAMIndex = question('Please select a RAM option index\n')
RAM = RAMOptions[RAMIndex]

console.log()
console.log('processor Options')
for (let i in processorOptions) {
    console.log(`${i}. ${RAMOptions[i]}`)
}
let processorIndex = question('Please select a Processor option index\n')
processor = processorOptions[processorIndex]

//  Step 3 : List price for each selected part

//  Step 4 : Select Option

//  Step 5 : Display all selected options
console.log('\nYour selected options are:')
console.log(screenResolution)
console.log(HDD)
console.log(RAM)
console.log(processor)
