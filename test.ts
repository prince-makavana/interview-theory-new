interface User {
    name: string;
    age: number;
}

const userData: User[] = [{
    name: 'John',
    age: 30
}, {
    name: 'Prince',
    age: 26
}]

userData.map(val => {
    console.log(val.name)
    console.log(val.age)
}); // John
