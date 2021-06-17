# @smoke
Feature: Final

    Test for training purposes only

    # # @smoke 
    # Scenario: Iframe
    # Given I am on Onliner page
    # When  I search "iPhone 11 128GB Dual SIM (фиолетовый)" in catalog
    # Then I see element
        
    # # @smoke
    # Scenario: Get request
    # Given I perform Get request
    # When  I perform Post request
    # Then I put response to console output
    
#     @smoke
    Scenario Outline: I can find my City on 21vek (DDL)
    Given I am on 21 vek page
    When  I Click <Citylink> & enter city name
    Then I swith to "<city>" page
    Examples:
            | Citylink | city   |
            | Гомель     |г. Гомель  |
            | Минск    | г. Минск |
            | Могилев    | г. Могилев |
            | Витебск    | г. Витебск |
            | аг. Париж    | аг. Париж|

#     @smoke
    Scenario: Links are clicable
    Given I am on 21 vek page
    Then  Link is clicable

            | link | 
            | button.styles_localityBtn__3_asA|
            | a[href="/special_offers/partly_pay.html"]  |
            | a[href="/special_offers/bonus.html"]  |
#     @smoke    
    Scenario Outline: I can find offers (Checkboxes)
    Given I am on 21 vek page
    When  I click Offer link
    Then I check "<checkbox>"
    Then At least one product is present
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

    @smoke
    Scenario: I can test Iframes"
    Given I am on Calorizator page
    When  Click Coffee button
    Then I see default selection
   





