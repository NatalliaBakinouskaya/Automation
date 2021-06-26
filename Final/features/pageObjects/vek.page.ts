import { expect } from "chai";
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
            let Searchelement: ElementFinder;
            if(row[i][0] !== "г. Минск"){
                Searchelement = element(by.xpath(`(//header//*[text() = ${row[i][0]}])[1]`));
            }
            else{
                Searchelement = element(by.xpath(`//*[text() = ${row[i][0]}]/parent::*`));
            }

            // Searchelement = element(by.xpath(`(//header//a[text() = ${row[i][0]}])[1]`));
            await browser.wait(ExpectedConditions.visibilityOf(await Searchelement),3000, `${row[i][1]} not found`);
            await browser.wait(ExpectedConditions.elementToBeClickable(Searchelement), defaultTimeout, "Link doesn,t work");
            await browser.actions().mouseUp(Searchelement).perform();
            let color = (await Searchelement.getCssValue("color"));
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
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.AddToCart), defaultTimeout, "Button not found");
        await this.vekRepo.AddToCart.click();
        // Problem #1 Items are sometimes not added to the cart. Browser sleep helped(
        await browser.sleep(3000);
    }

    public async GoToCart() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.GoToCartButton ), defaultTimeout, "Button not found");
        await this.vekRepo.GoToCartButton.click();
    }

    public async Checkout() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.CheckoutButton ), defaultTimeout, "Button not found");
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

    public async SerchInCatalog(good: string): promise.Promise<void> {
        
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.catalogSearchInput), defaultTimeout, `${good} link not found`);
        await this.vekRepo.catalogSearchInput.sendKeys(`${good}` + Key.ENTER);
        
    }
    public async CheckFoundItems() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.foundInCatalog), defaultTimeout, `Information about found items is not available`);
        let str = await this.vekRepo.foundInCatalog.getText();
        // console.log(str);
        let num = (await str).match(/\d+/g).join();
        expect(+num).greaterThan(1);
        // console.log(+num > 0);
    }

    public async NavigteToRepareReturnPage() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.repareReturnLink), defaultTimeout, "Link not found");
        this.vekRepo.repareReturnLink.click();
        await browser.wait(ExpectedConditions.urlContains("info/return"), defaultTimeout, "URL was changed")
    }
    public async SubmitRequest() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.submitRequestButton), defaultTimeout, "Link not found");
        this.vekRepo.submitRequestButton.click();

         let allHandles = await browser.getAllWindowHandles();
        // allHandles.forEach(function(name){
        //     console.log(name);
        // })
        // console.log(await browser.getAllWindowHandles());

        await browser.switchTo().window(allHandles[1]);  
        await browser.wait(ExpectedConditions.urlContains("form.jotformeu"), defaultTimeout, "URL was changed")
    }
    public async FillRequestForm() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.fillTheFormButton), defaultTimeout, "Link not found");
        await this.vekRepo.fillTheFormButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.noButton1), defaultTimeout, "Link not found");
        await this.vekRepo.noButton1.click();
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.noButton2), defaultTimeout, "Link not found");
        await this.vekRepo.noButton2.click();

        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.radioOtherButton), defaultTimeout, "Link not found");
        await this.vekRepo.radioOtherButton.click();

        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.noButton3), defaultTimeout, "Link not found");
        await this.vekRepo.noButton3.click();

        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.forwardButton1), defaultTimeout, "Link not found");
        await this.vekRepo.forwardButton1.click();
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.forwardButton2), defaultTimeout, "Link not found");
        await this.vekRepo.forwardButton2.click();

        let allHandles = await browser.getAllWindowHandles();
        // allHandles.forEach(function(name){
        //     console.log(name);
        // })
        // console.log(await browser.getAllWindowHandles());
        await browser.switchTo().window(allHandles[0]);

        // await browser.sleep(3000)
    }
    public async AddItems(table: TableDefinition) {
        let row: any = table.rows();
        for(let i = 0; i < row.length; i++){
            let Searchelement: ElementFinder;
            
                Searchelement = element(by.cssContainingText("a", row[i][0]));
          
            await browser.wait(ExpectedConditions.presenceOf(await Searchelement), defaultTimeout, `${row[i][0]} not found`);
            // await browser.wait(ExpectedConditions.elementToBeClickable(await Searchelement), defaultTimeout, "Link doesn't work");
            // await Searchelement.click();
            await browser.actions().mouseUp(Searchelement).click().perform();
            await browser.wait(ExpectedConditions.urlContains(row[i][1]), defaultTimeout, "URL was changed");
            for(let numb = 1; numb <= 3; numb++){
                // let addButton = await element(by.xpath(`(//button[contains(text(), "В корзину")])[1]`));
            await browser.wait(ExpectedConditions.visibilityOf(this.vekRepo.AddToCart), defaultTimeout, `Item not found`);
            await browser.wait(ExpectedConditions.elementToBeClickable(await this.vekRepo.AddToCart), defaultTimeout, "Link doesn't work");
            await this.vekRepo.AddToCart.click();
                // await browser.sleep(2000);
            }
            browser.navigate().to(browser.params.vek21ByURL);
            // await browser.actions().mouseUp(Searchelement).perform();
        } 
    }  

    public async CheckQuontityInTheCart() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.cartIcon), defaultTimeout, `Cart link not found`);
        let str = await this.vekRepo.cartIcon.getText();
        console.log(str);
        let num = (await str).match(/\d+/g).join();
        expect(+num).equals(9);
       
    }

    public async GoToSelfPickup() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.elseButton1), defaultTimeout, `Pickup link not found`);
        await this.vekRepo.elseButton1.click();
        await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.pickupPageLink1), defaultTimeout, `Pickup link not found`);
        await this.vekRepo.pickupPageLink1.click();
        
    }

    public async findPickupPoint(table: TableDefinition) {
        
        // await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.mapMinusButton), defaultTimeout);
        // await this.vekRepo.mapMinusButton.click();

        let row: any = table.rows();
        for(let i = 0; i < row.length; i++){
            
            await browser.wait(ExpectedConditions.presenceOf(await this.vekRepo.pickupPoint), defaultTimeout, `Point ${row[i][0]} not found`);
           
            await browser.actions().mouseUp(this.vekRepo.pickupPoint).click().perform();
            // await this.vekRepo.pickupPoint.click();
            await browser.sleep(3000);

            await browser.wait(ExpectedConditions.visibilityOf(element(by.xpath(`//ymaps[contains(text(), "${row[i][0]}")]`))), defaultTimeout, `${row[i][0]} not found`);
            
            await browser.wait(ExpectedConditions.visibilityOf(await this.vekRepo.closeButton), defaultTimeout, `Can't close`);
            await this.vekRepo.closeButton.click()
            await browser.sleep(1000);
            
            }
           
    }  

    
}