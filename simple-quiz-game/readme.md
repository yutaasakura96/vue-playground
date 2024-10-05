# Simple Quiz Game - Vue.js Project

This project is a simple quiz game built with Vue.js. The user is presented with a series of questions and must input their answers. The game tracks the user's score and displays the final result at the end of the quiz.

## Features

- The quiz automatically checks the answer every 5 seconds.
- Displays the current question and input for the user's answer.
- Shows the final score once the quiz is completed.
- Simple design with basic styling and responsive layout.

## Technologies Used

- **HTML5**: Structure of the page.
- **CSS**: Basic styling with monospace font.
- **Vue.js**: Handles the reactivity and logic for the quiz game.
- **Normalize.css**: Ensures consistent styling across different browsers.

## How to Run the Project

1. Clone this repository or download the `index.html` file.
2. Open the `index.html` file in your browser.
3. The quiz will start automatically, and you can input answers.
4. The quiz checks your answers every 5 seconds and moves to the next question.

## Vue.js Concepts Used

- **Reactivity**: Utilizes `ref` for reactive data such as score, current question index, and user input.
- **Computed Properties**: Used for dynamically displaying the current question and determining if the quiz is finished.
- **Timers**: The app checks the answer at regular intervals (5 seconds).

## Project Structure

```bash
.
├── index.html 

Demo

Open index.html in your browser and try to answer the questions to see how well you score!

License

This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to adjust the details as needed for your project!
