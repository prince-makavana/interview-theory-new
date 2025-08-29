### Saleshandy
2) Horizontal scaling and vertical scaling?
3) How to manage database modification in multitenancy on production? 
4) How to implement notification in nodejs?
# Ans.- Using firebase.
5) how to find query execution time?

### Remitbee - 1
- typeof null
- typeof {name: 'prince'} === {name: 'prince'}
- reverse
- closure
- arr[10] = 2 then check length of array
- [1,2,3,4].slice(0,2) - [1,2]

### Tekdi technologies
- What is stream in nodejs?
- What is feature of nodejs?
- Login send otp, verify otp localy(no need to use DB)

### Remitbee - 2
- How can you get fastest response from one API there many APIs and all APIs doing same work and send same response
- Transaction
- Circular dependency
- Recursive ======================================================>>>>>>>>>>>>>>>>>>>>
 
### Harman
- Promise.all
- Promise.allSettled
- Promise.race
- Promise.any

- this keyword

- object desctructuring = {name, email} = user
- indexing
- primary key
- foreign key

- arrow function -> Write javascript function in short way
- this keyword inside arrowfunction -> 

- what is map
- what is filter

- lambda -> how can you call lambda function
- API gateway


### GENERAL
- What is memoization?
- ACID property
- transaction in db -- commit, rollback
- streams

### TCS
1) How do we use multi core in nodejs?
2) What is cold start?
3) What is process.nexttick()?
- process. nextTick is used to ensure an asynchronous operation is completed before other asynchronous operations begin. For example, it can guarantee that an event is emitted or a callback is executed after an operation is completed, but before other events or callbacks are processed

1) What is authentication?
2) Code coverage

### Valuelabs
1) What is the diff accesstoken and refresh token
2) what is the diff javascript and nodejs

### hexaware/mobiquity
1) What is diff promises and callback
2) What is the limitation of aws
3) What is trigger in db

### Tek system
1) types of streams
2) which aws module that is not specific to the region - Route 53 and CloudFront
3) what is NPM

how can i do log after send response
populate in mongoose

### Shree maruti
1) Difference between thread pool and event loop?
2) How to change expiration time of jwt token?
3) what is singleton class?

### valuelabs

singleton design pattern
**solid principals** - SOLID is a set of five design principles that help software developers create maintainable, scalable, and flexible code.
**sql injection** - most common hacking technique for destroy database
**sharding**
**fork**

### Pure software

how can we upload 100s GB file using API?
how can we handle crores request? - load balancer
how can we implement horizontal scaling and vertical scaling?
how can we deploy our app without downtime?

congnizant
- Promise

## Poonawalefincorp
1) What is microservice architecture?
2) How can we implement/split e-commerce website with microservice architecture?
3) What is middleware?
4) Ouput of below code
var x = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    x++;
    console.log(x);
  }, 1000);
}
5) Output of below code? and what is that?
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2]
console.log(arr3)
6) Have you ever work with nest.js?
7) Have you experince in typescript?
8) What is the difference between microservice and monolithic architecture?
9) Javascript is single threaded or multi threaded?
10) Javascript is single threaded then how its works?
11) What is Higher order function?

## Davies
1) How can we invalidate token?
- Blacklist
2) If we remove token from redis then user pass it to API it will work?
3) What is the difference between SNS and SQS?
4) what is the difference between RESTAPI and SOAP?
5) How we can constantly

## hein+fricke
1) What is Dockerhub?
- Docker Hub provides instant access to pre-built, ready-to-use container images.
2) What is VPC?
3) What is containerization?
- In Docker, a container is a runnable instance of a Docker image
4) What is ECS and EKS?
5) How to call lambda functions?
- API Gateway, S3, AWS CLI, AWS SDK, SNS, SQS
6) What is ELB?
- It's a service that automatically distributes incoming application traffic across multiple targets
7) What is volume in docker?
8) What is kinesis?
9) How can I implement load balancer in docker?
- nginx, 

## Turing
1) Why lambda service called serverless?
2) What is the usecase of IAm?
3) [1,1,2,2,2,3,4,4,5,5,5,5,6] give count of number of n with better time and space complexity.
4) Create one api gateway integrate it with lambda functions and return simple string.
5) What is the use of subnet in VPC?
6) Binary search

## LTIMindtree 26/08/2025 | First Round
1) What is the difference between worker thread and child processes?
2) How to optimize docker?
3) What is the difference between docker image and container?
4) How to add alarm on cloudwatchlogs while add throttling on dynamodb?
5) Large JSON coming so how can we handle it in nodejs? // LEARN .pipe
6) What is difference between PM2 and cluster module?

## LTIMindtree 29/08/2025 | Second Round
1) Output of below code
- [] === []
- typeof [] + []

2) Can we trigger lambda from s3?
3) If we are reading file same time another request is come in same API so will be hold another request since first request busy with reading large file?
4) Use of Process?
5) What is the difference between class and interface interms of types?
6) How many different types is there in typescript with compare to javascript?
7) What is the tsconfig in typescript?
8) We have implemented interface in typescript then we will compile it to javascript then how it will convert?
9) libuv
10) How can we find os of project in nodejs?
11) What is the maximum and minimum timeout of lambda function?
12) How much large file we can upload in s3?
13) How many ways we can upload file in s3 using programatically?

Ex.
---------

fs.createReadStream('large_data.json')
  .pipe(JSONStream.parse('*')) // Parse each element of a root array
  .on('data', function (data) {
    // Process each JSON object as it becomes available
    console.log('Received object:', data);
  })
  .on('end', function () {
    console.log('Finished processing JSON stream.');
  })
  .on('error', function (err) {
    console.error('Error during JSON parsing:', err);
  });