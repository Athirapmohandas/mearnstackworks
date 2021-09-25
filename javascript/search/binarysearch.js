var arr = [10, 11, 100, 22, 23], flag = 0;
arr.sort((num1, num2) => (num1 - num2))
//console.log(arr);
low =0, upp = arr.length - 1;

elem = 24

while (low <= upp) {
    mid = Math.floor((low + upp) / 2);
    if (elem < arr[mid]) {
        upp = mid - 1;
    }
    else if (elem > arr[mid]) {
        low = mid + 1;
    }
    else if (elem == arr[mid]) {
        flag = 1;
        break;
    }
}

console.log(flag == 0 ? "element not found" : "elememt found");
