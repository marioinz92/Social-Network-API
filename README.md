# Social-Network-API
Description
This is a RESTful API for a social network web application. The API allows users to register, create and update thoughts, react to thoughts, manage friend lists, and perform various other social network actions.

Table of Contents
Installation
Usage
API Endpoints
Authentication
Database
Testing
Error Handling
Contributing
License
Installation
To set up this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/social-network-api.git
Navigate to the project directory:

bash
Copy code
cd social-network-api
Install dependencies:

bash
Copy code
npm install
Configure environment variables:

Create a .env file in the root directory.
Define environment variables such as the MongoDB connection string, JWT secret key, and any other configuration variables.
Start the server:

bash
Copy code
npm start
The server should now be running on http://localhost:3000.

Usage
This API provides the following functionality:

User registration and authentication.
Creation, updating, and deletion of user profiles.
Posting, updating, and deleting thoughts.
Reacting to thoughts (e.g., liking, commenting).
Managing friend lists (adding/removing friends).
Retrieving user and thought data.
To use the API, you can send HTTP requests to the appropriate endpoints using a tool like Insomnia or Postman.

API Endpoints
Here are the main API endpoints:

User Routes:

POST /auth/register: Register a new user.
POST /auth/login: Log in and obtain an authentication token.
GET /users/:id: Get user profile by ID.
PUT /users/:id: Update user profile by ID.
DELETE /users/:id: Delete user profile by ID.
Thought Routes:

GET /thoughts: Get all thoughts.
GET /thoughts/:id: Get thought by ID.
POST /thoughts: Create a new thought.
PUT /thoughts/:id: Update thought by ID.
DELETE /thoughts/:id: Delete thought by ID.
Reaction Routes:

POST /thoughts/:id/reactions: Create a reaction to a thought.
DELETE /thoughts/:id/reactions/:reactionId: Delete a reaction to a thought.
Friend List Routes:

POST /users/:id/friends/:friendId: Add a friend to the user's friend list.
DELETE /users/:id/friends/:friendId: Remove a friend from the user's friend list.
For more detailed information on each endpoint and the expected request/response format, refer to the API Documentation.

Authentication
This API uses JSON Web Tokens (JWT) for authentication. To access protected routes, include the JWT token in the Authorization header of your requests:

makefile
Copy code
Authorization: Bearer YOUR_TOKEN_HERE
To obtain a token, you can use the /auth/login endpoint with valid login credentials.

Database
This API uses MongoDB as its database. Make sure to configure the MongoDB connection string in your environment variables.

Testing
To run tests for this project, use the following command:

bash
Copy code
npm test
This will execute the test suite and provide information on test coverage and results.

Error Handling
The API includes error handling for various scenarios. Error responses are returned in JSON format with informative error messages and status codes.

Contributing
Contributions to this project are welcome. If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Commit your changes and push them to your fork.
Submit a pull request with a clear description of your changes.
License
This project is licensed under the MIT License - see the LICENSE file for details.