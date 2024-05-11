---
title: Week 4 🕊
published_at: 2024-03-06
snippet: Create a grid
disable_html_sanitization: true

---
# Homework s4:

- Create and post a fractal to your blog using recursion and Canvas API.

<canvas id='canvas'></canvas>

<script>

// Get rid of the document's default padding.
document.body.style.margin   = 0
//document.body.style.overflow = `hidden`

// Get the canvas element and the drawing context
const canvas  = document.getElementById('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d');

function drawBranch(x, y, length, angle, depth) {
    if (depth === 0) return;

    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.stroke();

    drawBranch(0, -length, length * 0.9, -15, depth - 1);
    drawBranch(0, -length, length * 0.9, 15, depth - 1);

    ctx.restore();
}

function drawTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'brown';
    ctx.lineWidth = 5;

    // Start the tree from the bottom center of the canvas
    drawBranch(canvas.width / 2, canvas.height, 100, 0, 10);
}

drawTree();

</script>

- Inspired by your “Fractal Tree via Recursive Function” example
(https://blog.science.family/240321_recursion), I tried to create a simple fractal tree myself using
HTML&#39;s Canvas API and JavaScript. The goal was to generate a static image representing a fractal
pattern, which is a recurring mathematical phenomenon where a motif is repeated at progressively
smaller scales. Below is how it looks like:

![re22](/23/re22.png)

# Resources Used

1. HTML and JavaScript Basics: As foundational knowledge, I relied on your example of using Canvas API and DOM manipulation (https://blog.science.family/240320_canvas_api)

2. Canvas API Documentation: The Mozilla Developer Network (MDN) Web Docs served as a primary resource for understanding the Canvas API&#39;s capabilities, particularly the methods
for drawing paths and setting styles (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

3. Fractal Geometry: I referred to the book &quot;The Fractal Geometry of Nature&quot; by Mandelbrot, provided by you on Canvas to gain a theoretical understanding of fractals. This document helped me grasp the mathematical principles behind fractal patterns.

4. Recursion: I relied on your example of Recursion to understand how it works and how can I use it to create a fractal (https://blog.science.family/240321_recursion)


# Process

## 1. Understanding Fractals, Recursion and the Canvas API:

- I started by reading the materials you provided in week 4 about fractals, recursion, and Canvas API as I documented above in the “Resources Used” section.

- I also used the Mozilla Developer Network (MDN) as my primary resource for more references because of its comprehensive documentation on the Canvas API.

## 2. Setting Up the Environment

- I created a basic HTML file to host my canvas element. This file also linked to an external JavaScript file where I would write the code to draw the fractal tree.

![re23](/23/re23.png)

- I set up a local development environment using a simple text editor and a web browser to view and test my project.

## 3. Implementing the Fractal Tree

- The fractal tree was created using recursive functions in JavaScript. Each branch of the tree was drawn by calling the function itself twice to generate the next level of branches, making the angle and length slightly smaller each time. The logic is handled as below:

![re24](/23/re24.png)

- The function drawBranch() was used to draw a single line segment of the tree, and it adjusted its position and angle using the translate and rotate methods of the canvas context.

- I used beginPath(), moveTo(), lineTo(), and stroke() methods to actually draw each branch on the canvas.


# Challenges Encountered

## 1. Understanding Recursion

- One of the main challenges was understanding and implementing recursion properly. Initially, my tree branches overlapped in unexpected ways, which led to confusing visuals.

- After several trials and errors, I better understood how to control the recursion depth and the importance of saving and restoring the canvas state using save() and restore() methods,
which keep different parts of the drawing from interfering with each other.

## 2. Adjusting Branch Angles and Lengths

- Getting the angles and lengths of the branches right took some experimentation. My first few attempts resulted in trees that looked either too sparse or too dense.

![re25](/23/re25.png)

- By adjusting the angle decrements and the factor by which the branch length decreases in each recursive call, I managed to achieve a more natural look.

![re26](/23/re26.png)

# Conclusion

This homework helped me understand not only the technical aspects of using the Canvas API but also the concept of fractals. The ability to visualize complex patterns through programming was particularly rewarding. Despite the challenges, this exercise enhanced my problem-solving skills and my understanding of recursive functions in creating graphical content.


- Can this method be used to maximize chaos?  How might you use it in your AT2?