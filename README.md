# 🎵 Light & Sound Sanctuary — Frontend

A modern **Angular 17 single-page application** for discovering, managing, and experiencing healing sound sanctuaries.

Built with **Angular 17**, **TypeScript**, **SCSS**, **RxJS**, and **Leaflet**.

---

## ✨ Overview

**Light & Sound Sanctuary** is a wellness-focused web application where users can explore sanctuary locations on an interactive map, access healing sound content, track their mindfulness journey, and manage their personal wellness profile.

The frontend is built as a **single-page application (SPA)** that communicates with a microservices backend through a centralized API Gateway.

---

## 🏗️ Architecture

```text
Angular SPA (localhost:4200)
        |
        v
API Gateway (localhost:8080)
JWT Validation + Request Routing
        |
        |----> User Service : 8082
        |
        |----> Media Service : 8083
        |
        |----> Beacon Service : 8081
        |
        |----> Notification Service : 8084
        |
        |----> Sanctuary Map Service : 8085
```

---

## 🧩 Application Modules

| Module | Route | Responsibility |
|---|---|---|
| `LandingModule` | `/` | Public landing page |
| `LoginComponent` | `/login`, `/signup` | User authentication forms |
| `CallbackComponent` | `/oauth-success` | Google OAuth2 callback handler |
| `DashboardComponent` | `/dashboard` | Main authenticated user view |

---

## 🚀 Key Features

- User registration and login with form validation
- Google OAuth2 login support
- JWT-based authentication with automatic token attachment
- Interactive sanctuary map using Leaflet
- Meditation timer for guided sessions
- Mood tracker for daily emotional logging
- Personal journal for reflections
- Curated sound journey and audio library
- Daily affirmation display
- Mindfulness statistics overview
- Favourites management
- User settings panel
- Collapsible sidebar dashboard layout

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 17 |
| Language | TypeScript 5.2 |
| Styling | SCSS |
| Maps | Leaflet 1.9 |
| Auth | JWT + Google OAuth2 |
| HTTP | Angular HttpClient |
| Reactive | RxJS 7.8 |
| Build Tool | Angular CLI 17 |

---

## 📁 Project Structure

```text
lightandsanctuary-front-end/
│
└── src/
    └── app/
        │
        ├── landing/                # Public landing page
        │   ├── login/              # Login and signup forms
        │   └── callback/           # OAuth2 callback handler
        │
        ├── dashboard/              # Main authenticated view
        │   ├── meditation-timer/
        │   ├── mood-tracker/
        │   ├── journal/
        │   ├── sound-journey/
        │   ├── daily-affirmation/
        │   ├── favourites/
        │   ├── mindfullness-stat/
        │   └── settings/
        │
        ├── santuary-map/           # Leaflet interactive map
        ├── beacon/                 # Sanctuary beacon markers
        ├── interceptors/           # Auth interceptor (JWT attachment)
        ├── shared/                 # Shared utilities
        └── assets/
            └── images/
```

---

## ⚙️ Prerequisites

Make sure the following tools are installed:

- Node.js 18+
- Angular CLI 17

```bash
npm install -g @angular/cli@17
```

---

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/thahiranisha/Light-sound-sanctuary.git
cd Light-sound-sanctuary/front-end/lightandsanctuary-front-end
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Backend

Make sure the backend microservices are running before starting the frontend. See the [backend README](../../back-end/lightsoundsanctuary/README.md) for setup instructions.

The API Gateway must be running at:

```text
http://localhost:8080
```

### 4. Run the Development Server

```bash
npm start
```

Navigate to `http://localhost:4200`. The application reloads automatically on file changes.

---

## 🌐 API Proxy Configuration

All API requests from the frontend are proxied through `proxy.conf.json` to the backend gateway during development.

```json
{
  "/api":     { "target": "http://localhost:8080" },
  "/oauth2":  { "target": "http://localhost:8080" },
  "/login":   { "target": "http://localhost:8080" },
  "/logout":  { "target": "http://localhost:8080" }
}
```

To change the backend target URL, update the `target` values in `proxy.conf.json`.

---

## 🔐 Authentication

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/users/register` | Register a new user |
| `POST` | `/api/users/login` | Login and receive JWT token |
| `GET` | `/oauth2/authorization/google` | Start Google OAuth2 login |

- JWT tokens are stored in `localStorage`
- The `AuthInterceptor` automatically attaches `Authorization: Bearer <token>` to every outgoing HTTP request
- OAuth2 login completes at `/oauth-success` via the `CallbackComponent`

---

## 📍 Sanctuary Map

The interactive map is powered by **Leaflet** with **OpenStreetMap** tiles, centered on Sri Lanka.

- Fetches beacon locations from `/api/beacons`
- Displays clickable sanctuary markers
- Supports zoom, pan, and marker interaction

---

## 🎧 Sound Journey

The sound library fetches content from `/api/media/sounds` and displays it by category, allowing users to browse and play meditative audio content.

---

## 🏗️ Build for Production

```bash
npm run build
```

Output is written to `dist/front-end/`.

---

## 🧪 Run Unit Tests

```bash
npm test
```

Tests are executed via [Karma](https://karma-runner.github.io) and [Jasmine](https://jasmine.github.io).

---

## 📊 Project Status

| Feature | Status |
|---|---|
| User Registration & Login | ✅ Complete |
| Google OAuth2 Login | ✅ Complete |
| JWT Auth Interceptor | ✅ Complete |
| Sanctuary Map (Leaflet) | ✅ Complete |
| Sound Journey | ✅ Complete |
| Meditation Timer | 🔄 In Progress |
| Mood Tracker | 🔄 In Progress |
| Journal | 🔄 In Progress |
| Daily Affirmation | 🔄 In Progress |
| Mindfulness Stats | 🔄 In Progress |
| Favourites | 🔄 In Progress |
| Settings | 🔄 In Progress |
| Backend Integration | 🔄 In Progress |

---

## 🗺️ Future Enhancements

- Full backend integration for all dashboard features
- Sound playback with audio controls
- Animated meditation timer with breathing guides
- Mood history charts and analytics
- Push notification support
- Responsive mobile layout
- Progressive Web App (PWA) support
- Dark mode theme

---

## 👩‍💻 Author

**Thahira Nisha**  
Software Engineer

- GitHub: [thahiranisha](https://github.com/thahiranisha)
- LinkedIn: [Thahira Nisha](https://linkedin.com/in/thahira-nisha)

---

## 📄 License

This project is developed for academic and portfolio purposes.
