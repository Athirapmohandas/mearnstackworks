class Person{
    setPerson(name,gender,age){
        this.name=name;
        this.gender=gender;
        this.age=age;
    }
    printPerson(){
        console.log(this.name,this.gender,this.age);
    }
}

var obj1=new Person();
obj1.setPerson("ram","male",25);
obj1.printPerson();