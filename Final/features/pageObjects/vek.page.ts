import { TableDefinition } from "cucumber";
import { browser, by, element, ElementFinder, ExpectedConditions, Key, promise } from "protractor";
import { VekRepository } from "../objectRepository/vek.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class VekPage {
    vekRepo: VekRepository;

    constructor() {
        this.vekRepo = new VekRepository;
    }

    //Methods as actions on page then
    public async Open() {
        browser.navigate().to(browser.params.vek21ByURL);
        await browser.wait(ExpectedConditions.urlContains("https://www.21vek.by/"), defaultTimeout, "URL was changed");
    }
   
    public async SwitchEachCity(cityName: string): promise.Promise<void> {
        
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.vekHomeCityButton), defaultTimeout, "City link not found");
        await this.vekRepo.vekHomeCityButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.vekHomeCityInput), defaultTimeout, "Input  field not found");
        await browser.actions().doubleClick(this.vekRepo.vekHomeCityInput).sendKeys(Key.BACK_SPACE).perform();
        await this.vekRepo.vekHomeCityInput.sendKeys(` ${cityName}`);
        
    }
    public async CheckEachCity(cityName: string): promise.Promise<void>  {
        
        let elem :  ElementFinder = element(by.xpath(`//div[@id="dropdown-0"]//child::div[normalize-space(text()) = "${cityName}"]`))
        await browser.wait(ExpectedConditions.visibilityOf(await elem), defaultTimeout, "City link not found");
        elem.click();
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.vekHomeCitySave), defaultTimeout, "Save Button not found");
        await this.vekRepo.vekHomeCitySave.click();
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.vekHomeCityButton), defaultTimeout, "City link not found");
        await browser.wait(ExpectedConditions.textToBePresentInElement(this.vekRepo.vekHomeCityButton, cityName), defaultTimeout, "City page not found");
    }
    public async LinkClicable(table: TableDefinition) {
        let row: any = table.rows();
        for(let i = 0; i < row.length; i++){
      
            let Searchelement_1 = element(by.xpath(`(//header//a[text() = ${row[i][0]}])[1]`));
            await browser.wait(ExpectedConditions.visibilityOf(await Searchelement_1),3000, `${row[i][1]} not found`);
            await browser.wait(ExpectedConditions.elementToBeClickable(Searchelement_1), defaultTimeout, "Link doesn,t work");
            await browser.actions().mouseUp(Searchelement_1).perform();
            let color = (await Searchelement_1.getCssValue("color"));
            await console.log(`Color of ${row[i][0]} is ${color} on hover`)
 
        }
        
        
    }
    public async ShowOffers()  {
        
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.offersLink), defaultTimeout, "Offers link not found")
        this.vekRepo.offersLink.click();
        await browser.wait(ExpectedConditions.urlContains("https://www.21vek.by/special_offers/promo.html"), defaultTimeout, "URL was changed")
  
        
    }
    
    public async CheckOfferBox(offerName: string): promise.Promise<void> {
        let elem :  ElementFinder = element(by.xpath(`//span[contains(text(), "${offerName}")]/preceding-sibling::div`))
        await browser.wait(ExpectedConditions.visibilityOf(await elem), defaultTimeout, "Checkbox not found");
        await elem.click();
        
        
    }
    public async CheckProduckAvailability()  {
        
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.productItem), defaultTimeout, "Products not found")
        
    }
    public async OpenMobilePage() {
        browser.navigate().to("https://www.21vek.by/mobile/");
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.smartPhoneHeader), defaultTimeout, "Phones not found");
    }
    
    public async AddFirstItemToCart() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.AddToCart), defaultTimeout, "Phones not found");
        await this.vekRepo.AddToCart.click();
        // Problem #1 Items are sometimes not added to the cart. Browser sleep helped(
        await browser.sleep(3000);
    }

    public async GoToCart() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.GoToCartButton ), defaultTimeout, "Phones not found");
        await this.vekRepo.GoToCartButton.click();
    }

    public async Checkout() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.CheckoutButton ), defaultTimeout, "Phones not found");
        await this.vekRepo.CheckoutButton.click();
    }

    public async SelectShippingMethod() {
        await browser.wait(ExpectedConditions.presenceOf(await this.vekRepo.SelectShippingRadio_1), defaultTimeout, "Radio button not found");
        await browser.wait(ExpectedConditions.presenceOf(await this.vekRepo.SelectShippingRadio_2), defaultTimeout, "Radio button not found");
        
        // Problem #2 How to click not vsible button. Resolved
        await browser.executeScript("arguments[0].click();", this.vekRepo.SelectShippingRadio_2.getWebElement());
        
        await console.log(await this.vekRepo.SelectShippingRadio_1.isSelected());
        await console.log(await this.vekRepo.SelectShippingRadio_2.isSelected());
    
    
    }

    
}