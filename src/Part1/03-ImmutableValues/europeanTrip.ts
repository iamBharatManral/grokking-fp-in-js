const planA = []
planA.push("Paris")
planA.push("Berlin")
planA.push("Krakow")

console.log(`Plan A: ${planA}\n`)

const replan = (plan: string[], newCity: string, beforeCity: string): string[] => {
    const newCityIndex = plan.indexOf(beforeCity)
    plan.splice(newCityIndex, 0, newCity)
    return plan
}

// console.log(`After replanning`)
// const planB = replan(planA, "Viena", "Krakow")
// console.log(`Plan B: ${planB}`)
// console.log(`Plan A: ${planA}`)

const replan2 = (plan: string[], newCity: string, beforeCity: string): string[] => {
    const newCityIndex = plan.indexOf(beforeCity)
    const newPlan = plan.slice()
    newPlan.splice(newCityIndex, 0, newCity)
    return newPlan
}

console.log(`After replanning with pure function`)
const planB = replan2(planA, "Viena", "Krakow")
console.log(`Plan B: ${planB}`)
console.log(`Plan A: ${planA}`)


