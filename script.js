// Toggle the menu display
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('show');
}

// Show a specific section and hide others
function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
    window.scrollTo(0, document.getElementById(sectionId).offsetTop - 60);
}

// Show Quiz
function showQuiz(quizId) {
    // Hide other quizzes
    document.querySelectorAll('.quiz-section').forEach(quiz => quiz.style.display = 'none');
    // Show the selected quiz
    document.getElementById(quizId).style.display = 'block';
    // Generate quiz questions
    if (quizId === 'phishingQuiz') {
        generatePhishingQuiz();
    } else if (quizId === 'spoofingQuiz') {
        generateSpoofingQuiz();
    }
}

// Global variables to store quiz questions and correct answers
let phishingQuestions = [];
let spoofingQuestions = [];

// Generate Phishing Quiz Questions
function generatePhishingQuiz() {
    phishingQuestions = [
        {
            question: "Which of the following is a sign of a phishing email?",
            options: {
                a: "An email from your bank with personalized information.",
                b: "An email with spelling mistakes and urgent language.",
                c: "An email from a colleague with a familiar greeting.",
                d: "An email from a known online store confirming your purchase."
            },
            correctAnswer: "b"
        },
        {
            question: "What should you do if an email asks you to verify your account information by clicking a link?",
            options: {
                a: "Click the link and enter your information.",
                b: "Reply to the email asking for more details.",
                c: "Ignore the email.",
                d: "Visit the official website by typing the URL directly."
            },
            correctAnswer: "d"
        },
        {
            question: "Which email domain is most likely to be from a legitimate organization?",
            options: {
                a: "support@paypal-security.com",
                b: "support@paypal.com",
                c: "support@paypal.co",
                d: "support@paypalservice.com"
            },
            correctAnswer: "b"
        },
        {
            question: "What should you look for in a link to determine if it's safe to click?",
            options: {
                a: "The presence of 'http://'.",
                b: "The presence of 'https://' and the padlock icon.",
                c: "The email sender's name.",
                d: "The link's length."
            },
            correctAnswer: "b"
        },
        {
            question: "Which of these actions should you take if you receive a suspicious email?",
            options: {
                a: "Delete the email immediately.",
                b: "Forward the email to a friend for their opinion.",
                c: "Click the links to see where they lead.",
                d: "Report the email to your IT department or email provider."
            },
            correctAnswer: "d"
        },
        {
            question: "What should you do if an email from your bank asks for your password?",
            options: {
                a: "Enter your password to ensure your account is secure.",
                b: "Forward the email to your personal email address.",
                c: "Contact your bank using a phone number from their official website.",
                d: "Reply with your password."
            },
            correctAnswer: "c"
        },
        {
            question: "Which of the following is a common characteristic of phishing emails?",
            options: {
                a: "They contain grammar and spelling errors.",
                b: "They have a professional and polished look.",
                c: "They address you by name.",
                d: "They provide detailed company information."
            },
            correctAnswer: "a"
        },
        {
            question: "If an email contains a link, where should you hover your mouse to see the true URL?",
            options: {
                a: "The sender's email address.",
                b: "The subject line.",
                c: "The body of the email.",
                d: "The link itself."
            },
            correctAnswer: "d"
        },
        {
            question: "What should you do if you receive an email that seems too good to be true, like winning a lottery you didn't enter?",
            options: {
                a: "Click the link to claim your prize.",
                b: "Reply to the email with your personal details.",
                c: "Ignore or delete the email.",
                d: "Share the good news with friends on social media."
            },
            correctAnswer: "c"
        },
        {
            question: "How can you verify the authenticity of an email that asks you to update your account information?",
            options: {
                a: "Reply to the email and ask for confirmation.",
                b: "Click the link in the email to update your information.",
                c: "Call the organization using a number from their official website.",
                d: "Forward the email to your work email for safekeeping."
            },
            correctAnswer: "c"
        }
    ];

    const form = document.getElementById('phishingQuizForm');
    form.innerHTML = ''; // Clear previous content

    phishingQuestions.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-question');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${item.question}</p>
            <label><input type="radio" name="q${index}" value="a" required> ${item.options.a}</label>
            <label><input type="radio" name="q${index}" value="b"> ${item.options.b}</label>
            <label><input type="radio" name="q${index}" value="c"> ${item.options.c}</label>
            <label><input type="radio" name="q${index}" value="d"> ${item.options.d}</label>
        `;
        form.appendChild(questionDiv);
    });

    form.innerHTML += `<button type="submit">Submit</button>`;
}

// Generate Spoofing Quiz Questions
function generateSpoofingQuiz() {
    spoofingQuestions = [
        {
            question: "Which of the following is a sign of a spoofing attempt?",
            options: {
                a: "An email from a friend with a familiar greeting.",
                b: "An email with an unfamiliar sender address but the same domain name.",
                c: "An email from your bank with your account details.",
                d: "An email with a slight misspelling in the sender’s address."
            },
            correctAnswer: "d"
        },
        {
            question: "What should you do if you receive a call from someone claiming to be from your bank, asking for personal information?",
            options: {
                a: "Provide the information immediately.",
                b: "Hang up and call your bank using the number on their official website.",
                c: "Ask the caller to send you an email confirmation.",
                d: "Ignore the call."
            },
            correctAnswer: "b"
        },
        {
            question: "Which email is likely to be from a legitimate source?",
            options: {
                a: "notification@pay-pal.com",
                b: "support@paypal.com",
                c: "info@paypal-security.com",
                d: "contact@paypal.co"
            },
            correctAnswer: "b"
        },
        {
            question: "What should you do if you receive an email that looks like it's from a coworker but you’re not sure?",
            options: {
                a: "Reply to the email asking for more details.",
                b: "Click on the link in the email to verify.",
                c: "Contact the coworker directly using a known phone number.",
                d: "Forward the email to your IT department."
            },
            correctAnswer: "c"
        },
        {
            question: "Which of these is a common tactic used in spoofing attempts?",
            options: {
                a: "Using familiar logos and branding.",
                b: "Providing detailed contact information.",
                c: "Using secure communication channels.",
                d: "Sending emails from a personal address."
            },
            correctAnswer: "a"
        },
        {
            question: "How can you verify the authenticity of an email that seems suspicious?",
            options: {
                a: "Check the sender’s email address carefully for misspellings.",
                b: "Reply to the email asking for verification.",
                c: "Click any links to see where they lead.",
                d: "Delete the email immediately."
            },
            correctAnswer: "a"
        },
        {
            question: "Which of the following actions should you take if you suspect a phone call is a spoofing attempt?",
            options: {
                a: "Provide limited information to verify.",
                b: "Hang up and call the organization directly using an official number.",
                c: "Continue the conversation to gather more details.",
                d: "Reply with your personal information."
            },
            correctAnswer: "b"
        },
        {
            question: "What is a red flag that might indicate a website is a spoofing attempt?",
            options: {
                a: "The website URL starts with 'https://'.",
                b: "The website has numerous spelling and grammatical errors.",
                c: "The website uses a recognized logo.",
                d: "The website has a professional layout."
            },
            correctAnswer: "b"
        },
        {
            question: "How should you handle an email that appears to be from a well-known company but requests sensitive information?",
            options: {
                a: "Provide the information requested.",
                b: "Visit the company’s official website and contact customer service.",
                c: "Forward the email to a friend for their opinion.",
                d: "Reply with your details."
            },
            correctAnswer: "b"
        },
        {
            question: "What should you do if you receive a text message asking you to confirm your account details?",
            options: {
                a: "Click the link in the message and enter your details.",
                b: "Reply to the message asking for more information.",
                c: "Ignore the message and contact the organization using an official number.",
                d: "Forward the message to your IT department."
            },
            correctAnswer: "c"
        }
    ];

    const form = document.getElementById('spoofingQuizForm');
    form.innerHTML = ''; // Clear previous content

    spoofingQuestions.forEach((item, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-question');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${item.question}</p>
            <label><input type="radio" name="q${index}" value="a" required> ${item.options.a}</label>
            <label><input type="radio" name="q${index}" value="b"> ${item.options.b}</label>
            <label><input type="radio" name="q${index}" value="c"> ${item.options.c}</label>
            <label><input type="radio" name="q${index}" value="d"> ${item.options.d}</label>
        `;
        form.appendChild(questionDiv);
    });

    form.innerHTML += `<button type="submit">Submit</button>`;
}

// Grade Quiz
function gradeQuiz(event, quizType) {
    event.preventDefault();
    let questions, formId, resultDivId;

    if (quizType === 'phishing') {
        questions = phishingQuestions;
        formId = 'phishingQuizForm';
        resultDivId = 'phishingQuizResult';
    } else if (quizType === 'spoofing') {
        questions = spoofingQuestions;
        formId = 'spoofingQuizForm';
        resultDivId = 'spoofingQuizResult';
    }

    const form = document.getElementById(formId);
    const formData = new FormData(form);
    let score = 0;
    let total = questions.length;
    let feedback = '';

    questions.forEach((item, index) => {
        const userAnswer = formData.get(`q${index}`);
        if (userAnswer === item.correctAnswer) {
            score++;
            feedback += `<p class="correct">Question ${index + 1}: Correct</p>`;
        } else {
            feedback += `<p class="incorrect">Question ${index + 1}: Incorrect (Your answer: ${userAnswer.toUpperCase()}, Correct answer: ${item.correctAnswer.toUpperCase()})</p>`;
        }
    });

    const resultDiv = document.getElementById(resultDivId);
    resultDiv.innerHTML = `<h4>Your Score: ${score} out of ${total}</h4>${feedback}`;

    // Optionally, offer to submit the results via email
    resultDiv.innerHTML += `
        <p>If you'd like to submit your results, please click the button below:</p>
        <button onclick="submitQuiz('${formId}', ${score}, ${total})">Submit Your Results via Email</button>
    `;
}

// Submit Quiz via Email
function submitQuiz(formId, score, total) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);

    let emailBody = `Quiz Answers:%0D%0A%0D%0A`;
    for (let [name, value] of formData) {
        emailBody += `${name}: ${value}%0D%0A`;
    }

    emailBody += `%0D%0AYour Score: ${score} out of ${total}%0D%0A`;
    emailBody += `%0D%0APlease include your secret word for identification.`;

    window.location.href = `mailto:emina.husic@2gimnazija.ba?subject=Quiz Submission&body=${emailBody}`;
}

// Close the modal (if any modals are still used)
function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
}

// Toggle Theme
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    // Save preference in localStorage
    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        document.querySelector('.theme-switcher').textContent = '🌙';
    } else {
        localStorage.setItem('theme', 'dark');
        document.querySelector('.theme-switcher').textContent = '☀️';
    }
}

// Apply saved theme on load
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.querySelector('.theme-switcher').textContent = '🌙';
    } else {
        document.querySelector('.theme-switcher').textContent = '☀️';
    }
};

// Open Contact Modal
function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
}

// Close Contact Modal
function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Show Quiz
function showQuiz(quizId) {
    // Hide other quizzes
    document.querySelectorAll('.quiz-section').forEach(quiz => quiz.style.display = 'none');
    // Show the selected quiz
    document.getElementById(quizId).style.display = 'block';
    // Generate quiz questions
    if (quizId === 'phishingQuiz') {
        generatePhishingQuiz();
    } else if (quizId === 'spoofingQuiz') {
        generateSpoofingQuiz();
    }
    // Scroll to the quiz area
    const quizArea = document.getElementById('quizArea');
    quizArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}