Feature: Reveal Text

Scenario: User should be able to reveal the text by clicking on Start button
Given I have accessed the application https://the-internet.herokuapp.com/dynamic_loading/1
When I click on Start button
Then the text: Hello World! should be revealed