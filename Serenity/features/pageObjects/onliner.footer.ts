import { browser, ExpectedConditions } from "protractor";
import { FooterRepository } from "../objectRepository/footer.obj";

const defaultTimeout = browser.params.defaultTimeout;
export class Footer{
    footerrepo: FooterRepository;
    constructor(){
        this.footerrepo = new FooterRepository;
    }

    public async CompanyLink() {
        await browser.actions().mouseMove(await this.footerrepo.companyLink).perform();
        await browser.wait(ExpectedConditions.presenceOf(await this.footerrepo.companyLink), defaultTimeout, "CompaniLink not found");
        await this.footerrepo.companyLink.click();
    }

    public async CompanyUrl() {
        await browser.wait(ExpectedConditions.urlContains("blog.onliner.by/about"), defaultTimeout, "Company about info not found");
    }
}
