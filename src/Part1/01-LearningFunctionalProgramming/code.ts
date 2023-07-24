const add = (a: number, b: number): number => a + b

const getFirstCharacter = (s: string): string => s[0]

const divide = (a: number, b: number) : number => a / b

const eatSoup = (soup: any): void => console.log(`Eat Soup`)

const increment = (x: number): number => x + 1

const concatenate = (a: string, b: string): string => a + b

const wordScore = (word: string): number => word.length

const wordScoreWithoutA = (word: string): number => Array.from(word).filter(ch => ch !== "a").length
