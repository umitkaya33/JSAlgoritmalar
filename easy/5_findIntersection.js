export const findIntersection = (arr) => {
    //! Yeni bir Array tipinde değişken tanımla
    let intersection = []
    //! split(),replace()
    const set1 = arr[0].replace(/\s/g, "").split(',')
    const set2 = arr[1].replace(/\s/g, "").split(',')
    //! forEach() kullanarak bütün Array içerisindeki karakterleri diğer array içerisinde olup olmadığını kontrol edeceğiz. varsa tanımladığımız yeni array değişkeni içerisine bu değeri koyacağız
    set2.forEach((item) => {
        if (set1.includes(item)) {
            intersection.push(item)
        }
    })
    //! Eğer tanımlamış olduğumuz array boşsa return false boş değilse de array içerisindeki değerleri string halinde return edeceğiz.
    if (intersection.length != 0) {
        return intersection.toString()
    } else {
        return false
    }
}