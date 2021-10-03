var pattern="abcabb"
var word_count={}
for(let char of pattern){
    if(char in word_count){
        console.log(char , "is first recursive character");
        break;
    }
    else{
        word_count[char]=1
    }
}

var arr=[10,11,10,20,21,21]
//duplicte elements
var duplicate={}
for(let number of arr){
    if(number in duplicate){
        duplicate[number]+=1
    }
    else{
        duplicate[number]=1
    }
}
//console.log(duplicate);
for(let num in duplicate){
    if(duplicate[num]>1)
    console.log(num);
}