# 🍿 Netflix UI Clone & Movie Streaming Portal (React 18 + Vite + Firebase Auth + TMDB API)

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Firebase%20Auth-039BE5?style=for-the-badge&logo=Firebase&logoColor=white" alt="Firebase Auth" />
  <img src="https://img.shields.io/badge/TMDB%20API-01B4E4?style=for-the-badge&logo=themoviedatabase&logoColor=white" alt="TMDB" />
  <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
</p>

A full-featured, responsive **Netflix Web Application Clone** built with modern **React 18 and Vite**. It integrates **Firebase Authentication** for secure user login/signup, dynamically fetches real-time movie catalogs and category rows using the **TMDB (The Movie Database) REST API**, and features a dedicated video **Player Page** for playing embedded movie trailers with authentic cinema-like dark mode styling.

---

## ✨ Key Features & Capabilities

* **🔐 Firebase Authentication & User Sessions:** Real-time user signup, login, and secure protected routes using `firebase` Auth and `react-firebase-hooks`.
* **🎬 Dynamic TMDB API Integration:** Real-time fetching and categorization of movies including *Trending Now, Top Rated, Action, Comedy, Horror, and Netflix Originals*.
* **🎥 Interactive Video Player (`/player/:id`):** Click on any movie card or title slider to dynamically route to the dedicated video player screen and stream embedded YouTube trailers.
* **🌑 Authentic Dark-Mode UI/UX:** Pixel-perfect recreation of Netflix's signature dark aesthetic, featuring transparent gradient navbars, smooth hover scaling transitions, and interactive title cards (`TitleCards.jsx`).
* **🔔 Real-Time Toast Notifications:** Instant user feedback for login state changes and errors powered by `react-toastify`.
* **⚡ Ultra-Fast Build & HMR:** Powered by **Vite** for lightning-fast module bundling and instant Hot Module Replacement during development.

---

## 🖼️ Application Screenshots & UI Highlights

*(Note: Add your actual application screenshots below to showcase your UI directly on GitHub!)*

| 🏠 Home Page & Hero Banner | 🔐 Firebase Login & Signup Page |
| :---: | :---: |
| `<img src="https://via.placeholder.com/600x350?text=Netflix+Home+Page+Screenshot" width="100%"/>` | `<img src="https://via.placeholder.com/600x350?text=Firebase+Login+Screenshot" width="100%"/>` |

| 🎬 Movie Category Carousels (`TitleCards`) | 🎥 Video Trailer Player Page (`/player`) |
| :---: | :---: |
| `<img src="https://via.placeholder.com/600x350?text=Title+Cards+Carousel+Screenshot" width="100%"/>` | `<img src="https://via.placeholder.com/600x350?text=Video+Player+Screenshot" width="100%"/>` |

---

## 🛠️ Technology Stack & Dependencies

### **Frontend Framework & Build Tool**
* **React 18:** Modern functional components, hooks (`useState`, `useEffect`), and component composition
* **Vite:** Next-generation frontend build tool with instant dev server startup
* **React Router Dom v6:** Client-side URL routing (`Home`, `Login`, `Player`)

### **Backend Services & APIs**
* **Firebase Authentication & Firestore:** Cloud user management and state persistence (`firebase.js`)
* **TMDB REST API:** Dynamic real-time movie metadata, posters, backdrops, and trailer IDs
* **React Toastify:** Sleek alert notifications

---

## 📂 System Architecture & Folder Structure

```text
Netflix-Clone-using-React/
│
├── public/                 # Static assets & icons
│
├── src/
│   ├── assets/             # Images, logos, and local graphics
│   ├── components/         # Reusable UI components
│   │   ├── Navbar/         # Top transparent header with profile menu
│   │   ├── TitleCards/     # Horizontal movie sliders fetching TMDB data
│   │   └── Footer/         # Footer navigation and copyright info
│   │
│   ├── pages/              # Application Route Pages
│   │   ├── Home/           # Hero banner & categorized title rows
│   │   ├── Login/          # Firebase email/password login & signup form
│   │   └── Player/         # Dynamic iframe trailer player screen
│   │
│   ├── firebase.js         # Firebase SDK initialization & Auth config
│   ├── App.jsx             # Main routing wrapper & Auth state observer
│   ├── main.jsx            # React root DOM rendering
│   └── index.css           # Global dark mode styling & utility classes
│
├── package.json            # Project dependencies & build scripts
└── vite.config.js          # Vite configuration & React plugin setup
```

---

## 🚀 Installation & Local Setup Instructions

### **Prerequisites**
Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed, along with a free [TMDB API Key](https://www.themoviedb.org/settings/api) and a [Firebase Project](https://console.firebase.google.com/).

### **1. Clone the repository**
```bash
git clone https://github.com/PrajapatiPankaj1/Netflix-Clone-using-React.git
cd Netflix-Clone-using-React
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables (`.env`)**
Create a `.env` file inside the root directory and add your Firebase and TMDB configuration:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### **4. Start Local Development Server**
```bash
npm run dev
```
*(The React Vite application will spin up at `http://localhost:5173`)*

---

## 👨‍💻 Author & Contact

**Pankaj Prajapati**
* 🌐 GitHub: [@PrajapatiPankaj1](https://github.com/PrajapatiPankaj1)
* 💼 LinkedIn: [Pankaj Prajapati](https://linkedin.com/in/pankaj-prajapati1)
* 📧 Email: `pankajprajapati9764@gmail.com`

---
*⭐️ If you enjoyed this Netflix clone or found the architecture helpful, please give it a star!*
