# There are several data patterns in software development, each serving different purposes.
## Some common ones include:

1. Singleton Pattern
2. Factory Pattern
3. Prototype Pattern
4. Builder Pattern
5. Observer Pattern
6. Decorator Pattern
7. Adapter Pattern
8. Strategy Pattern
9. Repository Pattern
10. Mediator Pattern

## Data Patterns with examples below

1. Singleton Pattern
- Ensures only one instance of a class exists and provides a global point of access.

```
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  showMessage() {
    console.log("Singleton Instance");
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true (both are the same instance)
```

2. Factory Pattern
- Creates objects without specifying the exact class of the object.

```
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

class CarFactory {
  static createCar(brand, model) {
    return new Car(brand, model);
  }
}

const car1 = CarFactory.createCar("Toyota", "Corolla");
console.log(car1); // Car { brand: 'Toyota', model: 'Corolla' }
```

3. Prototype Pattern
- Creates new objects using an existing object as a prototype.

```
const carPrototype = {
  drive() {
    console.log(`${this.brand} is driving`);
  }
};

const car1 = Object.create(carPrototype);
car1.brand = "Toyota";
car1.drive(); // Toyota is driving
```

4. Builder Pattern
- Used to construct complex objects step by step.

```
class Car {
  constructor() {
    this.brand = "";
    this.model = "";
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  build() {
    return this.car;
  }
}

// Usage
const car = new CarBuilder().setBrand("Tesla").setModel("Model X").build();
console.log(car); // Car { brand: 'Tesla', model: 'Model X' }
```

5. Observer Pattern
- Allows objects (observers) to listen for state changes in another object (subject).

```
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log(`Received: ${data}`);
  }
}

// Usage
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Hello Observers!");  
// Output: Received: Hello Observers!
//         Received: Hello Observers!
```

6. Decorator Pattern
- Dynamically adds behavior to objects.

```
class Car {
  drive() {
    console.log("Driving a basic car");
  }
}

class CarDecorator {
  constructor(car) {
    this.car = car;
  }

  drive() {
    this.car.drive();
    console.log("Adding sport mode!");
  }
}

// Usage
const basicCar = new Car();
const sportsCar = new CarDecorator(basicCar);

sportsCar.drive();
// Driving a basic car
// Adding sport mode!
```

7. Adapter Pattern
- Allows incompatible interfaces to work together.

```
class OldSystem {
  request() {
    return "Data from old system";
  }
}

class NewSystem {
  getData() {
    return "Data from new system";
  }
}

class Adapter {
  constructor(oldSystem) {
    this.oldSystem = oldSystem;
  }

  getData() {
    return this.oldSystem.request();
  }
}

// Usage
const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);

console.log(adapter.getData()); // Data from old system
```

8. Strategy Pattern
- Defines a family of algorithms and lets clients choose one at runtime

```
class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  pay(amount) {
    this.strategy.pay(amount);
  }
}

class CreditCardPayment {
  pay(amount) {
    console.log(`Paid $${amount} using Credit Card`);
  }
}

class PayPalPayment {
  pay(amount) {
    console.log(`Paid $${amount} using PayPal`);
  }
}

// Usage
const creditCard = new PaymentContext(new CreditCardPayment());
creditCard.pay(100); // Paid $100 using Credit Card

const paypal = new PaymentContext(new PayPalPayment());
paypal.pay(200); // Paid $200 using PayPal
```

9. Repository Pattern
- Separates business logic from database logic

```
class UserRepository {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getAllUsers() {
    return this.users;
  }
}

// Usage
const userRepo = new UserRepository();
userRepo.addUser({ name: "John", age: 30 });
console.log(userRepo.getAllUsers()); // [ { name: 'John', age: 30 } ]
```

10. Mediator Pattern
- Encapsulates how a set of objects interact

```
class Mediator {
  constructor() {
    this.users = [];
  }

  register(user) {
    this.users.push(user);
    user.mediator = this;
  }

  sendMessage(message, sender) {
    this.users.forEach(user => {
      if (user !== sender) {
        user.receiveMessage(message);
      }
    });
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

  sendMessage(message) {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receiveMessage(message) {
    console.log(`${this.name} received: ${message}`);
  }
}

// Usage
const mediator = new Mediator();
const user1 = new User("Alice");
const user2 = new User("Bob");

mediator.register(user1);
mediator.register(user2);

user1.sendMessage("Hello!"); 
// Alice sends: Hello!
// Bob received: Hello!
```

## Conclusion
- Each of these patterns serves a unique purpose in structuring your code for scalability, maintainability, and reusability.
