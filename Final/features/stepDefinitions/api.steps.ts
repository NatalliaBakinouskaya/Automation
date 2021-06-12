import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";

const fetch = require('node-fetch');
// import {fetch} from 'node-fetch';

// let browserHacks = new BrowserHacks;
 //Loading browser hacks


export = function apiSteps() {
    // browser.executeScript("localStorage.removeItem('config');")
        //Hooks
    // this.Before(async () => {
    //     //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    // });

    // this.After(async () => {
    //     //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
    //     await browserHacks.ClearBrowserData();
    // });

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    let response:any;
    let response2:any;
    let sorted:any = [];
    //Step Definitions

    //Given expression, can only be used with Given in .feature file
   
    this.Given(/^I perform Get request$/, async () => {
       await fetch('https://jsonplaceholder.typicode.com/posts/')
       .then((response) => response.json())
       .then((json) => response = json);
    });
    this.When(/^I perform Post request$/, async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'AAA',
                body: 'BBB',
                userId: 1,
            }),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => response2 = json);
     });
    this.Then(/^I put response to console output$/, async () => {
   
        // for(let elem of response){
        //     if(elem.userId == 10 && elem.body.includes('del')){
        //     sorted.push(elem);
        //    }
    //    };
        response.forEach(function(elem){
            if(elem.userId == 10 && elem.body.includes('del') && elem.title.includes('velit')){
                    sorted.push(elem);
                   }
        })
        console.log("Sorted output: ", sorted);
    });


}
