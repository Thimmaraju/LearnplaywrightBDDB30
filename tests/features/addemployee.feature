Feature: Verify Add Employee functionality

    Feature Description

    # Scenario: Verify Add employee with Mandatory Details

    #   Given User Launch the Application
    #   When User Enter username as "Admin" and Password as "admin123"
    #   And User clicks on login button
    #   Then User should be navigated to Dashboard page
    #   When User clicks on PIM button
    #   And  User clicks on Add employee sub menu
    #   And  User enter firstname as "Kavitha" and lastname "R"
    #   And user clicks on save button
    #   Then User will get successfully saved message

    Background: Navigate to Add employee 
        Given User Launch the Application
        When User Enter username as "Admin" and Password as "admin123"
        And User clicks on login button
        Then User should be navigated to Dashboard page
        When User clicks on PIM button
        And  User clicks on Add employee sub menu

    Scenario Outline: Verify Add employee with Mandatory Details
        And  User enter firstname as "<firstname>" and lastname "<lastname>"
        And user clicks on save button
        Then User will get successfully saved message
        Examples:
            | firstname | lastname |
            | yamuna    | T        |
            | Kavitha   | R        |
            | Vijay     | Kumar    |


    Scenario: Verify Add employee with Error Message Mandatory fileds
        And user clicks on save button
        Then User will get error Message for firstname and lastname
