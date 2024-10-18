function ChangeSlide(slide){
    switch (slide) {
        case "recrutement":
            document.getElementById('slide').src = "assets/img/1.jpg";
            document.getElementById('recrutement').style.backgroundColor = "red";
            break;
        case "interim":
            document.getElementsByClassName('test').styles.backgroundColor = 'white';
            document.getElementById('slide').src = "assets/img/2.jpg";
            break;
        case "performance":
            document.getElementById('slide').src = "assets/img/3.jpg";  // #bah_blud_ratio 
            break;                                                      // dans un script JavaScript en plus
        case "transformation":
            document.getElementById('slide').src = "assets/img/4.jpg";
            
            break;
    }
}
