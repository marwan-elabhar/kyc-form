# React + Vite Form Project

This is a small test project built with React and Vite.
It includes a form with validation, local storage support, a dark/light theme toggle, and Tailwind CSS styling.
Deployed on Netlify.

## Tech Stack
- React – UI framework
- Vite – Fast build tool
- Tailwind CSS – Styling
- Netlify – Deployment

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/marwan-elabhar/kyc-form.git
cd kyc-form
npm install
```

## Run the App

```bash
npm run dev
```

The app will be available at the URL printed in your terminal (typically http://localhost:5173).

## Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Thought Process

My goal was to keep the project simple, readable, and extensible:

### Folder Structure Decisions
- Created a `fields/` folder inside `components/` for all input components so they are reusable and consistent.
- Added an `ErrorMessage` component to centralize error UI rather than repeating markup in each input.
- Kept `Header` (theme toggle) and `Toast` (notifications) inside `components/` as global UI pieces.
- Placed the main page and form logic in `pages/Form.jsx` to keep the app straightforward for this small test.

### Implementation Overview
1. Dynamic fields: used a mapper to render inputs based on JSON config (type → component).
2. State & validation: managed with React hooks; on-change validation and a submit-time check.
3. Feedback: success toast on submit; errors shown inline via `ErrorMessage`.
4. Persistence: stored form data in `localStorage` to preserve progress on refresh.
5. Theming: Tailwind `dark` mode via a header toggle that adds/removes the `dark` class on `<html>`.

## Project Structure

```plaintext
src/
  components/
    fields/
      TextFieldInput.jsx
      DropdownInput.jsx
      DatePickerInput.jsx
      CheckBoxInput.jsx
      RadioButtonInput.jsx
    ErrorMessage.jsx
    Header.jsx
    Toast.jsx
  pages/
    Form.jsx
  App.jsx
  main.jsx
  index.css
```

## Tailwind & Dark Mode

- Tailwind configured with `darkMode: "class"` in `tailwind.config.js`.
- The header toggle writes the theme to `localStorage` and toggles the `dark` class on `document.documentElement`.
- Inputs/buttons use `dark:` variants for background, text, borders, and focus rings.
