@onliner_2
Feature: Header Feature 

    Feature for testing Header
    Scenario: I check National bank exchange rate on Onliner
        Given I am on Onliner page
        When I click Exchange link
        Then I see Euro exchange rate

    Scenario: I check weather on Onliner
        Given I am on Onliner page
        When I click Weather link
        And I click Vilnius link
        Then I see the weather in Vilnius today


        
