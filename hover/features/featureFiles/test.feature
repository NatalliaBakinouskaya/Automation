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

    @smoke 
    Scenario: Small tests + hover
    Given I am on Onliner page
    When  Mouse over Baracholka
    Then I see City

    @smoke 
    Scenario: Small tests + hover
    Given I am on Onliner page
    When  Mouse over Baracholka
    Then I see table
        | CityLink | Cityname |
        | //a[@href="https://ab.onliner.by/city/minsk"]/child::span[contains(text(), "Минск")]| Minsk |
        | //a[@href="https://ab.onliner.by/city/mogilev"]/child::span[contains(text(), "Могилев")]| Mahiliou |
        | //a[@href="https://ab.onliner.by/city/gomel"]/child::span[contains(text(), "Гомель")]| Homel |
       
           