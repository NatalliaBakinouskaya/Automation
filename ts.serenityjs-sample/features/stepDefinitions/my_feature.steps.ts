import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";

const defaultTimeout = browser.params.defaultTimeout;

export = function featureSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

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
    this.Given(/^I am on Onliner page$/, async () => {
        browser.navigate().to(browser.params.onlinerByURL);
    });

    this.Then(/^I click Catalog link$/, async () => {
        let catalogLink:ElementFinder = await element(by.xpath("//a[contains(text(), 'КАТАЛОГ')]"));
        await catalogLink.click();
        await browser.wait(ExpectedConditions.urlContains("https://catalog.onliner.by/"), defaultTimeout, "URL wasn't changed");
    });

    this.Then(/^I search for some element$/, async () => {
        let searchField:ElementFinder = await element(by.css("input.fast-search__input"));
        
        await browser.wait(ExpectedConditions.visibilityOf(searchField), defaultTimeout, "Search Field wasn't loaded or has incorrect locator");
        await searchField.sendKeys("Что-то на лопате");
        await browser.sleep(3000);
    });




}