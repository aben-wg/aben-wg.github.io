function moveImage() {
    const movingPlaneTop = document.getElementById('img2');
            setTimeout(() => {
            $('#img2').css('visibility','visible');
            movingPlaneTop.style.transform = 'translateX(calc(-1500% - 5%))';
    }, 7000);


    const diver1 = document.getElementById('diver1');
    setTimeout(() => {
        $('#diver1').css('visibility','visible');
        diver1.style.transform = 'rotate(-20deg) translateY(calc(700% - 100px))';
    }, 12500);

    const diver2 = document.getElementById('diver2');

    setTimeout(() => {
        $('#diver2').css('visibility','visible');
        diver2.style.transform = 'rotate(-20deg) translateY(calc(700% - 100px))';
    }, 11000);

   
    setTimeout(() => {
        $('#diver3').css('visibility','visible');
       const diver3 = document.getElementById('diver3');
       diver3.style.transform = 'rotate(-20deg) translateY(calc(700% - 100px))';
    }, 9700);

    

    setTimeout(() => {
       $('#diver3').attr('src', "/images/diver2.png");
       $('#diver3').css('width','10%');
       $('#diver3').css('height','10%');
    }, 15000);


    setTimeout(() => {
        $('#diver2').attr('src', "/images/diver2.png");
        $('#diver2').css('width','10%');
        $('#diver2').css('height','10%');
     }, 14000);

     setTimeout(() => {
        $('#diver1').attr('src', "/images/diver2.png");
        $('#diver1').css('width','10%');
        $('#diver1').css('height','10%');
     }, 17000);



    const movingPlaneTakeOff1 = document.getElementById('img1');
    setTimeout(() => {
        movingPlaneTakeOff1.style.transform = 'rotate(0deg) translateX(calc(700% - 50px)))';
    }, 300);

    const movingPlaneTakeOff2 = document.getElementById('img1');
            setTimeout(() => {
                movingPlaneTakeOff2.style.transform = 'rotate(-20deg) translateX(calc(700% - 50px))';
        }, 1500);
}