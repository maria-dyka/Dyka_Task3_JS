window.onload = function() {

    let goods = [{
        ratingRevievs: "264 отзыва",
        price: {oldUan: "4 333 грн", newUan: "3 799 грн"},
        name: "Motorola MOTO G4 (XT1622) Black"
        },
        {
            ratingRevievs: "1355 отзывов",
            price: "4 999 грн",
            name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"
        },
        {
            ratingRevievs: "426 отзывов",
            price: "5 199 грн",
            name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"
        },
        {ratingRevievs: "403 отзыва", price: "4 349 грн", name: "Xiaomi Redmi Note 4X 3/32GB Black"},
        {
            ratingRevievs: "488 отзывов",
            price: "6 199 грн",
            name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"
        },
        {
            ratingRevievs: "198 отзывов",
            price: {oldUan: "3 495 грн", newUan: "2 995 грн"},
            name: "Lenovo K5 (A6020a40) Silver"
        },
        {
            ratingRevievs: "352 отзыва",
            price: {oldUan: "9 799 грн", newUan: "7 999 грн"},
            name: "Apple iPhone 5s 16GB Space Gray"
        },
        {ratingRevievs: "59 отзывов", price: "5 999 грн", name: "Nokia 5 Dual Sim Tempered Blue"},
        {
            ratingRevievs: "119 отзывов",
            price: "11 999 грн",
            name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!"
        },
        {
            ratingRevievs: "1106 отзывов",
            price: "3 999 грн",
            name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!"
        },
        {
            ratingRevievs: "380 отзывов",
            price: "2 199 грн",
            name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!"
        },
        {
            ratingRevievs: "86 отзывов",
            price: {oldUan: "24 999 грн", newUan: "22 999 грн"},
            name: "Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!"
        },
        {
            ratingRevievs: "177 отзывов",
            price: "6 499 грн",
            name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!"
        },
        {ratingRevievs: "347 отзывов", price: "4 299 грн", name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)"},
        {
            ratingRevievs: "709 отзывов",
            price: "2 799 грн",
            name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!"
        },
        {ratingRevievs: "527 отзывов", price: "3 999 грн", name: "Huawei Y6 Pro Gold + чехол + защитное стекло!"},
        {ratingRevievs: "66 отзывов", price: "16 499 грн", name: "Apple iPhone 6s 32GB Gold"},
        {ratingRevievs: "14 отзывов", price: "11 499 грн", name: "Apple iPhone 6 32GB Space Gray"},
        {
            ratingRevievs: "70 отзывов",
            price: {oldUan: "7 399 грн", newUan: "5 999 грн"},
            name: "Asus ZenFone 2 32GB (ZE551ML) Black"
        },
        {ratingRevievs: "45 отзывов", price: "4 299 грн", name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!"},
        {ratingRevievs: "376 отзывов", price: "3 899 грн", name: "Meizu M3 Note 32GB Grey (Международная версия)"},
        {
            ratingRevievs: "111 отзывов",
            price: {oldUan: "9 999 грн", newUan: "7 999 грн"},
            name: "Sony Xperia X Dual (F5122) White"
        },
        {
            ratingRevievs: "40 отзывов",
            price: "2 222 грн",
            name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!"
        },
        {ratingRevievs: "93 отзыва", price: "18 999 грн", name: "Apple iPhone 7 32GB Black"},
        {
            ratingRevievs: "33 отзыва",
            price: "16 999 грн",
            name: "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!"
        },
        {ratingRevievs: "71 отзыв", price: {oldUan: "2 399 грн", newUan: "1 999 грн"}, name: "LG K5 X220ds Gold"},
        {ratingRevievs: "39 отзывов", price: "2 995 грн", name: "Lenovo C2 Power (K10a40) Black"},
        {ratingRevievs: "156 отзывов", price: "2 599 грн", name: "Nous NS 5006 Gold"},
        {ratingRevievs: "40 отзывов", price: "19 689 грн", name: "LG G6 Mystic White"},
        {ratingRevievs: "24 отзыва", price: "5 995 грн", name: "Motorola MOTO G5 (XT1676) Grey"},
        {
            ratingRevievs: "7 отзывов",
            price: {oldUan: "10 999 грн", newUan: "9 999 грн"},
            name: "HTC One X10 Dual Sim Silver"
        },
        {
            ratingRevievs: "18 отзывов",
            price: {oldUan: "5 999 грн", newUan: "4 999 грн"},
            name: "Sony Xperia L1 Dual Black"
        }];

    createLayout();

    document.querySelector(".btn").addEventListener("click", sort, false);

    function sort() {
        let select = document.querySelector(".custom-select").selectedIndex;
        let option = document.querySelector(".custom-select").options;
        let value = option[select].value;
        if (value === "1") {
            sortReviews();
        }
        else if(value === "2"){
            sortPrice();
        }
    }

    function createLayout() {
        let container = document.querySelector(".container");
        while (container.childNodes.length>2) {
            container.removeChild(container.lastChild);
        }
        for (let i = 0, len = goods.length; i < len; i++) {
            let row = document.createElement("div");
            row.className = "row";
            container.appendChild(row);
            for (let j = 0; j < 3; j++) {
                let col = document.createElement("div");
                if (j === 0) {
                    col.className = "col-4";
                    col.innerHTML = goods[i].name;
                } else if (j === 1) {
                    col.className = "col";
                    col.innerHTML = goods[i].ratingRevievs;
                } else {
                    col.className = "col";
                    if (goods[i].price instanceof Object) {
                        col.innerHTML = `${goods[i].price.oldUan} / ${goods[i].price.newUan}`;
                    } else {
                        col.innerHTML = goods[i].price;
                    }
                }
                row.appendChild(col);
            }
        }
    }

    function sortReviews() {
        goods.sort((a, b) => {
            if (parseInt(a.ratingRevievs) < parseInt(b.ratingRevievs)) {
                return 1;
            } else {
                return -1;
            }
        });
        createLayout();
    }

    function sortPrice() {
        goods.sort((a, b) => {
            let price1 = (a.price instanceof Object) ? parseInt(a.price.newUan.replace(/\s/g, '')) : parseInt(a.price.replace(/\s/g, ''));
            let price2 = (b.price instanceof Object) ? parseInt(b.price.newUan.replace(/\s/g, '')) : parseInt(b.price.replace(/\s/g, ''));
            if (price1 < price2) {
                return 1;
            } else {
                return -1;
            }
        });
        createLayout();
    }
};