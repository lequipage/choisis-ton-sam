/***************************************
 *                                     *
 *               `7MM"""YMM            *
 *                 MM    `7            *
 *        .gP"Ya   MM   d              *
 *       ,M'   Yb  MMmmMM              *
 *       8M""""""  MM   Y  ,           *
 *       YM.    ,  MM     ,M           *
 *        `Mbmmd'.JMMmmmmMMM .js       *
 *_____________________________________*
 *                                     *
 *     easterEgg.js                    *
 *     By "L'équipage"                 *
 *     @ Nuit de l'info 2017           *
 *                                     *
 *     SBG - 2017-12-07 - v0.1.0       *
 *_____________________________________*
 *                                     *
 *     Recommandations :               *
 *     - JQuery needed for this        *
 *       release                       *
 *_____________________________________*
 *                                     *
 *     Instructions for NDI :          *
 *     - Need to be init in DOM :      *
 *     const eE = new easterEgg();     *
 *     eE.NDIinit("word");             *
 *_____________________________________*
 ***************************************/

function easterEgg() {}
var current_tip = "";


/*
 * function typeSomething()
 * Trigger an "action" when a "word" is written on keyboard (It will only work if no input is focus)
 * @e : keypress event (event)
 * @word : word to write to trig the action (string)
 */
easterEgg.prototype.typeSomething = function (e, word) {
    if ($('input:focus').length == 0) {
        current_tip += String.fromCharCode(e.which);
        if (current_tip.includes(word)) {
            current_tip = "";
            return true;
        }
    }
}


/*
* function drunk()
* Got a drunk effect on an element
* @params : {
    el: element
    i: iterations
    t: duration in seconds
    f: blur force
    r: rotation
    s: scale
    d: delay (before action starts) in seconds
  }
*/
easterEgg.prototype.drunk = function (p) {
    const d = {
        el: document.getElementsByTagName('body')[0],
        i: 3,
        t: 4,
        f: 1,
        r: 0.4,
        s: 1.02,
        d: 0
    };
    if (p) {
        d.el = (p.el) ? p.el : d.el;
        d.i = (p.i) ? p.i : d.i;
        d.t = (p.t) ? p.t : d.t;
        d.f = (p.f) ? p.f : d.f;
        d.r = (p.r) ? p.r : d.r;
        d.s = (p.s) ? p.s : d.s;
        d.d = (p.d) ? p.d : d.d;
    }
    let c = 0;
    const style = (d.el.getAttribute("style")) ? d.el.getAttribute("style") : '';
    const a = () => {
        if (c < d.i) {
            d.el.setAttribute("style", style + " transition: " + d.t + "s; filter: blur(" + d.f + "px); transform: scale(" + d.s + "); transform: rotate(" + d.r + "deg); overflow: hidden;");
            setTimeout(function () {
                d.el.setAttribute("style", style + " transition: " + d.t + "s; filter: blur(0px); transform: scale(1); transform: rotate(-" + d.r + "deg); overflow: hidden;");
                setTimeout(function () {
                    a();
                }, d.t * 1000 / 2);
            }, d.t * 1000 / 2);
            c++;
        } else {
            d.el.setAttribute("style", style + " transition: " + d.t + "s;");
            setTimeout(function () {
                d.el.setAttribute("style", style);
            }, d.t * 1000 / 2);
        }
    }
    setTimeout(function () {
        a();
    }, d.d * 1000);
}


/*
 * function popImage() --Don't used for the NDI 2017
 * Pop an image from a side of the screen
 * @src : source of the image (should be a gif)
 * @position : the position where the image pops : accepted values : "right", "left", "top", "bottom" (default: bottom);
 */
easterEgg.prototype.popImage = function (src, duration = 2, position = "bottom") {
    let img = new Image();
    let x, y;
    img.src = src;
    img.onload = function () {
        let img_width = img.width;
        let img_height = img.height;
        let imgDOMElement = document.createElement("img");
        imgDOMElement.setAttribute("src", src);
        switch (position) {
            case "top":
                x = window.innerWidth / 2 - img_width / 2;
                y = 0;
                break;
            case "bottom":
                x = window.innerWidth / 2 - img_width / 2;
                y = window.innerHeight - img_height;
                break;
            case "left":
                x = 0;
                y = window.innerHeight / 2 - img_height / 2;
                break;
            case "right":
                x = window.innerWidth - img_width;
                y = window.innerHeight / 2 - img_height / 2;
                break;
        }
        imgDOMElement.setAttribute("style", "z-index: 1000; position: fixed; left:" + x + "px; top:" + y + "px;");
        style_img = imgDOMElement.getAttribute("style");
        document.body.append(imgDOMElement);
        setTimeout(function () {
            imgDOMElement.setAttribute("style", style_img + "display: none;");
        }, duration * 1000);
    }
}




/***************************************
 *    Custom settings for NDI 2017     *
 *_____________________________________*
 *****\/*************************\/*****/

/*
 * function NDIinit()
 * Initialize the library
 */
easterEgg.prototype.NDIinit = function (word) {
    const lib = this;
    document.body.addEventListener('keypress', function (e) {
        if (lib.typeSomething(e, word)) lib.drunk();
    });
}

/*****************END******************/
//À la keyboardage !
