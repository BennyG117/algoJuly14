/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution

  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order

  Hard Bonus: make it O(n) time
*/

const numbers1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const numbers2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

// 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
const numbers3 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
const k3 = 3;
const expected3 = [6, 3, 2];

/**
 * Returns the k most frequently occurring numbers from the given unordered
 * numbers.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered.
 * @param {number} k Represents the amount of numbers that should be returned.
 * @returns {Array<number>} The k most frequently occurring numbers.
 */
//! function kMostFrequent(numbers, k) {
// JavaScript implementation to find
// K elements with max occurrence.

/*****************************************************************************/
//! Alt Solution 0: 
function kMostFrequent(numbers, k) {
const frequencyTable = {};
    for(const num of numbers) {
        if (frequencyTable[num] === undefined) {
            frequencyTable [num] = 0 
            console.log(frequencyTable);
        }
    frequencyTable[num]++;
    
    }
    const keyNumbers = Object.keys(frequencyTable).map(Number);
    keyNumbers.sort((a,b) => frequencyTable[b] - frequencyTable[a]);
    return keyNumbers.slice(0, k);

}

console.log(kMostFrequent(numbers1, k1));
console.log("======================\n");

console.log(kMostFrequent(numbers2, k2));
console.log("======================\n");

console.log(kMostFrequent(numbers3, k3));
console.log("======================\n");





/*****************************************************************************/
//! Alt Solution - In Progress:
// function print_N_mostFrequentNumber(arr, N, K) {

//     let mp = new Map();

//     // Put count of all the
//     // distinct elements in Map
//     // with element as the key &
//     // count as the value.
//     for (let i = 0; i < N; i++) {

//         // Get the count for the
//         // element if already present in the
//         // Map or get the default value which is 0.

//         if (mp.has(arr[i])) {
//             mp.set(arr[i], mp.get(arr[i]) + 1)
//         } else {
//             mp.set(arr[i], 1)
//         }
//     }
// // Create a list from elements of HashMap
// let list = [...mp];

// // Sort the list
// list.sort((o1, o2) => {
//     if (o1[1] == o2[1])
//         return o2[0] - o1[0];
//     else
//         return o2[1] - o1[1];
// })

// // document.write(K + " numbers with most occurrences are: ");
// for (let i = 0; i < K; i++)
//     // document.write(list[i][0] + " ");
//     if(list[i][0] + " ");
// }

// // Driver's Code
// let arr = [3, 1, 4, 4, 5, 2, 6, 1];
// let N = arr.length;
// let K = 2;

// // Function call
// console.log(print_N_mostFrequentNumber(arr, N, K));



/*****************************************************************************/
//! Alt Solution 2: 
//! function kMostFrequent2(numbers, k) 
    //declare a variable to track the frequency of an element
    
    //for loop to iterate through the array of numbers
    
    //nested for loop to iterate after identifying the current number, so we can compare to the rest after it?
    
    //some type of count variable to track numbers matching current number?
    
    //then go back to initial loop and begin iterating through the next number to see if it has any matches now that the current number is changed
    
    //once we have identified numbers with matches declare that as a list( maybe a key value pair?)
    
    //then depending on k value select "k number of" results from the matches
    
    //add if statement depending on k, pick the k number of greatest count
    
    // log results =  expected numbers in [,]
/*****************************************************************************/

console.log("*************************************************\n");
//! Alt Solution 3: 
// function kMostFrequent3(numbers, k) 

function print_N_mostFrequentNumber2(arr, N , K)
{
 
    // HashMap to store count of the elements
    var elementCount = new Map();
     
    for(let i=0;i<N;i++){
        if(elementCount.has(arr[i])){
            var temp = elementCount.get(arr[i]);
            elementCount.set(arr[i], temp+1);
        }
        else{
            elementCount.set(arr[i], 1);
        }
    }
     
    // Array to store the elements according
    // to their frequency
    var frequency = new Array(N+1);
     
    for(let i=0;i<=N;i++){
        frequency[i] = new Array();
    }
     
    // Inserting elements in the frequency array
    for (const [key, value] of elementCount.entries()) {
        frequency[value].push(key);
    }
     
    let count = 0;
    console.log(K + " numbers with most occurrences are:");
     
    for(let i=N;i>=0;i--){
        for(var j=frequency[i].length-1;j>=0;j--){
            count++;
            console.log(frequency[i][j]);
        }
        // if K elements have been printed
        if(count==K){
            return;
        }
    }
    return [];
}


// Function call
console.log(print_N_mostFrequentNumber2(arr = [ 3, 1, 4, 4, 5, 2, 6, 1 ], N = arr.length, K = 2));
console.log("===========================\n");


console.log(print_N_mostFrequentNumber2(arr = [1, 1, 1, 2, 2, 3], N = arr.length, K = 2));
console.log("===========================\n");

console.log(print_N_mostFrequentNumber2(arr = [0, 0, 0, 2, 2, 3], N = arr.length, K = 1));
console.log("===========================\n");

console.log(print_N_mostFrequentNumber2(arr = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6], N = arr.length, K = 3));
console.log("===========================\n");




// const numbers1 = [1, 1, 1, 2, 2, 3];
// const k1 = 2;
// const expected1 = [1, 2];
// // Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

// const numbers2 = [0, 0, 0, 2, 2, 3];
// const k2 = 1;
// const expected2 = [0];
// // Explanation: k being 1 means return the single most frequent element

// // 6 occurs 6 times, 3 occurs 3 times, 2 occurs 2 times, 1 occurs 1 time.
// const numbers3 = [1, 6, 3, 3, 6, 6, 3, 6, 2, 2, 6, 6];
// const k3 = 3;
// const expected3 = [6, 3, 2];