const form = document.querySelector('form');

const correctOptions = {
  q1: 'Rohit Sharma',
  q2: 'West Indies',
  q3: '10',
  q4: 'Sachin Tendulkar',
  q5: '22 yards',
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);

  // const answers = Array.from(data.values());
  // let score = 0;
  // for (let i = 0; i < answers.length; i++) {
  //   if (answers[i] === correctOptions[i]) {
  //     score++;
  //   }
  // }
  // // however, this for loop won't work if user selects less than 5 options. Let's convert the array into object and then play with it.

  let score = 0;
  for (let [key, value] of data.entries()) {
    if (value === correctOptions[key]) {
      score++;
    }
  }

  const container = document.querySelector('.quiz-container');
  const scoreContainer = document.createElement('div');
  scoreContainer.id = 'final-score';
  scoreContainer.innerHTML = `Score: ${score}/5`;
  container.append(scoreContainer);
});
