// Task: 1
// const userDatabase = (function () {
//     const users = [];

//     return {
//         registerUser: function (name, pin) {
//             if (!name || !pin) {
//                 return console.log("Name and PIN are required.");
//             }

//             const regex = /^\d{4}$/;
//             if (!regex.test(pin)) {
//                 return console.log("PIN must be a 4-digit number.");
//             }

//             const newUser = {
//                 id: users.length + 1,
//                 name,
//                 pin,
//                 balance: 0
//             };
//             users.push(newUser);
//             return true;
//         }
//     }
// })();

// console.log(userDatabase.registerUser("Nadim", 1969));




// Task:2,3,4,5
const userDatabase = (function () {
    const users = [];
    const processingFee = [];
    const transactionHistory = {}; // To track each user's transactions

    return {
        registerUser: function (name, pin) {
            if (!name || !pin) {
                return console.log("Name and PIN are required.");
            }

            const regex = /^\d{4}$/;
            if (!regex.test(pin)) {
                return console.log("PIN must be a 4-digit number.");
            }

            const newUser = {
                id: users.length + 1,
                name,
                pin,
                balance: 0
            };
            users.push(newUser);
            return users;
        },
        loginUser: function (name, pin) {
            if (!name || !pin) {
                console.log("Name and PIN are required.");
                return false;
            }

            const regex = /^\d{4}$/;
            if (!regex.test(pin)) {
                console.log("PIN must be a 4-digit number.");
                return false;
            }

            const user = users.find(u => u.name === name);
            if (!user) {
                console.log("user not found");
                return false;
            }
            if (user.pin !== pin) {
                console.log("Incorrect PIN");
                return false;
            }
            console.log(`User "${name}" logged in successfully.`);
            return true;
        },
        addMony: function (name, pin, amount) {
            if (typeof amount !== 'number' || amount <= 0) {
                return console.log("Invalid amount to add.");
            }

            if (this.loginUser(name, pin)) {
                const userIndex = users.findIndex(u => u.name === name);
                if (userIndex !== -1) {
                    users[userIndex].balance += amount;
                    console.log(`$${amount} added to the balance of "${name}".`);
                    return users[userIndex].balance;
                } else {
                    console.log("Error: User not found after successful login.");
                    return null;
                }
            } else {
                console.log(`Could not add money. Login failed for user "${name}".`);
                return null;
            }
        },
        checkBalance: function (name, pin) {
            if (this.loginUser(name, pin)) {
                const user = users.find(u => u.name === name);
                if (user) {
                    console.log(`Balance of "${name}": $${user.balance}`);
                    return user.balance;
                } else {
                    console.log("Error: User not found after successful login.");
                    return null;
                }
            } else {
                console.log(`Could not retrieve balance. Login failed for user "${name}".`);
                return null;
            }
        },
        sendMony: function (name, pin, mony, ToName) {
            const fee = 15;
            if (this.loginUser(name, pin)) {
                const sender = users.find(u => u.name === name);
                const receiver = users.find(u => u.name === ToName);
                if (!sender) {
                    console.log("Sender user not found");
                    return;
                }
                if (sender.balance <= mony + fee) {
                    console.log("Not enough amount for send mony ");
                    return;
                }

                if (!receiver) {
                    console.log("send mony user not found");
                    return;
                }

                if (receiver) {
                    sender.balance -= mony + fee;
                    receiver.balance += mony;
                }
                processingFee.push(fee);
                console.log(`${ToName} user send mony ${mony} successfully form ${name}`);

                // Record transaction for sender
                if (!transactionHistory[name]) {
                    transactionHistory[name] = [];
                }
                transactionHistory[name].push({ type: "send", recipient: ToName, amount: mony, fee: fee, timestamp: new Date() });

                // Record transaction for receiver
                if (!transactionHistory[ToName]) {
                    transactionHistory[ToName] = [];
                }
                transactionHistory[ToName].push({ type: "receive", sender: name, amount: mony, timestamp: new Date() });

                return receiver, sender, processingFee;

            }

        },
        getProcessingFees: function () {
            return processingFee; // Provide a method to access the fees
        },
        getTransactionHistory: function (name, pin) {
            if (this.loginUser(name, pin)) {
                return transactionHistory[name] || [];
            } else {
                console.log(`Could not retrieve transaction history. Login failed for user "${name}".`);
                return null;
            }
        }
    };
})();
console.log(userDatabase.registerUser("Nadim", 1969));
console.log(userDatabase.registerUser("mostofa", 6119));
console.log(userDatabase.registerUser("java", 1948));

console.log(userDatabase.loginUser("Nadim", 1969));
// console.log(userDatabase.loginUser("Nadim", 1987)) //undefined

userDatabase.addMony("Nadim", 1969, 1400);
userDatabase.addMony("mostofa", 6119, 600);
// userDatabase.addMony("js", 1969, 1400) // user not found


userDatabase.checkBalance("Nadim", 1969); //1400


userDatabase.sendMony("mostofa", 6119, 200, "Nadim");
userDatabase.sendMony("mostofa", 6119, 100, "Nadim");

//send mony then check balance
userDatabase.checkBalance("Nadim", 1969);
userDatabase.checkBalance("mostofa", 6119);


console.log("processing fee for company:", userDatabase.getProcessingFees());
console.log("Nadim's transaction history:", userDatabase.getTransactionHistory("Nadim", 1969));
console.log("Mostofa's transaction history:", userDatabase.getTransactionHistory("mostofa", 6119));