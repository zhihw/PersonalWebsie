# Zhihao Wang Personal Website

This project consists of five main pages—**home**, **about**, **contact**, **previous-work**, and **project**—along with two common template files (`footer.html` and `navbar.html`) that are dynamically loaded via JavaScript. It showcases a personal site with a consistent layout and a simplified maintenance approach.

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [How to Run](#how-to-run)
3. [External Resources Used](#external-resources-used)

---

## Project Structure

| File/Folder       | Description                                                                                                   |
|-------------------|---------------------------------------------------------------------------------------------------------------|
| **home.html**     | My personal website entry point, including welcome, a brief introduction and personal contact information.    |
| **about.html**    | Contains personal profile information, skills, and a short bio of the me.                                     |
| **contact.html**  | There are my specific contact information and a contact form that visitors need to fill out                   |
| **previous-work.html** | Uses a Bootstrap Accordion to display educational background, work experience, and other accomplishments.|
| **project.html**  | Showcases projects using Bootstrap Cards and Carousel.                                                        |
| **navbar.html**   | A shared navigation bar template, dynamically loaded into each page via `loader.js`.                          |
| **footer.html**   | A shared footer section also loaded by `loader.js`.                                                           |
| **loader.js**     | Fetches and injects `navbar.html` and `footer.html` into each page, reducing code repetition.                 |
| **contact-form.js** | Handles the logic for the contact form by logging user submissions to the console (no actual sending logic).|
| **home.css**      | Custom CSS rules.                                                                                             |
| **README.md**     | Documentation and instructions for running the project, plus links to external resources.                     |

---

## How to Run

There are two recommended ways to view and test this site:

1. **Clone and Open Locally**
   - Clone the repository (or download and unzip):
     ```bash
     git clone https://github.com/zhihw/zhihw.github.io.git
     ```
   - Navigate to the project folder and open **home.html** in your web browser.

2. **Visit the GitHub Pages Deployment**
   - The project is already deployed at:  
     [https://zhihw.github.io/home.html](https://zhihw.github.io/home.html)  
   - You can directly access it in any browser.

---

## External Resources Used


1. **Overriding CSS with `!important`**  
   - Referenced to ensure a pure black background, overriding Bootstrap’s `bg-dark`.  
   - [https://www.runoob.com/css/css-important.html](https://www.runoob.com/css/css-important.html)

2. **CSS Gradients and Background Techniques**  
   - Used for gradient backgrounds and background positioning/scaling.  
   - [https://www.w3schools.com/css/css3_gradients.asp](https://www.w3schools.com/css/css3_gradients.asp)  
   - [https://www.w3schools.com/cssref/tryit.php?filename=trycss3_background_hero](https://www.w3schools.com/cssref/tryit.php?filename=trycss3_background_hero)

3. **Bootstrap Components Documentation**  
   - Accordion: [https://getbootstrap.com/docs/5.0/components/accordion/](https://getbootstrap.com/docs/5.0/components/accordion/)  
   - Carousel: [https://getbootstrap.com/docs/5.0/components/carousel/](https://getbootstrap.com/docs/5.0/components/carousel/)

---
