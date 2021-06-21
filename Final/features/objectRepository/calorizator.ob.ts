import { by, element, ElementFinder } from "protractor";

export class CalorizatorRepository {

    readonly coffeeButton: ElementFinder = element(by.css("button#btn-nav-coffee"))
    readonly coffeeIframe: ElementFinder = element(by.xpath(`//iframe[@id="lightboxFrame"]`))
    readonly capuchRadioButton: ElementFinder = element(by.xpath(`//input[@value = "95"]`))
    readonly closeIframeButton: ElementFinder = element(by.xpath(`//*[@id="close"]`))
    readonly sorry: ElementFinder = element(by.cssContainingText("a", "Простите, я передумал"))

}  