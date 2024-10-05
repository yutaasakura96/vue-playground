# Can You Drive? - Vue.js Project

This is a simple Vue.js project that dynamically checks if a user is old enough to drive based on the age they input.

## Features

- The app prompts users to enter their age and provides a response indicating whether or not they can drive.
- Dynamic feedback with color changes based on the input (green for "Yes", red for "No").
- Responsive design that adapts to different screen sizes.
- Validation to prevent invalid age entries (negative numbers or age above 80).

## Technologies Used

- **HTML5** for the basic structure.
- **CSS3** for styling, including a responsive design.
- **Google Fonts** (Roboto) for typography.
- **Vue.js** (v3.5.9) for reactive data binding and logic.
- **Normalize.css** for consistent cross-browser styling.

## How to Run the Project

1. Clone this repository or copy the `index.html` file to your local machine.
2. Open the `index.html` file in your browser.
3. Enter your age to see if you're eligible to drive.

## Vue.js Concepts Used

- **Reactivity**: Uses `ref` for age and message data binding.
- **Computed Properties**: Determines if the user can drive based on the input age.
- **Watchers**: Observes changes in age and updates the message accordingly.

## Project Structure

```bash
.
├── index.html

Demo

Open index.html in a browser to see the app in action. Enter an age to check if you can drive!

License

This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to modify this to better suit your project details!
