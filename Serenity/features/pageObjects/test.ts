import { browser, ExpectedConditions } from "protractor";
import { TestRepository } from "../objectRepository/test.obj";

const defaultTimeout = browser.params.defaultTimeout;
export class TestObj{
    testrepo: TestRepository;
    constructor(){
        this.testrepo = new TestRepository;
    }

    public async Open() {
        // browser.navigate().to(browser.params.onlinerByURL);
        // await browser.wait(ExpectedConditions.urlContains("onliner"), defaultTimeout, "Onloner not found");
    }
}    