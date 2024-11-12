const marvel_heros= ["thor", "ironman", "spiderman" ]
const dc_heros= ["superman", "batman" ]

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);



// spread operator

const all_new_heros = [ ...marvel_heros , ...dc_heros]    // concat two strings 
console.log(all_new_heros);

const another_arrray = [ 1, 2, 3, [ 4, 5, 6] ,7 , [ 6, 7, [4, 5]]]   
const real_another_array = another_arrray.flat(Infinity)    // will concat all array in one single array

console.log(real_another_array);





//datascraping


console.log(Array.isArray("shresth"));   //-> false

console.log(Array.from("shresth"));    // to convert in array (any value)


console.log(Array.from({ name :"shresth"} ));   // will give empty array // intresting in 



// storing individual value in an array
let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2, score3));  // element can be of any type








