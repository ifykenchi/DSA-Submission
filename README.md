### Solution

## To optimize the solution we were given, I implemented sum.

## Since we are looking for the sub array with equal occurence of x and y, then the difference between their number of occurrence will be zero.

## First I get the first occurence of x or y as the start index.

## Then I loop through the array and add 1 to the sum whenever the element is x and -1 whenever the element is y.

## Finally I set the end index to the current index whenever sum strikes zero during the iteration.

## My result is the difference between the start index and end index plus one.
