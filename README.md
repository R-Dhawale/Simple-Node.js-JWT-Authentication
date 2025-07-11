# Simple Node.js JWT Authentication Example

This project is a minimal authentication backend and frontend using **Node.js**, **Express**, and **JWT**. It demonstrates user signup, signin, and protected user info retrieval, with a clean, professional HTML/CSS frontend.

## Features

- User Signup and Signin (in-memory storage)
- JWT-based authentication
- Protected `/me` endpoint
- Professional, responsive frontend using vanilla HTML/CSS
- No database required (for demo purposes)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install express jsonwebtoken
   ```

3. **Run the server:**
   ```bash
   node index.js
   ```

4. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── index.js              # Express backend with JWT auth
├── public/
│   ├── index.html        # Frontend authentication page
│   └── style.css         # Professional CSS styling
```

## Usage

- **Sign Up:** Enter a username and password, then click "Sign Up".
- **Sign In:** Enter your credentials and click "Sign In" to receive a JWT.
- **User Info:** After signing in, your username will be displayed.
- **Logout:** Click "Logout" to remove your token.

## Notes

- **Passwords are stored in plain text** for demonstration only. Do NOT use this in production.
- **No database**: All users are stored in memory and will be lost when the server restarts.
- **JWT Secret** is hardcoded for simplicity.

## License

MIT

---

**Made for learning and demonstration purposes.**
