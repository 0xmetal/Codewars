function isSortedAndHow(array) {
    let copy_of_array = array.slice()
    let copy_of_array2 = array.slice()
    let ascending = copy_of_array.sort((a, b) => a - b)
    let descending = copy_of_array2.sort((a, b) => b - a)
    return array.join('') == ascending.join('') ? 'yes ascending'
        : array.join('') == descending.join('') ? 'yes descending'
            : 'no'
}

console.log(isSortedAndHow([1, 2, 3, 4, 5]))