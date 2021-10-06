function primeNums(low, upp) {

    for (let row = low; row <= upp; row++) {
        let flag = 0;
        for (let col = 2; col < row; col++) {
            if (row % col == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) { console.log(row); }

    }
}
primeNums(4,10)