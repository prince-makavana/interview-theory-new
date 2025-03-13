/**
 * 
 * 1. What/How/Why is the use of generic?
 * 2. Difference between any and unknown, unknown and never?
 * ANS any disables type checking, while unknown enforces it, reducing runtime errors
 * 3. What is the difference between interface and type?
 * 4. What is the difference between interface and abstract?
 * 
 * 
 * 
 */

/**
 * Generic type
 */

function identity<T>(value: T): T {
    return value;
}

const numberIdentity = identity(10); // numberIdentity: number
const stringIdentity = identity("Hello"); // stringIdentity: string

/**
 * Define type
 */

type Person = {
    name: string;
    age: number;
    height?: number; // height is optional
};

const people: Person[] = [
    { name: 'ram', age: 30 },
    { name: 'ram', age: 30, height: 6 },
];