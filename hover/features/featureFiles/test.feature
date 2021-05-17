# @smoke
Feature: Test 

    Test for education purposes only
    # @smoke
    Scenario: Small tests + checkbox
    Given I am on Tut page
    When  I check "Разделы" on homePage
    Then I click "Почта" on homePage

    # @smoke
    Scenario: Small tests + radio
    Given I am on Tut page
    When  I check "Финансы" on homePage
    Then I select "Осталась на том же уровне" on tutFinancePage

    # @smoke
    Scenario: Small tests + DDL
    Given I am on Tut page
    When  I check "Финансы" on homePage
    Then I select "Конвертер валют_1" on tutFinancePage

    # @smoke
    Scenario: Small tests + hover
    Given I am on Onliner page
    When  Mouse over Baracholka
    Then I see MinskLink

    @smoke
    Scenario Outline: Small tests + hover
    Given I am on Onliner page
    When  Mouse over Baracholka
    Then I see "<cityLink>"

    Examples:
            | Input              |
            | Minsk              |
            # | Homel              |
            # | Mahiliou           |
           