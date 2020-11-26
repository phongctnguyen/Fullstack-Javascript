const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    if (0 <= answer && answer < this.answers.length) {
      this.answers[answer]++;
    }
    this.displayResults('string');
    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      console.log(this.answers);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults();

const testData1 = { answers: [5, 2, 3] };
const testData2 = { answers: [1, 5, 3, 9, 6, 1] };

poll.displayResults.call(testData1, 'string');
poll.displayResults.call(testData1);
poll.displayResults.call(testData2, 'string');
poll.displayResults.call(testData2);
