import { expect } from "chai";
import { browser, by, element, ElementFinder, ExpectedConditions, promise } from "protractor";
import { CalorizatorRepository } from "../objectRepository/calorizator.ob";


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

        await browser.wait(ExpectedConditions.presenceOf(await this.calorizatorRepo.closeIframeButton), defaultTimeout, "X");
        await this.calorizatorRepo.closeIframeButton.click();
        
        //  Works w/o commented code
        // await browser.switchTo().defaultContent();
    }
    public async SelectEachCoffee(coffeeName: string): promise.Promise<void>  {
        await browser.wait(ExpectedConditions.visibilityOf(await this.calorizatorRepo.coffeeIframe), defaultTimeout, "SearchIframe not found");
        await browser.switchTo().frame(this.calorizatorRepo.coffeeIframe.getWebElement());

        // Problem #3 div[text() = ${coffeeName})] doesn't work - RESOLVED!!
        let elem :  ElementFinder = element(by.xpath(`//div[text() = ${coffeeName}]//preceding-sibling::div//child::*`))
        await browser.wait(ExpectedConditions.visibilityOf(await elem), defaultTimeout, "Coffee radio button not found");
        elem.click();

        await browser.wait(ExpectedConditions.presenceOf(await this.calorizatorRepo.sorry), defaultTimeout, "X");
        await this.calorizatorRepo.sorry.click();
    }

    public async SendRecipe(){
        await browser.wait(ExpectedConditions.visibilityOf(await this.calorizatorRepo.recipeAnalizerLink), defaultTimeout, "Analyzer not found");
        await this.calorizatorRepo.recipeAnalizerLink.click();

        await browser.wait(ExpectedConditions.visibilityOf(await this.calorizatorRepo.recipeInput), defaultTimeout, "Analyzer not found");
        await this.calorizatorRepo.recipeInput.sendKeys("Пиво 500 г, арахис жареный соленый 50 г, чипсы 100 г");

        await browser.wait(ExpectedConditions.visibilityOf(await this.calorizatorRepo.analyzeButton), defaultTimeout, "Analyzer not found");
        await this.calorizatorRepo.analyzeButton.click();

    }
    public async CalculateEnergy(){
        await browser.wait(ExpectedConditions.visibilityOf(await this.calorizatorRepo.energyResult), defaultTimeout, "Analyzer not found");
        let str = await this.calorizatorRepo.energyResult.getText();
        console.log(str);
        let num = (await str).match(/\d+/g).join();
        expect(+num).equals(1025);
        

    }
}