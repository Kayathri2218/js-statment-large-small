var first = Number(prompt("Enter the 1st number"));
var second = Number(prompt("Enter the 2nd number"));
var thrid = Number(prompt("Enter the 3ed number"));

if ((first > second) && (first > thrid)) {
    if (second > thrid) {
        console.log("second is large , thrid is small");
    }else {
        console.log("third is large , second is small ");
    }
}else if ((second > first) && (second > thrid)) {
    if (first > thrid) {
        console.log("first is large ,  thrid is small");
    }else {
        console.log("third is large ,  first is small");
    }
}else {
    if (second > first) {
        console.log("second is large , first is small");
    }else{
        console.log("first is large , second is small");
    }
}

