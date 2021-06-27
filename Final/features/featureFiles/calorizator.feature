@smoke
Feature: Iframe feature for exam

    Test for exam purposes only
    
   
    #  @smoke
    Scenario: I check default selection (Iframe)
    Given I am on Calorizator page
    When  Click Coffee button
    Then I see default selection

   
    #  @smoke
    Scenario Outline: I can select coffee (Iframe)
    Given I am on Calorizator page
    When  Click Coffee button
    Then I select "<coffee>"
    Examples:
        | coffee | 
        |Кофейный напиток | 
        |Эспрессо|
        |Американо|
        |Латте|
        |Латте Гранде|
        |Kopi Luwak|
        
   
    # @smoke
    Scenario: I analize my recipe
    Given I am on Calorizator page
    When  I go to analizer and send my recipe
    Then I see correct food energy value

