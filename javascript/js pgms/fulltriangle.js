var n=4;
//var res="";
for(let row=0;row<n;row++)
{   
    str=""
    for(let space=0;space<(4-row-1);space++)
    {
        str+=" ";
    }
    for(let col=0;col<(row+1);col++)
    {
        str+="* "
    }
    console.log(str);
}
