# thoughts.io

thoughts.io is a social media simulator designed to demonstrate cyberbullying
detection and moderation workflows. the project focuses on ethical content
moderation rather than engagement-driven social networking features.
it simulates a twitter / reddit-like platform where users can post thoughts,
reply to posts, and where replies can be analyzed by a machine learning model
for harmful or abusive content.

---

## features

- user signup and login with multiple users
- create posts and threaded replies
- admin dashboard for viewing flagged replies and moderation alerts

---

## installation and setup

### frontend

1. navigate to the client folder
2. install dependencies
3. start the dev server
   ```bash
   cd client
   npm install
   npm run dev

### backend

1. navigate to server folder
2. install dependencies ( local mongodb connection for now )
3. start the backend server
   ```bash
   cd server
   npm install
   npm run dev
   port=5000
   mongo_uri=your_mongodb_connection_string
