# Engagement-Portal
THIS IS ENGAGEMENT PORTAL FOR MIT SDE 

Assignment 3 

Engagement Portal - Home Page 

Objective: 

Create the Home Page for an engagement portal using React.js. The page should be 
able to display posts, allow users to create new posts, and differentiate between 
different types of users (e.g., Admins, Users, Staff). 
You will be creating the front-end part of the portal with React, focusing on handling 
authentication, user roles, and displaying posts. The front-end should interact with a 
RESTful API (such as the one created in the Java/Spring Boot task) to fetch and display 
data. 
Topics to Cover: 
• React Basics: Functional components, JSX, props, and state. 
• React Router: Handling navigation between pages (if required). 
• State Management: Using useState and useEffect to manage application state 
and side effects (e.g., fetching posts from the API). 
• API Integration: Making API requests with axios and handling the response. 
• Conditional Rendering: Rendering different UI elements based on user roles or 
data status. 
• Form Handling: Creating and submitting forms in React. 
• Error Handling: Displaying error messages and handling failed API calls. 
• User Authentication: Using JWT tokens for user login and managing session 
state (e.g., storing token in localStorage). 
• Styling: Using react-bootstrap or plain CSS for a clean, responsive UI. 
Task 1: Set Up the React Project 
1. Create a new React project using create-react-app or any other setup method 
you prefer. 
2. Install the following dependencies (using npm or yarn): 
o axios (for making API requests) 
o react-router-dom (for routing) 
o react-bootstrap (optional, for UI components like buttons, modals, etc.) 
o react-icons (optional, for icons like edit, delete) 
Task 2: Home Page Layout (15 mins) 
Create a Home Page that includes the following elements: 
1. Post Feed: 
o Display all posts (retrieved from the API). 
o Each post should display: 
▪ Title (string) 
▪ Content (shortened, with a "Read more" option) 
▪ Status (either "Pending", "Approved", or "Rejected") 
▪ Author (username or name of the user who created the post) 
▪ Action buttons (only visible to Admins or Staff): 
▪ Approve/Reject Post (for Admins and Staff only) 
2. Create Post Button: 
o Display a button that allows users to open a form to create a new post. 
o The form should include fields for the title, content, and a submit button. 
When a post is created, it should be sent to the API with a status of 
Pending. 
3. User Authentication: 
o Check if the user is authenticated (JWT token should be stored in 
localStorage or cookies). 
o Display the username of the logged-in user. 
o Provide a Log out button that clears the session and redirects the user to 
the login page 
Task 3: Role-based Access Control 
Implement role-based access for different user types (Admin, Staff, User): 
1. Admin/Staff: 
o Admins and Staff should see all posts, including those with the status 
Pending, Approved, or Rejected. 
o Admins and Staff should also see buttons to approve or reject posts. 
2. User: 
o Regular users should only see posts with the status Approved. 
o Users should be able to create new posts, but only their own posts. 
3. Conditional Rendering: 
o Render different UI elements based on the user role: 
▪ If the user is an Admin or Staff, show the Approve/Reject buttons. 
▪ If the user is a regular User, only show the posts that are approved 
and allow post creation. 
▪ Ensure that the Create Post button and form are displayed for 
users who are authenticated. 
Task 4: API Integration 
1. Fetching Posts: 
o send a GET request to the API and fetch the list of posts. 
o Display posts in a card or list format. 
2. Create Post: 
o Use a POST request to send the new post data to the backend API when a 
user submits the "Create Post" form. 
o Ensure that the status of new posts is set to "Pending". 
3. Approve/Reject Post (for Admins and Staff): 
o When Admins or Staff click "Approve" or "Reject", send a POST request to 
update the post’s status via the API. 
Task 5: Styling and UI/UX  
1. UI Design: 
o Use react-bootstrap or plain CSS to create a user-friendly design. 
o Ensure that posts are easy to read and action buttons (like 
Approve/Reject) are clearly visible for Admins and Staff. 
o Provide feedback to users when actions are performed, such as: 
▪ "Post Created Successfully" (after creating a post). 
▪ "Post Approved/Rejected" (after performing approval/rejection). 
2. Responsive Design: 
o Ensure the page is mobile-friendly and adapts to different screen sizes 
(use media queries if needed). 
Task 6: Error Handling and Validation 
1. Error Handling: 
o Handle errors when fetching posts or submitting the form. Show 
appropriate error messages if the API request fails (e.g., network issues, 
server errors). 
2. Form Validation: 
o Validate the Create Post form fields (e.g., ensure that title and content are 
not empty before submitting). 
