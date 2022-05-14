function capitalize(s) {
    let S = s.toUpperCase();
    let a = "";
    let b = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2) {
            a += S[i];
            b += s[i];
        } else {
            a += s[i];
            b += S[i];
        }
    }
    return [b, a];
};