/**
 * Write a short program that prints each number from 1 to 100 on a new line.
 * For each multiple of 3, print "Fizz" instead of the number.
 * For each multiple of 5, print "Buzz" instead of the number.
 * For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
 */

for (i = 1; i < 101; i++) {
  console.log(
    i % 3 == 0 ? (i % 5 == 0 ? 'FizzBuzz' : 'Fizz') : i % 5 == 0 ? 'Buzz' : i
  );
}

//for(i=1;i<101;i++){console.log(i%3==0?i%5==0?'FizzBuzz':'Fizz':i%5==0?'Buzz':i)}
// 12/20

//for(i=1;i<101;i++){b=i%5==0?'Buzz':'';console.log(i%3==0?'Fizz'+b:b?b:i)}
// 12.7/20
// 13.8 is highest score so far
