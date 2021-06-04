import { by, element, ElementFinder } from "protractor";

export class OnlinerRepository {
    readonly onlinerBaracholkaLink:ElementFinder = element(by.xpath('//span[@class="b-main-navigation__text"]/parent::a[@href ="https://ab.onliner.by"]'));
    readonly baraholkaMinskLink:ElementFinder = element(by.xpath('//a[@href="https://ab.onliner.by/city/minsk"]/child::span[contains(text(), "Минск")]'));
    readonly baraholkaMahiliouLink:ElementFinder = element(by.xpath('//a[@href="https://ab.onliner.by/city/mogilev"]/child::span[contains(text(), "Могилев")]'));
    readonly baraholkaHomelLink:ElementFinder = element(by.xpath('//a[@href="https://ab.onliner.by/city/gomel"]/child::span[contains(text(), "Гомель")]'));

    readonly searchField:ElementFinder = element(by.css("input.fast-search__input"))
    readonly searchIphone:ElementFinder = element(by.cssContainingText(".product__title-link", "Смартфон Apple iPhone 11 128GB Dual SIM (фиолетовый)"));
    readonly catalogIframe:ElementFinder = element(by.css("iframe.modal-iframe"))
}