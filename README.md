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
* **Database**: MySQL
* **AI Integration**: OpenRouter API for recipe generation
* **Styling**: CSS Modules per component

---

### AI Usage

* The recipe generation is powered by an AI model through the OpenRouter API.

* Users provide ingredients, and the AI model is prompted to return a full recipe including preparation steps.
* The generated recipe is then displayed and optionally stored in the database for later use.

---
![Screenshot 2025-06-14 165757](https://github.com/user-attachments/assets/43bbdcc4-55e5-4935-9e8a-c18f21c282a7)

![Screenshot 2025-06-14 165945](https://github.com/user-attachments/assets/f652d5de-175c-4d92-afc1-0df2d49ec800)

![Screenshot 2025-06-14 170203](https://github.com/user-attachments/assets/824f480f-a2ac-4389-b3de-c25991a1cf4b)
