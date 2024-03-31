---
title: Week 3 🕊
published_at: 2024-03-06
snippet: Here are some of my sketches from coding classes
disable_html_sanitization: true

---
# Assignment 1:

AT 1 - Journey:
1. What about the work makes it belong to the aesthetic category of "cute"?

For this project, I choose the art work " tothewater" by Rafael Rozenddal to get an inspiration. The reasons it relates to cute aesthetic is:
-	### Simplicity and Minimalism: 
The art work presented a simple object - glass of water which simply set in white background. This minimalistic evokes a sense of warm and comfort characteristics often associated with "cuteness." This everyday-object combines with familiar image and clean interface, can appeal to a feeling of innocent curiosity and delight, key factors  of what makes something "cute."
-	## Interactivity and Responsiveness: 
By enabling viewers to alter the glass's water level through a simple hover, the artwork gains a playful quality. Such interactivity mirrors acts of nurturing or caring for something by giving it attention, aligning with the nurturing qualities often found in “cute” aesthetic. The act of hovering to "fill" the glass mimics a gentle, caring gesture, further enhancing its cuteness.
-	## Sound effects and Conceptual Charm: 
A glass of water brings a delightful twist to an everyday object. This transformation, driven by user interaction, adds an enchanting surprise element by adding sound effects when users water increase, firmly placing the piece within the "cute" aesthetic realm.

## Rafeal works:

<iframe src="https://editor.p5js.org/nguyengiahy2911/full/G266Y6NK2"></iframe>

In this work, I replicate the sliding curtain effect, in which the user can open and close the curtain by clicking and dragging the mouse. If the curtain is opened, the background image of a rainforest is revealed and an audio sound of birds singing is played. If the curtain is closed, the background image is hidden, and the audio sound is off.
To implement this effect, I find the most challenging parts are:
-	How to determine if the mouse is pressed and released
-	How to track the mouse position
-	How to play an audio
Since in the last few weeks, I haven’t learnt or worked on a problem that requires user’s interaction with the interface. Hence, I need to do a few research to learn how to do it in JaveScript.
In order to detect if the mouse is pressed, I use the pre-defined function mousePressed() in p5.js. According to the official documentation [1], the mousePressed() function is called once after every time a mouse button is pressed. 

![re8](/23/re8.png)
 
Similarly, I need to detect if the mouse is released, so that I can stop moving the curtain. I use the pre-defined function mouseReleased() from p5.js for this. According to the official documentation [2], the mouseReleased() function is called every time a mouse button is released.

![re9](/23/re9.png)

Finally, to track the mouse position, I use the system variable mouseX, which always contains the current horizontal position of the mouse, relative to (0, 0) of the canvas [3]. After knowing the mouse position, I just need to update the curtain’s position to match it accordingly. Also in the same function, I am able to determine whether the curtain is fully closed by checking the curtain’s width. If the curtain is not fully closed, and the audio sound is not played yet, I start the audio. Otherwise, I stop the audio.

![re10](/23/re10.png)

References:
[1] P5.JS, Reference: mousePressed(). Available at: https://p5js.org/reference/#/p5/mousePressed (Accessed 25 March 2024).


[2] P5.JS, Reference: mouseReleased(). Available at: https://p5js.org/reference/#/p5/mouseReleased (Accessed 25 March 2024).

[3] P5.JS (2024) Reference: mouseX. Available at: https://p5js.org/reference/#/p5/mouseX (Accessed 25 March 2024).
