// function BankAccount(amount) {
//     let balance = amount;
//     function valiDateAmount(amountToValidate) {
//         return amountToValidate > 0 && typeof amountToValidate == 'number';
//     }
//     return {
//         checkBalance: function () {
//             return balance;
//         },
//         deposit: function (depositAmount) {
//             if (valiDateAmount(depositAmount)) {
//                 balance += depositAmount;
//                 console.log(`Deposited ${depositAmount} successfully`);
//             }
//             else {
//                 console.log("Please enter a valid amount");
//             }

//         },
//         withdraw: function (withdrawAmount) {
//             if (valiDateAmount(withdrawAmount)) {
//                 balance -= withdrawAmount;
//                 console.log(`Withdrawed ${withdrawAmount} successfully`);
//             }
//             else {
//                 console.log("Please enter a valid amount");

//             }
//         }
//     }
// }
//     const user1 = BankAccount(1000);
//     console.log(user1.checkBalance())
//     user1.deposit(10000);
//     console.log(user1.checkBalance());
//     user1.withdraw(5000);
//     console.log(user1)


class UserProfile {
    #email
    #password
    #loginAttempts

    username
    constructor(username, email, password) {
        this.username = username;
        this.#email = email;
        this.#password = this.#hashedPassword(password);
        this.#loginAttempts = 0;
    }
    #hashedPassword(password) {
        return `hashed_${password}_value`
    }
    getEmail() {
        return this.#email;
    }
    updatePassword(oldPassword, newPassword) {
        if (this.#password === this.#hashedPassword(oldPassword)) {
            this.#password = this.#hashedPassword(newPassword);
            return "Password Updated Successfully"
        } else {
            return 'Incorrect Password';
        }
    }

    login(user, passwordUser) {
        if (this.#loginAttempts >= 5) {
            return 'Account Locked for 24 hours. Too many failed login attempts.';
        }
        if (user === this.username || user === this.#email) {
            if (this.#password === this.#hashedPassword(passwordUser)) {
                return 'Login Successful';
            }
            else {
                this.#loginAttempts++;
                return 'Incorrect Password!';
            }
        }
        else {
            return 'User not found';
        }
    }

    logout() {
        this.#loginAttempts = 0;
        return 'Logout Successful';
    }
}

const user = new UserProfile('Priyasha', 'p@gmail.com', 'pass@123')
console.log(user.getEmail());
console.log(user.login('Priyasha', 'pass@123'))
console.log(user.updatePassword('pass@123', 'test@123'));
console.log(user.logout());

