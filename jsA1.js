//Q1. Add two numbers

// function Addtwonum(a,b){
//     return a+b;
// }

//  a =10;
//  b=5;
// console.log(Addtwonum(a,b));

// Q2. Find if the condition are obeyed or not?

// let A =7;
// let B =3;

// function Is_valid(){
//     if(A>b){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(Is_valid());

// Q3. Check the conditions
//1. If both are divisible by 10, console true
//2. If both are not divisible by 10, console false
//1. If one of them is divisible by 10, console true

num1=10;
num2=5;

function check(num1,num2){
    if(num1%10==0 || num2%10==0){
        return true;
    }
    else{
        return false;
    }
}

console.log(check(num1,num2));

// Q4. Find the first digit of the four digit number.

 function First_Digit(){
    let N ="3462";
    console.log(N[0]);
 }

 First_Digit();

 // Q5. Find th last digit of four digit number.

 function Last_Digit(){
    let N ="1247";
    console.log(N[3]);
 }
 Last_Digit();

 // Q6. Find the remainder

  a = 10;
  b=3;

 function remainder(a,b){
    result = a%b;
    console.log(result);
 }
 remainder(a,b);

 // Q7.Multiply two numbers.

 a =3;
 b =2;

 function Multiply(a,b){
   result = a*b;
   console.log(result);
 }
 Multiply(a,b);

 // Q8. Marks calculator

 let maths = 58;
 let english = 89;
 let science = 70;

 function sum(maths, science,english){
    totalmarks= maths+science+english;
    console.log(totalmarks)
 }

 function Avg_marks(maths, science,english){
    Average= (maths+science+english)/3;
    console.log(Average);
 }

 sum(maths, science,english);
 Avg_marks(maths, science,english);