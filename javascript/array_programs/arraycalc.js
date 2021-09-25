var arr=[2,4,6,3],op=[]
sum=0;

for(let num of arr)
 {
      sum+=num
      
 }
for(let num of arr)
{
    op.push(sum-num)
}

console.log(op);
