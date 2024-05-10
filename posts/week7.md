---
title: Week 7 (c2js) 🕊
published_at: 2024-04-10
snippet: Create a grid
disable_html_sanitization: true
---
I combined FROM ASCII CAM https://blog.science.family/240412_ascii_cam AND Circle c2js https://github.com/ren-yuan/c2.js/blob/main/examples/Circle.js#L10

<!-- Import the c2.js library -->
<script src="/script/c2.min.js"></script>
<script src="/script/c2.js"></script>

<!-- The canvas to render the c2 animation -->
<canvas id="c2"></canvas>

<!-- The div to show the ASCII cam version of the c2 animation -->
<div id="ascii_div"></div>

<script>

    // Initialise a c2.renderer on the <canvas> element
	const renderer = new c2.Renderer (document.getElementById ('c2'));
	resize ()
    renderer.background ('333333')
	let random = new c2.Random ()

     // The class definition for a "circle"
    class Agent extends c2.Circle {
        constructor () {
			let x = random.next (renderer.width) 
            // x-coordinate of the centre
			let y = random.next (renderer.height)
            // y-coordinate of the centre
			let r = random.next(renderer.width/4)
            // radius
			super (x,y,r)
            this.vx = random.next (-2, 2)
            // x-velocity
			this.vy = random.next (-2, 2)
            // y-velocty
			this.color = c2.Color.hsl(random.next(0, 30), random.next(30, 60), random.next(20, 100))
            // color of the circle
      	}
        update() {
	 		this.p.x += this.vx
	     	this.p.y += this.vy
            if (this.p.x < this.r) {

                // If the circle hits the left boundary of the canvas
			    this.p.x = this.r;
			    this.vx *= -1;
			} else if (this.p.x > renderer.width-this.r) {

                // If the circle hits the right boundary of the canvas
			    this.p.x = renderer.width-this.r;
			    this.vx *= -1;
			}
			if (this.p.y < this.r) {

                // If the circle hits the upper boundary of the canvas
			    this.p.y = this.r;
			    this.vy *= -1;
			} else if (this.p.y > renderer.height-this.r) {
                
                // If the circle hits the lower boundary of the canvas
			    this.p.y = renderer.height-this.r;
			    this.vy *= -1;
			}
		}
        display(){ // Draw the circle
		    renderer.stroke(false);
		    renderer.fill(this.color);
		    renderer.circle(this);
		}
	}
    
    // Create 10 circles
    let agents = new Array (10)
	for (let i = 0; i < agents.length; i++) agents[i] = new Agent ()

    // Initialise the ASCII characters and get the <div> for rendering ASCII cam
    const chars = "¶Ñ@%&∆∑∫#Wß¥$£√?!†§ºªµ¢çø∂æåπ*™≤≥≈∞~,.…_¬“‘˚`˙"
	const div = document.getElementById (`ascii_div`)
	div.style.fontFamily = `monospace`
	div.style.textAlign = `center`

    // Repeatedly draw the 10 circles and update their new locations according to their x-velocity and y-velocity

    renderer.draw (() => {
		renderer.clear ()
        for (let i = 0; i < agents.length; i++) {
            agents[i].update () // Calculate the circle's new position based on vx and vy

            agents[i].display() // Draw the circle at the new position
        }


        // Handling intersection between circles: draw lines connecting the intersection points
        for (let i = 0; i < agents.length-1; i++) {
            for (let j = i+1; j < agents.length; j++) {
                let points = agents[i].intersection(agents[j]);

                // If 2 circles are intersected
                if(points!=null){

                    // Set color, thickness and draw the line to connect 2 intersection points
                    let c = c2.Color.lerp(agents[i].color, agents[j].color, .5);
                    renderer.stroke(c);
                    renderer.lineWidth(2);
                    renderer.line(points[0].x, points[0].y, points[1].x, points[1].y);

                    // Set color, thickness and draw the dots at 2 intersection points
                    renderer.stroke('#333333');
                    renderer.lineWidth(5);
                    renderer.point(points[0]);
                    renderer.point(points[1]);
                }
            }
        }
        // Convert the c2.js animation to ASCII cam
        const w = renderer.canvas.width
        const h = renderer.canvas.height
        const pixels = renderer.context.getImageData (0, 0, w, h).data
        // Get the image data

        let ascii_img = ``
        for (let y = 0; y < renderer.canvas.height; y += 22) {
            for (let x = 0; x < renderer.canvas.width; x += 10) {
                const i = (y * renderer.canvas.width + x) * 4
                const r = pixels[i]  // Red
                const g = pixels[i + 1] // Green
                const b = pixels[i + 2] // Blue
                const br = (r * g * b / 16581376) ** 0.1 // Brightness value

                const char_i = Math.floor (br * chars.length) 
                // Determine the corresponding character from the charset based on brightness

                ascii_img += chars[char_i]
                // Append the selected character to the ASCII image string
            }
            ascii_img += `\n`
        }

        // Update the text content of a designated div to show the ASCII image
        
        div.innerText = ascii_img
	})
    function resize () {
        let parent = renderer.canvas.parentElement
        renderer.size(parent.clientWidth, parent.clientWidth / 16 * 9)
    }
</script>


- Why does combining ideas / libraries seem to make things more aesthetically chaotic?  Please refer to the principles of effective complexity in your answer.  Post your discussion to your blog.
