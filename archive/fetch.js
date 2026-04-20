
fetch("https://jsonplaceholder.typicode.com/todos/18")
    .then((response) => {
        return response.json().then((data) => { console.log(data) })
    })
    .catch((error) => {
        console.log("Error");
        console.error("Error: ", error);
    })
    .finally(() => {
        console.log("Request Completed!")
    })




    new Promise((res)=>{
        res(2);
    }).then((num) => {
        console.log(num)
        return num*2
    }).then((num)=>{
        console.log(num);
        return num*2;
    }).then((num)=>{
        console.log(num)
    })


    Promise.race([ // all, allSettled, race
        fetch("https://jsonplaceholder.typicode.com/todos/1"),
        fetch("https://jsonplaceholder.typicode.com/todos/2"),
        fetch("https://jsonplaceholder.typicode.com/todos/3"),  
    ]).then((response)=>{
        console.log("All done!", response);
    }).catch((error)=>{
        console.log(error)
    });

    async function getData() {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/4");
            const data = await response.json();
            console.log(data);
        } catch (err){
            console.log(err.message);
        } finally {
            console.log("Done!")
        }
}

getData();