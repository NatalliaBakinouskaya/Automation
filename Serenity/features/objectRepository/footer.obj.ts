import { by, element, ElementFinder } from "protractor";

export class FooterRepository{
    readonly companyLink: ElementFinder = element(by.xpath(`//footer//a[contains(text(), 'О компании')]`));
}
