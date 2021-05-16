// import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { Footer } from "../pageObjects/onliner.footer";
import { Header } from "../pageObjects/onliner.header";



export = function featureSteps() {

   
    this.setDefaultTimeout(600 * 1000);
    let browserHacks = new BrowserHacks;
    let header = new Header();
    let footer = new Footer();
   
    // this.Before(async () => {
    // });

    this.After(async () => {
        await browserHacks.ClearBrowserData();
    });
    

    this.Given(/^I am on Onliner page$/, async () => {
        await header.Open();
    });

    this.When(/^I click Exchange link$/, async () => {
        await header.Exchange();
    });

    this.Then(/^I see Euro exchange rate$/, async () => {
        await header.EuroRate();
    });

    this.When(/^I click Weather link$/, async () => {
        await header.Weather(); 
    });

    this.When(/^I click Vilnius link$/, async () => {
        await header.Vilnius(); 
    });

    this.Then(/^I see the weather in Vilnius today$/, async () => {
        await header.vilniusWeather(); 
    });

    this.When(/^I click company$/, async () => {
        await footer.CompanyLink(); 
    });

    this.Then(/^I see companyUrl$/, async () => {
        await footer.CompanyUrl(); 
    });
}