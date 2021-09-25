var a=[2,3,4,5,6,7,8],op=[];
for(let i of a)
{
    // if(i<5){
    //    op.push(i-1)
    // }
    // else if(i>5){
    //     op.push(i+1)
    // }
    // else{
    //     op.push(i)
    // }
    
i<5?op.push(i-1):i>5?op.push(i+1):op.push(i)

}
console.log(op);
 var num=0
var res=num>0?"popsitive":num<0?'negative':'zero';
console.log(res);