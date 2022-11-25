export const letterChange = (str) => {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if (char === "z") {
        return "a"
        } else {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })
    let vowelCapitalize = newStr.replace(/a|e|i|o|u/gi, char => char.toUpperCase())
    return vowelCapitalize
}
/*
1 - js charcode ve charcodeAt metodlarını kullanacağımız için ilk önce string içerisindeki harfleri toLowerCase metodu ile küçük harfe çeviriyoruz.
2 - replace metodu ile harfleri tarıyoruz ve ilk olarak eğer z varsa bu değeri hemen a ile değiştiriyoruz. Eğer harfimiz z değilse String.fromCharCode ve char.charCodeAt() kullanarak alfabedeki bir sonraki harf ile değiştiriyoruz .
3 - Son olarak da sesli harfleri büyük harf haline getiriyoruz ve değeri return ediyoruz.
*/