@onliner
Feature: Onliner feature    

    Feature for testing Onliner Catalog
    Scenario: I'm trying to open onliner catalog
    Given I am on Onliner page
    When I click Catalog link
    Then I see Catalog


    Scenario: I'm trying to find lapata in onliner catalog
    Given I am on Onliner-Catalog page
    When I'm looking for lapata
    Then I see it in Catalog
    