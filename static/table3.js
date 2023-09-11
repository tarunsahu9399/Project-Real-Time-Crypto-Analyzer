function Avg_Down() {
  

    let Invested_Price_Class = document.querySelectorAll(".Invested_Price");
    console.log(Invested_Price_Class);
    let Current_Price_Class = document.querySelectorAll(".Current_Price");let Coin_you_have_Class = document.
    querySelectorAll(".Coins_you_have");
    console.log(Invested_Price_Class.length);
    let Coin_You_Want_To_Buy_Class = document.querySelectorAll(".Coin_You_Want_To_Buy");
    
    for (let i = 0; i < Invested_Price_Class.length; i++) {
        console.log("hello");

        let Invested_Price = parseFloat(Invested_Price_Class[i].value);
        console.log(Invested_Price);
       



        let Current_Price = Current_Price_Class[i].value;
        console.log(Current_Price);
        let Coin_you_have = parseInt(Coin_you_have_Class[i].value);
        console.log(Coin_you_have);

        let Coin_You_Want_To_Buy = parseInt(Coin_You_Want_To_Buy_Class[i].value);
        console.log(Coin_You_Want_To_Buy);


        let Money_You_Want_To_Invest = parseInt(Coin_You_Want_To_Buy * Current_Price);
        let a = document.querySelectorAll(".Money_You_Want_To_Invest");
        a[i].innerHTML = (Money_You_Want_To_Invest).toFixed(2);
        
       
        let Average = (Invested_Price + Money_You_Want_To_Invest) / (Coin_you_have + Coin_You_Want_To_Buy);
        let b = document.querySelectorAll(".Average");
        b[i].innerHTML = (Average).toFixed(2);

















        //// let Invested_Price = parseFloat(document.getElementById("Invested_Price").value);
        //  let Current_Price = parseFloat(document.getElementById("Current_Price").value);
        //  let Coin_You_Want_To_Buy = parseFloat(document.getElementById("Coin_You_Want_To_Buy").value);
        // let Coin = parseFloat(document.getElementById("Coin").value);


        // let current_average = Invested_Price / Coin;
        // let Money_You_Want_To_Invest = Coin_You_Want_To_Buy * Current_Price;;
        // let Average = (Invested_Price + Money_You_Want_To_Invest) / (Coin + Coin_You_Want_To_Buy);

        // document.getElementById("current_average").innerHTML = current_average;
        // document.getElementById("Money_You_Want_To_Invest").innerHTML = Money_You_Want_To_Invest;
        // document.getElementById("Average").innerHTML = Average;

    }
}











