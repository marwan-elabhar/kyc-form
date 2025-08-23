# React + Vite Form Project

This is a small test project built with [React](https://react.dev/) and [Vite](https://vitejs.dev/).  
It includes a form with validation, local storage support, dark mode toggle, and Tailwind CSS for styling.  
Deployed on [Netlify](https://www.netlify.com/).

---

## 🚀 Tech Stack
- [React](https://react.dev/) – UI framework
- [Vite](https://vitejs.dev/) – Fast build tool
- [Tailwind CSS](https://tailwindcss.com/) – Styling
- [Netlify](https://www.netlify.com/) – Deployment

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


---

## ▶️ Run the App

```bash
npm install
npm run dev

## 💡 Thought Process

When tackling this task, my aim was to create a simple, readable and elegant project.

**Folder Structure:**
- I created a fields folder inside the components folder, where I added all inputs components. This way, these inputs will be reusable.
- I added an ErrorMessage component, in order to ensure UI consistency instead of adding the error message inside each input.
- I added the Header and Toast component inside the components folder

- Inside the pages folder, I added the Form component


**Implementation overview:**

First, I thought about the form logic, how I will render the inputs dynamically depending on the JSON, which is through a simple mapper
that maps the input type to its component.

Second, I started thinking about the state management and the form validation for each input on change. I defined the initial state of the form.

Third, I thought about the validation on form submit and the success message which will appear after submission.

I considered implementing the form logic in a hook, but for the sake of simplicity I decided against that.

I saved the form data in localStorage to persist the values.


**Project Structure**

components/
    fields/
            TextFieldInput
            DropdownInput
            DatePickerInput
            CheckBoxInput
            RadioButtonInput    
     ErrorMessage
     Header
     Toast

pages/
    Form     


