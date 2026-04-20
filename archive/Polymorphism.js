class Calculator {
    add(...number) {
        if (number.length === 0) return 'Enter a number first! 🙄';
        if (number.length === 1 && typeof number[0] === 'number') {
            return number[0];
        }
        return number.reduce((sum, num) => sum += num, 0);
    }
}

const calculate = new Calculator();
console.log(calculate.add());
console.log(calculate.add(1));
console.log(calculate.add(1, 2));
console.log(calculate.add(1, 2, 3));

// Duck typing or Interface polymorphism

class DebitCard {
    pay() {
        console.log("Paid via Debit Card");
    }
}


class CreditCard {
    pay() {
        console.log("Paid via Credit Card");
    }
}


class UPI {
    pay() {
        console.log("Paid via UPI");
    }
}

function payNow(paymentMethod) {
    paymentMethod.pay();
}

const debit = new DebitCard();
const credit = new CreditCard();
const upi = new UPI();

payNow(debit);
payNow(credit);
payNow(upi);


// Animal
class Animal{
    makeSound(){
        throw new Error("Abstract method must be implemented")
    }
}