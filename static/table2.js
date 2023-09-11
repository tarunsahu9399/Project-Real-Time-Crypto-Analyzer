function Avg_Down() {
    let Invested_Price_Class = document.querySelectorAll(".Invested_Price");
    let Current_Price_Class = document.querySelectorAll(".Current_Price");
    let Money_You_Want_To_Invest_Class = document.querySelectorAll(".Money_You_Want_To_Invest");
    let Coins_you_have_Class = document.querySelectorAll(".Coins_you_have");

    for (let i = 0; i < Invested_Price_Class.length; i++) {
        let Invested_Price = parseFloat(Invested_Price_Class[i].value);
        // console.log(Invested_Price);



        let Current_Price = Current_Price_Class[i].value;
        // console.log(Current_Price);

        let Coins_you_have= parseInt(Coins_you_have_Class[i].value);
        // console.log(Coins_you_have);

        let Money_You_Want_To_Invest = parseInt(Money_You_Want_To_Invest_Class[i].value);
        // console.log(Money_You_Want_To_Invest);
        
        console.log(Invested_Price, Money_You_Want_To_Invest, Coins_you_have);

        let Coin_You_Want_To_Buy = parseInt(Money_You_Want_To_Invest / Current_Price);
        console.log(Invested_Price, Coin_You_Want_To_Buy, Money_You_Want_To_Invest, Coins_you_have);
        let a = document.querySelectorAll(".Coin_You_Want_To_Buy");
        a[i].innerHTML = (Coin_You_Want_To_Buy).toFixed(2);
        // console.log(a[i].innerHTML);
        console.log(Invested_Price, Coin_You_Want_To_Buy, Money_You_Want_To_Invest, Coins_you_have);

        let Average = (Invested_Price + Money_You_Want_To_Invest) / (Coins_you_have + Coin_You_Want_To_Buy);
        console.log(Invested_Price, Coin_You_Want_To_Buy, Money_You_Want_To_Invest, Coins_you_have);
        let b = document.querySelectorAll(".Average");
        b[i].innerHTML = (Average).toFixed(2);





        // let Invested_Price = parseFloat(document.getElementById("Invested_Price").value);
        // let Current_Price = parseFloat(document.getElementById("Current_Price").value);
        //  let Money_You_Want_To_Invest = parseFloat(document.getElementById("Money_You_Want_To_Invest").value);
        //  let Coin = parseFloat(document.getElementById("Coin").value);

        // let Coin_You_Want_To_Buy = Money_You_Want_To_Invest / Current_Price;
        // let Average = (Invested_Price + Money_You_Want_To_Invest) / (Coin + Coin_You_Want_To_Buy);
        // document.getElementById("Coin_You_Want_To_Buy").innerHTML = Coin_You_Want_To_Buy;
        //  document.getElementById("Average").innerHTML = Average;

    }
}