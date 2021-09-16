var low = 4, upp = 25;
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

// 5,7,11,13,17,19 prime nos