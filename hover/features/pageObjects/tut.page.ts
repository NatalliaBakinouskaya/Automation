import { browser, by, ElementFinder, ExpectedConditions } from "protractor";
import { TutRepository } from "../objectRepository/tut.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class TutPage {
    tutRepo: TutRepository;

    constructor() {
        this.tutRepo = new TutRepository;
    }

    //Methods as actions on page then
    public async Open() {
        browser.navigate().to(browser.params.tutByURL);
        await browser.wait(ExpectedConditions.urlContains("https://www.tut.by/"), defaultTimeout, "URL wasn't changed");
    }

    public async HoverTxt() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.tutRepo.tutRazdely), defaultTimeout, "Link wasn't loaded or has incorrect locator");
        // await this.tutRepo.tutRazdely.click();
        let RazdelyHref: string = await this.tutRepo.tutRazdely.getAttribute("class");
        console.log(RazdelyHref);
        let RazdelyCss: string = await this.tutRepo.tutRazdely.getCssValue("font-size" || "font-family");
        console.log(`Font = ${RazdelyCss}`);
        await browser.actions().mouseMove(this.tutRepo.tutRazdely).perform();
        let ColorOnHover: string = await this.tutRepo.tutRazdely.getCssValue("color");
        console.log(ColorOnHover == "rgba(198, 10, 0, 1)");
        
    }
    public async CheckboxCheck() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.tutRepo.tutMail), defaultTimeout, "Link wasn't loaded or has incorrect locator");
        await this.tutRepo.tutMail.click();
        await browser.wait(ExpectedConditions.visibilityOf(await this.tutRepo.remenberMeCheckBox), defaultTimeout, "Checkbox not found");
        await console.log(await this.tutRepo.remenberMeCheckBox.isSelected());
        // await expect(this.tutRepo.remenberMeCheckBox.isSelected()).toBe(false)
        await this.tutRepo.remenberMeCheckBox.click();
     
    }
    public async ClickFinance() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.tutRepo.tutFinanceLink), defaultTimeout, "Link wasn't loaded or has incorrect locator");
        await this.tutRepo.tutFinanceLink.click();
     
    }
    public async SelectBox() {
        await browser.wait(ExpectedConditions.presenceOf(await this.tutRepo.firstRadio), defaultTimeout, "Radio has incorrect locator");
        await this.tutRepo.firstRadio.click();
        await console.log(await this.tutRepo.firstRadio.isSelected());
        // browser.sleep(6000);
    
    }
    public async SelectDDL() {
        await browser.wait(ExpectedConditions.presenceOf(await this.tutRepo.firstDDL), defaultTimeout, "DDL has incorrect locator");
        await this.tutRepo.firstDDL.click();
        await browser.wait(ExpectedConditions.presenceOf(await this.tutRepo.optionUSD), defaultTimeout, "Radio has incorrect locator");
        await this.tutRepo.optionUSD.click();
        browser.sleep(6000);
    
    }
}