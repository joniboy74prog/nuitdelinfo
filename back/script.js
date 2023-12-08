
function fonction_marrante() {// Charger le contenu du fichier JSON
    fetch('./resources/Commerce.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            // Accéder au tableau 'questions' dans l'objet JSON
            const questions = objetJson.questions;

            // Afficher chaque question dans la console
            questions.forEach(question => {
                console.log(question.question);
            });

            alert('Questions chargées avec succès. Consultez la console pour les détails.');
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
            alert('Erreur lors du chargement du fichier JSON. Consultez la console pour les détails.');
        });
}


// retourne random index

async function getQuestionByCategorie2(category) {
    try {
      const response = await fetch(`./${category}.json`);
  
      if (!response.ok) {
        throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
      }
  
      const objetJson = await response.json();
      const questions = objetJson.questions;
  
      console.log(questions);
      return questions;
  
    } catch (error) {
      console.error('Erreur lors du chargement du fichier JSON :', error.message);
      alert('Erreur lors du chargement du fichier JSON. Consultez la console pour les détails.');
      throw error; // Re-throw the error for further handling
    }
  }
  
  
  console.log(getQuestionByCategorie2("transport"))
  
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  function createShuffledIndicesArray(array) {
    const indicesArray = Array.from({ length: array.length }, (_, index) => index);
    return shuffleArray(indicesArray);
  }
  
  function getNextIndex(indicesArray) {
    if (indicesArray.length === 0) {
      // Si tous les indices ont été utilisés, réinitialiser le tableau d'indices
      return null;  // ou une autre valeur pour indiquer que tous les indices ont été utilisés
    }
    // Retourner et retirer le premier indice du tableau
    return indicesArray.shift();
  }
  
  // Utilisez ces fonctions comme suit :
  
  // const votreTableau = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const votreTableau = await getQuestionByCategorie2('transport');
  const shuffledIndices = createShuffledIndicesArray(votreTableau);
  
  // À chaque appel, récupérez le prochain indice
  const premierIndice = getNextIndex(shuffledIndices);
  const deuxiemeIndice = getNextIndex(shuffledIndices);
  
  console.log(premierIndice);  // Indice aléatoire
  console.log(deuxiemeIndice);  // Indice différent
  
