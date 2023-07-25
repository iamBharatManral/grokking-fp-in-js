class ShoppingCartV2 {
    private items: string[] = [];
    private bookAdded: boolean;
    public addItem(item: string): void {
        this.items.push(item)
        if(item.includes("Book")){
            this.bookAdded = true
        }
    }
    public getDiscountPercentage(): number{
        if(this.bookAdded){
            return 5
        }
        return 0
    }
    public getItems(): string[] {
        return this.items.slice()
    }

    public removeItem(item: string){
        this.items.splice(this.items.indexOf(item), 1)
        if(item === "Book"){
            this.bookAdded = false
        }
    }
}

const cartV2 = new ShoppingCartV2()
console.log(`Add Apple`)
cartV2.addItem("Apple")
console.log(`Discount: ${cartV2.getDiscountPercentage()}\n`)
console.log(`Add Book`)
cartV2.addItem("Book")
console.log(`Discount: ${cartV2.getDiscountPercentage()}\n`)

// Removing an item
console.log(`Remove Book`)
cartV2.getItems().splice(cartV2.getItems().indexOf("Book"), 1)

// Removing an item directly did not corrupt the cart state items since we are passing copy of the items
console.log(`Items in cart: ${cartV2.getItems()}`)
console.log(`Discount: ${cartV2.getDiscountPercentage()}\n`)

// Adding another book would lead the cart state again to be corrupt due to logic in getDiscount method
console.log(`Add another Book`)
cartV2.addItem("Book")
console.log(`Remove the book through interface`)
cartV2.removeItem("Book")
console.log(`Items in cart: ${cartV2.getItems()}`)
console.log(`Discount: ${cartV2.getDiscountPercentage()}`)



