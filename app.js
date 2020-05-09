let user = {
  gold: 10000000,
  food: 10000000,
  ore: 10000000,
  wood: 10000000,
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




let upgradeArr = ["Stone", "Bronze", "Iron", "Steel", "Diamond"]

//Loads info onto the page
function draw() {
  drawTemplatesAndFunctions()
  drawUserInfo()
}

function drawUserInfo() {
  document.getElementById("userGold").innerText = "Gold: " + user.gold.toString()

  document.getElementById("userFood").innerText = "Food: " + user.food.toString()

  document.getElementById("userOre").innerText = "Ore: " + user.ore.toString()

  document.getElementById("userWood").innerText = "Wood: " + user.wood.toString()

  document.getElementById("gps").innerText = "Gold per second: " + idle.gold.toString()

  document.getElementById("fps").innerText = "Food per second: " + idle.food.toString()

  document.getElementById("ops").innerText = "Ore per second: " + idle.ore.toString()

  document.getElementById("wps").innerText = "Wood per second: " + idle.wood.toString()

  document.getElementById("foodPerClick").innerText = "Food Per Click: " + (user.mods.food + 1)

  document.getElementById("orePerClick").innerText = "Ore Per Click: " + (user.mods.ore + 1)

  document.getElementById("woodPerClick").innerText = "Wood Per Click: " + (user.mods.wood + 1)

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

//Checks if the user has enough gold to allow the option to purchase an upgrade
function upgradeCostChecks() {
  let foodUpgradeCost = costCaculator(user.mods.food)
  let oreUpgradeCost = costCaculator(user.mods.ore)
  let woodUpgradeCost = costCaculator(user.mods.wood)
  let elemFood = document.getElementById
    ("foodUpgrade")
  let elemOre = document.getElementById("oreUpgrade")
  let elemWood = document.getElementById("woodUpgrade")
  if (user.gold >= foodUpgradeCost) {
    elemFood.removeAttribute("disabled")
  } else elemFood.setAttribute("disabled", "")
  if (user.gold >= oreUpgradeCost) {
    elemOre.removeAttribute("disabled")
  } else elemOre.setAttribute("disabled", "")
  if (user.gold >= woodUpgradeCost) {
    elemWood.removeAttribute("disabled")
  } else elemWood.setAttribute("disabled", "")
}

//Checks if the user has enough gold to allow the option to hire a worker
function hireCostChecks() {
  let elemTrader = document.getElementById("trader")
  let elemHunter = document.getElementById("hunter")
  let elemMiner = document.getElementById("miner")
  let elemLumberjack = document.getElementById("lumberjack")
  let traderHireCost = costCaculator(idle.gold)
  let hunterHireCost = costCaculator(idle.food)
  let minerHireCost = costCaculator(idle.ore)
  let lumberjackHireCost = costCaculator(idle.wood)
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

//TODO UPDATE RESOURCE MODIFIERS
//Increases number of resources gained per click
function upgrade(resource, num) {
  let currentFoodRate = user.mods.food
  let currentOreRate = user.mods.ore
  let currentWoodRate = user.mods.wood
  if (resource == "food") {
    if (currentFoodRate == 0) {
      user.mods.food++
      user.gold -= num
      upgradeCounter.click.food++
    } else {
      user.mods.food += currentFoodRate
      user.gold -= num
      upgradeCounter.click.food++
    }
  } else if (resource == "ore") {
    if (currentOreRate == 0) {
      user.mods.ore++
      user.gold -= num
      upgradeCounter.click.ore++
    } else {
      user.mods.ore += currentOreRate
      user.gold -= num
      upgradeCounter.click.ore++
    }
  } else if (resource == "wood") {
    if (currentWoodRate == 0) {
      user.mods.wood++
      user.gold -= num
      upgradeCounter.click.wood++
    } else {
      user.mods.wood += currentWoodRate
      user.gold -= num
      upgradeCounter.click.wood++
    }
  }
  draw()
}

//Handles increasing resources per second
function idleCollection() {
  user.gold += idle.gold
  user.food += idle.food
  user.ore += idle.ore
  user.wood += idle.wood
  drawUserInfo()
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
    } else {
      idle.gold += currentGoldRate
      user.gold -= num
      upgradeCounter.idle.gold++
    }
  } else if (resources == "food") {
    if (currentFoodRate == 0) {
      idle.food++
      user.gold -= num
      upgradeCounter.idle.food++
    } else {
      idle.food += currentFoodRate
      user.gold -= num
      upgradeCounter.idle.food++
    }
  } else if (resources == "ore") {
    if (currentOreRate == 0) {
      idle.ore++
      user.gold -= num
      upgradeCounter.idle.ore++
    } else {
      idle.ore += currentOreRate
      user.gold -= num
      upgradeCounter.idle.ore++
    }
  } else if (resources == "wood") {
    if (currentWoodRate == 0) {
      idle.wood++
      user.gold -= num
      upgradeCounter.idle.wood++
    } else {
      idle.wood += currentWoodRate
      user.gold -= num
      upgradeCounter.idle.wood++
    }
  }
  draw()
}

//Calculates the cost of an upgrade or hire
function costCaculator(num) {
  let cost = 200 + (200 * num * num)
  return cost
}

//Caculate the cost of upkeep for each idle resource gatherer


//#region TEMPLATES
function foodUpgradeTemplate() {
  let cost = costCaculator(user.mods.food)
  let elem = document.getElementById("foodUpgradeTemplate")
  elem.innerHTML = `<button id="foodUpgrade" class="btn btn-primary" onclick="upgrade('food',${cost})">Upgrade to ${upgradeArr[upgradeCounter.click.food]} Spear.   Cost: ${cost} Gold</button>`
  if (upgradeCounter.click.food == upgradeArr.length) {
    elem.innerHTML = `<button id="foodUpgrade" class="btn btn-primary" onclick="upgrade('food',${cost}) disabled">MAX</button>`
  }
}

function oreUpgradeTemplate() {
  let cost = costCaculator(user.mods.ore)
  let elem = document.getElementById("oreUpgradeTemplate")
  elem.innerHTML = `<button id="oreUpgrade" class="btn btn-primary" onclick="upgrade('ore',${cost})">Upgrade to ${upgradeArr[upgradeCounter.click.ore]} Pick.   Cost: ${cost} Gold</button>`
  if (upgradeCounter.click.ore == upgradeArr.length) {
    elem.innerHTML = `<button id="oreUpgrade" class="btn btn-primary" onclick="upgrade('food',${cost}) disabled">MAX</button>`
  }
}

function woodUpgradeTemplate() {
  let cost = costCaculator(user.mods.wood)
  let elem = document.getElementById("woodUpgradeTemplate")
  elem.innerHTML = `<button id="woodUpgrade" class="btn btn-primary" onclick="upgrade('wood',${cost})">Upgrade to ${upgradeArr[upgradeCounter.click.wood]} Axe.   Cost: ${cost} Gold</button>`
  if (upgradeCounter.click.wood == upgradeArr.length) {
    elem.innerHTML = `<button id="woodUpgrade" class="btn btn-primary" onclick="upgrade('food',${cost}) disabled">MAX</button>`
  }
}

function traderHireTemplate() {
  let elem = document.getElementById("traderHireTemplate")
  let cost = costCaculator(idle.gold)
  elem.innerHTML = `<button class="btn btn-primary" onclick="hire('gold', ${cost})" id="trader">Hire a trader. Cost: ${cost}</button>`
}

function hunterHireTemplate() {
  let elem = document.getElementById("hunterHireTemplate")
  let cost = costCaculator(idle.food)
  elem.innerHTML = `<button class="btn btn-primary" onclick="hire('food', ${cost})" id="hunter">Hire a hunter. Cost: ${cost}</button>`
}

function minerHireTemplate() {
  let elem = document.getElementById("minerHireTemplate")
  let cost = costCaculator(idle.ore)
  elem.innerHTML = `<button class="btn btn-primary" onclick="hire('ore', ${cost})" id="miner">Hire a miner. Cost: ${cost}</button>`
}

function lumberjackHireTemplate() {
  let elem = document.getElementById("lumberjackHireTemplate")
  let cost = costCaculator(idle.wood)
  elem.innerHTML = `<button class="btn btn-primary" onclick="hire('wood', ${cost})" id="lumberjack">Hire a lumberjack. Cost: ${cost}</button>`
}

//#endregion





window.setInterval(idleCollection, 1000)
draw()