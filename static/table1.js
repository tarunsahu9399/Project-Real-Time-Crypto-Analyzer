
function Avg_Down() {


    let Invested_Price_Class = document.querySelectorAll(".Invested_Price");
    let Current_Price_Class = document.querySelectorAll(".Current_Price");
    let Average_You_Want_Class = document.querySelectorAll(".Average_You_Want");
    let Coin_Class = document.querySelectorAll(".Coin_you_have");

    for (let i = 0; i < Invested_Price_Class.length; i++) {
       

        let Invested_Price = parseFloat(Invested_Price_Class[i].value);
        console.log(Invested_Price);



        let Current_Price = Current_Price_Class[i].value;
        console.log(Current_Price);


        let Average_You_Want = Average_You_Want_Class[i].value;
        console.log(Average_You_Want);


        let Coin = Coin_Class[i].value;
        console.log(Coin);
        let Coin_Required = ((Invested_Price - (Average_You_Want * Coin)) / (Average_You_Want - Current_Price)).toFixed(2);
        let a = document.querySelectorAll(".Coin_Required")
        a[i].innerHTML = Coin_Required;
        console.log(a[i].innerHTML);
        let b = document.querySelectorAll(".Money_Required")
        b[i].innerHTML = (Coin_Required * Current_Price).toFixed(2);
        console.log(b[i].innerHTML);


    }




}





