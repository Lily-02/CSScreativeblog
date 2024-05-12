---
title: Week 5 🕊
published_at: 2024-04-10
snippet: The style of glitch
disable_html_sanitization: true


---
# Homework s5:

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

# Here is my implemention

``` html

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

``` 

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


# Discussion 

## Which of Ngai's aesthetic categories does your self-portrait (and glitch more generally) belong to, and why?

In my artwork, especially when I use glitch effects in self-portraits, I find that it fits best with what Sianne Ngai calls the **Zany Aesthetic**. Here's why I think so:

- **It's all about going over the top**: Glitch art really packs everything in, flooding the image with lots of visual disruptions that can feel chaotic and a bit crazy. It's like filling a room with too many balloons — fun, but definitely a lot!

- **Mixing fun with skill**: Creating glitch art is fun because it feels like playing around, but it also needs some tech skills to get it right. It’s like playing a video game where you also have to fix the console.

- **Unpredictable outcomes**: When I start working on a glitch piece, I kick things off, but I can't fully predict how it will end up looking. The algorithms twist and tweak the image in ways I can't always control, making each piece a surprise. This balance between having control and losing it is a big part of what makes it feel so lively and energetic.

### Other Aesthetics Considered

- **Cute**: Glitch art doesn’t really make I feel warm or fuzzy. It’s more about shaking things up than making I want to cuddle something.

- **Interesting**: While glitch art can make me think about digital media and how we see art, it’s more about striking visuals than deep analysis. It grabs my attention fast rather than making me ponder for a long time.

### Conclusion
So, in Ngai's terms, my glitch art in self-portraits really shows off the **zany** vibe. It captures the hectic, fun, and sometimes overwhelming experience of our digital lives, where both making and looking at art involve dealing with complex and often unstable systems that can change things up in unexpected ways.

## Does glitch increase or decrease effective complexity, and Why?

I believe glitch art increases effective complexity. Here’s why:

- **Balance of Predictable and Unpredictable**: Glitch art mixes the original media with unexpected changes, creating a unique blend of the expected and the surprising. This balance is a core aspect of effective complexity, where neither complete order nor total chaos rules.
  
- **Dynamic Changes**: In glitch art, the interaction between the original and the glitched elements can lead to unexpected results, much like complex systems in nature. Each glitch introduces a level of unpredictability, enhancing complexity.

- **New Experiences**: Glitch art often reveals new patterns and meanings that emerge unpredictably from simple manipulations. These emergent properties show how a simple error can transform something familiar into something entirely new and complex.

In short, glitch art boosts effective complexity by weaving together the known and the unknown, showcasing the intriguing interplay of order and chaos in art.

# Resources Used

- I referred the code from:
https://blog.science.family/240405_glitch.
