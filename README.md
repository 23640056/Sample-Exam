# Flask Backend Architecture for Web Page and Study Plan Backup <!--Task 6-->
<!--Heading #-->
This Flask backend architecture serves as a foundation for hosting the web page and provides functionality for backing up the study plan in a database. Although the actual implementation of the database and functionality is not included here, this README.md file outlines the architecture, database schema, routes, HTTP methods served, and the interaction with the web page's functionality.

## Database Schema <!--Subheading ##-->
The database schema is designed to store the study plan data. It can include the following tables:

Users: Stores information about the users of the web page, such as their usernames and passwords.

StudyPlan: Represents the study plan information and can include fields like plan ID, user ID (foreign key to Users table), plan title, description, tasks, and timestamps for creation and last update.

## Routes and HTTP Methods
The Flask backend exposes the following routes to interact with the web page's functionality:

**User Registration** <!--Bold text using **-->
Route: /register
HTTP Method: POST
Description: Allows users to register by sending a POST request with the required user information.

**User Login**
Route: /login
HTTP Method: POST
Description: Handles user login by verifying the provided credentials through a POST request.

**Study Plan Creation**
Route: /studyplan/create
HTTP Method: POST
Description: Enables users to create a new study plan by sending a POST request with the required plan details.

**Study Plan Retrieval**
Route: /studyplan/<plan_id>
HTTP Method: GET
Description: Retrieves a specific study plan identified by the plan_id parameter through a GET request.

**Study Plan Update**
Route: /studyplan/<plan_id>/update
HTTP Method: PUT
Description: Allows users to update an existing study plan by sending a PUT request with the updated plan details.

**Study Plan Deletion**
Route: /studyplan/<plan_id>/delete
HTTP Method: DELETE
Description: Enables users to delete a study plan identified by the plan_id parameter through a DELETE request.

## Interaction with Web Page Functionality
The Flask backend interacts with the web page's functionality through the defined routes. The web page can make HTTP requests to these routes to perform various actions, such as user registration, login, study plan creation, retrieval, update, and deletion. The backend validates the requests, handles the corresponding database operations, and provides appropriate responses to the web page.