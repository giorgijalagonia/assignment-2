// 1. ფუნქცია, რომელიც პარამეტრად მიიღებს user - ების მასივს და დააბრუნებს ყველაზე პატარა ასაკის მქონე ადამიანის სახელს
const users = [{ name: 'Temo', age: 25 }, { name: 'Lasha', age: 21 }, { name: 'Ana', age: 28 }];

function youngestUser(users) {
    let youngest = users[0];

    for (let i = 1; i < users.length; i++) {
        if (users[i].age < youngest.age) {
            youngest = users[i];
        }
    }
    
    return youngest.name;
}

console.log(yzoungestUser(users));

// 2. ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს

const users = [{ name: 'Temo', age: 25 }, { name: 'Lasha', age: 21 }, { name: 'Ana', age: 28 }];

function createNewUser(user) {
    return {
        name: user.name,
        age: user.age
    };
}

const originalUser = { name: 'Temo', age: 25 };
const newUser = createNewUser(originalUser);

console.log(newUser); 
