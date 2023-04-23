# Feature: Todo App

## Background: The Todo App is opened

- Given the Todo App is opened

## Rule: Adding new Todos

### Scenario: Add a new Todo

- When the user enters a "new Todo" and enter key
- Then the "new Todo" is added to the list

### Scenario: Attempt to add an empty Todo

- When the user enters an empty Todo and clicks the Add button
- Then the Todo is not added to the list and "Not entered" message is displayed
