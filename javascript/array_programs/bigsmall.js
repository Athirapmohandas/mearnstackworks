var expenses = [12000, 13000, 15000, 11000, 25000, 17000]
min = expenses[0]
max = expenses[0]
var months = 0, sum = 0;
for (let num of expenses) {
    if (num > max) {
        max = num;
    }
    else if (num < min) {
        min = num;
    }

    //no of months

    if (num > 15000) {

        months += 1
    }
    sum += num

}
//console.log(`big ${max}`);
//console.log(`small ${min}`);
console.log('No of months ', months);
console.log('average', sum / arr.length);
console.log(`big ${max}`);
console.log(`big ${min}`);
