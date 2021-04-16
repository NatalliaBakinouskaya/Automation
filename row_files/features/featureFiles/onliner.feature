
Feature: Onliner showcase

    Just little demo showcase
    @another_tag @debug
    Scenario Outline: Searching "<ItemShortcut>" in Header Fast Search results in "<ItemName>"

        Given I am on Onliner homepage
        When enter "<ItemShortcut>" in Search field
        Then I see "<ItemName>" item

        Examples:
            | ItemShortcut | ItemName                   |
            | i9-9900k     | Intel Core i9-9900K (BOX)  |
            | i9-10900k    | Intel Core i9-10900K (BOX) |
            | i7-9700k     | Intel Core i7-9700K (BOX)  |
            | i7-10700k    | Intel Core i7-10700K (BOX) |