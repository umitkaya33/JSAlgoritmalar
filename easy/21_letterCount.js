export const letterCount = (str) => {
    const arr = str.replace(/[^a-zA-Z ]]/g, "").toLowerCase().split(" ");
    let wordObject = [];
    for (let index = 0; index < arr.length; index++) {
        let obj = {};
        arr[index].split('').forEach(char => {
            char in obj ? obj[char] += 1 : obj[char] = 1
        });
        wordObject.push(obj);
    }
    let maxFrequency = []
    wordObject.forEach((nesne) => {
        maxFrequency.push(Math.max(...Object.values(nesne)))
    })
    let maxValue = Math.max(...maxFrequency)
    return maxValue < 2 ? -1 : (arr[maxFrequency.indexOf(maxValue)] ? arr[maxFrequency.indexOf(maxValue)] : -1)
};