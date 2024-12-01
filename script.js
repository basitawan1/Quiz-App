const questions = [
    {
      question: "What is the national language of Pakistan?",
      options: ["Urdu", "Punjabi", "Sindhi", "Pashto"],
      answer: 0
    },
    {
      question: "Who is known as the founder of Pakistan?",
      options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam", "Benazir Bhutto"],
      answer: 2
    },
    {
      question: "What is the capital of Pakistan?",
      options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
      answer: 2
    },
    {
      question: "What is the national sport of Pakistan?",
      options: ["Hockey", "Cricket", "Football", "Squash"],
      answer: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const questionEl = document.getElementById("question");
    const options = document.querySelectorAll(".option");
  
    questionEl.textContent = questions[currentQuestionIndex].question;
    options.forEach((option, index) => {
      option.textContent = questions[currentQuestionIndex].options[index];
      option.classList.remove("correct", "wrong");
      option.disabled = false;
    });
  
    document.getElementById("next-btn").style.display = "none";
  }
  
  function selectOption(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;
    const options = document.querySelectorAll(".option");
  
    options[selectedIndex].classList.add(
      selectedIndex === correctIndex ? "correct" : "wrong"
    );
    if (selectedIndex === correctIndex) score++;
  
    options.forEach((option) => (option.disabled = true));
    document.getElementById("next-btn").style.display = "block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      document.getElementById("quiz").style.display = "none";
      document.getElementById("next-btn").style.display = "none";
      document.getElementById(
        "result"
      ).textContent = `Quiz completed! Your score is ${score}/${questions.length}`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", showQuestion);
  