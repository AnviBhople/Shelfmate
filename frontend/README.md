# Shelfmate

 A personal reading tracker and book recommendation web app — built with React.js, Node.js, MongoDB and Booststrap5.

---

## What is Shelfmate?

Shelfmate helps you track every book you've read, are reading, or want to read — and recommends what to pick up next based on your taste. Built as a full-stack portfolio project by a CS student who loves books.

---

## Features

- **My Shelf** — Add, edit, and delete books with title, author, genre, status, and star rating
- **Status tracking** — Mark books as Read, Currently Reading, or Want to Read
- **Reading stats** — See total books, books read, and average rating at a glance
- **Smart recommendations** — Genre-based engine suggests books tailored to your shelf
- **Book search** — Autofill book details using the free Open Library API (no key needed)
- **Cover art** — Real book covers pulled automatically from Open Library
- **Filter & sort** — Filter shelf by status, sort by rating or date added
- **Responsive design** — Works on mobile, tablet, and desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Bootstrap 5 |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| External API | Open Library API |
| Auth | JWT (JSON Web Tokens) |
| Frontend hosting | Vercel (free) |
| Backend hosting | Render (free) |

---

## Project Structure

```
shelfmate/
│
├── shelfmate-frontend/         
│   ├── css/
│   │   └── style.css          
│   ├── js/
│   │   ├── app.js             
│   │   ├── api.js             
│   │   ├── shelf.js            
│   │   └── recommendations.js  
│   ├── pages/
│   │   ├── shelf.html          
│   │   ├── add-book.html       
│   │   └── recommendations.html
│   └── index.html              
│
└── shelfmate-backend/        
    ├── models/
    │   ├── Book.js             
    │   └── User.js             
    ├── routes/
    │   ├── books.js           
    │   ├── recommendations.js  
    │   └── auth.js            
    ├── middleware/
    │   └── auth.js            
    ├── .env                 
    ├── server.js              
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- A free [MongoDB Atlas](https://www.mongodb.com/atlas) account
- Git

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/shelfmate.git
cd shelfmate
```

### 2. Set up the backend

```bash
cd shelfmate-backend
npm install
```

Create a `.env` file in the `shelfmate-backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string_here
JWT_SECRET=pick_any_long_random_string_here
```

Start the backend server:

```bash
node server.js
# Server running at http://localhost:5000
```

### 3. Set up the frontend

Open `shelfmate-frontend/js/api.js` and make sure the base URL points to your local backend:

```js
const BASE_URL = 'http://localhost:5000/api';
```

Open `shelfmate-frontend/index.html` directly in your browser — no build step needed.

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Create a new account |
| POST | `/api/auth/login` | Login and get a JWT token |
| GET | `/api/books` | Get all books for the logged-in user |
| GET | `/api/books?status=read` | Filter books by status |
| POST | `/api/books` | Add a new book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |
| GET | `/api/recommendations` | Get recommendations based on your shelf |

All routes except `/api/auth/*` require a `Bearer` token in the `Authorization` header.

---

## How the Recommendation Engine Works

Shelfmate uses a tag-based recommendation system — no machine learning required.

1. Count how many books the user has per genre on their shelf
2. Find the user's top 2 genres by count
3. Return books from a curated dataset that match those genres and aren't already on the shelf
4. Show "Because you liked X genre" as the reason for each recommendation

Example: if your shelf has 4 Literary Fiction books and 2 Indian Writing books, recommendations will surface more Literary Fiction and Indian Writing titles first.

---

## Deployment

### Deploy backend to Render

1. Push `shelfmate-backend` to a GitHub repo
2. Go to [render.com](https://render.com) → New Web Service → connect your repo
3. Set environment variables (MONGO_URI, JWT_SECRET, PORT) in the Render dashboard
4. Deploy — you get a live URL like `https://shelfmate-api.onrender.com`

### Deploy frontend to Vercel

1. Update `BASE_URL` in `api.js` to your Render backend URL
2. Push `shelfmate-frontend` to a GitHub repo
3. Go to [vercel.com](https://vercel.com) → New Project → connect your repo
4. Click Deploy — done. Vercel auto-deploys on every `git push`

---

## External APIs Used

**Open Library API** — `openlibrary.org/api`  
- Search books by title: `https://openlibrary.org/search.json?title=...&limit=5`
- Get cover art: `https://covers.openlibrary.org/b/id/{coverId}-M.jpg`
- Completely free, no API key or account required

---

## Why I Built This

I'm a third-year Computer Science student interested in publishing and literature. Shelfmate is my attempt to combine both worlds — using the technical skills from my degree to build something in the space I actually care about. The recommendation engine is intentionally simple for now, but designed to be upgraded to a proper ML model as I learn more.

---
