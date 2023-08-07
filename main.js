let btc = document.getElementById("bitcoin");
let ripple = document.getElementById("ripple");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");

let liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cripple%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    ripple.innerHTML = response.ripple.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});