// import { expect } from "chai";
import { TableDefinition } from "cucumber";
// import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { CalorizatorPage } from "../pageObjects/calorizator.page";


export = function calorizatorSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading page object
    let calorizator = new CalorizatorPage;
   
    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });
   
    //Step Definitions
    this.Given(/^I am on Calorizator page$/, async () => {
        await calorizator.Open();
    });

    this.When(/^Click Coffee button$/, async () => {
        await calorizator.ClickCoffeeButton();
    });

    this.Then(/^I see default selection$/, async () => {
        await calorizator.CheckCapuchSelected();
    });

    this.Then(/^I select (.*?)$/, async (input: string) => {
        await calorizator.SelectEachCoffee(input);
    });

    this.When(/^I go to analizer and send my recipe$/, async () => {
        await calorizator.SendRecipe();
    });

    this.Then(/^I see correct food energy value$/, async () => {
        await calorizator.CalculateEnergy();
    });

}
 