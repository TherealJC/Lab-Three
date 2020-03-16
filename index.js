//Set Grade
const grade = 87;

switch (true) {
    // If score is 85-100
    case grade >= 85 && grade <= 100:
        console.log("A+ Pass with Distinction");
        break;
    // If score is 80-84
    case grade >= 80 && grade <= 84:
        console.log("A Pass with Distinction");
        break;
    // If score is 75-79
    case grade >= 70:
        console.log("A- Pass with Distinction");
        break;
    // If score is 70-74
    case grade >= 70 && grade <= 74:
        console.log("B+ Pass with Merit");
        break;
    // If score is 65-69
    case grade >= 65 && grade <= 69:
        console.log("B Pass with Merit");
        break;
    // If score is 60-64
        case grade >= 60 && grade <= 64:
            console.log("B- Pass with Merit");
            break;
    // If score is 55-59
    case grade >= 55 && grade <= 59:
        console.log("C+ Pass with Merit");
        break;
    // If score is 50-54
    case grade >= 50 && grade <= 54:
        console.log("C Pass with Merit");
        break;
    // If score is 40-49
    case grade >= 40 && grade <= 49:
        console.log("D Pass with Merit");
        break;
    // If score is 0-39
    case grade >= 0 && grade <= 39:
        console.log("E Pass with Merit");
        break;
    // Anything else
    default:
        console.log("Error");
}

// John Smith 
// 57 C+
// Addie Lilley
// 73 A-
// Shaun Myers
// 34 E
// Earline Wolters
// 50 C
// Rico Gonser
// 77 A-
// Freddie Eckhardt
// 91 A+
// Willow Riva
// 82 A
// Florentino Chavira
// 68 B
// Chandra Walder
// 56 C+
// Christia Cournoyer
// 47 D
// Clayton Couey
// 63 B-
