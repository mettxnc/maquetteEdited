let prec = 'recrutement'; // Le bouton actif initial

function ChangeSlide(slide) {
    // Réinitialise le bouton précédent
    document.getElementById(prec).classList.remove('active'); 

    // Change l'image affichée selon le bouton cliqué
    switch (slide) {
        case "recrutement":
            document.getElementById('slide').src = "assets/img/1.jpg";
            break;
        case "interim":
            document.getElementById('slide').src = "assets/img/2.jpg";
            break;
        case "performance":
            document.getElementById('slide').src = "assets/img/3.jpg";
            break;
        case "transformation":
            document.getElementById('slide').src = "assets/img/4.jpg";
            break;
    }

    // Ajoute l'effet d'animation au nouveau bouton
    document.getElementById(slide).classList.add('active'); 
    prec = slide; // Met à jour le bouton actif
}
