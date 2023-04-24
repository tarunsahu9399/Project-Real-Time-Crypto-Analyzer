const addRowButton = document.getElementById("add-row");
const tableBody = document.querySelector("#my-table tbody");

addRowButton.addEventListener("click", function() {
  const newRow = document.createElement("tr");

  const cryptoCoinCell = document.createElement("td");
  const cryptoCoinSelect = document.createElement("select");
  cryptoCoinSelect.setAttribute("id", "coin-dropdown");
  const coinOptions = ['Bitcoin', 'Ethereum', 'Litecoin', 'Dogecoin', 'Solana', 'Cosmos', 'Ripple', 'Helium', 'Cardano', 'Loopring', 'Fantom', 'Harmony'];
  coinOptions.forEach((coin) => {
    const option = document.createElement("option");
    option.setAttribute("value", coin);
    option.innerHTML = coin;
    cryptoCoinSelect.appendChild(option);
  });
  cryptoCoinCell.appendChild(cryptoCoinSelect);

  const investedPriceCell = document.createElement("td");
  investedPriceCell.innerHTML = '<input class="Invested_Price" type="text">';

  const currentPriceCell = document.createElement("td");
  const currentPriceInput = document.createElement("input");
  currentPriceInput.setAttribute("class", "Current_Price");
  currentPriceInput.setAttribute("type", "text");
  currentPriceCell.appendChild(currentPriceInput);

  const coinsYouHaveCell = document.createElement("td");
  coinsYouHaveCell.innerHTML = '<input class="Coins_you_have" type="text">';

  const moneyYouWantToInvestCell = document.createElement("td");
  moneyYouWantToInvestCell.innerHTML = '<input class="Money_You_Want_To_Invest" type="text">';

  



  const avgDownButtonCell = document.createElement("td");
  avgDownButtonCell.innerHTML = '<button class="button" onclick="Avg_Down()">Calculate</button>'; 
  
  const coinYouWantToBuyCell = document.createElement("td");
  coinYouWantToBuyCell.innerHTML = '<input class="Coin_You_Want_To_Buy " type="text">';

  const averageCell = document.createElement("td");
  averageCell.innerHTML = '<p class="Average"></p>';

  
  newRow.appendChild(cryptoCoinCell);
  newRow.appendChild(investedPriceCell);
  newRow.appendChild(currentPriceCell);
  newRow.appendChild(coinsYouHaveCell);
  newRow.appendChild(moneyYouWantToInvestCell);
  newRow.appendChild(avgDownButtonCell);
  newRow.appendChild(coinYouWantToBuyCell);
  newRow.appendChild(averageCell);

  tableBody.appendChild(newRow);

  // add event listener to fetch current price when coin is selected
  cryptoCoinSelect.addEventListener("change", function() {
    const selectedCoin = this.value;
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=Litecoin%2CDogeCoin%2CSolana%2CBitcoin%2CCardano%2CCosmos%2CFantom%2CHarmony%2CEthereum%2CHelium%2CLoopring%2CRipple&vs_currencies=inr`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const currentPrice = data[selectedCoin.toLowerCase()]["inr"];
        currentPriceInput.value = currentPrice;
      })
      .catch(error => {
        console.error(`Error fetching current price for ${selectedCoin}: ${error}`);
        currentPriceInput.value = "";
      });
  });
});
