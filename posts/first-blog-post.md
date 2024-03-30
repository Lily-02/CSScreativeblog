---
title: Week 1 🕊
published_at: 2024-03-06
snippet: Here are some of my sketches from coding classes
disable_html_sanitization: true


---


# Homework s1:
- Create a grid
- Note: The biggest problem I encountered when implementing the grid was how to calculate the y position of each row, so that the rows are distributed evenly across the canvas height
<iframe src="https://editor.p5js.org/Lily-02/full/7msbr2Kcg"width="500" height="400"></iframe>

## Rafeal works:

- Note: There are 3 main problems I encountered when implementing the ball bouncing effect. The first problem was how to make the ball move. I implemented it by updating the ball's x and y positions in each frame with a constant velocity. The second problem is how to detect if the ball hits a wall. I use the ball's x and y position, and the box's x and y position to check for collision. The last problem is how to change the colour of the ball, the box, and the margin when the ball hits a wall. The colour changing is facilitated by function 'changeColors()', in which I assign a random colour to the ball, the box, and the margin. This function is called when the collision between the ball and the walls is detected.

Ask 
Step 1: Create rectangle have smaller dimension than the canvas
Step2: Create a circle located at random location inside the rectangle with diameter (duong kinh) = 50
Step3: Make the circle move inside the rectangle, and it will bounce off when it hit any edge rectangle

velocity: van toc. for ex: x-vel / y+vel (x=y=4) : diagonal(tao ra chuyen dong theo duong cheo)
If (x=3, y=7), toc do di xuong nhanh hon

bounce off: doi dieu (vel * -1: doi chieu)

- Draw function:
Xac dinh diem x/y cua rec
for ex: Height - (2* margin)

<iframe src="https://editor.p5js.org/Lily-02/full/W9T27T9gu"width="500" height="400"></iframe>

