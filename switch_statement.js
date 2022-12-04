// tying the date in a variable 

const day = new Date().getDay();


switch (day) {
    case 0:
        console.log("its Sunday time to relax");
        break;
    
    case 1:
        console.log("its monday, happy monday");
        break;
    
    case 2:
        console.log("its tuesday You got this");
        break;
    
    case 3:
        console.log("its humpday ");
        break;
    
    case 4:
        console.log("just one more day till the weekend");
        break;
    
    case 5:
        console.log("happy friday");
        break;
    
    case 6:
        console.log("we have a wonderful saturday");
        break;
    default:
        console.log("Something went horribly wrong...");
    
}


document.getElementById("user").innerHTML = Date();



const grade = 83;

switch (true) {
    case grade >= 90:
        console.log("A");
        break;
    case grade >= 80:
        console.log("B");
        break;
    case grade >= 70:
        console.log("C");
        break;
    case grade >= 60:
        console.log("D");
        break;
    case grade >= 49:
        console.log("F");
        break;
    default: 
        console.log("Error");
}

console.log(grade);