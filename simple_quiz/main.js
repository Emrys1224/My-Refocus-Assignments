// Answer feedback text colors
const rightAnsColor = 'forestgreen';
const wrongAnsColor = 'tomato';

// Answer feedback messages
const rightAnswer = 'answer is correct!';
const wrongAnswer = 'answer is incorrect!';
const noAnswer = 'You must enter an answer!';

// Quiz inputs
const quizForm = document.forms.quizForm;
const answerField1 = quizForm.answer1;
const answerField2 = quizForm.answer2;
const answerField3 = quizForm.answer3;
const answerFeedback1 = document.getElementById('feedback1');
const answerFeedback2 = document.getElementById('feedback2');
const answerFeedback3 = document.getElementById('feedback3');

// Check quiz result
quizForm.addEventListener('submit', (event) => {
  event.preventDefault();

  checkQuestion1();
  checkQuestion2();
  checkQuestion3();
});

// Check quiz result
quizForm.addEventListener('reset', (event) => {
  event.preventDefault();

  // Reset Question 1 answer
  answerField1.value = '';

  // Reset Question 2 answer
  for(let radio of answerField2) {
    radio.checked = false;
  }

  // Reset Question 2 answer
  for(let checkbox of answerField3) {
    checkbox.checked = false;
  }

  // Clear all answer feedback
  answerFeedback1.innerText = '';
  answerFeedback2.innerText = '';
  answerFeedback3.innerText = '';
});

// Check question 1 answer
function checkQuestion1() {
  const answer1 = 'Manila';
  const question1 = 'Question 1 ';

  if (answerField1.value === answer1) {
    // Question 1 feedback for correct answer
    answerFeedback1.innerText = question1 + rightAnswer;
    answerFeedback1.style.color = rightAnsColor;

  } else if (answerField1.value === '') {
    // Question 1 feedback if no answer was given
    answerFeedback1.innerText = noAnswer;
    answerFeedback1.style.color = wrongAnsColor;

  } else {
    // Question 1 feedback for wrong answer
    answerFeedback1.innerText = question1 + wrongAnswer;
    answerFeedback1.style.color = wrongAnsColor;
  }
}

// Check question 2 answer
function checkQuestion2() {
  const answer2 = 'x_13';
  const question2 = 'Question 2 ';

  if (answerField2.value === answer2) {
    // Question 2 feedback for correct answer
    answerFeedback2.innerText = question2 + rightAnswer;
    answerFeedback2.style.color = rightAnsColor;

  } else if (answerField2.value === '') {
    // Question 2 feedback if no answer was given
    answerFeedback2.innerText = noAnswer;
    answerFeedback2.style.color = wrongAnsColor;

  } else {
    // Question 2 feedback for wrong answer
    answerFeedback2.innerText = question2 + wrongAnswer;
    answerFeedback2.style.color = wrongAnsColor;
  }
}

// Check question 2 answer
function checkQuestion3() {
  const question3 = 'Question 3 ';

  if (answerField3[0].checked && answerField3[1].checked && !answerField3[2].checked && answerField3[3].checked) {
    // Question 3 feedback for correct answer
    answerFeedback3.innerText = question3 + rightAnswer;
    answerFeedback3.style.color = rightAnsColor;

  } else if (!answerField3[0].checked && !answerField3[1].checked && !answerField3[2].checked && !answerField3[3].checked) {
    // Question 3 feedback if no answer was given
    answerFeedback3.innerText = noAnswer;
    answerFeedback3.style.color = wrongAnsColor;

  } else {
    // Question 3 feedback for wrong answer
    answerFeedback3.innerText = question3 + wrongAnswer;
    answerFeedback3.style.color = wrongAnsColor;
  }
}