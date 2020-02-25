let items = ["ZEzMpdj", "ZEzMpdj", "ZEzMpdj", "ZEzMpdj", "LYPqaME", "OBPJKK", "KKPeOPm", "qBWVMop", "PoYepvR", "bpxgWZ", "evxZpZ", "MJKNJZ", "XPQyMo", "JXVpgp", "YNPaaQ", "QmXOOR", "MQRGOe", "zBLGYN", "mGGPXj", "VEZvdg", "XNQaym", "oXpWbd", "oPOVOL", "bqjBMv", "bvpprw", "oaWdOm", "bvgWrO", "ZMbLNM", "eZQKEr", "xywaoW", "yKOMmV", "YNyKpd", "ygNVYM", "QpwZqJ", "rNBZZqv", "gPmNwv", "pJjOGW", "Kxygqv", "QyBKvW", "azVXym", "obyLPe", "dNKKOw", "VPLgaV", "pNZzMg", "qJNRaL", "yNvKpp", "wgwdzr", "WNeEgZx", "LYPBQvW", "GRgZExW", "YzPxWyW", "LYEjxyG"];
let num = ["one", "two", "three", "four", "five", "six"];
let randomItem = `<a class="u-random" href="https://codepen.io/z-/details/${items[Math.floor(Math.random() * items.length)]}" target="_blank"></a>`
var button = button || false;
//<link href="assets/css/codepen.css" rel="stylesheet"></link>
if (window.location.href.indexOf("fullcpgrid") == -1 /*Small on pages*/ && window.location.href.indexOf("debug") /*...debug, mentioned for whenever I forget how to read code*/ == -1 && window.location.href.indexOf("fullembedgrid") == -1 /*Focused/details*/) { //Don't show on these pages
  document.body.innerHTML +=
        `<link href="assets/css/codepen.css" rel="stylesheet">
        
        ` //https://codepen.io/z-/pen/37f471adc6c5dba134cac86a34c93a61
}//https://i.imgur.com/DZ3sYcD.png

//fullcpgrid/a8e37caf2a04602ea5815e5acedab458