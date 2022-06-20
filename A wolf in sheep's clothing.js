function warnTheSheep(queue) {
    let reversedArr = queue.reverse()
    let position = 0
    for (let i = 0; i < reversedArr.length; i++) {
        if (reversedArr[i] == 'wolf') {
            position = i
        }
    }
    if (position == 0) {
        return 'Pls go away and stop eating my sheep'
    } else {
        return `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`
    }
}