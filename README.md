
# JavaScript Code Quiz

This project contains a simple 5 question quiz for someone starting to learn the basics of JavaScript.

A questions array is iterated as a user selects their answer choice. If the user selects an incorrect answer, they are given a time penalty of 5 seconds. Correct choices simply call the next question. This is repeted until quesion 5 is answered.

The user's score is then captured and stored via the localStorage web API. These can be displayed by clicking on the 'show high scores' button at the top of the page.

This will retrieve an array of high scores from localStorage and dynamically generate the corresponding section.

Languages used:
-
HTML
JavaScript
CSS


## Authors

- [@noothanks](https://www.github.com/noothanks)


## Deployment

This project is currently deployed on GitHub Pages at the following link:
https://noothanks.github.io/code-quiz/

## Screenshots

![App Screenshot](./assets/screenshot/screenshot.jpg)

## Lessons Learned

This project required DOM manipulation and event listening in order to dynamically generate each question on the page after an answer is selected.