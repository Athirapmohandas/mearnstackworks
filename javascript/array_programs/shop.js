var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]
// //print all [roduct name only
// var productname=products.map(product=>product[1])
// console.log(productname);
// //print no of items  => products.length
// // var product_item=products.map(product=>product[0])
// // console.log(product_item);
// var count=0;
// for(let item of products){
//     count++
// }
// console.log("no of items", count);
// // print no of available items
// var count=0;
// for(let item of products){
//     if(item[3]!=0){
//         count++;
//     }
// }
// console.log("no of available items", count);

// //----------OR
// var aval_item=products.filter(item=>item[3]>0)
// console.log(aval_item);

// //print names of out of stock items
// var out_stock=products.filter(item=>item[3]==0).map(item=>item[1])
// console.log(out_stock);

// //add offer 5 rs for all products whose stock>50  & name
// var offer= products.filter(item=>item[3]>50). map(item=>[item[1], item[2]-5])
// console.log(offer);

products.sort((item1,item2)=>item2[2]-item1[2])
console.log(products);

//desc order of price
products.sort((item1,item2)=>item1[2]-item2[2])
console.log(products);

//sort the product stockwise
products.sort((item1,item2)=>item2[3]-item1[3])
console.log(products);
//highest PRICE
var max_price=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(max_price);
//LOWEST PRICE
var min_price=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log(min_price);

// FIND TO SEARCH
var search_item=products.find(item=>item[1]=="treat")
console.log(search_item);
var search_item=products.find(item=>item[2]=20)
console.log(search_item);
//SOME 
var is_available=products.some(item=>item[2]<10)
console.log(is_available);

//FOR EACH
//products.map(item=>item[1]).forEach(names=>console.log(names))

//PRODUCT RS>30
products.filter(item=>item[2]>30).forEach(item=>console.log(item[1]))
