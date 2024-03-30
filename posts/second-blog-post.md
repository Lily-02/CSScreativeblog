---
title: Week 2 🕊
published_at: 2024-03-06
snippet: Here are some of my sketches from coding classes
disable_html_sanitization: true


---

# Homework s2
- To refactor the code to use a Faller class, we'll define a class that encapsulates the properties and behaviors of a "faller" object. This will make the code more organized and easier to manage, especially as functionality grows. Below are the steps I used to refactor the code:
## Step 1:
-  Define the “Faller” Class
-	Objective: Create a class that encapsulates the properties and methods related to a "faller".
-	Implementation: The Faller class is defined with a constructor that initialises the object's properties, such as colour gradients (colours), starting points (start_points), ending points (end_points), curve modifiers (curves), and animation phase (phase). Additionally, the class includes update and display methods for animating and rendering the object.

![re1](/23/re1.png)

## Step 2: Implement the “update” method
-	Objective: Move the logic for updating a "faller's" phase and determining its completion status into a method within the class.
-	Implementation: The “update” method increases the phase of the "faller" and checks if the animation has completed (i.e., if phase is greater than 1). It returns a Boolean indicating whether the "faller" should continue being updated or be removed.

![re2](/23/re2.png)

## Step 3: Implement the “display” method
-	Objective: Encapsulate the drawing logic for a "faller" within the class.
-	Implementation: The display method uses p5.js functions to draw the "faller" on the canvas based on its current properties, such as colour gradients and positions determined by its phase and curves.

![re3](/23/re3.png)

## Step 4: Refactor global code to use the “Faller” class 
-	Objective: Modify the setup and main animation loop to create and manage instances of the Faller class instead of using a loosely structured object.
-	Implementation:
In the “setup” function, initial setup steps remain mostly unchanged but are simplified to reflect the class-based approach.

In the “draw” loop, instead of manually copying properties and creating new "faller" objects, new instances of the “Faller” class are created with the new keyword. This approach leverages the constructor to properly initialize each new "faller".

The management of the “fallers” array is streamlined by using the filter method to simultaneously update and filter out completed "fallers".

![re4](/23/re4.png)

## Step 5: Test and Verify:
-	Objective: Ensure the refactored code behaves similarly to the original script, with all "fallers" animating as expected.
-	Implementation: Run the refactored script in a p5.js environment and observe the behaviour of the "fallers". Verify that new "fallers" are created periodically, animate across the screen, and are removed once their animation completes.

<iframe src="https://editor.p5js.org/Lily-02/full/8uCwPQU-W"><width="500" height="400"></iframe>

## Rafeal works:

<iframe src="https://editor.p5js.org/Lily-02/full/BK0KFA8sS"></iframe>

In this work, I replicate the nested shrinking squares effect. This effect begins with the generation of an initial square that starts to shrink until its dimension is reduced by a threshold of 100 pixels. At this point, I will generate another square of the original size, and it also begins to shrink. The loop runs infinitely, creating the nested shrinking squares effect. All squares are filled with grey colour with different darkness.
To implement this effect, I find the most challenging parts are:
-	How to use class in my code
-	How to make the squares shrink
-	How to nest the squares and make the infinite shrinking effect

1.	How to use class in my code:
Since the effect contains multiple squares, I can create a “square” class to initialise, manage and shrink each square. The attributes for my “square” class include: 
-	“size”: the current size of the square (this will change dynamically when the square starts to shrink)
-	“shrinkSpeed”: the speed at which the square shrinks 
-	“grey”: the square’s grey colour value

![re5](/23/re5.png)

2.	How to make the squares shrink:
-	To shrink a square, I just need to update its “size” attribute with the shrink speed. The shrink() method is defined as below:

![re6](/23/re6.png)

3.	How to nest the squares and make the infinite shrinking effect:
-	I maintain the squares in an array, and loop through the array to handle the shrinking, colouring, and drawing of each square.
-	Whenever the biggest square reduces its size by 100 pixels, I will generate a new square with a random grey colour and add it to the array.
-	If a square is complete shrunk (its size is less than 0), I will remove the square from the array.
-	The above logics are shown in the below code:

![re7](/23/re7.png)