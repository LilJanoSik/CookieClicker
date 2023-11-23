let cookie = document.getElementById("Cookie");

const add = () => {
    cookiecount = cookiecount + 1;
    update();
}
cookie.onclick = add;


const update = () => {
    document.getElementById('text1').innerHTML = cookiecount;

    document.getElementById('costAutoClick').innerHTML = "Upgrade (" + ((autoClick + 1) * 12) + " Cookies)";
    document.getElementById('cookiespersecond').innerHTML = "AutoClick makes you " + (autoClick) + " Cookies/s";

    document.getElementById('costFarms').innerHTML = "Upgrade (" + ((farms + 1) * 18) + " Cookies)";
    document.getElementById('cookiespersecond1').innerHTML = "Grandmas makes you " + (farms) + " Cookies/s";

    document.getElementById('costMines').innerHTML = "Upgrade (" + ((mines + 1) * 52) + " Cookies)";
    document.getElementById('cookiespersecond2').innerHTML = "Miners makes you " + (mines) + " Cookies/s";

    document.getElementById('costFactory').innerHTML = "Upgrade (" + ((factory + 1) * 100) + " Cookies)";
    document.getElementById('cookiespersecond3').innerHTML = "Factories makes you " + (factory) + " Cookies/s";

    document.getElementById('costBank').innerHTML = "Upgrade (" + ((bank + 1) * 200) + " Cookies)";
    document.getElementById('cookiespersecond4').innerHTML = "Banks makes you " + (bank) + " Cookies/s";

    document.getElementById("text").innerHTML = " Total " + (((autoClick) + (farms) + (mines) + (factory) + (bank))) + " C/s";

}

let cookiecount = 0;
let autoClick = 0;
let farms = 0;
let mines = 0;
let factory = 0;
let bank = 0;

const timer = () => {
    cookiecount = cookiecount + autoClick;
    cookiecount = cookiecount + farms;
    cookiecount = cookiecount + mines;
    cookiecount = cookiecount + factory;
    cookiecount = cookiecount + bank;
    update();
}

setInterval(timer, 1000);


let buttonAutoClick = document.getElementById("buttonAutoClick");
let buttonFarm = document.getElementById("buttonFarm");
let buttonMine = document.getElementById("buttonMine");
let buttonFactory = document.getElementById("buttonFactory");
let buttonBank = document.getElementById("buttonBank");

const buyAutoClick = () => {
    if (cookiecount >= ((autoClick + 1) * 12)) {
        cookiecount = cookiecount - ((autoClick + 1) * 12);
        autoClick = autoClick + 2;
        update();
    }
}
buttonAutoClick.onclick = () => {
    buyAutoClick();
    autocratic();
};


const buyFarm = () => {
    if (cookiecount >= ((farms + 1) * 18)) {
        cookiecount = cookiecount - ((farms + 1) * 18);
        farms = farms + 5;
        update();
    }
}
buttonFarm.onclick = () => {
    buyFarm();
    grandma();
};

const buyMine = () => {
    if (cookiecount >= ((mines + 1) * 26)) {
        cookiecount = cookiecount - ((mines + 1) * 26);
        mines = mines + 17;
        update();
    }
}
buttonMine.onclick = () => {
    buyMine();
    hornik();
}

const buyFactory = () => {
    if (cookiecount >= ((factory + 1) * 38)) {
        cookiecount = cookiecount - ((factory + 1) * 38);
        factory = factory + 28;
        update();
    }
}
buttonFactory.onclick = () => {
    buyFactory();
    factors();
}

const buyBank = () => {
    if (cookiecount >= ((bank + 1) * 55)) {
        cookiecount = cookiecount - ((bank + 1) * 55);
        bank = bank + 50;
        update();
    }
}
buttonBank.onclick = () => {
    buyBank();
    banks();
}


let div1 = document.getElementById("a");
const autocratic = () => {
    div1.innerHTML += '<img src= "img/cursoricon.png" alt="" width="15" height= "20">';
}

let div2 = document.getElementById("b");
const grandma = () => {

    div2.innerHTML += '<img src= "img/grandma.png" alt="" width="15" height= "20">';
}

let div3 = document.getElementById("c");
const hornik = () => {

    div3.innerHTML += '<img src= "img/mine.png" alt="" width="20" height= "20">';
}


let div4 = document.getElementById("d");
const factors = () => {

    div4.innerHTML += '<img src= "img/factory.png" alt="" width="20" height= "20">';
}


let div5 = document.getElementById("e");
const banks = () => {

    div5.innerHTML += '<img src= "img/bank.png" alt="" width="20" height= "20">';
}


$(window).resize(function () {
    let height = $('.content').height();
    $('.kontent').height(height);
})
$(window).resize()
;
$(window).resize(function () {
    let height = $('.content1').height();
    $('.kontent1').height(height);
})
$(window).resize();
$(window).resize(function () {
    let height = $('.content2').height();
    $('.kontent2').height(height);
})
$(window).resize();
$(window).resize(function () {
    let height = $('.content3').height();
    $('.kontent3').height(height);
})
$(window).resize();
$(window).resize(function () {
    let height = $('.content4').height();
    $('.kontent4').height(height);
})
$(window).resize();