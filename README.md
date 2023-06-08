# **Discontinued**
I created this before NextJS was a thing but nextjs supports this functionality now. This is just a memory of my old ideas.


# express-react-spa

Single Page Scrolling Using Express and React

the idea is to create a basic single page scrolling app with lazyloader.
You just need to create files in the frontend/Sections folder and the server will be the one to load it for you.

filenames in the Sections directory must adhere to the format
`1_section.js`.

start with a number (this will sort the sections in the order that you like).
separate using `_`.
filename must be the same as the classname.
a template is provided in creating sections.

styles are found in the App.css.

run the server and the frontend to start the application.

enjoy!

//TODO.
-responsive layout.
-CMS.
-access props through lazyloading.
-implement route change on manual scroll
