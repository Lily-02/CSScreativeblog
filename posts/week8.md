---
title: A.2 🕊
published_at: 2024-03-06
snippet: Cute aesthetic and Effectively Complexity art
disable_html_sanitization: true

---
# Assignment 3


<script src="/script/c2.min.js"></script>
<script src="/script/c2.js"></script>
<canvas id="c2_example"></canvas>
	
<script>
	document.body.style.margin   = 0
	// document.body.style.overflow = `hidden`
	cnv = document.getElementById('c2_example')
	const renderer = new c2.Renderer(cnv)
	resize()

	renderer.background ('#cccccc')
	let random = new c2.Random ()

	class Agent extends c2.Cell{
	    constructor(x, y, r) {
	        x = x !== undefined ? x : random.next(renderer.width);			// x-pos of the cell
        	y = y !== undefined ? y : random.next(renderer.height);			// y-pos of the cell
        	r = r !== undefined ? r : random.next(renderer.width / 40, renderer.width / 15);		// radius of the cell
	        super(x, y, r);

	        this.vx = random.next(-2, 2);		// x-velocity
	        this.vy = random.next(-2, 2);		// y-velocity
	        this.color = c2.Color.hsl(random.next(0, 30), random.next(30, 60), random.next(20, 100));		// cell's colour
	    }

	    x() {
	    	return this.p.x
	    }

	    y() {
	    	return this.p.y
	    }

	    update(){
	        this.p.x += this.vx;
	        this.p.y += this.vy;
	        let is_collision = false;

	        if (this.p.x < 0) {
	            this.p.x = 0;
	            this.vx *= -1;
	            is_collision = true;
	        } else if (this.p.x > renderer.width) {
	            this.p.x = renderer.width;
	            this.vx *= -1;
	            is_collision = true;
	        }
	        if (this.p.y < 0) {
	            this.p.y = 0;
	            this.vy *= -1;
	            is_collision = true;
	        } else if (this.p.y > renderer.height) {
	            this.p.y = renderer.height;
	            this.vy *= -1;
	            is_collision = true;
	        }

	        return is_collision
	    }

	    display(){
	        if (this.state != 2) {
	            renderer.stroke(c2.Color.rgb(0, .2));
	            renderer.lineWidth(1);
	            renderer.fill(this.color);
	            renderer.polygon(this.polygon(4));

	            renderer.stroke('#333333');
	            renderer.lineWidth(5);
	            renderer.point(this.p.x, this.p.y);
	        }
	    }
	}

	let agents = new Array(1);
	for (let i = 0; i < agents.length; i++) {
	    agents[i] = new Agent();
	}

	renderer.draw(() => {
	    let voronoi = new c2.LimitedVoronoi();
	    voronoi.compute(agents);

	    for (let i = 0; i < agents.length; i++) {
	        agents[i].display();							// Display agent_i
	        let is_collision = agents[i].update();			// Update agent_i's velocities and check for collisions
	        if (is_collision && agents.length < 10) {		// If collided, add 2 new agents to create the fractal effect
	        	x = agents[i].x();
	        	y = agents[i].y();
	        	fractal_1 = new Agent(x, y);
	        	fractal_2 = new Agent(x, y);
	        	agents.push(fractal_1);
	        	agents.push(fractal_2);
	        }
	    }
	});

	window.addEventListener('resize', resize);
	function resize() {
	    let parent = renderer.canvas.parentElement;
	    renderer.size(parent.clientWidth, parent.clientWidth / 16 * 9);
	}
</script>