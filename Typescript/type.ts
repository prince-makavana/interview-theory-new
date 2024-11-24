/**
 * Generic type
 */

function identity<T>(value: T): T {
    return value;
}

const numberIdentity = identity(10); // numberIdentity: number
const stringIdentity = identity("Hello"); // stringIdentity: string
