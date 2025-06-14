## Smart Recipe Generator
The Smart Recipe Generator is a full-stack web application that helps users generate recipes based on the ingredients they have at home. It uses AI to intelligently suggest recipe instructions and also allows users to save those recipes for future reference.

---

### Features

* Accepts ingredient input through a user-friendly React interface.
* Uses an AI model (accessed via OpenRouter) to generate complete recipes.
* Displays structured recipe output including:

  * Recipe name
  * List of ingredients
  * Step-by-step cooking instructions
* Includes a "heart" button to save generated recipes to the backend.
* Users can view a list of all previously saved recipes.
* Saved recipes are displayed cleanly, with clearly separated ingredients and instructions.
* Responsive, modern user interface using custom CSS.
* Organized folder structure for React components and styles.

---

### Tech Stack

* **Frontend**: React (Vite), Axios
* **Backend**: Laravel API
* **Database**: MySQL (or SQLite)
* **AI Integration**: OpenRouter API for recipe generation
* **Styling**: CSS Modules per component

---

### AI Usage

* The recipe generation is powered by an AI model through the OpenRouter API.
* Users provide ingredients, and the AI model is prompted to return a full recipe including preparation steps.
* The generated recipe is then displayed and optionally stored in the database for later use.

---
