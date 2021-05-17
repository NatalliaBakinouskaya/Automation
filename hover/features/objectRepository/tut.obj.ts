import { by, element, ElementFinder } from "protractor";

export class TutRepository {
    
    readonly tutRazdely:ElementFinder = element(by.xpath("(//a[contains(text(), 'Разделы')])[1]"));
    readonly tutMail:ElementFinder = element(by.xpath('(//a[@title="Почта"])[1]'));
    readonly remenberMeCheckBox:ElementFinder = element(by.css("#memory"));
    readonly tutFinanceLink:ElementFinder = element(by.xpath('(//a[@title="Финансы"])[1]'));
    readonly firstRadio:ElementFinder = element(by.cssContainingText("label", "Осталась на том же уровне"));
    readonly firstDDL:ElementFinder = element(by.xpath('//*[@id="select_currency_BYN"]/div/button'));
    readonly optionUSD:ElementFinder = element(by.cssContainingText("small", "Доллар США"));

    // readonly searchPopupIframe:ElementFinder = element(by.css(".topbar-burger topbar-more-active"));

    // readonly tutFlame:ElementFinder = element(by.cssContainingText("div", "170 дней за решеткой. Катерина Борисевич"));
}