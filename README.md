# BeyondChats Backend API

This is a Node.js backend application built as part of the
BeyondChats Full Stack Web Developer Intern assignment.

The backend provides REST APIs to store and manage articles
scraped from the BeyondChats blogs section.

## Features
- Scrapes articles from BeyondChats blogs
- Stores articles in database
- REST API for articles (CRUD operations)
- Deployed and accessible via live URL

## Technologies Used
- Node.js
- Express.js
- JavaScript
- MongoDB / JSON storage

## API Endpoints

GET /articles  
Fetch all articles

POST /articles  
Add a new article

PUT /articles/:id  
Update an article

DELETE /articles/:id  
Delete an article

## How to Run Locally

1. Install dependencies
   npm install

2. Start server
   node index.js

The server runs on:
http://localhost:5000

## Live API
(https://beyondchats-backend-2.onrender.com/articles)

