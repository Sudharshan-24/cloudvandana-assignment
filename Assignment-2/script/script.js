const btnClick = () => {
  let sentence = document.querySelector('#sentence').value.toLowerCase();
  let letter = document.querySelector('#letter').value.toLowerCase();
  let result = document.querySelector('#result');

  if (sentence.indexOf(letter) == -1) {
    alert('The letter does not exist in the sentence.');
  } else {
    let afterLetter = sentence.substring(sentence.indexOf(letter) + 1);
    result.innerHTML = afterLetter;
  }
};
