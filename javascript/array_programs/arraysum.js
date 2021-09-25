var arr = [1, 2, 3, 4]













//----------------------------------------------------------

for (let i = 0; i <= arr.length; i++) {
    //sum=arr[i];
    
    for (let j = i + 1; j <= arr.length; j++) {
        var op = []
        sum = arr[j] + arr[i];
        
        if (sum == 5) {
            op.push(arr[i]);
            op.push(arr[j]);
            console.log('sum=5',op);
        }
        else if (sum == 7) {
            op.push(arr[i]);
            op.push(arr[j]);
            console.log('sum=7',op);
        }
        else if (sum == 6) {
            op.push(arr[i]);
            op.push(arr[j]);
            console.log('sum=6',op);
        }
    }
}

