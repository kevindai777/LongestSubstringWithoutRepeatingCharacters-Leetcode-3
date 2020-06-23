//Objective is to find the length of the longest substring without repeating characters in a string.

let string = "abcabcbb"


//O(n^2) solution that checks every possible substring for uniqueness

let ans = 0

for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
        if (isUnique(string, i, j)) {
            ans = Math.max(ans, j - i)
        }
    }
}

//In this function we create a set and continuously check for uniqueness of
//all elements using this set. We increment i and j as we check.
function isUnique(string, start, end) {
    let set = new Set()
    for (let i = start; i < end; i++) {
        if (set.has(string.charAt(i))) {
            return false
        }
        set.add(string.charAt(i))
    }
    return true
}

return ans


//O(n) solution that uses a sliding window approach (2 pointers)

let p1 = 0
let p2 = 0
let ans2 = 0
let hashSet = new Set()

//Here we have p2 as the pointer who moves the window forward if it is unique
//and p1 as the pointer if it is not unique.
while (p1 < string.length && p2 < string.length) {
    //If the hashset doesn't have it, move the second pointer up and add it to the set
    //Then, update the answer since we have a new unique substring
    if (!hashSet.has(string.charAt(p2))) {
        hashSet.add(string.charAt(p2++))
        ans2 = Math.max(ans2, p2 - p1)
    //We delete the element if it already exists to make sure it doesn't repeat
    //if we pass by it again
    } else {
        hashSet.delete(string.charAt(p1++))
    }
}

return ans2
