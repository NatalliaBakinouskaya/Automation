import { TableDefinition } from "cucumber";
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
        await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.baraholkaMinskLink), defaultTimeout, "Minsk not found");
        await console.log("Minsk found");
        await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.baraholkaMahiliouLink), defaultTimeout, "Mahiliou not found");
        await console.log("Mahiliou found")
        await browser.wait(ExpectedConditions.visibilityOf(await this.onlinerRepo.baraholkaHomelLink), defaultTimeout, "Homel not found");
        await console.log("Homel found")
    }

    public async checkCityLinks(table: TableDefinition) {
        let row: any = table.rows();
        for(let i = 0; i < row.length; i++){
      
            let Searchelement = element(by.xpath(row[i][0]));
            await browser.wait(ExpectedConditions.visibilityOf(await Searchelement),3000, `${row[i][1]} not found`);
            await console.log(`${row[i][1]} found`);

        }
    }
}