import { browser, ExpectedConditions } from "protractor";
import { HeaderRepository } from "../objectRepository/header.obj";

const defaultTimeout = browser.params.defaultTimeout;
export class Header{
    headerrepo: HeaderRepository;
    constructor(){
        this.headerrepo = new HeaderRepository;
    }



    public async Open() {
        browser.navigate().to(browser.params.onlinerByURL);
        await browser.wait(ExpectedConditions.urlContains("onliner"), defaultTimeout, "Onloner not found");
    }

    public async Exchange() {
        
        await browser.wait(ExpectedConditions.presenceOf(await this.headerrepo.currency), defaultTimeout, "Currency converter not found");
        await this.headerrepo.currency.click();
    }

    public async EuroRate() {
        
        await browser.wait(ExpectedConditions.visibilityOf(await this.headerrepo.euro), defaultTimeout, "Euro link not found");
        await this.headerrepo.euro.click();
    }

    public async Weather() {
        await browser.wait(ExpectedConditions.presenceOf(await this.headerrepo.weather), defaultTimeout, "Weather link not found");
        await this.headerrepo.weather.click();
    }

    public async Vilnius() {
       
        await browser.wait(ExpectedConditions.presenceOf(await this.headerrepo.cityTable), defaultTimeout, "Citytable not found");
        await this.headerrepo.cityTable.click();
        await browser.wait(ExpectedConditions.presenceOf(await this.headerrepo.vilnius), defaultTimeout, "Citytable not found");
        await this.headerrepo.vilnius.click();
        
    }
    public async vilniusWeather() {

        await browser.wait(ExpectedConditions.textToBePresentInElement(await this.headerrepo.cityTable, 'Вильнюсе'), defaultTimeout, "Weather in Vilnius not found");
    }
}
