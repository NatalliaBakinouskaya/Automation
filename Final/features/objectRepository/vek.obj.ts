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
    readonly catalogSearchInput: ElementFinder = element(by.css("input#j-search"))
    readonly foundInCatalog: ElementFinder = element(by.cssContainingText("span", "Найдено"));

    
}