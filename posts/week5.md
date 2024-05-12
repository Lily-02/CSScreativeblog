---
title: Week 5 🕊
published_at: 2024-04-10
snippet: Create a grid
disable_html_sanitization: true


---
# Homework s5:

A self-portrait in the style of glitch

<canvas id="glitch_self_portrait"></canvas>

<script type="module">

   const cnv = document.getElementById (`glitch_self_portrait`)
   cnv.width = cnv.parentNode.scrollWidth
   cnv.height = cnv.width * 9 / 16
   cnv.style.backgroundColor = `deeppink`

   const ctx = cnv.getContext (`2d`)

   let img_data

   const draw = i => ctx.drawImage (i, 0, 0, cnv.width, cnv.height)

   const img = new Image ()
   img.onload = () => {
      cnv.height = cnv.width * (img.height / img.width)
      draw (img)
      img_data = cnv.toDataURL ("image/jpeg")
      add_glitch ()
   }
   img.src = `/23/b.jpeg`

   const rand_int = max => Math.floor (Math.random () * max)

   const glitchify = (data, chunk_max, repeats) => {
      const chunk_size = rand_int (chunk_max / 4) * 4
      const i = rand_int (data.length - 24 - chunk_size) + 24
      const front = data.slice (0, i)
      const back = data.slice (i + chunk_size, data.length)
      const result = front + back
      return repeats == 0 ? result : glitchify (result, chunk_max, repeats - 1)
   }

   const glitch_arr = []

   const add_glitch = () => {
      const i = new Image ()
      i.onload = () => {
         glitch_arr.push (i)
         if (glitch_arr.length < 12) add_glitch ()
         else draw_frame ()
      }
      i.src = glitchify (img_data, 96, 6)
   }

   let is_glitching = false
   let glitch_i = 0

   const draw_frame = () => {
      if (is_glitching) draw (glitch_arr[glitch_i])
      else draw (img)

      const prob = is_glitching ? 0.05 : 0.02
      if (Math.random () < prob) {
         glitch_i = rand_int (glitch_arr.length)
         is_glitching = !is_glitching
      }

      requestAnimationFrame (draw_frame)
   }

</script>

## Comments to the code:

The code starts by setting up the canvas element with width, height, and a 2D context.

![re27](/23/re27.png)

Then, it defines a draw() function to draw a given image on the canvas. The code loads the original image and draws it on the canvas using the draw() function. It then calls the add_glitch() function to start adding a glitch effect to the original data. 

![re28](/23/re28.png)

The add_glitch() function works by creating an array of 12 images and adding glitches to these images by calling the glitchify() function.

![re29](/23/re29.png)

In the glitchify() function, the data of each image has some parts cut off using a random chunk size. The data before and after the chunk are concatenated after being cut to form a glitched image. This process repeats for a specified number of “repeats”. 

![re30](/23/re30.png)

Finally, the draw_frame() function is responsible for animating the glitched images. This is done by using the requestAnimationFrame() built-in method, so that draw_frame() is called again whenever the canvas is repainted, which creates the animation. The draw_frame() method works by generating random thresholds to determine when to switch between glitched and original states.

![re31](/23/re31.png)

Draw from this weeks' readings to discuss in a blog post:
which of Ngai's aesthetic categories does your self-portrait (and glitch more generally) belong to, and why?
does glitch increase or decrease effective complexity, and why?


