//template literals
let name = 'Blane';
console.log(`Hello there ${name}`)
console.log("Hello there", name)
console.log("Hello there" +" "+ name)


console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100
console.log("Aardvark" < "Z")
// true
console.log([] == "");


function palindrome(str) {
    let st = 0; 
    let end = str.length - 1;
    while(st < end){
        if(str[st] != str[end]) return false
        st++;
        end--;
    }
    return true;
}
console.log(reverseString("name"))
console.log(palindrome("racecar"))

function reverseString(str){
    let newStr = "";
    for(let i=str.length-1;i>=0;i--){
        newStr += str[i];
    }
    return newStr;
}

