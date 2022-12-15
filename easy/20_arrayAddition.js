export const arrayAddition = (arr) => {
    //! 1. Yöntem
    /*
    const newArr = [...arr]
    let sum = 0
    const maxValue = Math.max(...arr)
    newArr.splice(arr.indexOf(maxValue), 1)
    for (let index = 0; index < newArr.length; index++) {
        sum += newArr[index]
    }
    return maxValue === sum ? true : false
    */
    //! 2.Yöntem 

    arr.sort((a, b) => a - b)
    let sum = 0

    const maxValue = arr[arr.length - 1]

    for (let index = 0; index < arr.length - 1; index++) {
        sum += arr[index]

    }

    return maxValue === sum ? true : false
};