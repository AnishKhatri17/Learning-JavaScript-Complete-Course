// String Methods = allows us to manipulate and work with text (strings)

let username = "AnishKhatri";

        //charAt();
console.log(`Char at 0 : `+username.charAt(0)); //A
console.log(`Char at 1 : `+username.charAt(1)); //n
console.log(`Char at 2 : `+username.charAt(2)); //i
console.log(`Char at 3 : `+username.charAt(3)); //s
console.log(`Char at 4 : `+username.charAt(4)); //h
console.log(`Char at 5 : `+username.charAt(5)); //K
console.log(`Char at 6 : `+username.charAt(6)); //h
console.log(`Char at 7 : `+username.charAt(7)); //a
console.log(`Char at 8 : `+username.charAt(8)); //t
console.log(`Char at 9 : `+username.charAt(9)); //r
console.log(`Char at 10 : `+username.charAt(10));//i

        //indexOf();
let index = "AnishKhatri";

console.log(`Index of 'i' is : `+index.indexOf("i")); //2
console.log(`Index of 't' is : `+index.indexOf("t")); //8
console.log(` Last Index of 'i' is : `+index.lastIndexOf("i")); //10

        //.length -> gives length of the string.
let lengthstr = "AnishKhatri";

console.log(`The length of the string is : `+lengthstr.length); //11


        //.trim -> removes extra whitespaces (starting and ending) of the string
let trimstr = "     Anish Khatri    ";

console.log(`The string after trim is : `+ trimstr.trim());


        //toUpperCase()
let upper = "AnishKhatri";

console.log(`The string after toUpperCase is : `+upper.toUpperCase());


        //toLowerCase()
let lower = "AnishKhatri";

console.log(`The string after toUpperCase is : `+upper.toLowerCase());


        //repeat()
let repeatstr = "AnishKhatri";

console.log(`The string after repeating is : `+ repeatstr.repeat(4));


        //startsWith("//char or string value"); this gives a boolean value 
let starts =  "AnishKhatri";

console.log(`The String starts with A : `+ starts.startsWith("A"));
console.log(`The String starts with Ani : `+ starts.startsWith("Ani"));
console.log(`The String starts with i : `+ starts.startsWith("i"));


         //startsWith("//char or string value"); this gives a boolean value 
let ends =  "AnishKhatri";

console.log(`The String ends with i : `+ ends.endsWith("i"));
console.log(`The String ends with tri : `+ ends.endsWith("tri"));
console.log(`The String ends with n : `+ ends.endsWith("n"));


            //includes(); -> returns a boolean value ....
let includesStr = "Anish Khatri";

if(includesStr.includes(' '))
{
    console.log(`Your name shouldn't contain '' empty whitespace !`);
}

else{
    console.log(includesStr);
}


        //replaceAll(//value, "replaceitem")
let phonenumber = "123-456-7890" ;

console.log(phonenumber.replaceAll("-", "")) //1234567890
console.log(phonenumber.replaceAll("-", "+")) //123+456+7890
console.log(phonenumber.replaceAll("-", "/")) //123/456/7890
console.log(phonenumber.replaceAll("5", "4")) //123-446-7890


        //padStart(//totalvalue, "startitem") 
let names = "AnishKhatri";

console.log("Using padStart : "+ names.padStart(15, 0)); // 0000AnishKhatri


         //padEnd(//totalvalue, "enditem") 
let names2 = "AnishKhatri";

console.log("Using padStart : "+ names2.padEnd(15, 0)); // 0000AnishKhatri



// String Slicing = creating a substring from a portion of another string
// string.slice(start, end)


let fullname = "AnishKhatri";

console.log(`String Slicing`);
let firstName = console.log(fullname.slice(0, 5));
let LastName = console.log(fullname.slice(5, 11));

let firstChar = fullname.slice(0, 1);
console.log(firstChar);