export const matchFunc = (value:number,quantity:number):number => {
    if (quantity === 1){
        return Math.floor(value * 100) / 100
    }else {
        const result = value * quantity
        return Math.floor(result * 100) / 100
    }
}