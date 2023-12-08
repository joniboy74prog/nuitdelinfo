
function getTitre (categorie ,indice){// Charger le contenu du fichier JSON
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const question = questions[indice].question;
                console.log(`Question à l'indice ${indice}: ${question}`);
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getRep1(categorie, indice){// Charger le contenu du fichier JSON
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const rep = questions[indice].options[0].text;
                console.log(`Reponse à l'indice ${indice}: ${rep}`);
                return rep;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getRep2(categorie, indice){// Charger le contenu du fichier JSON
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const rep = questions[indice].options[1].text;
                console.log(`Reponse à l'indice ${indice}: ${rep}`);
                return rep;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getVrai(categorie, indice){
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const vrai = questions[indice].reponse;
                console.log(`vraie reponse ${indice}: ${vrai}`);
                return vrai;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getDescription(categorie, indice){
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const description = questions[indice].description;
                console.log(`description ${indice}: ${description}`);
                return description;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getImg1(categorie, indice){
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const img = questions[indice].options[0].img;
                console.log(`vraie reponse ${indice}: ${img}`);
                return img;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}
function getImg2(categorie, indice){
    fetch(`./resources/${categorie}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur de chargement du fichier JSON : ${response.status}`);
            }
            return response.json();
        })
        .then(objetJson => {
            const questions = objetJson.questions;
            if (indice >= 0 && indice < questions.length) {
                const img = questions[indice].options[1].img;
                console.log(`vraie reponse ${indice}: ${img}`);
                return img;
            } else {
                console.error(`Indice ${indice} hors de portée.`);
            }
        })
        .catch(erreur => {
            console.error('Erreur lors du chargement du fichier JSON :', erreur.message);
        });
}

// function for random index of a function 


 function getIndex(tableauDentiers){
    if (tableauDentiers.length == 0){
        return -1;
    }
     const indiceAleatoire = Math.floor(Math.random() * tableauDentiers.length);
     tableauDentiers.splice(indiceAleatoire, 1);
     console.log(tableauDentiers); // Affiche : [1, 2, 4, 5]
     return indiceAleatoire;
 }
 document.addEventListener('DOMContentLoaded', ()=>
     {
         const tableauDentiers = [1, 2, 3, 4, 5];
     }
 )
  

