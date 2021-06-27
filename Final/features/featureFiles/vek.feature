@smoke
Feature: All I know (ecxept Iframe & API) feature for exam


    Test for exam purposes only
    
    # @smoke   
    Scenario Outline: I can find my City on 21vek (DDL)
    Given I am on 21 vek page
    When  I Click <Citylink> & enter city name
    Then I swith to "<city>" page
    Examples:
            | Citylink | city   |
            | Гомель     |г. Гомель  |
            | Могилев    | г. Могилев |
            | Витебск    | г. Витебск |
            | аг. Париж    | аг. Париж|

    #  @smoke 
    Scenario: LI check if links are clicable and color on hover(hover)
    Given I am on 21 vek page
    Then  Link is clicable

            | link | 
            | "Оплата частями" |
            | "Бонусная программа"|
            | "г. Минск" |
            | "Еще" |
            
    # @smoke    
    Scenario Outline: I can find offers (checkboxes)
    Given I am on 21 vek page
    When  I click Offer link
    When I check "<checkbox>"
    Then At least one product is present on the page
    Examples:
            | checkbox | 
            | Товары со скидкой   |
            | Товары с подарками   | 
            | Суперцена    | 
          
    @smoke 
    Scenario: I can select Shipping options(radio-buttons) 
    Given I am on 21 vek-smartphones page
    When  I add the first item to the cart
    When I go to the cart
    When I checkout
    Then I can select Shipping method

        
    # @smoke 
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
     

    # @smoke
    Scenario: I can complete return-request (Switch between windows)
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
    
    Then QTY of items in Cart is reflected on Home Page

    # @smoke
    Scenario: I can find self-pikcup-points on the map(DDL)
    Given I am on 21 vek page
    When  I go to self-pickup page
    Then I see my pickup-point on the map

    | street |
    | Победителей|
    | Тростенецкая|
    | Уманская|
    | Кальварийская|
    | Ложинская |
    | Сурганова|
    

    

