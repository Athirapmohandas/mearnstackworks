products={
    p_code:100,
    name:"product1",
    price:250,
    aval_qty:50
}
//print product name
console.log(products.name);
//update stock as curret stock+30
products.aval_qty+=30
//check for discout key is present
console.log("discount" in products);
// add discout :10%
products.discount="10%"
console.log(products);

if("batch_code"in products){    //if(!("batch_code"in products)){ products.batch_code="est_2k21"}

}
else{
    products.batch_code="est_2k21"
}
console.log(products);

for(let key in products)
{
    console.log(key);
    console.log(products.key);
}