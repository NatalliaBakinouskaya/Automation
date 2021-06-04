import { expect } from "chai";
import { TableDefinition } from "cucumber";
import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { OnlinerPage } from "../pageObjects/onliner.page";


export = function tutSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading page object
    let onliner = new OnlinerPage;
   
    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

    //Step Definitions

    //Given expression, can only be used with Given in .feature file
   
    this.Then(/^I am on Onliner page$/, async () => {
        await onliner.Open();
    });

    // this.Then(/^Mouse over Baracholka$/, async () => {
    //     await onliner.hoverBaracholka();
    // });

    // this.Then(/^I see City$/, async () => {
    //     await onliner.checkCityLink();
    // });

    // this.Then(/^I see table$/, async (tab: TableDefinition) => {
    //     await onliner.checkCityLinks(tab);
       
    // });

    this.Then(/^I search "(.*?)" in catalog$/, async (val:string) => {
        await onliner.searchIphone(val);
    });

    this.Then(/^I see element$/, async () => {
        await onliner.checkIphone();
    });
}
 