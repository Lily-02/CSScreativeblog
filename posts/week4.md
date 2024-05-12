---
title: Week 4 🕊
published_at: 2024-03-06
snippet: Fractal effects
disable_html_sanitization: true

---
# Homework s4:

- Create and post a fractal to your blog using recursion and Canvas API.

``` html

<script>

// Get rid of the document's default padding.
document.body.style.margin   = 0
//document.body.style.overflow = `hidden`

// Get the canvas element and the drawing context
const canvas  = document.createElement ('canvas')
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

```

<script>

// Get rid of the document's default padding.
document.body.style.margin   = 0
//document.body.style.overflow = `hidden`

// Get the canvas element and the drawing context
const canvas  = document.createElement ('canvas')
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

## Conclusion

This homework helped me understand not only the technical aspects of using the Canvas API but also the concept of fractals. The ability to visualize complex patterns through programming was particularly rewarding. Despite the challenges, this exercise enhanced my problem-solving skills and my understanding of recursive functions in creating graphical content.

# Fractal concept in AT2: 


## Can this method be used to maximize chaos?

The fractal tree I implemented uses recursive branching to create a pattern. By tweaking several aspects of this recursion, I can increase the "chaos" or unpredictability in the visual output, and maximizing the chaotic aesthetic style:

### Varying Angles and Lengths Randomly:

- Instead of using fixed angles and lengths for the branches, I could introduce randomness to these parameters. Each call to the recursive function could use slightly different angles and lengths based on a random factor. This would make the tree look less symmetrical and more chaotic.

### Adding More Branches: 

- Instead of having just two branches at each recursion level, I could increase the number of branches. I also randomize the number of branches at each level, which would contribute to a more complex and chaotic structure.

### Color Variations:

- Introducing random color variations at different depths of recursion can add to the visual complexity and chaos. Colors can be chosen based on certain conditions or completely randomly to create vibrant, unpredictable patterns.

### Non-linear Transformations: 

- To enhance chaos, consider applying non-linear transformations to the coordinates of each new branch. This could include rotations that are influenced by factors like the current depth, the position of the branch, or other environmental variables.

### Depth Variation: 

- Randomizing the depth of recursion for different branches can also contribute to chaos. Some branches could terminate earlier than others, creating an irregular pattern that enhances the fractal’s complexity.


## However, there are some problems when maximizing chaos:


### Performance Impact: 

- More complexity in fractals can slow down computations, so balance complexity with performance.

### Aesthetic Balance: 

- While chaos can enhance the visual interest of a fractal, too much randomness can also lead to patterns that are too disordered to be aesthetically pleasing. Finding the right balance between order and chaos is key to creating engaging fractal art


## How might I use it in my Assignment 2 ?

- In my AT2 project, where I aim to combine fractal effects with glitch and post-digital aesthetics using the "LimitedVoronoi4" example from c2.js, I can effectively use this approach to create a dynamic, chaotic net art piece. 

### Integrating Fractal Effects

- Multiplying Squares: As each square in the "LimitedVoronoi4" setup reaches the edge of the screen, I can implement a function that not only bounces the square back but also creates multiple smaller squares. 

-> This multiplication could simulate fractal behavior where patterns repeat on smaller scales. The new squares could inherit velocity and direction but vary slightly to introduce chaos.

### Fractal Properties:

- Implement the fractal nature by allowing the newly created squares also to bounce and multiply under the same conditions, creating a self-sustaining loop that resembles fractal recursion.

- To enhance the visual fractal effect, the branching (multiplication) can happen in a visually structured way, such as always splitting in specific angles or patterns.


# Resources Used

1. HTML and JavaScript Basics: As foundational knowledge, I relied on your example of using Canvas API and DOM manipulation (https://blog.science.family/240320_canvas_api)

2. Canvas API Documentation: The Mozilla Developer Network (MDN) Web Docs served as a primary resource for understanding the Canvas API&#39;s capabilities, particularly the methods
for drawing paths and setting styles (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

3. Fractal Geometry: I referred to the book &quot;The Fractal Geometry of Nature&quot; by Mandelbrot, provided by you on Canvas to gain a theoretical understanding of fractals. This document helped me grasp the mathematical principles behind fractal patterns.

4. Recursion: I relied on your example of Recursion to understand how it works and how can I use it to create a fractal (https://blog.science.family/240321_recursion)

# Here is my "big" fractal tree: