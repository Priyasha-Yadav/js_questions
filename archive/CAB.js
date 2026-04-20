const user1 = {
    sayHi : function(){
        console.log("Hi, "+ this.name);
    }
}

const user = {name : "Priyasha"};

user1.sayHi.call(user);