---
title: Week 3 🕊
published_at: 2024-03-06
snippet: Here are some of my sketches from coding classes
disable_html_sanitization: true

---
# Assignment 1:

AT1 - Concept:


AT1 - Journey:
1. What about the work makes it belong to the aesthetic category of "cute"?

For this project, I choose the art work " tothewater" by Rafael Rozenddal to get an inspiration. The reasons it relates to cute aesthetic is:
-	### Simplicity and Minimalism: 
The art work presented a simple object - glass of water which simply set in white background. This minimalistic evokes a sense of warm and comfort characteristics often associated with "cuteness." This everyday-object combines with familiar image and clean interface, can appeal to a feeling of innocent curiosity and delight, key factors  of what makes something "cute."
-	## Interactivity and Responsiveness: 
By enabling viewers to alter the glass's water level through a simple hover, the artwork gains a playful quality. Such interactivity mirrors acts of nurturing or caring for something by giving it attention, aligning with the nurturing qualities often found in “cute” aesthetic. The act of hovering to "fill" the glass mimics a gentle, caring gesture, further enhancing its cuteness.
-	## Sound effects and Conceptual Charm: 
A glass of water brings a delightful twist to an everyday object. This transformation, driven by user interaction, adds an enchanting surprise element by adding sound effects when users water increase, firmly placing the piece within the "cute" aesthetic realm.

2. How does the artist employ effective complexity in the work to achieve its aesthetic result?

-	## From Simple Actions to Rich Variability: 
Rozendaal cleverly demonstrates how a fundamental interaction, such as the use of a basic interaction (hovering) can lead to diverse and unpredictable outcomes and changes in the water level exemplifies “effective complexity”. 
-   ## Random System Dynamics: 
 The artwork creates a dynamic system where the outcome is not linear. This unpredictability in how the glass will move randomly when users hover the glass of water or how quickly it will "fill" introduces a level of complexity that engages users in a continuous discovery process, encouraging repeated interaction and exploration.
-	## Cause and effect in visual changes: 
This straightforward interaction leads to a multitude of visual states, illustrating how direct inputs can result in a complex array of outcomes, thereby enriching the artwork's aesthetic and interactive depth.

3. Document your creative process in responding to Rozendaal's work.
# Atrribut to retain:
-	## Interactive Simplicity: 
Like Rozendaal’s work, your concept maintains the simplicity of interaction – the hover effect that alters the water level in a glass. This straightforward engagement is powerful, allowing users to easily understand their impact on the artwork.
-	## Visual Transformation: 
Rozendaal’s glass of water changes in response to user interaction. Similarly, my decision is to retain this aspect of unpredictability and visual change. The randomness serves as a bridge between the user's action and the artwork's response, emphasizing the dynamism inherent in interactive art.
-	## Minimalist Aesthetic: 
My inspired by Rozendaal’s minimalist approach, focuses on a everyday object which evokes the feeling of cute aesthetic. The use of pastel colors and a clean, uncluttered design echoes for simplicity and visual clarity.

# Attribute to change:
-	## Complexity of Interaction: 
While Rozendaal’s work primarily focuses on the glass and its contents, my concept introduces a broader environmental narrative. By linking the water level to weather changes, my project adds a layer of complexity and depth to the interactive experience, enhancing the scope of user influence.
-	## Narrative Depth: 
By linking the water level in the cup to weather changes, my work implies a narrative of ecological interconnectivity. This progression from a stable state through a rainy period to a sunny condition depending on the user's engagement introduces a temporal dimension absent from Rozendaal's original, making the experience more immersive and story-driven.
-    ## Audiovisual Elements:
The sound effects corresponding to weather changes enriches the sensory experience of your artwork. This enhancement not only deepens the user's experience but also underscores the environmental shifts being depicted, a significant expansion on the primarily visual of Rozendaal's piece.

4. In dialogue with the Rozendaal piece

My work engages in a dialogue with Rozendaal's piece through its foundational concept of interaction leading to transformation. However, by extending the consequences of this interaction to an environmental scale, your project explores the themes of influence and connectivity more expansively. 

In more details, my piece serves as a commentary on the original by suggesting that the simplicity found in everyday objects and actions can have profound implications. By expanding the scope of interaction from a glass of water to the environment itself, my work posits that our actions are intertwined with the larger world in complex and meaningful ways. It reflects on the delicate balance between human activity and natural phenomena, echoing the "butterfly effect" principle of small actions leading to significant outcomes. This thematic expansion places my work in a reflective dialogue with Rozendaal's, using the shared medium of cute aesthetic and effetively complexity to explore broader questions about interactivity and user immersive. 

In essence, my creative process involves taking the core interactive experience Rozendaal offers and weaving it into a more complex narrative about environmental interconnectivity and the power of individual actions. Last but not least, my project also extends boundaries to encourage participants to reflect on their connection with the environment.

## References:

[1] Galanter, P., 2003. What is Generative Art? [pdf] Available at: https://philipgalanter.com/downloads/ga2003_what_is_genart.pdf [25 March 2024].

[2] Ngai, S., 2022. Cute as an Aesthetic Category. [blog] Whitechapel Gallery. Available at: https://www.whitechapelgallery.org/about/blog/sianne-ngai-on-cute-as-an-aesthetic-category/ [26 March 2024].

[3] ToTheWater, 2010. *ToTheWater*. [online] Available at: <https://www.tothewater.com> [28 March 2024].

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

## References:

[1] Homagetothe, 2014. *Homagetothe*. [online] Available at: <https://www.homagetothe.com> [28 March 2024].

[2] P5.JS, Reference: mousePressed(). Available at: https://p5js.org/reference/#/p5/mousePressed (Accessed 25 March 2024).


[3] P5.JS, Reference: mouseReleased(). Available at: https://p5js.org/reference/#/p5/mouseReleased (Accessed 25 March 2024).

[4] P5.JS (2024) Reference: mouseX. Available at: https://p5js.org/reference/#/p5/mouseX (Accessed 25 March 2024).


