let array = [2, 4, 9, 10, 45, 67, 8, 90]
let array2 = []
console.log(array, 'boshlanishdagi array')
for(let i=1; i<=90; i++) {
    if (i%2==0) {
        if (array.includes(i)) {
            array2.push(i)
        }
    }
}
console.log(array2, 'juft sonlarga ajratilgan array')