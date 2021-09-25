var arr1 = [10, 20, 21, 22]
var arr2 = [11, 12, 20, 21]
arr1.sort((i, j)=> i - j);
arr2.sort((i, j)=> i - j);
var pos1 = 0, pos2 = 0,count=0;;
while ((pos1 < arr1.length) & (pos2 < arr2.length)) {
    if (arr1[pos1] == arr2[pos2]) {
        console.log(arr1[pos1]);
        pos1++;
        pos2++;
    }
    else if (arr1[pos1] < arr2[pos2]) {
        pos1++;
    }
    else if (arr1[pos1] > arr2[pos2]) {
        pos2++;
    }
    count++;
}
console.log(count);   //here count=5 for program.. below pgm iterates 25 times.






//--------------------------------------------------------complexity is high for below ==n^2
// for (let num1 of arr1) {
//     for (let num2 of arr2) {
//         if (num1 == num2) {
//             console.log("common element", num1);
//         }
//     }
// }