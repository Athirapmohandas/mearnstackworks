//var test=hhhaaii hoow 
//output: hai how  =>using class Set

// class Set{
//     add(object){
        
//     }
// }
var pattern="hhaiii hooow aaare yyou";
var words=pattern.split(" ");
//console.log(arr);
for(let word of words){
    //hhhaii
    let st=new Set();
    for(let char of word){
        st.add(char);
    }
    console.log(st);
}




