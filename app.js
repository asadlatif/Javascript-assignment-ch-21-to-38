// Chapter 21 to 25
// TASK 1

// var firstname = prompt("Enter User First name");
// var lastname = prompt("Enter User Last name");
// var fullname = firstname + "" +lastname;
// document.write("<h1> Welcome " + fullname);


// TASK 2

// var mobile = prompt(" Enter your favorite mobile phone model")

// document.write("My faviourite phone is : " +mobile)
// document.write("<br> Length of string "+ mobile.length)

// TASK 3

// var word = "Pakistani";
    


//     document.write("<h1> String: "+word );
    

//     document.write("<br> Index of 'n': " + word.indexOf("n"))





// TASK 4


// var word = "HELLO WORLD";
    


//     document.write("<h1> String: "+word );
    

//     document.write("<br> Last Index of 'l': " + word.lastIndexOf("L"))


// TASK 5


// var word = "Pakistani";
    


//     document.write("<h1> String: " +word )
    

//     document.write("<br> Character at index 3: " + (word.charAt(5)))


// TASK 6



    // var firstName=prompt("Enter First Name!");
    // var lastName = prompt("Enter Last Name!");
    // var fullName=firstName.concat(lastName);
    // document.write("<h1> Welcome " + fullName);



// TASK 7


// var city = "Hayderabad";

// var city = city.replace ("Hayderabad","Islamabad")
// document.write(" <h1> City: " + "Hayderabad")
// document.write(" <h1> <br> After Replacement: " + city)


// TASK 8


// var message = "Ali and Sami are best friends. They play cricket and football together.";
//     var replace = message.replace(/and/g, "&");
//     document.write("<h1> Actual string: " + message +"<br> After replacement: " + replace);

// agr apko global koi word change karna hai to // is ka andar apna word or phir jo replace
// karna hai woh word 

//  TASK 9

// var string = "472"
// var number = parseInt(string)

// document.write("<h1> Value: "+string + "<br> Type: string");
// document.write("<h1> <br> Value: "+ number + "<br> Type: number");

//  TASK 10

// var userinput = "peanuts"
// userinput = userinput.toUpperCase();

// document.write("<h1> UserInput : peanuts" + "<br>");
// document.write("<h1> UpperCase :" + userinput);

// <---------------------------------------------------------------------------->
//   TASK 11

// var str=prompt("Enter any text!");
   
//     document.write("<h1> User input: " + str);

//     str = str.toLowerCase();   
//     str = str.split(' ');
 
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 

//     }
//     str.join(' '); 
    
    
//     document.write("<br>Title case: "+ str);
    
// 

// TASK 12



 //var number = 35.36 ;
// var firstnum = number.toString()
// var secnum=firstnum.slice(0,2)
// var thirdnum=firstnum.slice(3,5)
// document.write("Number:"+number+"<br>"+"Result:"+secnum+thirdnum)


    // TASK 13


    // var userName=prompt("Enter Username!");

    // var specialsymbol =0

    // for (var i=0; i<=userName.length; i++){
    //     if (userName[i] === '@' || userName[i] === '.' || userName[i] === ',' || userName[i] === '!')
    //         {
               
    //             specialsymbol = 1;
    //             break;
    //         }
    //     }
    // if (specialsymbol)
    // document.write("Please enter a valid username!");
    // else
    // document.write("Thank you! you entered a valid username");

  

    // TASK 14

//     var a =  ["cake", "apple pie", "cookie","chips", "patties"]
//     var order = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?")
//     var  order = order.toLowerCase()
//     var found =0;
//     for(i=0; i<a.length;i++){

//         if (a[i]===order){

//         found=1;
//              break;
//         }
//     }
//     if (found){
//         alert(order+" is available at index " + (i+1) + " in our bakery")
           
//     } 
        
// else{
//     alert("We are sorry. "+ order +" is not available in our bakery.")
// }


   
// TASK 15

// var a=prompt("Enter your password:")
// var b = a.split(' ')
// for (var i=0;i<a.length;i++){
//     if(a.length>=6||a.length<6){
//     if(a.length<6){
//         alert("It must be 6 Character long")
//     }   
//     else if(a.slice(0,1)>=0){
//         alert("Must start with a letter")
//     } 
//     else if(a[i]>="a" ||a[i]>=0&& a[i]<="z"||a[i]>="A" && a[i]<="Z") {
//         alert("Valid password")
//     }
// }break
// }

// TASK 16

// var string = "University of Karachi"
// string = string.split('');
// for(var i =0; i<string.length; i++)
// document.write("<h1>" +string[i]+ "<br>")

// TASK 17

//  var user = "Pakistan"
//  document.write(" <h1> USER INPUT : " + user)
//  document.write("<br> <h1> LAST CHARACTER: "+ user[user.length-1])
 

//TASK 18

// var a="The quick brown fox jumps over the lazy dog"
// document.write("<h1>" + "Text:"+a+"<br>"+"There are "+a.match(/the/gi).length+" occurence(s) of word 'the'")


// Chapter 26    to 30

// TASK 1

// var user = prompt("Enter any positive integer?")
// document.write("<h1 number :" + user )
// document.write("<br> <h1> ROUND OFF VALUE " + Math.round(user))
// document.write("<br> <h1> Floor value " + Math.floor(user))
// document.write("<br> <h1> CEIL value " + Math.ceil(user))

// TASK 2

// var user = prompt("Enter any negative integer?")
// document.write("<h1 number :" + user )
// document.write("<br> <h1> ROUND OFF VALUE " + Math.round(user))
// document.write("<br> <h1> Floor value " + Math.floor(user))
// document.write("<br> <h1> CEIL value " + Math.ceil(user))


// TASK 3

// var user = prompt("Enter any  absolute value of a number")
//  document.write("<h1> The absolute value of " + user + " is " + Math.abs(user));

// TASK 4

// var random = Math.floor((Math.random() * 6) + 1);
// document.write("<h1>" + "random dice value:"+random)


// Task 5

// var a="Heads"
// var b="Tails"
// var c=Math.floor((Math.random() * 2) + 1);
// if(c==2){
// 	document.write(c+"<br>random coin value:"+a)
// }
// else if(c==1){
// 	document.write(c+"<br>random coin value:"+b)
// }

// TASK 6


// var number = Math.random();
//     var secnum = (number * 100) + 1; 
//     var thirdnum = Math.floor(secnum);
//     document.write("<h1> random number between 1 and 100: " +  thirdnum);

// TASK 7

// var weight =prompt("Enter your weight in kilograms?");
//     var userweight = parseFloat(weight);
//     document.write("<h1> The weight of user is "+ userweight +" kilograms");
 
// TASK 8

// var a = 7
// var b = +prompt("Enter a number between 1 and 10")

// if (a==b) {
// 	alert("Congrats!You chose the right number!")	
// }
// else {
// 	alert("Try again")	
// }


// Chapter 31to 34

// TASK 1


// var currentdate = new Date();
// document.write("<h1>" + currentdate)

// TASK 2

// var MonthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var rightNow= new Date();
// var Month= rightNow.getMonth()
// document.write("<h1> Current month: "+ MonthsNames[Month]);

// TASK 3

    // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // var now = new Date();
    // var theDay = now.getDay();
    // var nameOfToday = dayNames[theDay];
    // document.write("<h1> Today is "+ nameOfToday);
    
    // TASK 4

    // var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // var now = new Date();
    // var theDay = now.getDay();
    // var nameOfToday = dayNames[theDay];
    // if (theDay === 0 || theDay === 6)
    //     document.write("<h1> its Fun Day ");
    // else 
    //     document.write("<h1> Its working Day ");
    
// TASK 5

// var now = new Date();
//     var theDate = now.getDate();
//     if (theDate < 15 )
//         document.write("<h1> First fifteen days of the month.");
//     else 
//         document.write("<h1> Last days of the month ");
    
// TASK 6


// TASK 7

// var now = new Date();
//     var theHours = now.getHours;
//     if (theHours >= 12 )
//         document.write("<h1> It's PM.");
//     else 
//         document.write("<h1> It's AM ");

    
// TASK 8

// var laterDate = new Date("Dec 31, 2020");
//     document.write("<h1> Later date: " + laterDate)

// TASK 9

// var a=new Date()
// var b=new Date("April 24,2020")
// var c=a.getTime()-b.getTime()
// var d = c/(1000*60*60*24)
// var e=Math.floor(d)
// document.write("<h1>" + e+" days have passed since 1st Ramadan,2020.")



// TASK 10

//  var a=new Date("Jan 01 2015 00:00:00 GMT+0500(PKT)")
// var b=new Date("Sat Dec 05 2015 22:50:16 GMT+0500(PKT)")
// var c=b.getTime()-a.getTime()
// var d=Math.floor(c/(1000*60))
// document.write("<h1>" +"On reference date "+b+"<br>"+d+" seconds had passed since beginning of 2015 ")



// TASK 11

// var today = new Date()
// var onehourago = new Date()
// onehourago.setHours(today.getHours() - 1);
//     document.write("<h1> Current date: " + today );
//     document.write("<br> 1 hour ago, it was " + onehourago);


//  TASK 12

// var today = new Date();
//     var hundredyearsago =  new Date();   
//     hundredyearsago.setFullYear(today.getFullYear() - 100);
//     alert("Current date: " + today + "\n100 years back, it was " + hundredyearsago);

// TASK 13

// var age = prompt("Enter your age");
//     var birthYear = new Date();
//     birthYear.setFullYear(birthYear.getFullYear() - age);

//     document.write("<h1> Your age is " + age );
//     document.write("<br> Your birth year is " + birthYear.getFullYear());

// TASK 14

// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     var name="ABC Customer";
//     var currentDate = new Date();
//     var month=currentDate.getMonth();
//     var consumedUnit=410;
//     var pricePerUnit=16;
//     var surcharge=350;
//     var netAmount=consumedUnit*pricePerUnit;
//     var grossAmount=netAmount+surcharge;

//     document.write("<h1> K-Electric Bill </h1>");
//     document.write("<h2> <br>  Customer Name: " + name);
//     document.write("<br> Month: " + monthName[month]);
//     document.write("<br> Number of units: " + consumedUnit);
//     document.write("<br> Charges per unit: " + pricePerUnit);
//     document.write("<br><br> Net Amount Payable (within Due Date): " + netAmount );
//     document.write("<br> Late payment surcharge: " + surcharge);
//     document.write("<br> Gross Amount Payable (after Due Date): " + grossAmount );

// Chapter 35 to 38

// TASK 1

    // var now= new Date();
    // document.write("<h1>" + now);
    

    // TASK 2
  
    //     var fullName=firstName+lastName;
    // document.write("<h1> Welcome " +fullName);
    

    // TASK 3
//     var a =+prompt("Enter first number?");
//     var b = +prompt("Enter 2nd number?");
//     var c=0;
//     c=add(a,b);
//     document.write("<h1>Sum: " +c);

// function add(num1,num2){
//     return(num1 +num2);
// }
        // TASK 4

        // var a = + prompt("Enter first number");
        // var operator =prompt("Enter operator for operation");
        // var b = +prompt("Enter 2nd number");
        // var c  = 0;
        // c = calc(a,operator,b);
        // document.write("<h1> Result: " +c);

        // function calc(num1,operator, num2){
        //     switch(operator){
        //         case "+" :
        //             return(num1+num2);
        //             break;
        //         case "-" :
        //             return(num1-num2);
        //             break;
        //         case "*" :
        //             return(num1*num2);
        //             break;
        //         case "/" :
        //             return(num1/num2);
        //             break;
        //         case "%" :
        //             return(num1%num2*100);
        //             break;
        //         default :
        //             return("invalid");
        //     }
        // }

        // // TASK 5
        // function square(number){
        //     return  number*number
        //   }
        //   document.write(square(5))

        // TASK 6

    // NOT DONE

    // TASK 7

//     function counting(){
// 	var a=+prompt("Enter starting number:")
// 	var b=+prompt("Enter end number:")
// 	for(i=a;i<=b;i++){
// 		document.write(i+"<br>")
// 	}
// }
// counting()
    

    
// Task 8
// function calculateHypotenuse(){
// 	function calculateSquare(b,p){
// 		var b=+prompt("Enter Base")
// 		var p=+prompt("Enter perpendicular")
// 		return b*b+p*p
// 		}return calculateSquare()
// 	}
// document.write("The hypotenuse is "+calculateHypotenuse())

// Task 9

// NOT DONE


// Task No.10

// function palindrome(str) {
//     var lengths = str.length;
//     var mid = Math.floor(lengths/2);
//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[lengths - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

//     var str=prompt("Enter any string for Palindrome check?");
//     if (palindrome(str))
//         {
//             document.write("<h1> The string " + str +" is palindrome.")
//         }
//     else
//         document.write("<h1> The string " + str +" is not palindrome.")

///-----Task No.11

// var a="the quick brown fox"
// function uppercase(){
// 	var b=a.split(" ")
// 	for(var i=0,x=b.length;i<x;i++){
// 		b[i]=b[i][0].toUpperCase()+b[i].substr(1)
// 	}
// 	return b.join(" ")
// }
// document.write("<h1>" + "EXAMPLE STRING :"+a+"<br>EXPECTED OUTPUT :"+uppercase(a))

// TASK 12

// not done