var coinDropdown = document.getElementById("coin-dropdown");
var currentPrice = document.getElementById("current-price");

coinDropdown.addEventListener("change", function() {
  var selectedCoin = coinDropdown.value.toLowerCase();
  var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=Litecoin%2CDogeCoin%2CSolana%2CBitcoin%2CCardano%2CCosmos%2CFantom%2CHarmony%2CEthereum%2CHelium%2CLoopring%2CRipple&vs_currencies=inr",
    "method": "GET",
    "headers": {}
  };

  $.ajax(liveprice).done(function(response) {
    currentPrice.value = response[selectedCoin].inr;
  });
});

