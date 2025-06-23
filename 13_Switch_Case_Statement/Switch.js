// Switch case is another alternative for if-else statement .....

//Example 1
let day = "pizza";
// let day = 6;

switch(day){
    case 1:
        document.writeln('It is Sunday');
        break;
    case 2:
        document.writeln('It is Monday');
        break;
    case 3:
        document.writeln('It is Tuesday');
        break;
    case 4:
        document.writeln('It is Wednesday');
        break;
    case 5:
        document.writeln('It is Thursday');
        break;
    case 6:
        document.writeln('It is Friday');
        break;
    case 7:
        document.writeln('It is Saturday');
        break;
    default:
        document.writeln(`${day} is an invalid output`);
        break;
}

//Example 2

let MarksObtained = 98  ;
// let MarksObtained = 87;
// let MarksObtained = 71;
// let MarksObtained = 60;
// let MarksObtained = 53;
// let MarksObtained = 28;
let Grade;

switch(true){
    case MarksObtained>=90:
        Grade = "A+";
        break;

    case MarksObtained>=80:
        Grade = "A";
        break;

    case MarksObtained>=70:
        Grade = "B+";
        break;

    case MarksObtained>=60:
        Grade = "B";
        break;

    case MarksObtained>=50:
        Grade = "C+";
        break;

    case MarksObtained>=40:
        Grade = "C";
        break;

    case MarksObtained<40:
        Grade = "F";
        break;
}

if (MarksObtained >=90) {
    console.log("Remarks: Outstanding Student.")
}

else if (MarksObtained >=80) {
    console.log("Remarks: Excellent Student.")
}

else if (MarksObtained >=70) {
    console.log("Remarks: very Good Student.")
}

else if (MarksObtained >=60) {
    console.log("Remarks: Good Student.")
}

else if (MarksObtained >=50) {
    console.log("Remarks: Average Student.")
}

else if (MarksObtained >=40) {
    console.log("Remarks: Below Average Student.")
}

else{
    console.log("Remarks: You need to seriously focus on your studies.....")
}

console.log(`Your Obtained Grade is : ` + Grade);