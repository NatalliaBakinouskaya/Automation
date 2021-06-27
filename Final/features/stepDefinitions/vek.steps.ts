// import { expect } from "chai";
import { TableDefinition } from "cucumber";
// import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { BrowserHacks } from "../../support/browserHacks";
import { VekPage } from "../pageObjects/vek.page";


export = function vekSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading page object
    let vek = new VekPage;
    
   
    //Hooks
    this.Before(async () => {
        //ACTIONS BEFORE EXECUTING EACH TEST, I.E. SOME PRE-REQS FOR TEST OR SETUP
    });

    this.After(async () => {
        //ACTIONS AFTER EXECUTING EACH TEST, I.E. CLEANUP
        await browserHacks.ClearBrowserData();
    });

    //Step Definitions
   
    this.Given(/^I am on 21 vek page$/, async () => {
        await vek.Open();
    });

    this.When(/^I Click (.*?) & enter city name$/, async (input: string) => {
        await vek.SwitchEachCity(input);
    });
    
    this.Then(/^I swith to "(.*?)" page$/, async (value) => {
        await vek.CheckEachCity(value);
    });
    this.Then(/^Link is clicable$/, async (tab: TableDefinition) => {
        await vek.LinkClicable(tab);
    });
    
    this.When(/^I click Offer link$/, async () => {
        await vek.ShowOffers();
    });

    this.When(/^I check "(.*?)"$/, async (input: string) => {
        await vek.CheckOfferBox(input);
    });

    this.Then(/^At least one product is present on the page$/, async () => {
        await vek.CheckProduckAvailability();
    });

    this.Given(/^I am on 21 vek-smartphones page$/, async () => {
        await vek.OpenMobilePage();
    });
    this.When(/^I add the first item to the cart$/, async () => {
        await vek.AddFirstItemToCart();
    });

    this.When(/^I go to the cart$/, async () => {
        await vek.GoToCart();
    });
    this.When(/^I checkout$/, async () => {
        await vek.Checkout();
    });
    this.Then(/^I can select Shipping method$/, async () => {
        await vek.SelectShippingMethod();
    });


    this.When(/^I Search for (.*?)$/, async (input: string) => {
        await vek.SerchInCatalog(input);
    });

    this.Then(/^I see number of items found > 1$/, async () => {
        await vek.CheckFoundItems();
    });

    this.When(/^I navigate to repare-return page$/, async () => {
        await vek.NavigteToRepareReturnPage();
    });

    this.When(/^I click Submit Request button$/, async () => {
        await vek.SubmitRequest();
    });

    this.Then(/^I fill request form and return to 21 vek page$/, async () => {
        await vek.FillRequestForm();
    });

    this.When(/^I open category page and add items$/, async (tab: TableDefinition) => {
        await vek.AddItems(tab);
    });
    
    this.Then(/^QTY of items in Cart is reflected on Home Page$/, async () => {
        await vek.CheckQuontityInTheCart();
    });

    this.When(/^I go to self-pickup page$/, async () => {
        await vek.GoToSelfPickup();
    });
    
    this.Then(/^I see my pickup-point on the map$/, async (tab: TableDefinition) => {
        await vek.findPickupPoint(tab);
    });
}
 