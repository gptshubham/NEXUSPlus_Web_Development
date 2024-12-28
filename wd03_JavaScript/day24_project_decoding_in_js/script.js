// Selecting Elements
const start = document.querySelector('#start-btn');
const form = document.querySelector('form');

const scoreContainer = document.querySelector('.score-container');

// object containing the quiz questions , options and the correct option

const cricQuiz = [
  {
    q: 'Who has the highest individual score in ODI cricket?',
    ops: ['AB de Villiers', 'Martin Guptill', 'Rohit Sharma', 'Chris Gayle'],
    ans: 'Rohit Sharma',
  },
  {
    q: 'Which country won the first Cricket World Cup in 1975?',
    ops: ['Australia', 'West Indies', 'England', 'India'],
    ans: 'West Indies',
  },
  {
    q: 'What is the maximum number of wickets a bowler can take in a single ODI match?',
    ops: ['6', '7', '8', '10'],
    ans: '10',
  },
  {
    q: 'Who is known as the "God of Cricket"?',
    ops: ['Ricky Ponting', 'Sachin Tendulkar', 'Brian Lara', 'Virat Kohli'],
    ans: 'Sachin Tendulkar',
  },
  {
    q: 'What is the length of a cricket pitch (in yards)?',
    ops: ['18 yards', '20 yards', '22 yards', '24 yards'],
    ans: '22 yards',
  },
  {
    q: 'Who holds the record for the fastest century in ODI cricket?',
    ops: ['Virat Kohli', 'AB de Villiers', 'Chris Gayle', 'Shahid Afridi'],
    ans: 'AB de Villiers',
  },
  {
    q: 'Which bowler has the most wickets in Test cricket?',
    ops: [
      'Shane Warne',
      'Anil Kumble',
      'Muttiah Muralitharan',
      'James Anderson',
    ],
    ans: 'Muttiah Muralitharan',
  },
  {
    q: 'Which country hosted the 2011 ICC Cricket World Cup final?',
    ops: ['South Africa', 'Sri Lanka', 'India', 'England'],
    ans: 'India',
  },
  {
    q: 'Who was the captain of the Indian cricket team during their first T20 World Cup win in 2007?',
    ops: ['Sourav Ganguly', 'Virat Kohli', 'MS Dhoni', 'Rahul Dravid'],
    ans: 'MS Dhoni',
  },
  {
    q: 'What is the term for scoring three wickets in three consecutive deliveries?',
    ops: ['Triple strike', 'Hat-trick', 'Fast three', 'Golden ball'],
    ans: 'Hat-trick',
  },
  {
    q: 'Which country has won the most ICC Cricket World Cups?',
    ops: ['West Indies', 'India', 'Australia', 'England'],
    ans: 'Australia',
  },
  {
    q: 'Which cricketer is nicknamed "The Wall"?',
    ops: [
      'Rahul Dravid',
      'Steve Waugh',
      'Jacques Kallis',
      'Shivnarine Chanderpaul',
    ],
    ans: 'Rahul Dravid',
  },
  {
    q: 'Who scored the first double century in ODI cricket?',
    ops: ['Sachin Tendulkar', 'Virender Sehwag', 'Rohit Sharma', 'Saeed Anwar'],
    ans: 'Sachin Tendulkar',
  },
  {
    q: 'In cricket, how many runs are awarded for hitting the ball over the boundary without bouncing?',
    ops: ['4 runs', '5 runs', '6 runs', '7 runs'],
    ans: '6 runs',
  },
  {
    q: 'Who bowled the final over in the 2019 ICC Cricket World Cup Super Over?',
    ops: ['Jasprit Bumrah', 'Trent Boult', 'Jofra Archer', 'Mitchell Starc'],
    ans: 'Jofra Archer',
  },
  {
    q: 'Which player has hit the most sixes in international cricket?',
    ops: ['MS Dhoni', 'Shahid Afridi', 'Chris Gayle', 'Rohit Sharma'],
    ans: 'Chris Gayle',
  },
  {
    q: 'What is the maximum number of players allowed on the fielding side during a cricket match?',
    ops: ['10', '11', '12', '13'],
    ans: '11',
  },
  {
    q: 'Which cricketer has the nickname "Rawalpindi Express"?',
    ops: ['Shoaib Malik', 'Shoaib Akhtar', 'Wasim Akram', 'Waqar Younis'],
    ans: 'Shoaib Akhtar',
  },
  {
    q: 'Which team holds the record for the highest team score in a Test match innings?',
    ops: ['England', 'Australia', 'West Indies', 'India'],
    ans: 'Australia',
  },
  {
    q: 'In which year was the first-ever Test match played?',
    ops: ['1877', '1882', '1890', '1901'],
    ans: '1877',
  },
  {
    q: 'What is the term used for scoring zero runs in cricket?',
    ops: ['Duck', 'Goose', 'Eagle', 'Zero'],
    ans: 'Duck',
  },
  {
    q: 'Who holds the record for the most consecutive Test matches played?',
    ops: ['Allan Border', 'Sunil Gavaskar', 'Alastair Cook', 'Rahul Dravid'],
    ans: 'Alastair Cook',
  },
  {
    q: 'Which cricketer has the most runs in a single edition of the ICC Cricket World Cup?',
    ops: [
      'Sachin Tendulkar',
      'Martin Guptill',
      'Kane Williamson',
      'Rohit Sharma',
    ],
    ans: 'Sachin Tendulkar',
  },
  {
    q: 'What is the term for a ball that is delivered too high for the batsman?',
    ops: ['No-ball', 'Wide-ball', 'Full toss', 'Bouncer'],
    ans: 'No-ball',
  },
  {
    q: 'Which country introduced the Big Bash League (BBL)?',
    ops: ['England', 'Australia', 'South Africa', 'New Zealand'],
    ans: 'Australia',
  },
  {
    q: 'Who was the first batsman to score 10,000 runs in Test cricket?',
    ops: ['Allan Border', 'Sunil Gavaskar', 'Rahul Dravid', 'Brian Lara'],
    ans: 'Sunil Gavaskar',
  },
  {
    q: 'What is the name of the trophy awarded in Test matches between England and Australia?',
    ops: [
      'Border-Gavaskar Trophy',
      'ICC Test Championship',
      'The Ashes',
      'World Test Trophy',
    ],
    ans: 'The Ashes',
  },
  {
    q: 'Who was the first bowler to take 600 wickets in Test cricket?',
    ops: [
      'Shane Warne',
      'Anil Kumble',
      'Muttiah Muralitharan',
      'Courtney Walsh',
    ],
    ans: 'Courtney Walsh',
  },
  {
    q: 'In cricket, what does LBW stand for?',
    ops: [
      'Leg Before Wicket',
      'Left Behind Wicket',
      'Long Ball Wide',
      'Low Ball Wicket',
    ],
    ans: 'Leg Before Wicket',
  },
  {
    q: 'Which team chased down 438 runs in an ODI against South Africa in 2006?',
    ops: ['Australia', 'West Indies', 'India', 'South Africa'],
    ans: 'South Africa',
  },
  {
    q: 'What is the maximum number of overs allowed per bowler in a 50-over ODI match?',
    ops: ['8 overs', '10 overs', '12 overs', '15 overs'],
    ans: '10 overs',
  },
  {
    q: 'Who is the youngest cricketer to score a double century in Test cricket?',
    ops: [
      'Don Bradman',
      'Sachin Tendulkar',
      'Javed Miandad',
      'Mohammad Ashraful',
    ],
    ans: 'Mohammad Ashraful',
  },
  {
    q: 'Which cricketer is the fastest to score 8,000 runs in Test cricket?',
    ops: ['Virat Kohli', 'Kumar Sangakkara', 'Steve Smith', 'Hashim Amla'],
    ans: 'Hashim Amla',
  },
  {
    q: 'In which format of cricket is the "Powerplay" rule used?',
    ops: [
      'Test Cricket',
      'ODI and T20 Cricket',
      'Only T20 Cricket',
      'Only ODI Cricket',
    ],
    ans: 'ODI and T20 Cricket',
  },
  {
    q: 'Which stadium is known as the "Home of Cricket"?',
    ops: [
      'Eden Gardens',
      'Melbourne Cricket Ground',
      'Lord’s Cricket Ground',
      'The Oval',
    ],
    ans: 'Lord’s Cricket Ground',
  },
  {
    q: 'Which cricketer has the highest batting average in Test cricket (minimum 20 innings)?',
    ops: ['Virat Kohli', 'Don Bradman', 'Jacques Kallis', 'Steve Smith'],
    ans: 'Don Bradman',
  },
  {
    q: 'Who captained India to its first-ever Test match win in 1952?',
    ops: ['CK Nayudu', 'Vijay Hazare', 'Lala Amarnath', 'Polly Umrigar'],
    ans: 'Vijay Hazare',
  },
  {
    q: 'Which country won the first T20 World Cup in 2007?',
    ops: ['Australia', 'Pakistan', 'India', 'South Africa'],
    ans: 'India',
  },
  {
    q: 'What is the maximum number of runs a batsman can score off a single legal delivery?',
    ops: ['4', '6', '7', '8'],
    ans: '8',
  },
  {
    q: 'Who has bowled the fastest delivery in cricket history (161.3 km/h)?',
    ops: ['Brett Lee', 'Shoaib Akhtar', 'Shaun Tait', 'Mitchell Starc'],
    ans: 'Shoaib Akhtar',
  },
  {
    q: 'Who was the first bowler to take a hat-trick in a T20 International match?',
    ops: ['Lasith Malinga', 'Brett Lee', 'Rashid Khan', 'Tim Southee'],
    ans: 'Brett Lee',
  },
  {
    q: 'Which team scored the highest total in an ODI match (498/4)?',
    ops: ['England', 'India', 'Australia', 'South Africa'],
    ans: 'England',
  },
  {
    q: 'In which year was the Decision Review System (DRS) first introduced in cricket?',
    ops: ['2007', '2008', '2010', '2012'],
    ans: '2008',
  },
  {
    q: 'Who hit the winning runs for India in the 2011 Cricket World Cup final?',
    ops: ['MS Dhoni', 'Gautam Gambhir', 'Virat Kohli', 'Yuvraj Singh'],
    ans: 'MS Dhoni',
  },
  {
    q: 'Who is the first cricketer to score 100 centuries in international cricket?',
    ops: ['Ricky Ponting', 'Sachin Tendulkar', 'Jacques Kallis', 'Virat Kohli'],
    ans: 'Sachin Tendulkar',
  },
  {
    q: 'Which country hosted the first day-night Test match?',
    ops: ['England', 'Australia', 'India', 'South Africa'],
    ans: 'Australia',
  },
  {
    q: 'What is the highest individual score in a Test innings?',
    ops: ['375', '400 not out', '380', '403'],
    ans: '400 not out',
  },
  {
    q: 'Who is the only cricketer to have 1,000+ runs and 100+ wickets in both ODI and T20I cricket?',
    ops: ['Shakib Al Hasan', 'Jacques Kallis', 'Shahid Afridi', 'Ben Stokes'],
    ans: 'Shakib Al Hasan',
  },
  {
    q: 'Which stadium hosted the first-ever T20 International match?',
    ops: ['Eden Gardens', 'Newlands', 'The Gabba', 'Eden Park'],
    ans: 'Eden Park',
  },
  {
    q: 'Who is the first bowler to take a five-wicket haul in all three formats of international cricket?',
    ops: ['Brett Lee', 'Lasith Malinga', 'Mitchell Starc', 'Shahid Afridi'],
    ans: 'Lasith Malinga',
  },
];

// an empty object to contain correct options
const correctAnswers = {};

// Event Listener for the start button
start.addEventListener('click', () => {
  // hiding the start button on click
  start.classList.add('hidden');

  // displaying the form content on the screen
  form.classList.remove('hidden');

  load_quiz();
  create_buttons();
});

// creating form elements

// A function that generates the quiz content and loads it on the screen
const load_quiz = () => {
  // clearing existing form content
  form.innerHTML = '';

  // an array that stores the randomly generated indices
  const indices = getIndices();
  // console.log(keys);

  // Generating quiz content: 5 questions with 4 options each

  indices.forEach((index, i) => {
    // Creating Elements
    const question_container = document.createElement('div');
    question_container.className = 'question-container';

    form.appendChild(question_container);

    const question = document.createElement('p');
    question.className = 'question';

    question_container.appendChild(question);

    // question of the quiz
    question.innerHTML = `${i + 1}. ${cricQuiz[index].q}`;

    // storing correct options in correctAnswers object
    correctAnswers[`q${i + 1}`] = cricQuiz[index].ans;

    // options for the quiz question
    cricQuiz[index].ops.forEach((option, j) => {
      const option_container = document.createElement('div');
      option_container.className = 'option-container';

      question_container.appendChild(option_container);

      const input = document.createElement('input');
      input.type = 'radio';
      input.id = `q${i + 1}o${j + 1}`;
      input.name = `q${i + 1}`;
      input.value = option;

      const input_label = document.createElement('label');
      input_label.setAttribute('for', `q${i + 1}o${j + 1}`);

      option_container.appendChild(input);
      option_container.appendChild(input_label);

      // adding text content of the labes elements for each input element
      input_label.innerHTML = cricQuiz[index].ops[j];
      // updating the value attributes of input elements
      input.value = cricQuiz[index].ops[j];
    });
  });
};

// function to generate 5 unique index positions to select 5 unique questions using set

const getIndices = () => {
  let indices = new Set();

  while (indices.size != 5) {
    const index = Math.floor(Math.random() * 50);
    indices.add(index);
  }
  return [...indices];
};

const create_buttons = () => {
  const button_container = document.createElement('div');
  button_container.id = 'button-container';

  form.appendChild(button_container);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';

  button_container.appendChild(submitButton);

  const resetButton = document.createElement('button');
  resetButton.type = 'reset';
  resetButton.id = 'reset-btn';
  resetButton.textContent = 'Reset';

  button_container.appendChild(resetButton);

  // adding reset button functionality
  resetButton.addEventListener('click', () => {
    load_quiz();
    create_buttons();
    scoreContainer.classList.add('hidden');
  });
};

// creating submit event to display the score on the screen
form.addEventListener('submit', (e) => {
  e.preventDefault();

  scoreContainer.classList.remove('hidden');
  const data = new FormData(form);
  // console.log(data.entries());

  let score = 0;
  for (let [key, value] of data.entries()) {
    // console.log(key, value);
    if (value === correctAnswers[key]) {
      score++;
    }
  }
  // console.log(score);
  scoreContainer.innerHTML = `Score: ${score}/5`;
});
