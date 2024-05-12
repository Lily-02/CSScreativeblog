---
title: Week 8 🕊
published_at: 2024-03-06
snippet: Discussion The style of Chaotic
disable_html_sanitization: true

---

# Discussion

## Document creative process

In this assignment, I implemented a piece of net art that employs techniques from fractal, glitch, and post-digital practices. Below is what it looks like:

![re32](/23/re32.png)

**1. Post-digital practice:**

Starting with post-digital practices, I adapted the 'LimitedVoronoi4' example from the c2.js library [1]. The original code implements 15 cell objects with random sizes and velocities that move and bounce back upon hitting a wall in an area. Collisions between cell objects are handled to create the Voronoi effect.

In my code, I do not use those cell objects but instead create my own object, and starting with just one object instead of 15. As you can see from the screenshot, my objects are not normal square objects but they are circles fractal (I explain this in detail in Section '2. Fractal' below). Starting with 1 object, it generates another object when it hits a wall. Then, those 2 objects each generate another 2 objects when they hit a wall, resulting in a total of 4 objects. This process continues until there are 80 objects in the environment. Ideally, it can continue forever if the computation is allowed. 

![re33](/23/re33.png)

There were some difficulties I encountered when implementing this feature. Initially, when an object hit a wall, I simply created another object with random size and velocities. However, this caused a problem when the newly generated object's velocities was directed towards the wall, causing it to instantly hit the wall and generate another object, leading to multiple objects being created at once. To solve this, I had to track which wall the object collided with and assign the newly generated object with the velocities in the opposite direction of the wall. That is why there are 4 if-statements in the code to handle this problem.

**2. Fractal:**

In my assignment, I implemented the fractal technique using recursion. Instead of drawing a square around the center of the object, I draw fractal circles. Starting with the pivot circle at the center of the object, I recursively draw 4 surrounding circles in the North, East, South, and West directions. These four circles then recursively draw their surrounding circles, continuing this process until the fractal depth reaches a predefined limit.

![re34](/23/re34.png)

This is how a single object looks like:

![re35](/23/re35.png)

The fractal practice in my assignment is also reflected on the implementation of a new object being created when the previous object hits a wall. I also consider this as fractal because it is an infinite pattern that is self-similar across different scales. It is created by repeating a simple process over and over in an ongoing loop [2].

**3. Glitch:**

To implement the glitch effect, I followed the example provided by my lecturer, Thomas Capogreco [3]. Specifically, I first capture the image URL data from the current canvas. Then, I remove some chunks from the URL data to create the glitch effect and subsequently render the modified URL data back onto the canvas.

The most significant challenge I encountered when implementing this feature was understanding how to convert the current canvas to URL data and how to display the modified URL data on the canvas again. The conversion of the current canvas to URL data can be done using the command below:

![re36](/23/re36.png)


And to display the modified URL data back on the canvas, I need to define a function that takes the modified URL data and returns an image object corresponding to that URL data. Then, I draw that image object onto the canvas using:

![re37](/23/re37.png)

**4. Audio:**

I also attempted to use audio to reflect the glitch and post-digital vibes. I added sounds with high frequencies and irregular tempos to represent the post-digital and glitchy feelings, thereby enhancing the atmosphere of the practices implemented in this assignment.

![re38](/23/re38.png)


## Which artists / particular works your submission responds to ?

For my latest assignment which explores a chaotic style including glitch, fractal, and post-digital art, I've drawn inspiration from several notable works and artists:

1. **Fractal Effects**: 

- My project is inspired by the "Limited Voronoi4" example from c2.js, but I've modified it by starting with a single object that multiplies upon hitting a wall, eventually increasing to 80 objects. Instead of drawing standard shapes, I use fractal techniques to create complex patterns. 

- Besides, the color style is influenced by Kerry Mitchell's "Permutations 3," known for its vibrant and seemingly random colors that add to the chaotic visual experience.



2. **Glitch Effects**: 

- For the glitch aspects of my project, I'm inspired by Mathieu St-Pierre's abstract glitch artwork "Untitled," which features distinctive pixel distortions. 

- This influence helps me in creating visuals where traditional images break down into a chaotic, pixelated mess, enhancing the sense of digital decay and unpredictability.

3. **Post-Digital Practices**: 

- Yoshi Sodeoka's video art "Flood" has been a significant influence, especially its chaotic and mesmerizing visuals of spiders in motion and its use of electronic, glitchy sound effects. 

- I've adopted similar sound elements to complement the frenetic visuals in my work, reinforcing the chaotic and unpredictable nature of the digital environment.

- In addition, my net art has a little similarity with the movement of spiders in the video art from Yoshi Sodeoka artist. I get an inspiration from the intricacies of spiders circle around the line and move inside the wall like the way my objects move in the frame and bounce back


## What techniques you used to achieve a zany / chaotic aesthetic

- To achieve the zany and chaotic aesthetic, I utilize techniques such as dynamic object multiplication, recursive fractal designs, and digital sound distortions. 

- These elements work together to create a lively, unpredictable art piece that captures the essence of both order and chaos, reflecting the complex interactions typical of generative art practices.

# Resources Used

1. My Fractal effects is inspired from Kerry Mitchell artist: 

https://www.kerrymitchellart.com/gallery25/permutations3.html?fbclid=IwZXh0bgNhZW0CMTAAAR02jK3A2ks89r8GaYAmuxO1ikMfN0L6p0belsRrih4sKhQFChM89XdJ4Mw_aem_AZuhsTEiDoVgSSX-maLyEYWzJpsDE0ZhBsuvH8Uj-ZloozfvisWubeFNBeKf0pNyAVFltN2enojO5uIXjrpigSV0

2. My Glitch effects is inspired from Mathieu St-Pierre artist: 

https://matstpierre.wordpress.com/2017/08/13/untitled-2/?fbclid=IwZXh0bgNhZW0CMTAAAR0cDFtQ04IYZBC7ywKVhfkRYx6mXRDO6bt93417kYDqW4AQuVUgblQ6Z98_aem_AZtAgcb46jBuTdWi72hN_OOtj-Tm8O-vHo2FwFkIhK1tpBsaaBRWAlbKZ2lUPIpW3Qb97jSwBwrhyhy5mk9JxUmn

3. My digital-post practice is inspired from Mathieu St-Pierre artist:

https://www.instagram.com/p/C2CbNZwIsyU/

https://www.instagram.com/p/CuzQr91ta9G/

4. Ren Yuan,  c2.js – LimitedVoronoi4. Available at: https://c2js.org/examples.html?name=LimitedVoronoi4 (Accessed 5th, May, 2024).

5. Fractal Foundation, What are Fractals?. Available at: https://fractalfoundation.org/resources/what-are-fractals/ (Accessed 8th, May, 2024).

6. Thomas Capogreco. Glitch. Available at: https://blog.science.family/240405_glitch (Accessed 5th, May, 2024).





