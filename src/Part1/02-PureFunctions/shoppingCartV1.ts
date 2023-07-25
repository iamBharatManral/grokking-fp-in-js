class ShoppingcartV1 {
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
        return this.items
    }
}


const cartV1 = new ShoppingcartV1()
console.log(`Add Apple`)
cartV1.addItem("Apple")
console.log(`Discount: ${cartV1.getDiscountPercentage()}\n`)
console.log(`Add Book`)
cartV1.addItem("Book")
console.log(`Discount: ${cartV1.getDiscountPercentage()}\n`)

// Removing an item leads to state corruption
console.log(`Remove a book`)
cartV1.getItems().splice(cartV1.getItems().indexOf("Book"), 1)
console.log(`Items in cart: ${cartV1.getItems()}`)
console.log(`Discount: ${cartV1.getDiscountPercentage()}`)

