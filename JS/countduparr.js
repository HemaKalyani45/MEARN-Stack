var arr = [1, 2, 2, 2, 3, 4, 4, 5, 1];

var seen = [];
var duplicates = [];

for (let i = 0; i < arr.length; i++) {
  if (seen.includes(arr[i])) {
    
    if (!duplicates.includes(arr[i])) {
      duplicates.push(arr[i]);
    }

  } else {
    seen.push(arr[i]);
  }
}

console.log(duplicates);        // [2, 4, 1]
console.log(duplicates.length); // 3

