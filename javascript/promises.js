
/**
 * 
 * All TYPE OF PROMISES OBSERVATION
 * 
 * Promise.all - return error only | return all resolved promises
 * Promise.any - return if any one first promises are resolve
 * Promise.allSettled - return all promises with status if resolved or rejected
 * Promise.race - What ever first promise resolve/rejected return that
 * 
 * Promise status as below
 * - Pending
 * - Fulfilled
 * - Rejected
 * 
 */
const quickPromise = new Promise((resolve, reject) => {
  reject('Quickly promise data resolved.')
})

const slowlyPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Slowly promise data resolved.')
  }, 1000);
})

const rejectionPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Rejected promise.')
  }, 500);
})

Promise.race([slowlyPromise, quickPromise, rejectionPromise])
  .then((value) => {
    console.log('===RESOLVED===', value);
  })
  .catch((error) => {
    console.log('===REJECTED===', error);
  }).finally(() => {
    console.log('===FINALLY====');
  })