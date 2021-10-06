// class Student{
//     setStudent(roll,course,stud_name){    //initialize instance variable, Also can be done constructor 
//         this.roll=roll;  // this for inside class
//         this.course=course;
//         this.stud_name=stud_name;
//     }
//     printStudent(){  //print instance variables.
//         console.log(this.roll,this.course,this.stud_name);
//     }
// }
// var stud1=new Student();
// stud1.setStudent(1,"Science","Ram");
// stud1.printStudent();

// console.log(stud1.stud_name);//refernce name outside class

//Using node we can run in backend. 
//firstly used in frontend.
//.js=>machine code(done by javascript engine eg:spidermonkey,chakra,v8 standards:ECMA)
//this =>indicates Instance variables of current class. (python =>self)
//name,age,gender =>local var

class Student{
    constructor(roll,course,stud_name){    //initialize instance variable, Also can be done constructor 
        this.roll=roll;  // this for inside class
        this.course=course;
        this.stud_name=stud_name;
    }
    printStudent(){  //print instance variables.
        console.log(this.roll,this.course,this.stud_name);
    }
}
var stud1=new Student(1,"science","Ram");
stud1.printStudent();