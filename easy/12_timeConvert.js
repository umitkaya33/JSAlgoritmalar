export const timeConvert = (num) => {
    const min = num % 60
    const hour = Math.floor(num / 60)
    return hour + ":" + min
};