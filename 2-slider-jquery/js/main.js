$(document).ready(function () {
    const slideShow = $('.slide-show');
    const slidesCount = $('.single-slide').length;
    const slidesWidth = 100 / slidesCount;
    let slideIndex = 0;
    const prevButton = $('.prev-slide');
    const nextButton = $('.next-slide');
    /* Ustaw szerokość elementu .slide-show na ilośćSlajdow * 100 + % */
    slideShow.css('width', `${slidesCount * 100}%`);
    /* Nadaj kazdemu elementowi single-slide szerokosć oraz przesunięcie rowne jego szerokości pomniejszonej przez index */
    let allSlides = $('.single-slide');
    allSlides.each(function (index, element) {
        $(element).css({ width: slidesWidth + '%', left: slidesWidth * index + '%' })
    });
    /* Przechwucic zdarzenie klikniecia w strzałkę w lewo i w strzałkę prawo Po klinieciu wywołąj funkcję slide() z parametrem odpowiednio - dla nastepnego slajdu slide(slideIndex+1) - dla poprzedniego slajdu slide(slideIndex-1)  */
    prevButton.on({
        click: function () {
            slide(slideIndex - 1);
            console.log('left clock!')
        }
    })
    nextButton.on({
        click: function () {
            slide(slideIndex + 1);
            console.log('right clock!')
        }
    })
    function slide(inputIndex) {
        if (inputIndex < 0 || inputIndex >= allSlides.length) {
                       inputIndex < 0 ? (allSlides.length -1) : slideIndex = 0;
            slide(slideIndex);
        }
        else {
            slideIndex = inputIndex;
            ////slideShow.css('left', -inputIndex * 100 + '%');
            let slideCaption = slideShow.find('.slide-caption').eq(inputIndex);
            let marginLeft = inputIndex * (-100) + '%';
            slideCaption.hide();
            slideShow.animate({
                'margin-left': marginLeft,
            }, 800, function () {
                slideCaption.fadeIn()

            })
        }
    }
    // slideShow.css('left', inputIndex * slidesWidth + '%')
    // slidesIndex = inputIndex;
    //stwórz zmienną slideCaptoin do ktotrej przypisz aktualny napus na slajdzie
    //  let slideCaption = slideShow.find('.slide-caption').eq(inputIndex);
    // Stwórz zmienną margin left, która, przyjmie procentową wartość aktualnego 
    // indexu pomnozony przez -100;
    //  let marginLeft = inputIndex * (-100) + '%';
    //chowamy napis
    // slideCaption.hide();

    //na konterze slideShow wykonaj animację w lewo lub praw800ms i wywołą funkcję callback
    // let slideCaption = slideShow.find('.slide-caption').eq(inputIndex);
    //  let marginLeft = inputIndex * (-100) + '%';
    //  slideCaption.hide();
    //   slideShow.animate({
    //      'margin-left': marginLeft,
    //  }, 800, function () {
    //      slideCaption.fadeIn()
    //
    //  })

})