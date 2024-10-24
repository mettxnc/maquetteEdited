let prec = 'recrutement';
function ChangeSlide(slide){
    document.getElementById(prec).style.backgroundColor = 'white';

    switch (slide) {
        case "recrutement":
            document.getElementById('slide').src = "assets/img/1.jpg";
            document.getElementById(slide).style.backgroundColor = "red";
            break;
        case "interim":
            document.getElementById('slide').src = "assets/img/2.jpg";
            document.getElementById(slide).style.backgroundColor = "red";
            break;
        case "performance":
            document.getElementById('slide').src = "assets/img/3.jpg";
            document.getElementById('performance').style.backgroundColor = "red";
            break;
        case "transformation":
            document.getElementById('slide').src = "assets/img/4.jpg";
            document.getElementById('transformation').style.backgroundColor = "red";
            break;
    }

    prec = slide;
}
 