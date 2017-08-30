const app = "I don't do much."

function bumpCounter() {
  let counter = 0

  function addBump() {
    return counter += 1;
  }

  function getBumps(){
    return counter;
  }
  return {
    addBump,
    getBumps
  }
}

function createAnimal(animalType) {
  return function assignDevice(deadlyDevice) {
    return {"animalType": animalType, "deadlyDevice": deadlyDevice}
  }
}

let sharkCreator = createAnimal("Shark")
let sharkWithFrickinLaserbeam = sharkCreator("Laserbeam")
let sharkWithFrickinCannon= sharkCreator("Cannon")
