let score = 0;

function augmenterCompteur() {
  score++;
  handleScore()
}

function handleScore() {
  const total = 25;
  const categories_step = 5;
  const starsId = [
    "star1",
    "star2",
    "star3",
    "star4",
    "star5",
  ]

  let starElements = starsId.map(id => document.getElementById(id));
  for(let i = 0; i < starElements.length; i++) {
    if (score >= (i + 1) * categories_step) {
      starElements[i].style.visibility = 'visible';
    }
  }

  if (score === total) window.location.href = './easterEggEtoile.html';
}