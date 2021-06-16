import { by, element, ElementFinder } from "protractor";

export class VekRepository {
    readonly Searchelement :any;
    readonly vekHomeCityButton: ElementFinder = element(by.css("button.styles_localityBtn__3_asA"))
    readonly vekHomeCityInput: ElementFinder = element(by.css("input.style_inputStyle__1dvyw"))
    readonly vekHomeCitySave: ElementFinder = element(by.xpath("//button[contains(text(), 'Сохранить')]"))
    readonly offersLink: ElementFinder = element(by.xpath("(//*[contains(text(), 'Скидки, суперцены')])[1]"))
    readonly productItem: ElementFinder = element(by.xpath(`(//div[@class = "style_rootProduct__UjCzM style_product__irNOY"])[1]`))
    readonly smartPhoneHeader: ElementFinder = element(by.xpath("//h1[contains(text(), 'Смартфоны')]"))
    readonly AddToCart: ElementFinder = element(by.xpath(`(//button[contains(text(), "В корзину")])[1]`));
    readonly GoToCartButton: ElementFinder = element(by.cssContainingText(".headerCartBox", "Корзина"));
    readonly CheckoutButton: ElementFinder = element(by.cssContainingText("span", "Оформить заказ"));
    readonly SelectShippingRadio_1: ElementFinder = element(by.xpath(`//input[@value="courier"]`));
    readonly SelectShippingRadio_2: ElementFinder = element(by.xpath(`//input[@value="self"]`));
    readonly LabelShippingRadio_2: ElementFinder = element(by.xpath(`//*[@id="delivery_self"]`));
    // readonly onlinerBaracholkaLink:ElementFinder = element(by.xpath('//span[@class="b-main-navigation__text"]/parent::a[@href ="https://ab.onliner.by"]'));
    // readonly baraholkaMinskLink:ElementFinder = element(by.xpath('//a[@href="https://ab.onliner.by/city/minsk"]/child::span[contains(text(), "Минск")]'));
    // readonly baraholkaMahiliouLink:ElementFinder = element(by.xpath('//a[@href="https://ab.onliner.by/city/mogilev"]/child::span[contains(text(), "Могилев")]'));
    // readonly baraholkaHomelLink:ElementFinder = element(by.xpath('//a[@href="https://ab.onliner.by/city/gomel"]/child::span[contains(text(), "Гомель")]'));

    // readonly searchField:ElementFinder = element(by.css("input.fast-search__input"))
    // readonly searchIphone:ElementFinder = element(by.cssContainingText(".product__title-link", "Смартфон Apple iPhone 11 128GB Dual SIM (фиолетовый)"));
    // readonly catalogIframe:ElementFinder = element(by.css("iframe.modal-iframe"))
}