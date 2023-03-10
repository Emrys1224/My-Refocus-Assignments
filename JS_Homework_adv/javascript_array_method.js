const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome"
];

let wordCount = {};

arr.forEach((word) => {
  if (word in wordCount) {
    wordCount[word]++;
    
  } else {
    wordCount[word] = 1;
  }
  
});

console.log(wordCount);