export const matchFunc = (value:string,quantity:number):string => {
    if (quantity === 1){
        return value
    }else {
        const result = +value * quantity
        return result.toFixed(2)
    }
}