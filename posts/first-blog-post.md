---
title: My coding blog 🕊
published_at: 2024-03-06
snippet: Here are some of my sketches from coding classes
disable_html_sanitization: true

---
# Homework s1:
- Create a grid
- Note: The biggest problem I encountered when implementing the grid was how to calculate the y position of each row, so that the rows are distributed evenly across the canvas height
<iframe src="https://editor.p5js.org/Lily-02/full/7msbr2Kcg" width="600" height="600"></iframe>

![yu](/24/yu.jpg)
## Rafeal works:

- Note: There are 3 main problems I encountered when implementing the ball bouncing effect. The first problem was how to make the ball move. I implemented it by updating the ball's x and y positions in each frame with a constant velocity. The second problem is how to detect if the ball hits a wall. I use the ball's x and y position, and the box's x and y position to check for collision. The last problem is how to change the colour of the ball, the box, and the margin when the ball hits a wall. The colour changing is facilitated by function 'changeColors()', in which I assign a random colour to the ball, the box, and the margin. This function is called when the collision between the ball and the walls is detected.
<iframe src="https://editor.p5js.org/Lily-02/full/W9T27T9gu"width="600" height="600"></iframe>

# Homework s2
- To refactor the code to use a Faller class, we'll define a class that encapsulates the properties and behaviors of a "faller" object. This will make the code more organized and easier to manage, especially as functionality grows. Below are the steps I used to refactor the code:
##Step 1:
-  Define the “Faller” Class
-	Objective: Create a class that encapsulates the properties and methods related to a "faller".
-	Implementation: The Faller class is defined with a constructor that initialises the object's properties, such as colour gradients (colours), starting points (start_points), ending points (end_points), curve modifiers (curves), and animation phase (phase). Additionally, the class includes update and display methods for animating and rendering the object.
![re1](/23/re1.png)
