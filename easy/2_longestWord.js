export const longestWord = (sen) => {
    // !Noktalama işaretlerini kaldırma
    // !Cümleyi boşluklardan bölüp, kelimelerle bir Array oluşturmak
    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ")
    //return arr

    // ! Kelimelerle oluşturduğumuz Array'i kelimelerin karakter sayılarına göre azalan bir şekilde sıralamak
    arr.sort((a, b) => { return b.length - a.length })
    // return arr
    // !En basta (0.index) kelimeyi return etmek
    return arr[0]
}