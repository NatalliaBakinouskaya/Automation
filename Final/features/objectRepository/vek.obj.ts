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
    readonly foundInCatalog: ElementFinder = element(by.cssContainingText("span", "Найден"));
    readonly repareReturnLink: ElementFinder = element(by.cssContainingText("a", "Замена и возврат товара"));
    readonly submitRequestButton: ElementFinder = element(by.cssContainingText("a", "Оставить заявку"));
    readonly fillTheFormButton: ElementFinder = element(by.cssContainingText("button", "Заполнить форму"));
    readonly noButton1: ElementFinder = element(by.xpath(`(//span[contains(text(), "Нет")]/parent::label)[1]`));
    readonly noButton2: ElementFinder = element(by.xpath(`(//span[contains(text(), "Нет")]/parent::label)[2]`));
    readonly radioOtherButton: ElementFinder = element(by.cssContainingText("span", "Beko/Grundik"));
    readonly noButton3: ElementFinder = element(by.xpath(`(//span[contains(text(), "Нет")]/parent::label)[3]`));
    readonly forwardButton1: ElementFinder = element(by.xpath(`(//button[text() = "Вперёд"])[5]`));
    readonly forwardButton2: ElementFinder = element(by.xpath(`(//button[text() = "Вперёд"])[39]`));
    readonly cartIcon: ElementFinder = element(by.xpath(`//span[text() = "Корзина"]/preceding-sibling::*/child::span`));
    readonly elseButton1: ElementFinder = element(by.xpath(`(//button[text() = "Еще"])[1]`));
    readonly pickupPageLink1: ElementFinder = element(by.xpath(`(//a[text() = "Самовывоз"])[1]`));
    readonly pickupPoint: ElementFinder = element(by.xpath(`(//ymaps[@class ="ymaps-2-1-78-placemark__content"])[1]`));
    readonly closeButton: ElementFinder = element(by.css("ymaps.ymaps-2-1-78-balloon__close-button"));
    readonly mapMinusButton: ElementFinder = element(by.css("ymaps.ymaps-2-1-78-zoom__minus.ymaps-2-1-78-zoom__button.ymaps-2-1-78-float-button.ymaps-2-1-78-user-selection-none"));


    
    

    
}