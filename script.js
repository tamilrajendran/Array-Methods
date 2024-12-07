/*
//without mapping
let arr = [12,13,14,15]
const res = []
for(let i = 0;i<arr.length;i=i+1)
{
    res.push(arr[i]*2)
}
console.log(res);
*/

/*
// annonyomus function
 const array = [12,13,14,15]
 const result = array.map(function(ele){
    return ele*2
 })
 console.log(result);
 */

 /*
 //Arrow Function
 const array = [12,13,14,15]
 const result = array.map((ele)=>{
    return ele*2
 })
 console.log(result);
 */

 /*
 //Arrow Function with single line
const array = [12,13,14,15]
const result = array.map((ele)=>ele*2)
console.log(result);
*/

//Example
// const fruits = ["apple","mango","orange"]
// const result = fruits.map((ele)=>ele+"s")
// console.log(result);

// //other method
// const fruits = ["apple","mango","orange"].map((ele)=>ele+"s")
// console.log(fruits);


//Filter Examples
// print the element in an array which are greater than 3

const great = [1,2,3,4,5,6,7,8]
const res = great.filter((ele)=>ele>3)
console.log(res);

const num = [1,2,3,4,5,6,7,8]
const num1 = num.filter((ele)=>{
   return ele>3
})
console.log(num1);
