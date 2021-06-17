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

        // let allHandles = await browser.getAllWindowHandles();
        // allHandles.forEach(function(name){
            // console.log(name);
        // })
        // console.log(await browser.getAllWindowHandles());

        // await browser.switchTo().window(allHandles[0]);  
    }
    public async SelectEachCoffee(coffeeName: string): promise.Promise<void>  {
        await browser.wait(ExpectedConditions.visibilityOf(await this.calorizatorRepo.coffeeIframe), defaultTimeout, "SearchIframe not found");
        await browser.switchTo().frame(this.calorizatorRepo.coffeeIframe.getWebElement());

        // Problem #3 div[text() = ${coffeeName})] doesn't work
        // let elem :  ElementFinder = element(by.xpath(`//div[text() = ${coffeeName})]//preceding-sibling::div//child::*`))
        let elem :  ElementFinder = element(by.xpath(`//div[contains(text(), ${coffeeName})]//preceding-sibling::div//child::*`))
        await browser.wait(ExpectedConditions.visibilityOf(await elem), defaultTimeout, "Coffee radio button not found");
        elem.click();

        await browser.wait(ExpectedConditions.presenceOf(await this.calorizatorRepo.sorry), defaultTimeout, "X");
        await this.calorizatorRepo.sorry.click();
    }
    
}