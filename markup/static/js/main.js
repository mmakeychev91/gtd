'use strict';
/*
    This file can be used as entry point for webpack!
 */
//подключаю самописные модули
import 'lazyload-js/lazyload';
import initImgLazyLoad from './modules/initImgLazyLoad';
import preloader from './modules/preloader';




const dynamicPath = __dynamicPath__;


LazyLoad.js(`${dynamicPath}js/separate-js/svg4everybody.min.js`, () => {
    // eslint-disable-next-line no-undef
    svg4everybody();
});

if ($('img.lazy').length) {
    LazyLoad.js(`${dynamicPath}js/separate-js/imglazyload.min.js`, () => {
        initImgLazyLoad();
    });
}


$(window).on('load', function () {
    preloader();
});



window.initImgLazyLoad = initImgLazyLoad;
