import { expect } from "chai";
import { TableDefinition } from "cucumber";
import { browser, by, element, ElementFinder, ExpectedConditions, Key, promise } from "protractor";
import { OnlinerRepository } from "../objectRepository/onliner.obj";
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
      
            let Searchelement_1 = element(by.css(row[i][0]));
            await browser.wait(ExpectedConditions.visibilityOf(await Searchelement_1),3000, `${row[i][1]} not found`);
            await browser.wait(ExpectedConditions.elementToBeClickable(Searchelement_1), defaultTimeout, "Link doesn,t work");
            
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

    // public async hoverBaracholka() {
    //     await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.onlinerBaracholkaLink), defaultTimeout, "Link wasn't loaded or has incorrect locator");
    //     await browser.actions().mouseMove(this.onlinerRepo.onlinerBaracholkaLink).perform(); 
    // }

    // public async checkCityLink() {
    //     await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.baraholkaMinskLink), defaultTimeout, "Minsk not found");
    //     await console.log("Minsk found");
    //     await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.baraholkaMahiliouLink), defaultTimeout, "Mahiliou not found");
    //     await console.log("Mahiliou found")
    //     await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.baraholkaHomelLink), defaultTimeout, "Homel not found");
    //     await console.log("Homel found")
    // }

    // public async checkCityLinks(table: TableDefinition) {
    //     let row: any = table.rows();
    //     for(let i = 0; i < row.length; i++){
      
    //         let Searchelement = element(by.xpath(row[i][0]));
    //         await browser.wait(ExpectedConditions.visibilityOf(await Searchelement),3000, `${row[i][1]} not found`);
    //         await console.log(`${row[i][1]} found`);

    //     }
    
    // }

    // public async searchIphone(searchItem:string) {
    //     await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.searchField), defaultTimeout, "Searchfield not found");
    //     // await this.onlinerRepo.searchField.sendKeys("Смартфон Apple iPhone 11 128GB Dual SIM (фиолетовый)")
    //     await this.onlinerRepo.searchField.sendKeys(searchItem);
    // } 

    // public async checkIphone() {
    //     // let allHandles = await browser.getAllWindowHandles();
    //     // allHandles.forEach(function(name){
    //     //     console.log(name);
    //     // })
    //     // console.log(await browser.getAllWindowHandles());
    //     await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.catalogIframe), defaultTimeout, "SearchIframe not found");
    //     await browser.switchTo().frame(this.onlinerRepo.catalogIframe.getWebElement());
    //     await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.searchIphone), defaultTimeout, "Iphone ot found");
    //     await this.onlinerRepo.searchIphone.click();
    //     await browser.executeScript(`window.open("https://onliner.by")`);

    //     await browser.sleep(3000);

    //     let allHandles = await browser.getAllWindowHandles();
    //     allHandles.forEach(function(name){
    //         console.log(name);
    //     })

    //     await browser.switchTo().window(allHandles[1]);
    //     await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.onlinerBaracholkaLink), defaultTimeout, "SearchIframe not found");
    //     await this.onlinerRepo.onlinerBaracholkaLink.click();
    //     await browser.sleep(9000);

    // } 
}