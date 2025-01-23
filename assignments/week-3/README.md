<a href="./">
  <h1 align="center">Week - 3</h1>
</a>

<p align="center">
  Welcome to my Week Three Assignments repository! Here, you'll find solutions to Javascript challenges. 
</p>

<br>

<p align="center">
  <a href="#1-conditionals"><strong>Conditionals</strong></a> ·
  <a href="#2-loops"><strong>Loops</strong></a> ·
  <a href="#3-arrays"><strong>Arrays</strong></a> 
</p>

</br>

### 1. Conditionals

#### [Guest List Update](./conditionals/guest-list-update.js)

You are organizing a party and have a list of invited guests. But just before the party starts, a new friend decides to join. You need to add them to the guest list.

Create a function that adds a new guest to the guest list and returns the updated list.

#### [Find Largest Number](./conditionals/find-largest-number.js)

You are given three numbers. Determine the largest among them.

Write a function that takes three numbers and returns the largest using if-else.

#### [Voting Eligibility](./conditionals/voting-eligibility.js)

You need to determine if a person is eligible to vote (age 18 or above).

Write a function that checks if a person is eligible to vote and returns "Eligible" or "Not Eligible".

#### [Grade Calculator](./conditionals/grade-calculator.js)

Given a student’s marks, determine their grade based on this scale:

- 90+ → A  
- 80-89 → B  
- 70-79 → C  
- 60-69 → D  
- Below 60 → F  

Write a function that returns the corresponding grade using if-else.

#### [Leap Year Checker](./conditionals/leap-year-checker.js)

A leap year is divisible by 4, but not by 100 unless also divisible by 400.

Write a function to check if a year is a leap year.

#### [Traffic Light Actions](./conditionals/traffic-light-actions.js)

You need to determine what action to take based on traffic light colors:

- "Red" → Stop  
- "Yellow" → Slow Down  
- "Green" → Go  
- "Blue" → Invalid Color  

Write a function that uses switch-case to return the correct action.

#### [Day of the Week](./conditionals/day-of-the-week.js)

Given a number (1-7), return the corresponding day of the week.

Write a function that uses switch-case to return the day name for valid inputs otherwise "Invalid Day".

#### [Number Classification](./conditionals/number-classification.js)

Determine if a number is positive, negative, or zero.

Write a function that uses if-else to classify a number.

#### [Temperature Converter](./conditionals/temperature-converter.js)

Given a temperature and a scale ("C" or "F"), convert it to the other scale.

Write a function that uses switch-case to convert temperature.

#### [Basic Calculator](./conditionals/basic-calculator.js)

Create a basic calculator that performs +, -, *, / based on user input.

Write a function that uses switch-case to perform arithmetic operations.  Handle the edge case of “Cannot divide by zero”.

#

### 2. Loops

#### [Gift Distribution](./loops/gift-distribution.js)

You have a pile of gifts, and you want to give each of your friends one gift at a time. You keep giving them gifts until they all get one.

Write a function to distribute gifts to your friends one by one. It should stop once all your friends have received a gift.

#### [Apple Counter](./loops/apple-counter.js)

You have a basket full of apples. You need to count how many apples are in the basket, but you don’t know the exact number. Each time you pick an apple, you count one. Your task is to count how many apples are in the basket.

Create a function that counts the number of apples in the basket using a loop.

#### [Chocolate Box Counter](./loops/chocolate-box-counter.js)

You're packing chocolate bars into gift boxes. Each box needs to have the same number of chocolate bars. You need to find out how many boxes of chocolates you'll have after packing the bars.

Create a function that counts how many boxes you need based on the total number of chocolate bars and the number of chocolate bars per box, using a loop.

#### [Water Bottle Filler](./loops/water-bottle-filler.js)

You're preparing for a picnic and need to fill several water bottles. Each bottle requires a different amount of water, but you're going to fill them one by one. How do you track the amount of water you're adding to each bottle?

Create a function that takes an array of water amounts (in liters) for each bottle and adds them up. The function should return the total amount of water you've filled in all the bottles.

#### [Step Counter](./loops/step-counter.js)

You're tracking the number of steps you take during a workout. Each time you take a step, you want to count it. You keep stepping until you've reached a certain number of steps.

Create a function that uses a loop to count the number of steps during a workout. The loop should continue until you reach the target step count.

#### [Workday Counter](./loops/workday-counter.js)

You're planning a week's schedule and need to count the days you are working. You have an array where each element represents a day of the week. How can you calculate how many days you are working?

Create a function that takes an array of days (e.g., `["Monday", "Tuesday", "Friday"]`) and returns the number of days you're working. "Saturday" and "Sunday" are not working days.

#### [Star Counter](./loops/star-counter.js)

You have multiple levels of stars to count. Each level contains a certain number of stars. How many total stars are there?

Create a function that takes an array of arrays (representing the number of stars in each level) and returns the total number of stars.

#### [Shopping Cart Total](./loops/shopping-cart-total.js)

You're shopping for groceries and want to know the total cost of all the items in your cart. You have an array of item prices.

Create a function that takes an array of item prices and returns the total cost.

#### [Shiny Diamond Rug](./loops/shiny-diamond-rug.js)

You’ve been tasked with designing the perfect shiny diamond rug for Cursh’s room. They love stars, and you’ve decided to make a sparkling pattern using them. You need to help them create this rug, where the stars are arranged in the shape of a diamond! 💥✨

Create a function `shinyDiamondRug(n)` that prints a shiny diamond shape made of stars. The number `n` represents the size of the diamond, with the middle of the diamond having `2n - 1` stars.

### Important Rules:
1️⃣ Each line **must not** have trailing spaces.  
2️⃣ The output **must not** have an extra newline at the end.

#### Example:
For `n = 4`, the output will look like:

``` 
   *   
  ***  
 ***** 
*******
 ***** 
  ***  
   *
```

#### [Inverted Mountain](./loops/inverted-mountain.js)

You're on a camping trip with your friends, and you all want to set up a starry mountain as a symbol of your adventure. To make things more fun, you decide to use stars to draw an inverted mountain pattern. The challenge: print it so everyone can admire the majestic mountain shape! ⛰️⭐

Create a function `invertedMountain(n)` that prints an inverted mountain made of stars. The number `n` represents the number of stars at the top, and the pattern should reduce by one star each line until only one star is left at the bottom.

#### Example:
For `n = 4`, the output will look like:

```
****
***
**
*
```

#

### 3. Arrays

#### [Guest List Update](./arrays/guest-list-update.js)

You are organizing a party and have a list of invited guests. But just before the party starts, a new friend decides to join. You need to add them to the guest list.

Create a function that adds a new guest to the guest list and returns the updated list.

#### [Candy Jar](./arrays/candy-jar.js)

You have a jar full of candies, but your little sibling keeps eating the last one! Your job is to remove the last candy from the jar.

Create a function that removes the last candy from the jar and returns the updated jar.

#### [Puppy Queue](./arrays/puppy-queue.js)

A puppy named Max was playing in the park, but he went to the first position of the queue instead of waiting at the end. You need to add Max at the beginning of the queue.

Create a function that adds a puppy to the front of the queue and returns the updated queue.

#### [School Bus Queue](./arrays/school-bus-queue.js)

A school bus has students inside, but the first student in line needs to get off at the next stop. Remove the first student from the bus.

Create a function that removes the first student from the bus and returns the updated list.

#### [Bookshelf Organizer](./arrays/bookshelf-organizer.js)

Your bookshelf is a mess! You need to arrange the books in alphabetical order.

Create a function that sorts the books alphabetically and returns the updated list.

#### [Healthy Food Filter](./arrays/healthy-food-filter.js)

You have a list of food items, but you want to keep only the healthy ones. Remove all items that contain "Burger".

Create a function that removes unhealthy food items (those containing "Burger") and returns the updated list.

#### [Find Phone Index](./arrays/find-phone-index.js)

You lost your phone in a list of items. Find the index of "Phone".

Create a function that finds the index of "Phone" in the list of items and returns the index.

#### [Love Letter Editor](./arrays/love-letter-editor.js)

You wrote a love letter, but you want to insert your partner's name at the beginning of the message.

Create a function that inserts the partner's name at the start of the message and returns the updated message.

#### [VIP Queue Manager](./arrays/vip-queue-manager.js)

A new VIP guest arrives at the club and should be at the front of the queue. Add them to the beginning of the list.

Create a function that adds a VIP guest to the front of the queue and returns the updated list.

#### [Movie List Counter](./arrays/movie-list-counter.js)

You and your friends are making a list of movies to watch. You want to check how many movies are in the list.

Create a function that returns the number of movies in the movie list.