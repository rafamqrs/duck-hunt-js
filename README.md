# Duck Hunt: The Quackening

This is a simple but fun Duck Hunt-inspired game with a quirky twist, built with JavaScript and HTML5.

[![Play the Game](https://img.shields.io/badge/Play%20Now-Click%20Here-brightgreen)](https://your-game-url.com)
[![GitHub license](https://img.shields.io/github/license/your-username/duck-hunt-the-quackening)](https://github.com/your-username/duck-hunt-the-quackening/blob/main/LICENSE)

## Game Features

*   A duck with a silly face moves across the screen, bouncing off the edges.
*   The player uses the mouse cursor to aim and clicks to "shoot" the duck.
*   Instead of disappearing when hit, the duck explodes into a shower of confetti and feathers, making a funny "quack" sound. -  *Need to be implemented.* 
*   The game keeps track of the player's score and displays it on the screen.
*   Beautiful sky background with clouds and grassy field.

## How to Play

1.  Clone the repository: `git clone https://github.com/rafamqrs/duck-hunt-the-quackening.git`
2.  Open `index.html` in your web browser.
3.  Use your mouse to aim and click to shoot the duck.

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript

## Deployment

This game is designed to be easily deployed on Google Kubernetes Engine (GKE). A Dockerfile is included for containerization.

**Deployment Steps:**

1.  Build the Docker image: `docker build -t duck-hunt-image .`
2.  Push the image to Google Container Registry (or your preferred registry).
3.  Deploy the image to GKE using the provided deployment and service YAML files.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for bug fixes, feature enhancements, or any other improvements.
