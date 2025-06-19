// Ensure the DOM is fully loaded before running the script
        document.addEventListener('DOMContentLoaded', function() {
            // --- Registration Form Validation Logic ---
            // Get references to the form and the feedback display division
            const form = document.getElementById('registration-form');
            const formFeedbackDiv = document.getElementById('form-feedback');

            // Add an event listener for the form submission
            form.addEventListener('submit', function(event) {
                // Prevent the default form submission behavior
                event.preventDefault();

                // Retrieve and trim the values from the input fields
                const username = document.getElementById('username').value.trim();
                const email = document.getElementById('email').value.trim();
                const password = document.getElementById('password').value.trim();

                // Initialize validation variables
                let isValid = true; // Overall validation status
                const messages = []; // Array to store validation error messages

                // --- Username Validation ---
                // Check if username length is less than 3 characters
                if (username.length < 3) {
                    isValid = false; // Set overall status to false
                    messages.push('Username must be at least 3 characters long.'); // Add error message
                }

                // --- Email Validation ---
                // Check if email includes both '@' and '.' characters
                // A more robust email validation would use a regular expression, but this meets the basic requirement.
                if (!email.includes('@') || !email.includes('.')) {
                    isValid = false; // Set overall status to false
                    messages.push('Please enter a valid email address.'); // Add error message
                }

                // --- Password Validation ---
                // Check if password length is at least 8 characters
                if (password.length < 8) {
                    isValid = false; // Set overall status to false
                    messages.push('Password must be at least 8 characters long.'); // Add error message
                }

                // --- Displaying Feedback for Registration Form ---
                // Make the feedback division visible
                formFeedbackDiv.style.display = 'block';
                formFeedbackDiv.className = 'mt-6 p-4 rounded-md text-center'; // Reset classes for new styling

                if (isValid) {
                    // If all validations pass, display a success message
                    formFeedbackDiv.textContent = 'Registration successful!';
                    formFeedbackDiv.classList.add('bg-green-100', 'text-green-700', 'border-green-300');
                    formFeedbackDiv.classList.remove('bg-red-100', 'text-red-700', 'border-red-300'); // Remove error styles if present
                } else {
                    // If any validations fail, display error messages
                    // Join messages with <br> to display each message on a new line
                    formFeedbackDiv.innerHTML = messages.join('<br>');
                    formFeedbackDiv.classList.add('bg-red-100', 'text-red-700', 'border-red-300');
                    formFeedbackDiv.classList.remove('bg-green-100', 'text-green-700', 'border-green-300'); // Remove success styles if present
                }
            });

            // --- Quiz Application Logic ---
            // Define the checkAnswer function
            function checkAnswer() {
                // Identify the correct answer
                const correctAnswer = "4";

                // Retrieve the user's selected answer
                const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
                const userAnswer = selectedAnswer ? selectedAnswer.value : null; // Get value if radio is checked, otherwise null

                // Get the feedback element for the quiz
                const quizFeedbackDiv = document.getElementById('feedback');
                quizFeedbackDiv.style.display = 'block'; // Make feedback visible
                quizFeedbackDiv.className = 'mt-6 p-4 rounded-md text-center'; // Reset classes

                // Compare the user's answer with the correct answer
                if (userAnswer === correctAnswer) {
                    quizFeedbackDiv.textContent = "Correct! Well done.";
                    quizFeedbackDiv.classList.add('bg-green-100', 'text-green-700', 'border-green-300');
                    quizFeedbackDiv.classList.remove('bg-red-100', 'text-red-700', 'border-red-300');
                } else {
                    // Provide specific feedback if no answer is selected
                    if (userAnswer === null) {
                        quizFeedbackDiv.textContent = "Please select an answer.";
                        quizFeedbackDiv.classList.add('bg-yellow-100', 'text-yellow-700', 'border-yellow-300'); // Use yellow for warnings
                        quizFeedbackDiv.classList.remove('bg-green-100', 'text-green-700', 'border-green-300', 'bg-red-100', 'text-red-700', 'border-red-300');
                    } else {
                        quizFeedbackDiv.textContent = "That's incorrect. Try again!";
                        quizFeedbackDiv.classList.add('bg-red-100', 'text-red-700', 'border-red-300');
                        quizFeedbackDiv.classList.remove('bg-green-100', 'text-green-700', 'border-green-300', 'bg-yellow-100', 'text-yellow-700', 'border-yellow-300');
                    }
                }
            }

            // Add an event listener to the "Submit Answer" button
            const submitAnswerButton = document.getElementById('submit-answer');
            if (submitAnswerButton) { // Ensure the button exists before adding listener
                submitAnswerButton.addEventListener('click', checkAnswer);
            }
        });