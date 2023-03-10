const flowers = ["rose" , "star gazer" , "tulips" , "sun flower"];

// count the length of the strings inside the Array
for(i = 0;i<flowers.length;i++){
    console.log(flowers[i].length)
}

// During debug found that during console.log() undefined error was triggered by flowers[0].lentgh which was spelled wrong
// The loop executes twice only since the array has only one element due to the placement of qoutation ("") was only at the start and end of the list of flowers
// and termination condition of the for loop was set to i<=flowers.lenght causing it to loop one more time after all the elements was parsed
// The output was repeated at the first element due to the index was set to 0 (flowers[0]) instead of i (flowers[i])