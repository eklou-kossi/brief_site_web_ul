document.addEventListener('DOMContentLoaded', function() {
    const texteElement = document.getElementById('slogan');
    const texte = "Notre leitmotiv, la réussite du plus grand nombre d'édutiants.";
    const nombreRepetitions = 2; // Nombre de fois que le mot "Bienvenue" sera affiché
    let repetitions = 0; // Variable pour suivre le nombre de répétitions
    
    let index = 0;

    function afficherTexte() {
        texteElement.textContent = texte.slice(0, index);
        index++;

        // Vérifiez si tout le texte a été affiché
        if (index > texte.length) {
            index = 0; // Réinitialisez l'index pour afficher le texte à nouveau
            repetitions++; // Augmentez le nombre de répétitions
            
            // Vérifiez si le nombre de répétitions est atteint
            if (repetitions >= nombreRepetitions) {
                clearInterval(interval); // Arrêtez l'animation
            }
        }
    }

    // Appelez la fonction d'affichage du texte toutes les 100 millisecondes
    const interval = setInterval(afficherTexte, 100);
});
