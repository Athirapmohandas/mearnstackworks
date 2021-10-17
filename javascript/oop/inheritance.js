class Parent{
    phone(){
      console.log("redmi");
    }
    
}
class Child extends Parent{
   
   phone(){
      super.phone();
       console.log("iphone");
   }
}
class Subchild extends Child{
  phone(){
    super.phone();
    console.log("nokia");
  }
}
var subchild= new Subchild()
subchild.phone();

//overloading: same method,dfrnt no of parameters
//overriding: inheritance, same method in child and parent