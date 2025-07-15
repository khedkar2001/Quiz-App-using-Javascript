document.addEventListener("DOMContentLoaded", function () {
  let quizData = {
    sections: [
      {
        questionTitle: "General Knowledge",
        questions: [
          {
            id: 1,
            type: "mcq",
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris",
          },
          {
            id: 2,
            type: "text",
            question: "Name the continent where the Sahara Desert is located.",
            answer: "Africa",
          },
          {
            id: 3,
            type: "mcq",
            question: "Which ocean is the largest?",
            options: ["Atlantic", "Indian", "Pacific", "Arctic"],
            answer: "Pacific",
          },
          {
            id: 4,
            type: "text",
            question: "Who wrote the national anthem of India?",
            answer: "Rabindranath Tagore",
          },
          {
            id: 5,
            type: "mcq",
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "Thailand", "India"],
            answer: "Japan",
          },
          {
            id: 6,
            type: "text",
            question: "What is the official language of Brazil?",
            answer: "Portuguese",
          },
          {
            id: 7,
            type: "mcq",
            question: "How many continents are there on Earth?",
            options: ["5", "6", "7", "8"],
            answer: "7",
          },
          {
            id: 8,
            type: "text",
            question: "Which currency is used in Japan?",
            answer: "Yen",
          },
          {
            id: 9,
            type: "mcq",
            question: "Which is the tallest mountain in the world?",
            options: ["K2", "Kangchenjunga", "Everest", "Lhotse"],
            answer: "Everest",
          },
          {
            id: 10,
            type: "text",
            question:
              "Which Indian state is known as the 'Land of Five Rivers'?",
            answer: "Punjab",
          },
        ],
      },
      {
        questionTitle: "Maths",
        questions: [
          {
            id: 1,
            type: "mcq",
            question: "What is 9 x 9?",
            options: ["81", "72", "99", "90"],
            answer: "81",
          },
          {
            id: 2,
            type: "text",
            question: "What is the value of π (up to 2 decimal places)?",
            answer: "3.14",
          },
          {
            id: 3,
            type: "mcq",
            question: "What is 20% of 150?",
            options: ["30", "25", "20", "35"],
            answer: "30",
          },
          {
            id: 4,
            type: "text",
            question: "What is the cube of 3?",
            answer: "27",
          },
          {
            id: 5,
            type: "mcq",
            question: "What is 12 divided by 0?",
            options: ["Infinity", "0", "Undefined", "12"],
            answer: "Undefined",
          },
          {
            id: 6,
            type: "text",
            question: "Find the square root of 144.",
            answer: "12",
          },
          {
            id: 7,
            type: "mcq",
            question: "What is the perimeter of a square with side 4 cm?",
            options: ["12 cm", "16 cm", "8 cm", "20 cm"],
            answer: "16 cm",
          },
          {
            id: 8,
            type: "text",
            question:
              "What is the area of a rectangle with length 5 cm and width 3 cm?",
            answer: "15",
          },
          {
            id: 9,
            type: "mcq",
            question: "Which is a prime number?",
            options: ["4", "6", "9", "7"],
            answer: "7",
          },
          {
            id: 10,
            type: "text",
            question: "What is 2 to the power of 5?",
            answer: "32",
          },
        ],
      },
      {
        questionTitle: "Science",
        questions: [
          {
            id: 1,
            type: "mcq",
            question: "What planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
          },
          {
            id: 2,
            type: "text",
            question: "Which gas do plants use for photosynthesis?",
            answer: "Carbon Dioxide",
          },
          {
            id: 3,
            type: "mcq",
            question: "What is the boiling point of water in Celsius?",
            options: ["90°C", "80°C", "100°C", "120°C"],
            answer: "100°C",
          },
          {
            id: 4,
            type: "text",
            question: "What part of the plant conducts photosynthesis?",
            answer: "Leaf",
          },
          {
            id: 5,
            type: "mcq",
            question: "Which organ in the human body pumps blood?",
            options: ["Liver", "Brain", "Heart", "Lungs"],
            answer: "Heart",
          },
          {
            id: 6,
            type: "text",
            question: "Which vitamin is provided by sunlight?",
            answer: "Vitamin D",
          },
          {
            id: 7,
            type: "mcq",
            question: "Which force keeps us on the ground?",
            options: ["Magnetism", "Friction", "Gravity", "Electricity"],
            answer: "Gravity",
          },
          {
            id: 8,
            type: "text",
            question: "What is the chemical formula for water?",
            answer: "H2O",
          },
          {
            id: 9,
            type: "mcq",
            question: "Which planet is closest to the sun?",
            options: ["Earth", "Mercury", "Venus", "Mars"],
            answer: "Mercury",
          },
          {
            id: 10,
            type: "text",
            question: "Name the gas essential for human respiration.",
            answer: "Oxygen",
          },
        ],
      },
      {
        questionTitle: "History",
        questions: [
          {
            id: 1,
            type: "mcq",
            question: "Who was the first President of the United States?",
            options: [
              "Abraham Lincoln",
              "George Washington",
              "Thomas Jefferson",
              "John Adams",
            ],
            answer: "George Washington",
          },
          {
            id: 2,
            type: "text",
            question: "In which year did World War II end?",
            answer: "1945",
          },
          {
            id: 3,
            type: "mcq",
            question: "Who was the father of Indian independence?",
            options: ["Nehru", "Gandhi", "Ambedkar", "Bose"],
            answer: "Gandhi",
          },
          {
            id: 4,
            type: "text",
            question: "Who built the Taj Mahal?",
            answer: "Shah Jahan",
          },
          {
            id: 5,
            type: "mcq",
            question: "Which war ended in 1918?",
            options: ["WWII", "WWI", "Cold War", "Civil War"],
            answer: "WWI",
          },
          {
            id: 6,
            type: "text",
            question:
              "What was the name of the ship on which the Pilgrims traveled to America?",
            answer: "Mayflower",
          },
          {
            id: 7,
            type: "mcq",
            question: "Who discovered America?",
            options: ["Vasco da Gama", "Columbus", "Magellan", "Cook"],
            answer: "Columbus",
          },
          {
            id: 8,
            type: "text",
            question:
              "What is the name of the ancient Egyptian writing system?",
            answer: "Hieroglyphics",
          },
          {
            id: 9,
            type: "mcq",
            question: "Which empire was ruled by Akbar?",
            options: ["Maurya", "Mughal", "Gupta", "Chola"],
            answer: "Mughal",
          },
          {
            id: 10,
            type: "text",
            question: "Who was the Prime Minister of the UK during WWII?",
            answer: "Winston Churchill",
          },
        ],
      },
    ],
  };

  initSection();

  function initSection() {
    let sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.addEventListener("click", () => {
        let sectionNumber = parseInt(section.getAttribute("data-section"));
        // console.log(sectionNumber);
        document.getElementById("quiz-container").style.display="none";
        startQuiz(sectionNumber);
      });
    });
  }

  function startQuiz(index) {
    const currentQuestions = quizData.sections[index].questions;
    console.log("questions",currentQuestions);
    let currentQuestionIndex = 0;
    let score = 0;
    let answerSelected = false;

    document.getElementById("question-container").style.display="block"
    document.getElementById("question-container").innerHTML = `<p id="score">Score: 0</p>
    <div id="question"></div>
    <div id="options"></div>    
    <button id="next-button">Next</button>`
    
    showQuestions();
    function showQuestions() {
      const question = currentQuestions[currentQuestionIndex];
      console.log("question", question);
      const questionElement = document.getElementById("question");
      const optionsElement = document.getElementById("options");

      questionElement.textContent = question.question;
      optionsElement.innerHTML = '';

      if(question.type ==="mcq"){
        question.options.forEach((option)=>{
          const optionElement = document.createElement('div');
          optionElement.textContent = option;
          optionElement.addEventListener('click', function (){
            if(!answerSelected){
              answerSelected = true;
              optionElement.classList.add("selected");
              checkAnswer(option, question.answer);
              console.log("selected", option)
            }
          })
          optionsElement.appendChild(optionElement);
        })
      }else{

        //for text and number question
        const inputElement = document.createElement('input');
        inputElement.type = question.type === 'number' ? 'number': 'text';

        const submitButton = document.createElement("button");
        submitButton.textContent = 'Submit Answer';
        submitButton.classList.add('submit-answer');

        submitButton.onclick = () =>{
          if(!answerSelected){
            answerSelected = true;
            checkAnswer(inputElement.value.toString(), question.answer.toString());
          }
        };
        optionsElement.appendChild(inputElement);
        optionsElement.appendChild(submitButton);

      }
    }

    function checkAnswer(userAnswer, questionAnswer) {
      const feedbackElement = document.createElement("div");
      feedbackElement.id = "feedback";
      if(userAnswer === questionAnswer || userAnswer.toLowerCase()=== questionAnswer.toLowerCase()){
        //feedback correct
        score++;
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "green";
      } else{
        //feedback is wrong
        //show what is correct
        feedbackElement.textContent = `Wrong!! Correct Answer is ${questionAnswer}`;
        feedbackElement.style.color = "red";
      }
      const optionElement = document.getElementById("options");
      optionElement.appendChild(feedbackElement);
      updateScore();
      // console.log("cjeckibng", answer);
      
    }
    function updateScore() {
      document.getElementById("score").textContent = `Score: ${score}`
      
    }

    document.getElementById("next-button").addEventListener("click", () => {
      if (currentQuestionIndex == currentQuestions.length-1) {
        console.log("Quiz Over");
        endQuiz();
      } else {
        answerSelected = false;
        // console.log("currentQuestionIndex",currentQuestionIndex)
        currentQuestionIndex++;
        showQuestions();
      }
    })

    function endQuiz() {
      let questionContainer = document.getElementById("question-container");
      let quizContainer  = document.getElementById("quiz-container"); 

      questionContainer.innerHTML = `<h1>Quiz Completed</h1>
      <p>Your Final score : ${score}/${currentQuestions.length}</p>
      <button id="home-button">Go to Home</button>`
      document.getElementById('home-button').addEventListener('click',function () {
        quizContainer.style.display = 'grid';
        questionContainer.style.display = 'none';
        
      })
      
    }
  }
});
