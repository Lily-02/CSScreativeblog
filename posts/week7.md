---
title: Week 7 (c2js) 🕊
published_at: 2024-04-10
snippet: Create a grid
disable_html_sanitization: true
---
I combine FROM ASCII CAM https://blog.science.family/240412_ascii_cam AND Circle c2js https://github.com/ren-yuan/c2.js/blob/main/examples/Circle.js#L10


<script src="c2.min.js"></script>
<script src="c2.js"></script>
<canvas id="c2"></canvas>
<div id="ascii_div"></div>
<script>
	const renderer = new c2.Renderer (document.getElementById ('c2'));
	resize ()
    renderer.background ('turquoise')
	let random = new c2.Random ()
    class Agent extends c2.Circle {
        constructor () {
			let x = random.next (renderer.width)
			let y = random.next (renderer.height)
			let r = random.next(renderer.width/4)
			super (x,y,r)
            this.vx = random.next (-2, 2)
			this.vy = random.next (-2, 2)
			this.color = c2.Color.hsl(random.next(0, 30), random.next(30, 60), random.next(20, 100))
      	}
        update() {
	 		this.x += this.vx
	     	this.y += this.vy
            if (this.p.x < this.r) {
			    this.p.x = this.r;
			    this.vx *= -1;
			} else if (this.p.x > renderer.width-this.r) {
			    this.p.x = renderer.width-this.r;
			    this.vx *= -1;
			}
			if (this.p.y < this.r) {
			    this.p.y = this.r;
			    this.vy *= -1;
			} else if (this.p.y > renderer.height-this.r) {
			    this.p.y = renderer.height-this.r;
			    this.vy *= -1;
			}
		}
        display(){
		    renderer.stroke(false);
		    renderer.fill(this.color);
		    renderer.circle(this);
		}
	}
    let agents = new Array (10)
	for (let i = 0; i < agents.length; i++) agents[i] = new Agent ()
    const chars = "¶Ñ@%&∆∑∫#Wß¥$£√?!†§ºªµ¢çø∂æåπ*™≤≥≈∞~,.…_¬“‘˚`˙"
	const div = document.getElementById (`ascii_div`)
	div.style.fontFamily = `monospace`
	div.style.textAlign = `center`
    renderer.draw (() => {
		renderer.clear ()
        for (let i = 0; i < agents.length; i++) {
            agents[i].update ()
            agents[i].display()
        }
        for (let i = 0; i < agents.length-1; i++) {
            for (let j = i+1; j < agents.length; j++) {
                let points = agents[i].intersection(agents[j]);
                if(points!=null){
                    let c = c2.Color.lerp(agents[i].color, agents[j].color, .5);
                    renderer.stroke(c);
                    renderer.lineWidth(2);
                    renderer.line(points[0].x, points[0].y, points[1].x, points[1].y);
                    renderer.stroke('#333333');
                    renderer.lineWidth(5);
                    renderer.point(points[0]);
                    renderer.point(points[1]);
                }
            }
        }
        const w = renderer.canvas.width
        const h = renderer.canvas.height
        const pixels = renderer.context.getImageData (0, 0, w, h).data
        let ascii_img = ``
        for (let y = 0; y < renderer.canvas.height; y += 22) {
            for (let x = 0; x < renderer.canvas.width; x += 10) {
                const i = (y * renderer.canvas.width + x) * 4
                const r = pixels[i]
                const g = pixels[i + 1]
                const b = pixels[i + 2]
                const br = (r * g * b / 16581376) ** 0.1
                const char_i = Math.floor (br * chars.length)
                ascii_img += chars[char_i]
            }
            ascii_img += `\n`
        }
        div.innerText = ascii_img
	})
    function resize () {
        let parent = renderer.canvas.parentElement
        renderer.size(parent.clientWidth, parent.clientWidth / 16 * 9)
    }
</script>