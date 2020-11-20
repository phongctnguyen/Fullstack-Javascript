document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
const textarea = document.querySelector('textarea');

textarea.addEventListener('change', e => {
  const inputStr = e.target.value;
  const inputArr = inputStr.split('\n');

  let outputStr = '';
  const outputArr = [];

  for (let [i, el] of inputArr.entries()) {
    newEl = el.trim().toLowerCase();
    const index = newEl.indexOf('_');

    outputEl =
      newEl.slice(0, index) +
      newEl.slice(index + 1, index + 2).toUpperCase() +
      newEl.slice(index + 2);
    outputEl = `${outputEl.padEnd(20, ' ')}${'🍕'.repeat(i + 1)}`;
    outputArr.push(outputEl);
  }
  outputStr = outputArr.join('\n');
  console.log(outputStr);
});
