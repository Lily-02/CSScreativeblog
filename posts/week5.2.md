---
title: Week 5 (no.2) 🕊
published_at: 2024-04-11
snippet: Create a grid
disable_html_sanitization: true


---
# Homework s5:

Pixel Sort

<!-- Creates a canvas element on the page where the pixel sorting effect will be rendered. -->
<canvas id="pixel_sort"></canvas>

<script type="module">
  // Imports the PixelSorter class from an external JavaScript file.
  import { PixelSorter } from "/scripts/pixel_sort.js"

  // Set up the canvas 
  const cnv = document.getElementById(`pixel_sort`)
  cnv.width = cnv.parentNode.scrollWidth
  cnv.height = cnv.width * 9 / 16
  const ctx = cnv.getContext(`2d`)

  // Creates a new instance of the PixelSorter class, passing in the rendering context.
  const sorter = new PixelSorter(ctx)

  // Creates a new Image object.
  const img = new Image()

  // Defines what happens when the image has loaded.
  img.onload = () => {
    // Adjust the canvas height to maintain the aspect ratio
    cnv.height = cnv.width * (img.height / img.width)

    // Draws the loaded image onto the canvas
    ctx.drawImage(img, 0, 0, cnv.width, cnv.height)

    // Initializes the PixelSorter instance with the image data.
    sorter.init()

    // Starts the animation loop by calling the draw_frame function.
    draw_frame()
  }

  // Sets the source of the Image object
  img.src = `/240408/kornerpark.jpg`

  // Initializes a variable to keep track of the current frame count.
  let frame_count = 0

  const draw_frame = () => {
    // Redraws the original image onto the canvas.
    ctx.drawImage(img, 0, 0, cnv.width, cnv.height)
    
    // Calculates a sinusoidal value based on the current frame count, which will be used to control the pixel sorting effect.
    let sig = Math.cos(frame_count * 2 * Math.PI / 500)

    // Defines the center point of the canvas.
    const mid = { x: cnv.width / 2, y: cnv.height / 2 }
    
    // Calculates the dimensions of the area to be affected by the pixel sorting effect, based on the sinusoidal value and the canvas dimensions.
    const dim = { x: Math.floor((sig + 3) * (cnv.width / 6)) + 1, y: Math.floor((sig + 1) * (cnv.height / 6)) + 1 }
    
    // Calculates the position of the top-left corner of the area to be affected by the pixel sorting effect, based on the center point and the calculated dimensions.
    const pos = { x: Math.floor(mid.x - (dim.x / 2)), y: Math.floor(mid.y - (dim.y / 2)) }
    
    // Applies the pre-defined glitch effect on the image by sorting pixels in a given area.
    sorter.glitch(pos, dim)

    // Increase the frame count for the next iteration of the animation loop.
    frame_count++
    
    // Schedules the draw_frame function to be called again on the next animation frame, creating an animation loop.
    requestAnimationFrame(draw_frame)
  }
</script>

# Comments to the code:

## Pixel_sort.js

The code begins execution by first defining a quicksort() function, which will be used later to sort pixel data based on their &#39;brightness&#39; value. Once the PixelSorter() class is declared and instantiated, the init() method is triggered to set up initial properties such as the width and height
of the canvas, and to retrieve the pixel data from the canvas context. This sets the stage for manipulating image data. When the glitch() method is called, it starts by computing the index for pixel positions in a specified area of the canvas, collecting their RGB values, and computing their &#39;brightness&#39;. 

These values are then stored in an array which is sorted using the previously defined quicksort function. After sorting, the pixel data is reordered and written back to the canvas in their
new order to create a glitch effect in the image.


## Pixel_sort.html

This code sets up a canvas element and loads an image onto it. It then creates an instance of the PixelSorter() class and initializes it with the loaded image data. The draw_frame()
function is called repeatedly using requestAnimationFrame(), creating an animation loop. 

Within the draw_frame() function, the original image is redrawn onto the canvas. Then, a sinusoidal value is calculated based on the current frame count. This value is used to determine the position and dimensions of an area on the canvas where a &quot;pixel sorting&quot; effect will be applied using the sorter.glitch() method.

The pixel sorting effect rearranges the pixels within the specified area based on QuickSort algorithm defined in file Pixel_sort.js, creating a glitchy effect. The position and dimensions of the affected area change with each frame, creating a dynamic and animated