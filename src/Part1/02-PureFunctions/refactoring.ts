class TipCalculator {
    public static getTipPercentage(names: string[]): number{
        if(names.length > 5){
            return 20
        }else if(names.length > 0){
            return 10
        }
        return 0
    }
}

const names = []
console.log(`Add names`)
names.push("Rahul")
names.push("Bos")
names.push("Thatcher")
console.log(`Names: ${names}`)
console.log(`Tip: ${TipCalculator.getTipPercentage(names)}\n`)

console.log(`Add new names`)
names.push("Kiera")
names.push("Bullock")
names.push("Rusty")
console.log(`Names: ${names}`)
console.log(`Tip: ${TipCalculator.getTipPercentage(names)}`)

