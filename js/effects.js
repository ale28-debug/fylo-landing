$(function () {
    ScrollReveal({
        reset: true
    });

    /****************************
    PROBLEM SOLVING 
    *****************************/

    // Sezione all-your-files
    // Animare h2, p, input, a(button), .image img

    $h2FirstSection = $('#all-your-files .caption h2');
    ScrollReveal().reveal($h2FirstSection, { delay: 100 });

    $pFirstSection = $('#all-your-files .caption p');
    ScrollReveal().reveal($pFirstSection, { delay: 200 });

    $inputFirstSection = $('#all-your-files .caption input');
    ScrollReveal().reveal($inputFirstSection, { delay: 300 });

    $aFirstSection = $('#all-your-files .caption a');
    ScrollReveal().reveal($aFirstSection, { delay: 400 });

    $imageFirstSection = $('#all-your-files .image img');
    ScrollReveal().reveal($imageFirstSection, { delay: 500 });



    // Sezione stay-productive
    // Animare h2, p .first, p .second, a, .description-box, .illustration-2

    $h2SecondSection = $('#stay-productive .caption h2');
    ScrollReveal().reveal($h2SecondSection, { delay: 100 });

    $pSecondSection1 = $('#stay-productive .caption .first');
    ScrollReveal().reveal($pSecondSection1, { delay: 200 });

    $pSecondSection2 = $('#stay-productive .caption .second');
    ScrollReveal().reveal($pSecondSection2, { delay: 300 });

    $aSecondSection = $('#stay-productive .caption a');
    ScrollReveal().reveal($aSecondSection, { delay: 400 });

    $descriptionBox = $('#stay-productive .description-box');
    ScrollReveal().reveal($descriptionBox, { delay: 500 });

    $imageSecondSection = $('#stay-productive .illustration-2');
    ScrollReveal().reveal($imageSecondSection, { delay: 600 });


    // Sezione access
    // Animare .title-access, .subtitle-access, .sign-access input, .sign-access a

    $h2ThirdSection = $('#access .title-access');
    ScrollReveal().reveal($h2ThirdSection, { delay: 100 });

    $pThirdSection = $('#access .subtitle-access');
    ScrollReveal().reveal($pThirdSection, { delay: 200 });

    $inputThirdSection = $('#access .sign-access input');
    ScrollReveal().reveal($inputThirdSection, { delay: 300 });

    $aThirdSection = $('#access .sign-access a');
    ScrollReveal().reveal($aThirdSection, { delay: 400 });

    // Sezione footer
    // Animare .logo-footer img, .contact .phone, .contact .email,
    // ul #first-ul li:first a, ul #first-ul li:nth-child(2) a,
    // ul #first-ul li:nth-child(3) a, ul #first-ul li:last a,

    // ul #second-ul li:first a, ul #second-ul li:nth-child(2) a,
    // ul #second-ul li:last a

    $footerLogo = $('footer .logo-footer img');
    ScrollReveal().reveal($footerLogo, { delay: 100 });

    $footerPhone = $('footer .contact .phone');
    ScrollReveal().reveal($footerPhone, { delay: 200 });

    $footerMail = $('footer .contact .email');
    ScrollReveal().reveal($footerMail, { delay: 300 });

    // #first-ul <li> children
    $footerFirstLink1 = $('footer #first-ul li:first a');
    ScrollReveal().reveal($footerFirstLink1, { delay: 400 });

    $footerFirstLink2 = $('footer #first-ul li:nth-child(2) a');
    ScrollReveal().reveal($footerFirstLink2, { delay: 500 });

    $footerFirstLink3 = $('footer #first-ul li:nth-child(3) a');
    ScrollReveal().reveal($footerFirstLink3, { delay: 600 });

    $footerFirstLink4 = $('footer #first-ul li:last a');
    ScrollReveal().reveal($footerFirstLink4, { delay: 700 });



    // #second-ul <li> children
    $footerSecondLink1 = $('footer #second-ul li:first a');
    ScrollReveal().reveal($footerSecondLink1, { delay: 800 });

    $footerSecondLink2 = $('footer #second-ul li:nth-child(2) a');
    ScrollReveal().reveal($footerSecondLink2, { delay: 900 });

    $footerSecondLink3 = $('footer #second-ul li:last a');
    ScrollReveal().reveal($footerSecondLink3, { delay: 1000 });






});




