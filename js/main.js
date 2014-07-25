$(document).ready(function() {

    $('input, textarea').placeholder();

    $(document).on('click', '[data-modal]', function() {
        var $modal = $($(this).data('modal'));
        $.fancybox($modal);
    });

    /* Настройки fancybox
    ------------------------------------------------------------------------------- */

    $.extend($.fancybox.defaults, {
        scrollOutside: false,
        padding: 0,
        openEffect: 'fade',
        closeEffect: 'fade',
        openSpeed: 200,
        closeSpeed: 200
        //aspectRatio: true
    });

    /* Слайдер доверия
    ------------------------------------------------------------------------------- */

    var $bConfidenceSlider = $('.b-confidence__slider');

    if ($bConfidenceSlider.length) {
        var confidenceSlider = new Sly($bConfidenceSlider.find('.b-confidence__slider__wrapper'), {
            horizontal: 1,
            itemNav: 'basic',
            touchDragging: 1,
            speed: 400,
            dynamicHandle: 1,
            itemNav: 'forceCentered',
            smart: 1,
            activateMiddle: 1,
            nextPage: $bConfidenceSlider.find('.b-pagination__next'),
            prevPage: $bConfidenceSlider.find('.b-pagination__prev'),
        }).init();

        $(window).resize(function() {
            confidenceSlider.reload();
        });
    }

    /* Слайдер партнеров
    ------------------------------------------------------------------------------- */

    var $bPartnersSlider = $('.b-partners__slider');

    if ($bPartnersSlider.length) {
        var partnersSlider = new Sly($bPartnersSlider.find('.b-partners__slider__wrapper'), {
            horizontal: 1,
            itemNav: 'basic',
            touchDragging: 1,
            speed: 400,
            dynamicHandle: 1,
            nextPage: $bPartnersSlider.find('.b-pagination__next'),
            prevPage: $bPartnersSlider.find('.b-pagination__prev'),
        }).init();
    }

    /* Слайдер салонов
    ------------------------------------------------------------------------------- */

    var $bSalonsSlider = $('.b-salons__slider');

    if ($bSalonsSlider.length) {
        var salonsSlider = new Sly($bSalonsSlider.find('.b-salons__slider__wrapper'), {
            horizontal: 1,
            itemNav: 'basic',
            touchDragging: 1,
            speed: 400,
            dynamicHandle: 1,
            nextPage: $bSalonsSlider.find('.b-pagination__next'),
            prevPage: $bSalonsSlider.find('.b-pagination__prev'),
        }).init();
    }

    /* Обработка отправки форм
    ------------------------------------------------------------------------------- */
    
    $(document).on('submit', '.b-form', function(e) {

        e.preventDefault();
    });

    /* Шапка
    ------------------------------------------------------------------------------- */

    var $window       = $(window),
        $header       = $('.b-header'),
        $promo        = $('.b-promo'),
        $topLine      = $('.b-top-line'),
        $fixedTopLine = $topLine.clone().prependTo('body').addClass('b-top-line--fixed');

    $(window).resize(function() {

        if ($window.width() > 700) {
            $topLine.css({ visibility: 'hidden'});
            $fixedTopLine.show();

        } else {
            $topLine.css({ visibility: 'visible'});
            $fixedTopLine.hide();
        }

        if ($window.width() > 682) {
            $header.css('height', $window.height());
        } else {
            $header.css('height', '');
        }

        var promoHeight = $promo.height();

        //$promo.find('.container').center($header);

    }).trigger('resize');

    /* Тарифы
    ------------------------------------------------------------------------------- */

    var $plans            = $('.b-plans .container'),
        $plansTable       = $('.b-plans__table'),
        $plansTableHeader = $plansTable.find('.b-plans__table__top th:not(:first)');

    $plansTableHeader.each(function(key) {
        var $this = $(this);

        if ($this.hasClass('hit')) {
            $plansTable.find('.b-plans__table__top, .b-plans__table__options tr, .b-plans__table__prices').each(function() {
                $(this).find('.plan:eq(' + key + ')').addClass('hit');
            });
        }

        var $table = $plansTable.clone();

        $table.removeClass('b-plans__table--full').addClass('b-plans__table--simple');
        
        $table.find('.b-plans__table__top, .b-plans__table__options tr, .b-plans__table__prices').each(function() {
            $(this).find('.plan:not(:eq(' + key + '))').remove();
        });

        $plans.append($table);
    });

     $('.b-plans__table').tableHover({rowClass: '', colClass: 'hover', ignoreCols: [1], footCols: true}); 

    /*$(window).resize(function(e) {

    });*/
});