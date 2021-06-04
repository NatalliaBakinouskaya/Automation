# @smoke
Feature: Training

    Test for training purposes only

    # @smoke 
    Scenario: Iframe
    Given I am on Onliner page
    When  I search "iPhone 11 128GB Dual SIM (фиолетовый)" in catalog
    Then I see element
        
    @smoke
    Scenario: Get request
    Given I perform Get request
    When  I perform Post request
    Then I put response to console output
           