# College Xerox Shop Website (CampusPrint)

A modern, clean, and responsive web frontend for a College Xerox & Reprographics center built with **React**, **Vite**, and **Tailwind CSS**.

---

## Features Setup in Phase 1

- **Vite + React (JavaScript)**: Fast compilation, modern ES module bundling.
- **Tailwind CSS**: Custom styling with utility-first classes, customized color palette, and responsive design.
- **React Router (v6)**: Declarative routing with dedicated layouts.
- **Dedicated Portals**:
  - **Student Login Page** (`/student/login`): Clean roll number / college email authentication interface.
  - **Shop Owner / Operator Login Page** (`/owner/login`): Restricted access portal for photocopy shop operators and staff.
- **Organized Architecture**: Strict separation of concerns (components, layouts, pages, routes, ui).
- **Clean Scope**: No backend, database, payment gateway, or mock payment bypass logic included as requested.

---

## How to Start the Development Server

1. Open your terminal in the project root:
   ```bash
   cd d:\xerox-shop-prj
   ```

2. Start Vite development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Available Scripts

- `npm run dev`: Starts local Vite development server at `http://localhost:5173`
- `npm run build`: Builds production-ready static assets in `dist/`
- `npm run preview`: Previews the production build locally

