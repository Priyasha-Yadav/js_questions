let sum = 0;
const calc = (n) =>{
    for(let i = 0; i<=n ; i++){
        sum+=i;
}
    return sum;
}

// console.time();
// console.log(calc(5));
// console.timeEnd();

const memoize = (fun) => {
    let cache = {};
    return function (...args){
        let n = args[0];
        if(n in cache){
            return cache[n];
        }
        else{
            result = calc(n);
            cache[n] = result;
            return result;
        }
    }
}

let memo  = memoize(calc);
console.time();
console.log(memo(5));
console.timeEnd();


console.time();
console.log(memo(5));
console.timeEnd();


