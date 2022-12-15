export const vowelCount = (str) => {
    let i = 0;
    [...str].forEach((letter) => {
        if ((/[a/e/i/o/u/A/E/I/O/U]/).test(letter)) {
            i = i + 1
        }
    });
    return i
};