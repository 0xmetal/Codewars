function guessBlue(blue_start, red_start, blue_pulled, red_pulled) {
    let start_total = blue_start + red_start
    let blue_left = blue_start - blue_pulled
    let red_left = red_start - red_pulled
    let after_total = blue_left + red_left
    let blue_prob = blue_left / after_total
    return blue_prob
}
