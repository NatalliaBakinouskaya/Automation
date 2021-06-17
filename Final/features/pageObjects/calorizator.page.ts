import { expect } from "chai";
import { TableDefinition } from "cucumber";
import { browser, by, element, ElementFinder, ExpectedConditions, Key, promise } from "protractor";
import { CalorizatorRepository } from "../objectRepository/calorizator.ob";
import { OnlinerRepository } from "../objectRepository/onliner.obj";
import { VekRepository } from "../objectRepository/vek.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class CalorizatorPage {
    calorizatorRepo: CalorizatorRepository;

    constructor() {
        this.calorizatorRepo = new CalorizatorRepository;
    }

    //Methods as actions on page then
    public async Open() {
        browser.navigate().to(browser.params.calorizatorByURL);
        await browser.wait(ExpectedConditions.urlContains("calorizator"), defaultTimeout, "URL was changed");
    }
    public async ClickCoffeeButton(){
        await browser.wait(ExpectedConditions.visibilityOf(await this.calorizatorRepo.coffeeButton), defaultTimeout, "Button");
        await this.calorizatorRepo.coffeeButton.click();
    }

    public async CheckCapuchSelected(){
        await browser.wait(ExpectedConditions.visibilityOf(await this.calorizatorRepo.coffeeIframe), defaultTimeout, "SearchIframe not found");
        await browser.switchTo().frame(this.calorizatorRepo.coffeeIframe.getWebElement());
        await browser.wait(ExpectedConditions.presenceOf(await this.calorizatorRepo.capuchRadioButton), defaultTimeout, "Button");
        await console.log(await this.calorizatorRepo.capuchRadioButton.isSelected());

        await browser.wait(ExpectedConditions.presenceOf(await element(by.xpath(`//*[@id="close"]`))), defaultTimeout, "X");
        await element(by.xpath(`//*[@id="close"]`)).click();
        // await browser.switchTo().defaultContent();

        // let allHandles = await browser.getAllWindowHandles();
        // allHandles.forEach(function(name){
            // console.log(name);
        // })
        // console.log(await browser.getAllWindowHandles());

        // await browser.switchTo().window(allHandles[0]);  
    }
    
}