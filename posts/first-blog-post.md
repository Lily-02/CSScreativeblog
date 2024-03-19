---
title: My coding blog 🕊
published_at: 2024-03-06
snippet: Here are some of my sketches from coding classes
disable_html_sanitization: true

---
# Homework s1:
- Create a grid
- Note: The biggest problem I encountered when implementing the grid was how to calculate the y position of each row, so that the rows are distributed evenly across the canvas height
<iframe src="https://editor.p5js.org/Lily-02/full/7msbr2Kcg" width="2000" height="200"></iframe>

## Rafeal works:

- Note: There are 3 main problems I encountered when implementing the ball bouncing effect. The first problem was how to make the ball move. I implemented it by updating the ball's x and y positions in each frame with a constant velocity. The second problem is how to detect if the ball hits a wall. I use the ball's x and y position, and the box's x and y position to check for collision. The last problem is how to change the colour of the ball, the box, and the margin when the ball hits a wall. The colour changing is facilitated by function 'changeColors()', in which I assign a random colour to the ball, the box, and the margin. This function is called when the collision between the ball and the walls is detected.

<iframe src="https://editor.p5js.org/Lily-02/full/W9T27T9gu"width="200" height="200"></iframe>

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

## Step 5: Test and Verify
-	Objective: Ensure the refactored code behaves similarly to the original script, with all "fallers" animating as expected.
-	Implementation: Run the refactored script in a p5.js environment and observe the behaviour of the "fallers". Verify that new "fallers" are created periodically, animate across the screen, and are removed once their animation completes.

<iframe src="https://editor.p5js.org/capogreco/full/9yDsxLFYZ"width="200" height="200"></iframe>

