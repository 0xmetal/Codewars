function dutyFree(price, discount, holiday_cost) {
    let after_discount = (price * discount) / 100
    let total_bottles = holiday_cost / after_discount
    return Math.floor(total_bottles)
}