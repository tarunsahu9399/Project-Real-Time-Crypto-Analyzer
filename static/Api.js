var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var ltc = document.getElementById("litecoin");
var doge = document.getElementById("dogecoin");
var sol = document.getElementById("solana");
var atom = document.getElementById("cosmos");
var xrp = document.getElementById("ripple");
var hnt = document.getElementById("helium");
var ada = document.getElementById("cardano");
var lrc = document.getElementById("loopring");
var ftm = document.getElementById("fantom");
var one = document.getElementById("harmony");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=Litecoin%2CDogeCoin%2CSolana%2CBitcoin%2CCardano%2CCosmos%2CFantom%2CHarmony%2CEthereum%2CHelium%2CLoopring%2CRipple&vs_currencies=inr",



    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response) {
    console.log(response);
    btc.innerHTML = response.bitcoin.inr;
    eth.innerHTML = response.ethereum.inr;
    ltc.innerHTML = response.litecoin.inr;
    doge.innerHTML = response.dogecoin.inr;
    sol.innerHTML = response.solana.inr;
    atom.innerHTML = response.cosmos.inr;
    xrp.innerHTML = response.ripple.inr;
    hnt.innerHTML = response.helium.inr;
    ada.innerHTML = response.cardano.inr;
    lrc.innerHTML = response.loopring.inr;
    ftm.innerHTML = response.fantom.inr;
    one.innerHTML = response.harmony.inr;




});
