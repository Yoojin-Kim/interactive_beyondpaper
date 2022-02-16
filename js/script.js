let scrollTop = 0;
let imageAll;
let totalNum = 0;

window.onload = function() {
    imageAll = document.querySelectorAll(".parallax_image");
    infoText = document.querySelector(".info-wrapper");
    totalNum = imageAll.length;

    window.addEventListener('scroll', scrollFunc);
}

function scrollFunc(e) {
    scrollTop = this.scrollY;

    if(scrollTop > 0) {
        for(var i=0; i< totalNum ; i++){
            imageAll[i].style.transform = "perspective(500px) translateZ("+ scrollTop/(2*(totalNum-i)) +"px)";
            // console.log(scrollTop , scrollTop / (5*(totalNum-i)) );
        }

        // infoText.style.transform = "perspective(500px) translateZ("+ scrollTop/(2*(totalNum)) +"px)";
    } else {
        for(var i=0; i< totalNum ; i++){
            imageAll[i].style.transform = "translateZ(0px)";
            // console.log(scrollTop , scrollTop / (5*(totalNum-i)) );
        }
    }
}


