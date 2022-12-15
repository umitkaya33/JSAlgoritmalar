export const arithGeo = (arr) => {
    let diff = arr[1] - arr[0]
    let ratio = arr[1] / arr[0]
    let isArithmetic = true
    let isGeometric = true
    for (let index = 2; index < arr.length; index++) {

        if (arr[index] - arr[index - 1] != diff) {
            isArithmetic = false
        }
        if (arr[index] / arr[index - 1] != ratio) {
            isGeometric = false
        }
    }

    if (isArithmetic === true) {
        return "Aritmetric"
    } else if (isGeometric === true) {
        return "Geometric"
    } else {
        return -1
    }

};