// pixel_sort.js

// A function implementing the quicksort algorithm for sorting arrays.
const quicksort = a => {
   // If the array is empty or contains a single element, return it as is.
   if (a.length <= 1) return a

   let pivot = a[0]  // Use the first element as the pivot.
   let left = []     // Array to hold elements less than the pivot.
   let right = []    // Array to hold elements greater than the pivot.

   // Iterate through the array starting from the second element.
   for (let i = 1; i < a.length; i++) {
      if (a[i].br < pivot.br) left.push(a[i])  // If element is less than pivot, add to left.
      else right.push(a[i])                    // Otherwise, add to right.
   }

   // Recursively sort the left and right arrays, and concatenate them with the pivot in between.
   const sorted = [ ...quicksort(left), pivot, ...quicksort(right) ]

   return sorted  // Return the concatenated sorted array.
}

// Exports the PixelSorter class for use in other modules.
export class PixelSorter {
   // Constructor that initializes the class with a context from a canvas.
   constructor (ctx) {
      this.ctx = ctx
   }

   // Initializes the PixelSorter by setting up the image dimensions and pixel data.
   init () {
      this.width = this.ctx.canvas.width  // Set the width from the canvas context.
      this.height = this.ctx.canvas.height  // Set the height from the canvas context.
      this.img_data = this.ctx.getImageData(0, 0, this.width, this.height).data  // Retrieve the image data.
   }

   // Applies a glitch effect on the image by sorting pixels in a given area.
   glitch (pos, dim) {
      // Helper function to calculate the index of a pixel based on coordinates.
      const find_i = c => ((c.y * this.ctx.canvas.width) + c.x) * 4 

      // Loop over each column in the specified dimension.
      for (let x_off = 0; x_off < dim.x; x_off++) {
         const positions = []  // Stores the pixel indices to be sorted.

         // Gather pixel indices for a vertical column.
         for (let y_pos = pos.y; y_pos < pos.y + dim.y; y_pos++) {
            positions.push(find_i({ x: pos.x + x_off, y: y_pos }))
         }

         const unsorted = []  // Array to hold the unsorted pixel data.

         // Extract pixel data and push it into the unsorted array.
         positions.forEach(p => {
            const r = this.img_data[p]
            const g = this.img_data[p + 1]
            const b = this.img_data[p + 2]
            const a = this.img_data[p + 3]
            const br = r * g * b  // Calculate 'brightness' as a product of RGB.
            unsorted.push({ r, g, b, a, br })
         })

         // Sort the unsorted array and reverse it for the glitch effect.
         const sorted = quicksort(unsorted).reverse()

         let rgba = []  // Array to store the sorted and flattened pixel data.

         // Flatten the sorted data back into rgba format.
         sorted.forEach(e => {
            rgba.push(e.r)
            rgba.push(e.g)
            rgba.push(e.b)
            rgba.push(e.a)
         })

         rgba = new Uint8ClampedArray(rgba)  // Convert the array to Uint8ClampedArray format.

         // Create image data for a single column.
         const new_data = this.ctx.createImageData(1, dim.y)
         new_data.data.set(rgba)  // Set the pixel data.

         // Place the sorted column back into the canvas.
         this.ctx.putImageData(new_data, pos.x + x_off, pos.y)
      }
   }
}