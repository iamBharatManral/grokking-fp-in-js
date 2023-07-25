class ShoppingCart{
    public static getDiscountPercentage(items: string[]){
        return items.includes("Book") ? 5 : 0
    }
}

const cart = []
console.log(`Add Apple`)
cart.push("Apple")
console.log(`Add Book`)
cart.push("Book")
console.log(`Cart items: ${cart}`)
console.log(`Discount: ${ShoppingCart.getDiscountPercentage(cart)}\n`)

console.log(`Remove Book`)
cart.splice(cart.indexOf("Book"), 1)
console.log(`Cart items: ${cart}`)
console.log(`Discount: ${ShoppingCart.getDiscountPercentage(cart)}`)

