import { browser, by, element, ElementFinder, ExpectedConditions } from "protractor";
import { OnlinerRepository } from "../objectRepository/onliner.obj";
import { TutRepository } from "../objectRepository/tut.obj";

const defaultTimeout = browser.params.defaultTimeout;

export class OnlinerPage {
    onlinerRepo: OnlinerRepository;

    constructor() {
        this.onlinerRepo = new OnlinerRepository;
    }

    //Methods as actions on page then
    public async Open() {
        browser.navigate().to(browser.params.onlinerByURL);
        await browser.wait(ExpectedConditions.urlContains("https://www.onliner.by"), defaultTimeout, "URL wasn't changed");
    }

    public async hoverBaracholka() {
        await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.onlinerBaracholkaLink), defaultTimeout, "Link wasn't loaded or has incorrect locator");
        await browser.actions().mouseMove(this.onlinerRepo.onlinerBaracholkaLink).perform(); 
    }

    public async checkCityLink() {
        // await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.baraholkaMinskLink), defaultTimeout, "Link wasn't loaded or has incorrect locator");
        console.log("Baracholka+")
    }
    
    public async checkThreeCityLinks(City:string) {
        console.log(City);
        let CityFound: ElementFinder = await element(by.xpath(City));
        await browser.wait(ExpectedConditions.visibilityOf(await CityFound), defaultTimeout, "Link wasn't loaded or has incorrect locator");
        // if(City == "Minsk"){
        //     await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.baraholkaMinskLink), defaultTimeout, "Link wasn't loaded or has incorrect locator");
        //     await console.log("MINSK FOUND");
        // }
        
    }
    
}