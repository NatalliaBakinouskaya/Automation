# @smoke
Feature: Footer Feature

    Feature for testing Footer
    Scenario: I check one link is present
        Given I am on Onliner page
        When I click company
        Then I see companyUrl
