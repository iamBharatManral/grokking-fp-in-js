class ShoppingcartV3{
    private items: string[] = [];
    public addItem(item: string): void {
        this.items.push(item)
    }
    public getDiscountPercentage(): number{
        // Instead of calculating discount based on state, we recalculate discount everytime
        if(this.items.includes("Book")){
            return 5
        }
        return 0
    }
    public getItems(): string[] {
        return this.items.slice()
    }

    public removeItem(item: string){
        this.items.splice(this.items.indexOf(item), 1)
    }
}

const cartV3 = new ShoppingcartV3()
console.log(`Add Apple`)
cartV3.addItem("Apple")
console.log(`Discount: ${cartV3.getDiscountPercentage()}\n`)
console.log(`Add Book`)
cartV3.addItem("Book")
console.log(`Discount: ${cartV3.getDiscountPercentage()}\n`)
console.log(`Add another Book`)
cartV3.addItem("Book")
console.log(`Items in cart: ${cartV3.getItems()}\n`)


// Removing an item
console.log(`Remove Book`)
cartV3.removeItem("Book")
console.log(`Items in cart: ${cartV3.getItems()}`)
console.log(`Discount: ${cartV3.getDiscountPercentage()}\n`)
