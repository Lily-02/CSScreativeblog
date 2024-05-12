---
title: Week 6 🕊
published_at: 2024-03-06
snippet: C2.js
disable_html_sanitization: true
---

Hi, this is my task of c2.js. I choose the "Circle.js" folder to import it to my blog. 

<script src="/script/c2.js"></script>

<canvas id='c2'></canvas> 

<script>

//Created by Ren Yuan


const renderer = new c2.Renderer(document.getElementById('c2'));
resize();

renderer.background('#cccccc');
let random = new c2.Random();


class Agent extends c2.Circle{
    constructor() {
        let x = random.next(renderer.width);
        let y = random.next(renderer.height);
        let r = random.next(renderer.width/4);
        super(x, y, r);

        this.vx = random.next(-2, 2);
        this.vy = random.next(-2, 2);
        this.color = c2.Color.hsl(random.next(0, 30), random.next(30, 60), random.next(20, 100));
    }

    update(){
        this.p.x += this.vx;
        this.p.y += this.vy;

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


let agents = [];
for (let i = 0; i < 10; i++) agents[i] = new Agent();


renderer.draw(() => {
    renderer.clear();

    for (let i = 0; i < agents.length; i++) {
        agents[i].update();
        agents[i].display();
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
});


window.addEventListener('resize', resize);
function resize() {
    let parent = renderer.canvas.parentElement;
    renderer.size(parent.clientWidth, parent.clientWidth / 16 * 9);
}
</script>

# Here is my implemention

``` html

<script src="/script/c2.js"></script>

<canvas id='c2'></canvas> 

<script>

//Created by Ren Yuan

// Initialises the c2 library renderer on a canvas with id 'c2'
const renderer = new c2.Renderer(document.getElementById('c2'));

// Adjusts canvas size based on the window size
resize();

// Sets the background color of the canvas
renderer.background('#cccccc');

// Creates a new random number generator
let random = new c2.Random();

// Agent class represents a moving circle with properties for position, velocity, and color
class Agent extends c2.Circle{
    constructor() {
        // Randomly position the agent within the canvas
        let x = random.next(renderer.width);
        let y = random.next(renderer.height);
        // Randomly set the radius of the agent
        let r = random.next(renderer.width/4);
        super(x, y, r);
        
        // Set random velocities for the agent within a range
        this.vx = random.next(-2, 2);
        this.vy = random.next(-2, 2);
        // Set a random color using HSL format
        this.color = c2.Color.hsl(random.next(0, 30), random.next(30, 60), random.next(20, 100));
    }
    
    // Updates the position of the agent and handles boundary collisions
    update(){
        this.p.x += this.vx;
        this.p.y += this.vy;
        
        // Handle collisions with the left and right boundaries
        if (this.p.x < this.r) {
            this.p.x = this.r;
            this.vx *= -1;
        } else if (this.p.x > renderer.width-this.r) {
            this.p.x = renderer.width-this.r;
            this.vx *= -1;
        }

        // Handle collisions with the top and bottom boundaries
        if (this.p.y < this.r) {
            this.p.y = this.r;
            this.vy *= -1;
        } else if (this.p.y > renderer.height-this.r) {
            this.p.y = renderer.height-this.r;
            this.vy *= -1;
        }
    }
    
    // Renders the agent as a filled circle
    display(){
        renderer.stroke(false);
        renderer.fill(this.color);
        renderer.circle(this);
    }
}

// Initialises an array of Agent objects
let agents = [];
for (let i = 0; i < 10; i++) agents[i] = new Agent();

// Drawing loop to update and display each agent
renderer.draw(() => {
    renderer.clear();
    
    for (let i = 0; i < agents.length; i++) {
        agents[i].update();
        agents[i].display();
    }
    // Draw lines between intersecting agents
    for (let i = 0; i < agents.length-1; i++) {
        for (let j = i+1; j < agents.length; j++) {
          let points = agents[i].intersection(agents[j]);
            if(points!=null){
              let c = c2.Color.lerp(agents[i].color, agents[j].color, .5);
              renderer.stroke(c);
              renderer.lineWidth(2);
              renderer.line(points[0].x, points[0].y, points[1].x, points[1].y);
              // Highlight intersection points
              renderer.stroke('#333333');
              renderer.lineWidth(5);
              renderer.point(points[0]);
              renderer.point(points[1]);
            }
        }
    }
});

// Resize event handler to adjust canvas size dynamically
window.addEventListener('resize', resize);
function resize() {
    let parent = renderer.canvas.parentElement;
    // Sets the canvas size relative to its parent element and maintains aspect ratio
    renderer.size(parent.clientWidth, parent.clientWidth / 16 * 9);
}
</script>

``` 

# Resources Used

1. I referred by Capo's code. He mixed the code between c2.js example and ascii cam: https://github.com/capogreco/blog.science.family/blob/main/posts/240423_c2js_ascii.md?plain=1

2. I used Circle.js of Ren Yuan to mix with the ascii cam: Ihttps://github.com/ren-yuan/c2.js/blob/857f6fbb9769a786c284d2b973ce4b637761c395/examples/Circle.js