var n = 4;
//var res="";
for (let i = 0; i < n; i++) {
    str = ""
    for (let space = 0; space < (4 - i - 1); space++) {
        str += " ";
    }
    for (let j = 0; j < ((2 * n) - 1); j++) {
        if (i == n-1 | j + i == n-1 | j-i == n-1) {
            str += "   *  "
        }
        else{
            str+="   "
        }

    }
    console.log(str);
}








// var row = 4;

// for (let i = 0; i < row; i++) {
//    str = "";
//     for (let space = 0; space < (4 - row - 1); space++) {
//         str+= "  ";
//     }
//     for (let j = 0; j < (2 * row); j++) {
//         //str += " "
//         if (i == 3 | i + j == 3 | j - i == 3) {
//             str += "*"
//         }

//     }
//     console.log(str);

// }
