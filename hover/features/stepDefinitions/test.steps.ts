import { BrowserHacks } from "../../support/browserHacks";
import { OnlinerPage } from "../pageObjects/onliner.page";
import { TutPage } from "../pageObjects/tut.page";

export = function tutSteps() {

    //Default cucumber timeout
    this.setDefaultTimeout(600 * 1000);

    //Loading browser hacks
    let browserHacks = new BrowserHacks;

    //Loading page object
    let tut = new TutPage;
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
    this.Given(/^I am on Tut page$/, async () => {
       await tut.Open();
    });
    this.When(/^I check "Разделы" on homePage$/, async () => {
        await tut.HoverTxt();
     });

    this.Then(/^I click "Почта" on homePage$/, async () => {
        await tut.CheckboxCheck();
     });

    this.When(/^I check "Финансы" on homePage$/, async () => {
        await tut.ClickFinance();
     });
    
    this.Then(/^I select "Осталась на том же уровне" on tutFinancePage$/, async () => {
        await tut.SelectBox();
     });

    this.Then(/^I select "Конвертер валют_1" on tutFinancePage$/, async () => {
        await tut.SelectDDL();
    });

    this.Then(/^I am on Onliner page$/, async () => {
        await onliner.Open();
    });

    this.Then(/^Mouse over Baracholka$/, async () => {
        await onliner.hoverBaracholka();
    });

    this.Then(/^I see MinskLink$/, async () => {
        await onliner.checkCityLink();
    });
}
 