
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


