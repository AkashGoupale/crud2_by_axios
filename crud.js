// const fs=require("fs")
const axios=require("axios")
const input=require("readline-sync")

console.log("STUDENTS DATA OF A CLASS USING JSON SERVER AND AXIOS.......")
// 

datapost = async () => {
     try {
     info={
        id:input.questionInt("Enter the ID of Student: "),
        name:input.question("Enter the Student Name: "),
        surname:input.question("Enter the Student Surname: "),
        class:input.question("Enter the class of Student: "),
        mail:input.question("Enter the email of Student: ")
     }
    if ((info.mail).includes("@") && (info.mail).includes("gmail.com")) {
            let res=await axios.post('http://localhost:3000/posts',info)
            console.log("YOUR DATA CREATE SUCCESSFULLY....")
            }
        
    else {
        console.log(`your email is not correct...Only "@" special character and "gmail.com" gmail accept.. `)  
        }
    }  
     catch {
         console.log("SOMETHING WENT WRONG..PLEASE CHECK INFO CAREFULLY..")
     }
 }
 
 dataread = async() => {
    try {
        let id=input.question("Enter the Student ID which you have to read:- ")
        result = await axios.get(`http://localhost:3000/posts/${id}`)
        console.log(result.data)
    }
     
     catch {
         console.log("These ID does not Exists....")
     }
 }
 
dataupdate = async(id,data) => {
     try {
             let res= await axios.patch(`http://localhost:3000/posts/${id}`,data)
             console.log("YOUR STUDENT DATA UPDATE SUCCESSFULLY....")

     } 
     catch {
         console.log("ID DOES NOT EXIST...")
     }
     }   
 
 
datadelete= async() =>  {
   try {
       id=input.question("Enter the Student ID which ID you have to Delete:- ")
       result=  await axios.delete(`http://localhost:3000/posts/${id}`)
       console.log("YOUR STUDENT DATA DELETE SUCCESSFULLY....")
   }
   catch {
           console.log("These Student ID does not Exist...please Enter correct student ID...")
       }
  
   }
// 
async function dooperation() {
console.log("Enter what you want...\n 1.Create \n 2.Read \n 3.Update \n 4.Delete \n 5.Exist")
        n=input.question("Enter the number which operation you have to doing:- ")
        if (n==1) {
            datapost()
        }
        else if (n==2) {
            dataread()
        }
        else if (n==3) {
            try {
            id=input.questionInt("Enter the Student ID which Student data you have to update: ")
            let result= await axios.get(`http://localhost:3000/posts/${id}`)
            let data= (result.data)
            // console.log(data.id)
            console.log("Choose what you have to change \n 1.student name \n 2.student surname \n 3.student class \n 4.student email \n 5.whole data")
            let choice=input.question("Enter your choice: ")
            if (choice==1) {
                name=input.question("Enter the new Name of student: ")
                data.name=name
                dataupdate(id,data)
            }  
            else if (choice==2) {
                surname=input.question("Enter the new Surname of student: ")
                data.surname=surname
                dataupdate(id,data)
            } 
            else if (choice==3) {
                standard=input.question("Enter the new Class of student: ")
                data.class=standard
                dataupdate(id,data)
            } 
            else if (choice==4) {
                email=input.question("Enter the new email of student: ")
                data.mail=email
                if ((data.mail).includes("@") && (data.mail).includes("gmail.com")) {
                    dataupdate(id,data)
                }
                else {
                    console.log(`your email is not correct...Only "@" special character and "gmail.com" gmail accept.. `)  
                    }
            
            }   
            else if (choice==5) {
                info={
                    id:data.id,
                    name:input.question("Enter the new Name of Student: "),
                    surname:input.question("Enter the new surname of Student: "),
                    class:input.question("enter the new class of Student: "),
                    mail:input.question("enter the new email of student: ")
                 }
                if ((info.mail).includes("@") && (info.mail).includes("gmail.com")) {
                        dataupdate(id,info)
                        }
                    
                else {
                    console.log(`your email is not correct...Only "@" special character and "gmail.com" gmail accept.. `)  
                    }
            
                
            }       
        }
            catch {
                console.log("These Student ID does not Exist")
            }
        }
        else if (n==4) {
            datadelete()
        }
        else if (n==5) {
            console.log("you exist successfully..")
        }
    }
dooperation()

