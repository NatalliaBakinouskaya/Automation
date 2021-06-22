@smoke
Feature: Final

    Test for exam purposes only
    
#     @smoke   
    Scenario Outline: I can find my City on 21vek (DDL)
    Given I am on 21 vek page
    When  I Click <Citylink> & enter city name
    Then I swith to "<city>" page
    Examples:
            | Citylink | city   |
            | Гомель     |г. Гомель  |
            # | Минск    | г. Минск |
            | Могилев    | г. Могилев |
            | Витебск    | г. Витебск |
            | аг. Париж    | аг. Париж|

#     @smoke
    
    Scenario: LI check if links are clicable and color on hover(hover)
    Given I am on 21 vek page
    Then  Link is clicable

            | link | 
            | "Оплата частями" |
            | "Бонусная программа"|
            | "г. Минск" |
            |"Еще"|
            
#     @smoke    
    Scenario Outline: I can find offers (checkboxes)
    Given I am on 21 vek page
    When  I click Offer link
    Then I check "<checkbox>"
    Then At least one product is present on the page
    Examples:
            | checkbox | 
            | Товары со скидкой   |
            | Товары с подарками   | 
            | Суперцена    | 
          
#     @smoke
    Scenario: I can select Shipping options(radio-buttons) 
    Given I am on 21 vek-smartphones page
    When  I add the first item to the cart
    Then I go to the cart
    Then I checkout
    Then I can select Shipping method


#     @smoke
    Scenario: I check default selection on Iframe
    Given I am on Calorizator page
    When  Click Coffee button
    Then I see default selection

   
#     @smoke
    Scenario Outline: I select coffee on Iframe
    Given I am on Calorizator page
    When  Click Coffee button
    Then I select "<coffee>"
    Examples:
        | coffee | 
        |Кофейный напиток | 
        |Эспрессо|
        |Американо|
        # |Каппучино|
        |Латте|
        |Латте Гранде|
        | Kopi Luwak |
        
#     @smoke 
    Scenario Outline: I search for goods in catalog
    Given I am on 21 vek page
    When I Search for <goods>
    Then I see number of items found > 1
    Examples:
        | goods | 
        |Лопата| 
        |Кирпич|
        |Цемент|
        |Сантехника|
        |Кукольный дом|
     

#     @smoke
    Scenario: I can complete return request (Switch between windows)
    Given I am on 21 vek page
    When  I navigate to repare-return page
    When I click Submit Request button
    Then I fill request form and return to 21 vek page

   
    # @smoke
    Scenario: I add items to cart and check qty on homepage 
    Given I am on 21 vek page
    When  I open category page and add items
    |category|url|
    |Холодильники|refrigerators|
    |Стиральные машины|washing_machines|
    |Телевизоры|tv|
    
    Then QTY is reflected on Home Page



