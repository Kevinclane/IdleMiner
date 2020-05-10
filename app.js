let user = {
  gold: 0,
  food: 0,
  ore: 0,
  wood: 0,
  mods: {
    food: 0,
    ore: 0,
    wood: 0
  }
}

let upgradeCounter = {
  click: {
    food: 0,
    ore: 0,
    wood: 0
  },
  idle: {
    gold: 0,
    food: 0,
    ore: 0,
    wood: 0
  }
}

let idle = {
  gold: 0,
  food: 0,
  ore: 0,
  wood: 0
}

let totalWorkers = 0
let timerCounter = 0
let maxFood = 0
let maxOre = 0
let maxWood = 0



let upgradeArr = ['Stone', 'Bronze', 'Iron', 'Steel', 'Diamond']

//#region DRAW PAGE ELEMENTS

//Loads info onto the page
function draw() {
  drawTemplatesAndFunctions()
  drawUserInfo()
}

function drawUserInfo() {
  let goldMod = idle.gold * 5

  document.getElementById("userGold").innerText = "Gold: " + user.gold.toString()

  document.getElementById("userFood").innerText = "Food: " + user.food.toString()

  document.getElementById("userOre").innerText = "Ore: " + user.ore.toString()

  document.getElementById("userWood").innerText = "Wood: " + user.wood.toString()

  document.getElementById("gps").innerText = "Gold per second: " + goldMod.toString()

  document.getElementById("fps").innerText = "Food per second: " + idle.food.toString()

  document.getElementById("ops").innerText = "Ore per second: " + idle.ore.toString()

  document.getElementById("wps").innerText = "Wood per second: " + idle.wood.toString()

  document.getElementById("foodPerClick").innerText = "Food Per Click: " + (user.mods.food + 1)

  document.getElementById("orePerClick").innerText = "Ore Per Click: " + (user.mods.ore + 1)

  document.getElementById("woodPerClick").innerText = "Wood Per Click: " + (user.mods.wood + 1)

  document.getElementById("workers").innerText = "Total Workers: " + totalWorkers + " Upkeep Costs:"

  document.getElementById("workerFood").innerText = (totalWorkers * 10).toString()

  document.getElementById("workerGold").innerText = (totalWorkers * 20).toString()

  upgradeCostChecks()
  hireCostChecks()
  sellFoodCheck()
  sellOreCheck()
  sellWoodCheck()
}

function drawTemplatesAndFunctions() {
  foodUpgradeTemplate()
  oreUpgradeTemplate()
  woodUpgradeTemplate()
  traderHireTemplate()
  hunterHireTemplate()
  minerHireTemplate()
  lumberjackHireTemplate()
}

//#endregion

//#region COST CHECKS

//Checks if the user has enough gold to allow the option to purchase an upgrade
function upgradeCostChecks() {
  let foodUpgradeCostGold = goldCostCalculator(user.mods.food)
  let oreUpgradeCostGold = goldCostCalculator(user.mods.ore)
  let woodUpgradeCostGold = goldCostCalculator(user.mods.wood)

  let foodUpgradeCostOre = oreCostCalculator(user.mods.food)
  let oreUpgradeCostOre = oreCostCalculator(user.mods.ore)
  let woodUpgradeCostOre = oreCostCalculator(user.mods.wood)

  let foodUpgradeCostWood = woodCostCalculator(user.mods.food)
  let oreUpgradeCostWood = woodCostCalculator(user.mods.ore)
  let woodUpgradeCostWood = woodCostCalculator(user.mods.wood)

  let elemFood = document.getElementById("foodUpgrade")
  let elemOre = document.getElementById("oreUpgrade")
  let elemWood = document.getElementById("woodUpgrade")
  if (user.gold >= foodUpgradeCostGold && user.ore >= foodUpgradeCostOre && user.wood >= foodUpgradeCostWood) {
    elemFood.removeAttribute("disabled")
  } else elemFood.setAttribute("disabled", "")
  if (user.gold >= oreUpgradeCostGold && user.ore >= oreUpgradeCostOre && user.wood >= oreUpgradeCostWood) {
    elemOre.removeAttribute("disabled")
  } else elemOre.setAttribute("disabled", "")
  if (user.gold >= woodUpgradeCostGold && user.ore >= woodUpgradeCostOre && user.wood >= woodUpgradeCostWood) {
    elemWood.removeAttribute("disabled")
  } else elemWood.setAttribute("disabled", "")
}

//Checks if the user has enough gold to allow the option to hire a worker
function hireCostChecks() {
  let elemTrader = document.getElementById("trader")
  let elemHunter = document.getElementById("hunter")
  let elemMiner = document.getElementById("miner")
  let elemLumberjack = document.getElementById("lumberjack")
  let traderHireCost = goldCostCalculator(idle.gold)
  let hunterHireCost = goldCostCalculator(idle.food)
  let minerHireCost = goldCostCalculator(idle.ore)
  let lumberjackHireCost = goldCostCalculator(idle.wood)
  if (user.gold >= traderHireCost) {
    elemTrader.removeAttribute("disabled")
  } else elemTrader.setAttribute("disabled", "")
  if (user.gold >= hunterHireCost) {
    elemHunter.removeAttribute("disabled")
  } else elemHunter.setAttribute("disabled", "")
  if (user.gold >= minerHireCost) {
    elemMiner.removeAttribute("disabled")
  } else elemMiner.setAttribute("disabled", "")
  if (user.gold >= lumberjackHireCost) {
    elemLumberjack.removeAttribute("disabled")
  } else elemLumberjack.setAttribute("disabled", "")
}

//#endregion

//#region COST CALCULATORS
//Calculates the gold cost of an upgrade or hire
function goldCostCalculator(num) {
  let cost = 200 + (200 * num * num)
  return cost
}

//Calculate the ore cost of an upgrade
function oreCostCalculator(num) {
  let cost = 50 + (200 * num * num)
  return cost
}

//Calculates the wood cost of an upgrade
function woodCostCalculator(num) {
  let cost = 100 + (200 * num * num)
  return cost
}
//#endregion

//#region SELLING

//Check if the user has enough food to allow the options to sell
function sellFoodCheck() {
  let elem1 = document.getElementById("sellFood1")
  let elem5 = document.getElementById("sellFood5")
  let elem10 = document.getElementById("sellFood10")
  let elem50 = document.getElementById("sellFood50")
  let elem100 = document.getElementById("sellFood100")
  let elem1000 = document.getElementById("sellFood1000")
  let elem10000 = document.getElementById("sellFood10000")
  let elem100000 = document.getElementById("sellFood100000")
  let elem1000000 = document.getElementById("sellFood1000000")
  if (user.food >= 1) {
    elem1.removeAttribute("disabled")
  } else elem1.setAttribute("disabled", "")

  if (user.food >= 5) {
    elem5.removeAttribute("disabled")
  } else elem5.setAttribute("disabled", "")

  if (user.food >= 10) {
    elem10.removeAttribute("disabled")
  } else elem10.setAttribute("disabled", "")

  if (user.food >= 50) {
    elem50.removeAttribute("disabled")
  } else elem50.setAttribute("disabled", "")

  if (user.food >= 100) {
    elem100.removeAttribute("disabled")
  } else elem100.setAttribute("disabled", "")

  if (user.food >= 1000) {
    elem1000.removeAttribute("disabled")
  } else elem1000.setAttribute("disabled", "")

  if (user.food >= 10000) {
    elem10000.removeAttribute("disabled")
  } else elem10000.setAttribute("disabled", "")

  if (user.food >= 100000) {
    elem100000.removeAttribute("disabled")
  } else elem100000.setAttribute("disabled", "")

  if (user.food >= 1000000) {
    elem1000000.removeAttribute("disabled")
  } else elem1000000.setAttribute("disabled", "")
}

//Check if the user has enough ore to allow the options to sell
function sellOreCheck() {
  let elem1 = document.getElementById("sellOre1")
  let elem5 = document.getElementById("sellOre5")
  let elem10 = document.getElementById("sellOre10")
  let elem50 = document.getElementById("sellOre50")
  let elem100 = document.getElementById("sellOre100")
  let elem1000 = document.getElementById("sellOre1000")
  let elem10000 = document.getElementById("sellOre10000")
  let elem100000 = document.getElementById("sellOre100000")
  let elem1000000 = document.getElementById("sellOre1000000")
  if (user.ore >= 1) {
    elem1.removeAttribute("disabled")
  } else elem1.setAttribute("disabled", "")

  if (user.ore >= 5) {
    elem5.removeAttribute("disabled")
  } else elem5.setAttribute("disabled", "")

  if (user.ore >= 10) {
    elem10.removeAttribute("disabled")
  } else elem10.setAttribute("disabled", "")

  if (user.ore >= 50) {
    elem50.removeAttribute("disabled")
  } else elem50.setAttribute("disabled", "")

  if (user.ore >= 100) {
    elem100.removeAttribute("disabled")
  } else elem100.setAttribute("disabled", "")

  if (user.ore >= 1000) {
    elem1000.removeAttribute("disabled")
  } else elem1000.setAttribute("disabled", "")

  if (user.ore >= 10000) {
    elem10000.removeAttribute("disabled")
  } else elem10000.setAttribute("disabled", "")

  if (user.ore >= 100000) {
    elem100000.removeAttribute("disabled")
  } else elem100000.setAttribute("disabled", "")

  if (user.ore >= 1000000) {
    elem1000000.removeAttribute("disabled")
  } else elem1000000.setAttribute("disabled", "")
}

//Check if the user has enough wood to allow the options to sell
function sellWoodCheck() {
  let elem1 = document.getElementById("sellWood1")
  let elem5 = document.getElementById("sellWood5")
  let elem10 = document.getElementById("sellWood10")
  let elem50 = document.getElementById("sellWood50")
  let elem100 = document.getElementById("sellWood100")
  let elem1000 = document.getElementById("sellWood1000")
  let elem10000 = document.getElementById("sellWood10000")
  let elem100000 = document.getElementById("sellWood100000")
  let elem1000000 = document.getElementById("sellWood1000000")
  if (user.wood >= 1) {
    elem1.removeAttribute("disabled")
  } else elem1.setAttribute("disabled", "")

  if (user.wood >= 5) {
    elem5.removeAttribute("disabled")
  } else elem5.setAttribute("disabled", "")

  if (user.wood >= 10) {
    elem10.removeAttribute("disabled")
  } else elem10.setAttribute("disabled", "")

  if (user.wood >= 50) {
    elem50.removeAttribute("disabled")
  } else elem50.setAttribute("disabled", "")

  if (user.wood >= 100) {
    elem100.removeAttribute("disabled")
  } else elem100.setAttribute("disabled", "")

  if (user.wood >= 1000) {
    elem1000.removeAttribute("disabled")
  } else elem1000.setAttribute("disabled", "")

  if (user.wood >= 10000) {
    elem10000.removeAttribute("disabled")
  } else elem10000.setAttribute("disabled", "")

  if (user.wood >= 100000) {
    elem100000.removeAttribute("disabled")
  } else elem100000.setAttribute("disabled", "")

  if (user.wood >= 1000000) {
    elem1000000.removeAttribute("disabled")
  } else elem1000000.setAttribute("disabled", "")
}

//Allows the user to sell resources for gold
function sellResources(resource, num) {
  let foodCost = 5
  let oreCost = 5
  let woodCost = 5
  if (resource == "food") {
    user.gold += foodCost * num
    user.food -= num
  } else if (resource == "ore") {
    user.gold += oreCost * num
    user.ore -= num
  } else if (resource == "wood") {
    user.gold += woodCost * num
    user.wood -= num
  }

  draw()
}

//#endregion

//#region PURCHASES
//Increases number of resources gained per click
function upgrade(resource, numGold, numOre, numWood) {
  let currentFoodRate = user.mods.food
  let currentOreRate = user.mods.ore
  let currentWoodRate = user.mods.wood
  if (resource == "food") {
    if (currentFoodRate == 0) {
      user.mods.food++
      user.gold -= numGold
      user.ore -= numOre
      user.wood -= numWood
      upgradeCounter.click.food++
    } else {
      user.mods.food += currentFoodRate
      user.gold -= numGold
      user.ore -= numOre
      user.wood -= numWood
      upgradeCounter.click.food++
    }
    if (upgradeCounter.click.food >= upgradeArr.length) {
      maxFood++
    }
  } else if (resource == "ore") {
    if (currentOreRate == 0) {
      user.mods.ore++
      user.gold -= numGold
      user.ore -= numOre
      user.wood -= numWood
      upgradeCounter.click.ore++
    } else {
      user.mods.ore += currentOreRate
      user.gold -= numGold
      user.ore -= numOre
      user.wood -= numWood
      upgradeCounter.click.ore++
    }
    if (upgradeCounter.click.ore >= upgradeArr.length) {
      maxOre++
    }
  } else if (resource == "wood") {
    if (currentWoodRate == 0) {
      user.mods.wood++
      user.gold -= numGold
      user.ore -= numOre
      user.wood -= numWood
      upgradeCounter.click.wood++
    } else {
      user.mods.wood += currentWoodRate
      user.gold -= numGold
      user.ore -= numOre
      user.wood -= numWood
      upgradeCounter.click.wood++
    }
    if (upgradeCounter.click.wood >= upgradeArr.length) {
      maxWood++
    }
  }
  draw()
}

//Increases amount of resources gained per second
function hire(resources, num) {
  let currentGoldRate = idle.gold
  let currentFoodRate = idle.food
  let currentOreRate = idle.ore
  let currentWoodRate = idle.wood
  if (resources == "gold") {
    if (currentGoldRate == 0) {
      idle.gold++
      user.gold -= num
      upgradeCounter.idle.gold++
      totalWorkers++
    } else {
      idle.gold += currentGoldRate
      user.gold -= num
      upgradeCounter.idle.gold++
      totalWorkers++
    }
  } else if (resources == "food") {
    if (currentFoodRate == 0) {
      idle.food++
      user.gold -= num
      upgradeCounter.idle.food++
      totalWorkers++
    } else {
      idle.food += currentFoodRate
      user.gold -= num
      upgradeCounter.idle.food++
      totalWorkers++
    }
  } else if (resources == "ore") {
    if (currentOreRate == 0) {
      idle.ore++
      user.gold -= num
      upgradeCounter.idle.ore++
      totalWorkers++
    } else {
      idle.ore += currentOreRate
      user.gold -= num
      upgradeCounter.idle.ore++
      totalWorkers++
    }
  } else if (resources == "wood") {
    if (currentWoodRate == 0) {
      idle.wood++
      user.gold -= num
      upgradeCounter.idle.wood++
      totalWorkers++
    } else {
      idle.wood += currentWoodRate
      user.gold -= num
      upgradeCounter.idle.wood++
      totalWorkers++
    }
  }
  draw()
}
//#endregion

//#region RESOURCE ADDING
//Manual click to add resources
function collect(resource) {
  if (resource == "food") {
    user.food += user.mods.food + 1
  } else if (resource == "ore") {
    user.ore += user.mods.ore + 1
  } else if (resource == "wood") {
    user.wood += user.mods.wood + 1
  }
  draw()
}

//Handles increasing resources per second
function idleCollection() {
  user.gold += idle.gold * 5
  user.food += idle.food
  user.ore += idle.ore
  user.wood += idle.wood
  timerCounter++
  if (timerCounter == 30) {
    workerUpkeep()
    timerCounter = 0
  }
  drawUserInfo()
}
//#endregion

//Caculate the cost of upkeep for each idle resource gatherer
function workerUpkeep() {
  if (user.gold < totalWorkers * 20) {
    workerReset()
    user.gold = 0
    drawTemplatesAndFunctions()
  }
  if (user.food < totalWorkers * 10) {
    workerReset()
    user.food = 0
    drawTemplatesAndFunctions()
  }
  if (user.gold >= totalWorkers * 20 && user.food >= totalWorkers * 10) {
    user.gold -= (totalWorkers * 20)
    user.food -= (totalWorkers * 10)
  }
}

//Reset all workers to 0 if user doesn't have enough resources to pay the upkeep costs
function workerReset() {
  idle.gold = 0
  idle.food = 0
  idle.ore = 0
  idle.wood = 0
  totalWorkers = 0
}

//#region TEMPLATES
function foodUpgradeTemplate() {
  let cost = goldCostCalculator(user.mods.food)
  let oreCost = oreCostCalculator(user.mods.food)
  let woodCost = woodCostCalculator(user.mods.food)
  let elem = document.getElementById("foodUpgradeTemplate")
  elem.innerHTML = `<button id="foodUpgrade" class="btn btn-primary text-shadow-black" onclick="upgrade('food',${cost}, ${oreCost}, ${woodCost})"> <div> <img src="${upgradeArr[upgradeCounter.click.food]}arrow.png" alt="error loading image" class="userResourceImage"> Upgrade to ${upgradeArr[upgradeCounter.click.food]} Arrows. </div><div>  Gold: ${cost} Ore ${oreCost} Wood ${woodCost}</div></button>`
  if (upgradeCounter.click.food >= upgradeArr.length) {
    elem.innerHTML = `<button id="foodUpgrade" class="btn btn-primary text-shadow-black" onclick="upgrade('food',${cost}, ${oreCost}, ${woodCost})"><div> <img src="diamondarrow.png" alt="error loading image" class="userResourceImage">Upgrade Diamond Arrows +${maxFood}</div><div>  Gold: ${cost} Ore ${oreCost} Wood ${woodCost}</div></button>`
  }
}

function oreUpgradeTemplate() {
  let cost = goldCostCalculator(user.mods.ore)
  let oreCost = oreCostCalculator(user.mods.ore)
  let woodCost = woodCostCalculator(user.mods.ore)
  let elem = document.getElementById("oreUpgradeTemplate")
  elem.innerHTML = `<button id="oreUpgrade" class="btn btn-primary text-shadow-black" onclick="upgrade('ore',${cost}, ${oreCost}, ${woodCost})"> <img src="${upgradeArr[upgradeCounter.click.ore]}pick.png" alt="error loading image" class="userResourceImage"> Upgrade to ${upgradeArr[upgradeCounter.click.ore]} Pick. </div><div>  Gold: ${cost} Ore ${oreCost} Wood ${woodCost}</button>`
  if (upgradeCounter.click.ore >= upgradeArr.length) {
    elem.innerHTML = `<button id="oreUpgrade" class="btn btn-primary text-shadow-black" onclick="upgrade('ore',${cost}, ${oreCost}, ${woodCost})"><div> <img src="Diamondpick.png" alt="error loading image" class="userResourceImage">Upgrade Diamond Pick +${maxOre}</div><div>  Gold: ${cost} Ore ${oreCost} Wood ${woodCost}</div></button>`
  }
}

function woodUpgradeTemplate() {
  let cost = goldCostCalculator(user.mods.wood)
  let oreCost = oreCostCalculator(user.mods.wood)
  let woodCost = woodCostCalculator(user.mods.wood)
  let elem = document.getElementById("woodUpgradeTemplate")
  elem.innerHTML = `<button id="woodUpgrade" class="btn btn-primary text-shadow-black" onclick="upgrade('wood',${cost}, ${oreCost}, ${woodCost})"> <img src="${upgradeArr[upgradeCounter.click.wood]}axe.png" alt="error loading image" class="userResourceImage"> Upgrade to ${upgradeArr[upgradeCounter.click.wood]} Axe. </div><div>  Gold: ${cost} Ore ${oreCost} Wood ${woodCost}</button>`
  if (upgradeCounter.click.wood >= upgradeArr.length) {
    elem.innerHTML = `<button id="woodUpgrade" class="btn btn-primary text-shadow-black" onclick="upgrade('wood',${cost}, ${oreCost}, ${woodCost})"><div> <img src="Diamondaxe.png" alt="error loading image" class="userResourceImage">Upgrade Diamond Axe +${maxWood}</div><div>  Gold: ${cost} Ore ${oreCost} Wood ${woodCost}</div></button>`
  }
}

function traderHireTemplate() {
  let elem = document.getElementById("traderHireTemplate")
  let cost = goldCostCalculator(idle.gold)
  elem.innerHTML = `<button class="btn btn-primary text-shadow-black" onclick="hire('gold', ${cost})" id="trader"> <img src="Trader.png" alt="error loading image" class="userResourceImage"> <div> Hire a trader</div><div> Cost: ${cost} Gold</div></button>`
}

function hunterHireTemplate() {
  let elem = document.getElementById("hunterHireTemplate")
  let cost = goldCostCalculator(idle.food)
  elem.innerHTML = `<button class="btn btn-primary text-shadow-black" onclick="hire('food', ${cost})" id="hunter"> <img src="Hunter.png" alt="error loading image" class="userResourceImage"> <div> Hire a hunter</div><div> Cost: ${cost} Gold</div></button>`
}

function minerHireTemplate() {
  let elem = document.getElementById("minerHireTemplate")
  let cost = goldCostCalculator(idle.ore)
  elem.innerHTML = `<button class="btn btn-primary text-shadow-black" onclick="hire('ore', ${cost})" id="miner"> <img src="Miner.png" alt="error loading image" class="userResourceImage"> <div>Hire a miner</div><div> Cost: ${cost} Gold</div></button>`
}

function lumberjackHireTemplate() {
  let elem = document.getElementById("lumberjackHireTemplate")
  let cost = goldCostCalculator(idle.wood)
  elem.innerHTML = `<button class="btn btn-primary text-shadow-black" onclick="hire('wood', ${cost})" id="lumberjack"> <img src="Lumberjack.png" alt="error loading image" class="userResourceImage"><div> Hire a lumberjack</div><div> Cost: ${cost} Gold</div></button>`
}

//#endregion





window.setInterval(idleCollection, 1000)
draw()