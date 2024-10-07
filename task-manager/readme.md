# Task Manager - Vue.js Project

This Task Manager project is a simple yet functional application built with Vue.js. It allows users to manage their daily tasks, create, filter, mark tasks as complete and prioritize them for better productivity. The tasks are stored in the browser's `localStorage`, so they persist even after the page is refreshed.

## Features

- **Add Tasks**: Users can add new tasks with a priority (High, Medium, Low).
- **Mark Tasks as Complete**: Users can mark tasks as complete by checking a box.
- **Remove Tasks**: Tasks can be removed by clicking a delete button.
- **Task Filtering**: Users can filter tasks by description.
- **Priority Levels**: Tasks are color-coded based on priority (Red for High, Orange for Medium, Green for Low).
- **Persistent Storage**: Tasks are saved in `localStorage`, so they remain even after the page is refreshed.

## Technologies Used

- **HTML5**: Provides the structure of the page.
- **CSS3**: Custom styling for tasks, including priority-based colors and completed tasks.
- **Vue.js**: Manages the reactivity, event handling, and task management.
- **Normalize.css**: Ensures consistent styling across different browsers.

## How to Run the Project

1. Clone this repository or download the `index.html` file.
2. Open the `index.html` file in your browser.
3. Start adding, completing, and removing tasks.
4. Use the filter input to search for tasks by description.

## Vue.js Concepts Used

- **Reactivity**: Uses `ref` for task management, input fields, and filtering tasks.
- **Event Handling**: Methods for adding, removing, and marking tasks as complete are bound to user actions.
- **Local Storage**: Uses `localStorage` to persist tasks between page reloads, ensuring task data is not lost when refreshing the page.
- **Computed Properties**: Dynamically filters tasks based on user input in real-time.
- **Watchers**: A `watch` is used to monitor the tasks array and automatically store changes in `localStorage`. This ensures data persistence when tasks are added, removed, or updated.
- **Lifecycle Hooks**: The `onMounted` lifecycle hook is used to focus the input field for adding a new task when the component is mounted.


## Project Structure

```bash
.
├── index.html   # Main file containing HTML, CSS, and Vue.js logic
