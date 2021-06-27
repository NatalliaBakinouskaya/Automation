import { browser } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";

const fetch = require('node-fetch');
// import {fetch} from 'node-fetch';

let browserHacks = new BrowserHacks;
//  Loading browser hacks


export = function apiSteps() {
  
    this.setDefaultTimeout(600 * 1000);

    let response:any;
    let response2:any;
   

    //Step Definitions
    //Given expression, can only be used with Given in .feature file

     this.Given(/^I want to know the weather in my City now$/, async () => {
        await fetch('https://www.onliner.by/sdapi/pogoda/api/forecast/26730')
        .then((response) => response.json())
        .then((json) => response = json);
    });

     

    this.Then(/^I put weather to console output$/, async () => {
   
       
        console.log("в ",response.city, response.now.phenomena, response.now.temperature);
    });



    this.When(/^I perform Post request2$/, async () => {
        await fetch('https://stage.srw.aisnovations.com/api/buckets/insert-from-basic-bucket', {
            method: 'POST',
            body: JSON.stringify({
                basicBucketId: 1,
                isCopyPricingNames: true,
                bucket: {
                bucketId: 0,
                bucketCode: 17,
                name: "Test Bucket",
                description: "aP test"
                }
                
            }),
            headers: {
               'Content-type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((json) => response = json);
    });
}
