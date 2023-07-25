const { List } = require('immutable');

const immutableReplan = (plan: typeof List[], newCity: string, beforeCity: string): typeof List[] => {
    const newCityIndex = plan.indexOf(beforeCity)
    return plan.splice(newCityIndex, 0, newCity)
}

const plan1 = List.of("Paris", "Berlin", "Krakow")

console.log(`Plan1: ${plan1}`)
const plan2 = immutableReplan(plan1, "Vienna", "Krakow")
console.log(`Plan2: ${plan2}`)


