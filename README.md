1. Project Structure and UI Development (HTML)
The first step was creating the overall structure of the website using HTML.
- Created a navigation bar with links to Home, Categories, and How It Works sections.
- Designed a hero section to introduce the quiz application and encourage users to start playing.
- Created a category section containing three different meme quiz categories.
- Added a How It Works section to explain the quiz process to users.
- Designed a quiz details section, question section, and score section to organize the quiz experience.
What I learned: I improved my understanding of HTML semantic structure, div elements, sections, navigation, buttons, images, and how to organize a complete website into different components.

2. Styling and Responsive Design (CSS and Bootstrap)
After creating the HTML structure, I used CSS and Bootstrap to make the website visually appealing and responsive.
- Used custom CSS to create the website's visual theme, colors, backgrounds, spacing, borders, and hover effects.
- Used Bootstrap grid classes to arrange content into columns and rows.
- Implemented responsive layouts for desktop, tablet, and mobile devices.
- Used Bootstrap utility classes for alignment, spacing, typography, and visibility.
- Integrated Remix Icons to improve the visual appearance of navigation and other elements.
What I learned: I gained practical experience with CSS styling, Bootstrap grid systems, responsive breakpoints, utility classes, and creating user-friendly interfaces.

3. Dynamic Category Selection and URL Parameters
I created three different meme categories, and each category redirects users to a common quiz page with a different ID.

For example:
- Classic Legends → quiz.html?id=1
- Reaction Energy → quiz.html?id=2
- Animals → quiz.html?id=3
In JavaScript, I used:
- window.location.search to access the query string from the URL.
- URLSearchParams() to extract the category ID.
- Number() to convert the extracted ID into a number.
- find() to locate the matching quiz object from the quiz data.
This allows a single quiz page to display different quiz content based on the selected category.

What I learned: I understood URL parameters, JavaScript type conversion, array searching methods, and how to pass information between different pages without creating a separate page for every category.

4. Dynamic Quiz Details and Banner
I created a quizBanner() function to display the selected category's information dynamically.

This function:
- Searches for the selected quiz category using the find() method.
- Stores the matched quiz object in the quizDetail variable.
- Redirects the user to the homepage if the requested category ID does not exist.
- Dynamically displays the quiz title, description, banner image, total number of questions, and quiz duration.
Instead of writing separate details for every category, I used JavaScript to retrieve the information from the quiz data.

What I learned: I learned how to work with arrays of objects, use the find() method, access object properties, and update HTML elements dynamically using JavaScript.

5. Quiz Initialization and Question Management
I created a showQue() function to initialize the quiz when the user clicks the Start button.

The function performs the following operations:
1. Sets the countdown timer according to the selected quiz duration.
2. Creates an empty answer array to store the user's responses.
3. Initializes the current question index to zero.
4. Hides the quiz details section.
5. Displays the question section.
6. Hides the previous score section.
7. Starts the countdown timer.
8. Initializes the answer array with null values for every question.
9. Calls the questionLoader() function to display the first question.
I also used an event listener to connect the Start button with the showQue() function.

What I learned: I understood how to initialize application data, manage variables, use arrays to store user responses, control HTML sections using CSS classes, and handle button click events.

6. Countdown Timer Functionality
I implemented a countdown timer using the JavaScript setInterval() method.

The countdown() function:
- Runs a function after every 1000 milliseconds (one second).
- Updates the timer value dynamically on the webpage.
- Decreases the remaining time after every second.
- Calls the finish() function when the countdown reaches zero.
I also used clearInterval() inside the finish function to stop the timer once the quiz is completed.

What I learned: I gained practical knowledge of JavaScript timing functions, especially setInterval() and clearInterval(), and understood how to implement time-based functionality in a web application.

7. Dynamic Question Loading
I created a questionLoader() function to display questions dynamically based on the current question index.

This function performs several tasks:
- Displays the current question number and total number of questions.
- Calculates and updates the progress bar percentage.
- Displays the question text dynamically.
- Checks whether the question contains an image.
- Shows or hides the image section depending on the question type.
- Updates the question image when an image is available.
- Changes the Next button text to Finish when the user reaches the last question.
- Calls the renderOptions() function to display the available answers.
This functionality allows the same question interface to handle both text-based and picture-based meme questions.

What I learned: I learned how to access nested objects and arrays, use conditional statements, update image sources dynamically, calculate progress percentages, and display content according to specific conditions.

8. Dynamic Option Rendering and Answer Selection
I created two functions, renderOptions() and showAns(), to manage the answer options.

renderOptions():
- Selects the option container from the HTML document.
- Clears the previously displayed options using innerHTML.
- Loops through the available options using a for loop.
- Creates buttons dynamically using document.createElement().
- Adds CSS classes to style selected and unselected options.
- Disables other options after an answer has been selected.
- Adds click event listeners to each option button.
showAns():
- Stores the selected answer in the userAns array.
- Updates the attempted question count.
- Calls renderOptions() again to update the selected option's appearance.
What I learned: I improved my understanding of DOM manipulation, dynamic element creation, event listeners, conditional styling, loops, and storing user selections in arrays.

9. Attempted and Skipped Question Calculation
I created two separate functions to track the user's quiz activity.

attempt():
- Loops through the userAns array.
- Checks whether an answer has been selected.
- Counts all questions that have been attempted.
- Returns the total attempted questions.
skipQue():
- Iterates through the same answer array.
- Checks which answers are still null.
- Counts the unanswered questions.
- Returns the total skipped questions.
These functions help display how many questions the user attempted and how many they skipped.

What I learned: I understood how to iterate through arrays, apply conditional statements, maintain counters, and return calculated values from functions.

10. Previous and Next Question Navigation
I implemented two functions to allow users to navigate between quiz questions.

nextQue():
- Checks whether the current question is the last question.
- If more questions are available, increases the current question index.
- If the last question is reached, calls the finish() function.
previousque():
- Checks whether the current question index is greater than zero.
- Decreases the index to display the previous question.
- Prevents users from navigating before the first question.
I connected both functions to their respective buttons using event listeners and called questionLoader() to refresh the displayed question.

What I learned: I learned how to manage question indexes, use conditional logic for navigation, and update webpage content based on user interactions.

11. Score Calculation
I created a scoreChecker() function to calculate the user's quiz performance.

This function:
- Initializes two counters: correct and wrong.
- Iterates through the user's answer array.
- Compares each selected answer with the correct answer stored in the quiz data.
- Increases the correct counter when the answer matches.
- Increases the wrong counter when the answer does not match.
- Returns both values together as an object.
For example, the function returns an object containing the correct and wrong answer counts.

I used this returned object to display the final score on the result page.

What I learned: I understood how to compare values, work with nested arrays and objects, use conditional statements, and return multiple values from a function using an object.

12. Dynamic Result Message and Performance Classification
I created a resultMessage() function to provide users with a personalized result based on their quiz performance.

I used conditional statements to calculate the percentage of correct answers and classify the user's performance into three levels:
- Above 80% – Meme Legend: Displays a crown emoji and a message for excellent performance.
- Above 40% – Casual Scroller: Displays a cool emoji and an encouraging message.
- 40% or below – Meme Novice: Displays an emoji and an encouraging message to improve their meme knowledge.
Based on the calculated percentage, the application dynamically updates the result title, category, emoji, and description.

What I learned: I learned how to calculate percentages, implement multiple conditional statements, and generate personalized results based on user performance.

13. Final Quiz Submission and Result Display
I created a finish() function to handle the completion of the quiz.

This function performs the following operations:
1. Calls the scoreChecker() function to calculate the final score.
2. Calls the resultMessage() function to generate the performance category.
3. Hides the question section.
4. Displays the final score section.
5. Updates the total attempted questions.
6. Displays the number of skipped questions.
7. Displays the correct and wrong answer counts.
8. Stops the countdown timer using clearInterval().
The same function is called when the user clicks Finish on the last question or when the countdown timer reaches zero.

What I learned: I understood how to combine multiple functions, manage application flow, update different sections of a webpage, and display calculated results dynamically.

14. Page Navigation and Event Handling
Finally, I implemented event listeners for different buttons to control the overall application.
- Start Button: Starts the quiz and initializes the required data.
- Next Button: Moves to the next question.
- Previous Button: Returns to the previous question.
- Play Again Button: Restarts the quiz.
- Home Button: Redirects the user to the homepage.
- Score Back Button: Takes the user back to the homepage.
I used addEventListener() to connect these buttons with their respective JavaScript functions.

What I learned: I gained practical experience with event handling, browser navigation using window.location.href, function calling, and managing user interactions.

15. Important JavaScript Concepts Learned
During this project, I worked with several important JavaScript concepts:
JavaScript Concept	Purpose in My Project
Variables	Store quiz details, answers, timer, and question index.
Functions	Divide application logic into reusable blocks.
Arrays	Store questions, options, and user answers.
Objects	Store quiz details and question information.
find() :	Find a quiz category using its ID.
forEach() : / for loop	Iterate through data and process elements.
URLSearchParams() :	Extract category IDs from the URL.
DOM Manipulation	Update HTML content dynamically.
createElement() :	Create answer buttons dynamically.
addEventListener() :	Handle user interactions.
setInterval() :	Implement the countdown timer.
clearInterval() :	Stop the timer.
Conditional Statements	Handle answer checking and result classification.
return	Return calculated values from functions.

16. Overall Learning Outcome
Through this project, I gained practical experience in developing an interactive web application using HTML, CSS, Bootstrap, and JavaScript. I learned how to structure a complete website, manage dynamic data using arrays and objects, retrieve information through URL parameters, and manipulate HTML elements using JavaScript.

I also improved my understanding of functional programming concepts, DOM manipulation, event handling, conditional logic, timer functionality, question navigation, answer validation, and score calculation.

One of the most important things I learned was how to connect multiple JavaScript functions to create a complete application workflow, starting from category selection and ending with personalized quiz results.

This project significantly improved my logical thinking, problem-solving abilities, JavaScript fundamentals, and confidence in building interactive and dynamic websites.

Project Explanation Video : https://drive.google.com/file/d/1IwCuJJZlo6YrTqCtiaW15vpWC5Kc55q1/view?usp=sharing
