#! /usr/bin/env node

import inquirer  from "inquirer"
let currency : any = {

US:	1.00,
Euro:	0.921464,	
British_Pound:	0.789346,
Indian_Rupee:	83.237547,
Australian_Dollar:	1.510325,
Canadian_Dollar:	1.358055,
Singapore_Dollar:	1.345231,
Swiss_Franc:	0.903831,
Japanese_Yen:	151.784186,
Chinese_Yuan:	7.231616,
Omani_Rial:	0.384971,
Pakistani_Rupee:	277.959592
}

let userAns = await inquirer.prompt(
    [
        {
            name: "from",
            message: "please slect currency from",
            type: "list",
            choices: ['US','Euro','British_Pound','Indian_Rupee','Australian_Dollar',
'Canadian_Dollar','Singapore_Dollar','Swiss_Franc','Japanese_Yen',
'Chinese_Yuan','Omani_Rial','Pakistani_Rupee']
        },
        {
            name: "to",
            message: "please slect currency to",
            type: "list",
            choices: ['US','Euro','British_Pound','Indian_Rupee','Australian_Dollar',
'Canadian_Dollar','Singapore_Dollar','Swiss_Franc','Japanese_Yen',
'Chinese_Yuan','Omani_Rial','Pakistani_Rupee']
        },
        {
            name:"amount",
            message:"please enter your amount",
            type: "number"
        }
    ]
    );

    let fromAmount = currency[userAns.from]
    let toAmount = currency[userAns.to]
    let amount = userAns.amount
    let baseCurrency = amount / fromAmount
    let convertCurrency = baseCurrency * toAmount
    console.log(convertCurrency)

