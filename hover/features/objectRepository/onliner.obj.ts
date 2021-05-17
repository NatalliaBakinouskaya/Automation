import { by, element, ElementFinder } from "protractor";

export class OnlinerRepository {
    readonly onlinerBaracholkaLink:ElementFinder = element(by.xpath('//span[@class="b-main-navigation__text"]/parent::a[@href ="https://ab.onliner.by"]'));
    // readonly baraholkaMinskLink:ElementFinder = element(by.xpath('//a[@href="https://ab.onliner.by/city/minsk"]/child::span[contains(text(), "Минск")]'));
    readonly baraholkaMahiliouLink:ElementFinder = element(by.xpath('//a[@href="https://ab.onliner.by/city/mogilev"]/child::span[contains(text(), "Могилев")]'));
    readonly baraholkaHomelLink:ElementFinder = element(by.xpath('//a[@href="https://ab.onliner.by/city/gomel3"]/child::span[contains(text(), "Гомель")]'));
    
}