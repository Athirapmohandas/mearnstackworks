class Library{
    books={
        "halfgirlfriend":{book_name:"half girlfriend",author:"chethan bagath",price:300,avl_copies:0,copies_sold:300},
        "Randaamoozham":{book_name:"Randaamoozham",author:"M T",price:350,avl_copies:250,copies_sold:200},
        "Alchemist":{book_name:"The alchemist",author:"Paulo",price:400,avl_copies:250,copies_sold:100}
        
    }
findBook(b_name){
    //if avl_copies?
    if(b_name in this.books){
        if((this.books[b_name].avl_copies)>0){
        console.log(this.books[b_name]);
    }
    else{
        console.log("The book is not available");
    }
}

}
filterBook(){
    //sort based on copies_sold
    var books_arr=[];
    books_arr.push(this.books);
    //console.log(books_arr);

    // books_arr.sort((book1,book2)=>book1.copies_sold-book2.copies_sold)
    // console.log(books_arr);

}


}
var lib=new Library();
lib.findBook("halfgirlfriend");
lib.filterBook();
// console.log(lib.books);