// Impure version

// const totalTime = (lapTimes: number[]): number  => {
//     lapTimes.shift()
//     let sum = 0
//     for(let time of lapTimes){
//         sum += time
//     }
//     return sum
// }
//
// const avgTime = (lapTimes: number[]): number => {
//     const time = totalTime(lapTimes)
//     const laps = lapTimes.length
//     return time / laps
// }

// Pure version

const totalTime = (lapTimes: number[]): number  => {
    const withoutWarmup = lapTimes.slice()
    withoutWarmup.shift()
    let sum =  0
    for(let time of withoutWarmup){
        sum += time
    }
    return sum
}

const avgTime = (lapTimes: number[]): number => {
    const time = totalTime(lapTimes)
    const withoutWarmup = lapTimes.slice()
    withoutWarmup.shift()
    const laps = withoutWarmup.length
    return Number((time / laps).toFixed(2))
}

const lapTimes = []
lapTimes.push(31.0)
lapTimes.push(20.9)
lapTimes.push(21.1)
lapTimes.push(21.3)

console.log(`Total time: ${totalTime(lapTimes)}`)
console.log(`Avg time: ${avgTime(lapTimes)}`)
