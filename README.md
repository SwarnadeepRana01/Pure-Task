✨ Pure Task (Node.js + MongoDB Atlas)

A minimal CRUD API for managing daily tasks, built with Node.js, Express, and MongoDB Atlas.
Tested using Postman for smooth API interactions.

⚙️ Setup
npm install
node app.js


💡 Ensure your MongoDB Atlas connection string is correctly set in your config or main file.

🧭 API Endpoints
Method	Endpoint	Description
GET	/api/v1/tasks	Fetch all tasks
POST	/api/v1/tasks	Add a new task
GET	/api/v1/tasks/:id	Get a task by ID
PATCH	/api/v1/tasks/:id	Update an existing task
DELETE	/api/v1/tasks/:id	Remove a task
🧰 Tech Stack

🟢 Node.js

⚡ Express.js

🍃 MongoDB Atlas

📬 Postman

💻 Developer Note

This project demonstrates the basics of connecting a backend app with a cloud MongoDB database and testing CRUD routes via Postman.