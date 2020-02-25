var points = JSON.parse(' [{"title":"TITLE","point":[51.69401557229519,36.15548350000001]},{"title":"TITLE","point":[51.87623407216783,36.91367049999999]},{"title":"TITLE","point":[51.82900407221682,38.13003449999989]},{"title":"TITLE","point":[51.885690572163774,37.259351]},{"title":"TITLE","point":[51.848636572182095,37.72522650000001]},{"title":"TITLE","point":[52.0892990720329,36.37583999999997]},{"title":"TITLE","point":[52.318349571851456,36.3015135]},{"title":"TITLE","point":[51.52082007238771,38.03638499999998]},{"title":"TITLE","point":[51.45528207244526,37.12751449999999]},{"title":"TITLE","point":[51.617159572324184,37.12219649999995]},{"title":"TITLE","point":[51.410474572471244,36.75418349999995]}]')

var myMap;
ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [51.69401557229519, 36.15548350000001],
        zoom: 14,
        controls: []
        // изменение маркера
    });

    for (var i = 0; i < points.length; i++) {
        myMap.geoObjects
            .add(new ymaps.Placemark([points[i].point[0], points[i].point[1]], {
                balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/img/marker-yamap.svg',
                // Размеры метки.
                iconImageSize: [25, 32],
            }));
    }
}

var subMenu = document.querySelectorAll('.submap');
var linksMap = document.querySelectorAll('.city-list li');
var selectCity = document.querySelector('.single-city select');
var selectedCitys = document.querySelectorAll('selected-city > p');

var handlerResult = function (linkMap) {
    linkMap.addEventListener('click', function () {
        console.log(linkMap.dataset.point);
        myMap.setCenter(linkMap.dataset.point.split(','), 12, "map");
        return linkMap.dataset.point.split(',');
    });
};

for (var i = 0; i < linksMap.length; i++) {
    handlerResult(linksMap[i]);
}

// изменить район
var changeCity = document.querySelector('.form-city span');

var change = function () {
    var event = new Event("click");
    selectCity.dispatchEvent(event);
};

// обработчик на изменение списка
selectCity.addEventListener('change', function () {
    var valueOption = this.value;
    myMap.setCenter(valueOption.split(','), 12, "map");
    return valueOption.split(',');
});

//////////////////////////////////////////////////////

var handlerAddr = function (j) {
    // при клике на название адреса показывает блок с адресом
    linksMap[j].addEventListener('click', function () {
        document.querySelectorAll('.submap-wrapper .active').forEach(n => n.classList.remove('active'));
        subMenu[j].classList.toggle('active');
        document.querySelectorAll('.city-list .active').forEach(n => n.classList.remove('active'));
        linksMap[j].classList.add('active');
    });
};

for (var j = 0; j < linksMap.length; j++) {
    handlerAddr(j);
}


////////////////////////////////////////////////////


// var handlerAddr2 = function (x) {
//     // 
//     selectCity.addEventListener('change', function () {
//         document.querySelectorAll('selected-city .active').forEach(n => n.classList.remove('active'));
//         selectedCitys[x].classList.toggle('active');
//     });
// };

// for (var x = 1; x < linksMap.length; x++) {
//     handlerAddr2(x);
// }