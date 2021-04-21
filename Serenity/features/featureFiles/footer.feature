# @onliner_2
Feature: Footer Feature

    Feature for testing Footer
    Scenario: I check all linsks are present
        Given I am on Onliner page
        When I click company
        Then I see companyUrl
        
        # When I click <link>
        # Then I see <linked_url>
        # Examples:
        #     | link | linked_url |
        #     | company  | "https://blog.onliner.by/about"  |
        #     | contacts  | "https://people.onliner.by/contacts"  |



