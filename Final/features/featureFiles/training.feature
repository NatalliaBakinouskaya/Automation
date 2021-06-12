# @smoke
Feature: Training

    Test for training purposes only

    # @smoke 
    Scenario: Iframe
    Given I am on Onliner page
    When  I search "iPhone 11 128GB Dual SIM (фиолетовый)" in catalog
    Then I see element
        
    # @smoke
    Scenario: Get request
    Given I perform Get request
    When  I perform Post request
    Then I put response to console output
    
    @smoke
    Scenario Outline: I can find my Citys on 21vek
    Given I am on 21 vek page
    When  I Click <Citylink> & enter city name
    Then I swith to "<city>" page
    Examples:
            | Citylink | city   |
            | Гомель     |г. Гомель  |
            | Минск    | г. Минск |
            | Могилев    | г. Могилев |
            | аг. Париж    | аг. Париж|
           
    
    
