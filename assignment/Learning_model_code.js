class StudentRegistraction{
    constructor(ID,name,age,qualification,userName,password){
      this.ID=ID;
      this.Name=name;
      this.userAge=age;
      this.userQualification=qualification;
      this.userName=userName;
      this.userPassword=password;
      this.loginArr=[]
      
    }  
    signup(){
      this.loginArr.push(this.Name);
      this.loginArr.push(this.userPassword);
      this.loginArr.push(this.userName);
   }
   login(){
     if(this.loginArr.includes(this.Name) && this.loginArr.includes(this.userPassword)){
      console.log(`welcome back ${this.Name}`)
      }else{console.log("This account isn't registered")}
    }
  
}

class Course {
  constructor(courseName,courseID){
    this.courseName=courseName;
    this.courseID=courseID;
    this.courseList=[]
   }
 addcourse(course){
    this.courseList.push(course)
    console.log(this.courseList)
   }
}

class Admission extends StudentRegistraction{
    constructor(ID,name,age,qualification,userName,password){
      super(ID,name,age,qualification,userName,password)
      this.admittedStudent=[]
      this.rejectedStudent=[]
      }
  apply(student,Qualification,Age){
      if (Qualification >= 60 && Age>= 20){
      this.admittedStudent.push(student) } 
      else{
      this.rejectedStudent.push(student)
        }
     }  
  get admiited_Student(){ 
        let display= this.admittedStudent;
        console.log(`Welcome to our new set `)
        console.log(display)
        }
  get rejected_Student(){
        let rejectDisplay= this.rejectedStudent;
        console.log(` These are the list of rejected students `)
        console.log(rejectDisplay)
      }
  
    }
class StudyMaterial{
  constructor(videolink,assignmentlink,submissiondate,submissionlink){
      this.videolink=videolink;
      this.assignmentlink=assignmentlink;
      this.submissiondate=submissiondate;
      this.submissionlink=submissionlink;
    if(this.constructor=== StudyMaterial){
      throw new Error ("This class is private ")
      }
    }
  postAssignmentandVideo(Input){
    this.assi_gment=[]
    this.assi_gment.push(Input)
    console.log("Video and Assinment links are live")
    console.log(this.assi_gment)
    }
 
}

class Teacher extends StudentRegistraction{
   constructor(ID,name,age,qualification,userName,password,subject){
    super(ID,name,age,qualification,userName,password)
    this.subject=subject
   } 
 signup(Tea_cher){
    this.teachers=[]
    this.teachers.push(Tea_cher)
  }
 get teachersList(){
    let list= this.teachers;
    console.log(list)
   }
  }

class Admin extends StudyMaterial{
   constructor(videolink,assignmentlink,submissiondate,submissionlink){
    super(videolink,assignmentlink,submissiondate,submissionlink)
    
  }
  #gradingsheme(Name,studentsScore){
    this.studentsgrade=[]
    if (studentsScore>= 80){
      this.studentsgrade.push(` ${Name}Scored ${studentsScore} Got an A. execellent work`);
    }else if(studentsScore>= 70){
      this.studentsgrade.push(` ${Name}Scored ${studentsScore} Got a B`)
    }else if (studentsScore>= 50){
      this.studentsgrade.push(`${Name}Scored ${studentsScore} Got a C`)
    }else if (studentsScore> 40){
      this.studentsgrade.push(`${Name}Scored ${studentsScore} Got a D`)
    }else if( studentsScore<=40){
      this.studentsgrade.push(`${Name}Scored ${studentsScore} Got an F`)
    }
    console.log(this.studentsgrade)
  }
   displayscore(user,studentsScore){
    this.#gradingsheme(user,studentsScore)
  }
}



const students= new Admission();
const course= new Course();
const teacher= new Teacher();
const admin=new Admin()
const teacher1=new Teacher(2,"Sunday Felix",25,"Bachelor's degree","uncle","hjgsjf","Math Teacher");
const studentregister= new StudentRegistraction(2,"Courage",65,70,"Flash","hjgsjf");
const studentregister_1= new StudentRegistraction(3,"Chidi",16,89,"Nice","svagf");
const studentregister_2= new StudentRegistraction(4,"Favour",20,60,"Someone","svagf");
const studentregister_3= new StudentRegistraction(5,"Ben",16,80,"Onye","svagf");
const course_2= new Course("Math","24");
const course_3= new Course("English","14");
studentregister.signup();
studentregister_1.signup();
studentregister_2.signup();
studentregister_3.signup();
studentregister.login();
studentregister_1.login();
studentregister_2.login();
studentregister_3.login();
course.addcourse(course_2);
course.addcourse(course_3);
students.apply(studentregister,70,25);
students.apply(studentregister_1,89,16);
students.apply(studentregister_2,60,20);
students.apply(studentregister_3,80,16);
students.admiited_Student;
students.rejected_Student;
teacher.signup(teacher1)
teacher.teachersList;
const admin_1=new Admin("https://learnable-23.teachable.com/courses/back-end-development/lectures/44083198","Apply inheritance to your solution in (1) above. (This can be in a separate file if your class diagram did not capture inheritance, of course, it is supposed to.)","15,February","Google Doc")
admin.postAssignmentandVideo(admin_1)
admin.displayscore("Courage Nduka ",90)




