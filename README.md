# 🌐 Abhishek's Portfolio Website — React.js

A modern, fully responsive **personal portfolio website** built with **React.js**, **Styled Components**, and **Vite**. This website showcases my skills, projects, services, and provides a way to get in touch — all wrapped in a clean, professional design with smooth navigation and interactive elements.

I built this portfolio to have a centralized online presence that reflects my work as a Full Stack Developer. It's more than just a static page — it uses React Router for multi-page navigation, context API with reducers for state management, and Styled Components for a consistent, themeable design system.

---

## ✨ Features

- **🏠 Home Page** — Hero section with personal introduction, profile image, and dynamic text
- **👤 About Page** — Detailed overview of my background as a Full Stack Developer with relevant imagery
- **🛠️ Services Page** — Breakdown of technical services and expertise I offer
- **💼 Projects Page** — Comprehensive showcase of my portfolio projects with descriptions and tech stacks, powered by Swiper.js for smooth carousel navigation
- **📬 Contact Page** — Get in touch form and contact details
- **🎓 Education Section** — Academic qualifications and certifications
- **💡 Skills Section** — Technical skills visualization with categorized skill tags
- **🔝 Go to Top Button** — Smooth scroll-to-top button for better UX
- **🦶 Footer** — Social links and copyright information
- **⚡ Fast Development** — Powered by Vite for instant HMR and lightning-fast builds
- **📱 Fully Responsive** — Mobile-first design with breakpoints at 768px (mobile) and 1280px (tablet)
- **🎨 Theme System** — Centralized theme with Styled Components' `ThemeProvider`
- **🌐 Deployed on Netlify** — Production-ready with Netlify configuration

---

## 🏗️ Architecture

```
Portfolio-Website-Using-React-JS/
├── index.html                # Entry HTML with favicons, Google Fonts, Font Awesome
├── vite.config.js            # Vite configuration with React plugin
├── netlify.toml              # Netlify build & deploy settings
├── package.json              # Dependencies and scripts
├── public/                   # Static assets
└── src/
    ├── main.jsx              # React DOM entry point with AppProvider
    ├── App.jsx               # Root component with Router, Theme, and Routes
    ├── contex.jsx            # React Context with useReducer for page state
    ├── reducer.jsx           # Reducer for HOME_UPDATE and ABOUT_UPDATE actions
    ├── GlobalStyle.js        # Global CSS reset & base styles (Styled Components)
    ├── index.css             # Minimal root CSS
    ├── Hooks/                # Custom React hooks
    ├── Styles/               # Styled Component style definitions
    ├── assets/               # Images and media files
    └── components/
        ├── Home.jsx          # Home page wrapper
        ├── Hero.jsx          # Hero section with image and intro text
        ├── About.jsx         # About page content
        ├── IntoBox.jsx       # Reusable intro/hero box component
        ├── Services.jsx      # Services listing page
        ├── Project.jsx       # Projects showcase with details
        ├── Contact.jsx       # Contact form and information
        ├── Education.jsx     # Education & qualifications section
        ├── Skills.jsx        # Technical skills display
        ├── Navbar.jsx        # Navigation bar wrapper
        ├── Nav2.jsx          # Full navigation implementation with mobile menu
        ├── Footer.jsx        # Footer with social links
        ├── GoTotop.jsx       # Scroll-to-top floating button
        └── Error.jsx         # 404 error page
```

---

## 🛠️ Tech Stack

| Layer            | Technology                                    |
| ---------------- | --------------------------------------------- |
| **Framework**    | React 18                                      |
| **Build Tool**   | Vite 5                                        |
| **Styling**      | Styled Components 6 + Global Styles           |
| **Routing**      | React Router DOM v6                           |
| **State Mgmt**   | React Context API + `useReducer`              |
| **Icons**        | React Icons + Font Awesome 6                  |
| **Carousel**     | Swiper.js 11                                  |
| **Typography**   | Google Fonts (Quicksand)                      |
| **Deployment**   | Netlify (auto-build from `dist/`)             |
| **Linting**      | ESLint with React & React Hooks plugins       |

---

## 🎨 Theme Configuration

The app uses a centralized theme via Styled Components' `ThemeProvider`:

```javascript
const theme = {
  colors: {
    heading: "#0EA5E9",     // Sky blue headings
    text: "#291105",        // Dark brown body text
    white: "#fff",
    black: "#000",
    bg: "#F8EDFF",          // Light purple background
    footer_bg: "#22092C",   // Deep purple footer
    btn: "#4E4FEB",         // Indigo buttons
    border: "rgba(98,84,243,0.5)",
    hr: "#fff",
  },
  media: {
    mobile: "768px",
    tab: "1280px",
  },
};
```

---

## 🗺️ Page Routes

| Route        | Component   | Description                    |
| ------------ | ----------- | ------------------------------ |
| `/`          | `Home`      | Landing page with hero section |
| `/about`     | `About`     | About me page                  |
| `/projects`  | `Project`   | Project showcase               |
| `/service`   | `Services`  | Services I offer               |
| `/contact`   | `Contact`   | Contact information & form     |
| `*`          | `Error`     | 404 page for unknown routes    |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/Portfolio-Website-Using-React-JS.git
   cd Portfolio-Website-Using-React-JS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```
   Output is generated in the `dist/` directory.

5. **Preview the production build**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

This project is configured for **Netlify** deployment:

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Auto Deploy:** Push to the main branch triggers automatic deployment

The `netlify.toml` file is pre-configured with the correct build settings.

---

## 📦 State Management

The app uses **React Context** with `useReducer` for managing page-level state:

- **`HOME_UPDATE`** action — Sets the hero section data for the Home page (name, image, top/bottom text)
- **`ABOUT_UPDATE`** action — Sets the hero section data for the About page
- **`useGlobalContext()`** — Custom hook to access the global state from any component

This pattern keeps the component tree clean while allowing any page to update the shared hero section dynamically.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/dark-mode`)
3. Commit your changes (`git commit -m 'Add dark mode toggle'`)
4. Push to the branch (`git push origin feature/dark-mode`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available for learning and portfolio purposes.
