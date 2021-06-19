# Instruction

Thank you for giving me this opportunity to work with this task.

## TLDR:

### For exercise 1:

Directly open `./src/ex1/ex1.html` to go through my first solution.

### For exercise 2:

DO NOT DIRECTLY OPEN `./src/ex2/ex2.html`.

Due to CORS restrictions, a server is required to correctly access it with Javascript. You could either use [Node http server](https://github.com/http-party/http-server#readme) or [Live server extention in VScode](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to help you out.

### PS:

Run `npm install` if you would like to modify the project. (So we will share the same configuration.)

---

This frontend technical assessment is for the frontend developer of mindarc.

Most of the tasks are finished with html, css, and Vanilla Javascript. The functionalities of both exercises are achieved without using any libraries. The layout of exercise 1 is achieved without using any libraries as well.

**Four libraries are still added in order to:**

### Eslint and Prettier

Reduce communication cost between team members (in a bigger project).

### Bootstrap

Save my life.

### Node HTTP Server

Test out an alternative way to access exercise 2.

## Exercise 1

As there is no clear instruction about how to deal with the layout bewteen desktop and mobile sizes, I decided to add an extra 2-columns layout for the screens whose pixel are between 1450px and 900px. As the width of the screen decreases, the layout will trim from 3-columns to 1-column. The smaller banner would replace the bigger one when the screen size hits 600px.

## Exercise 2

I use Vanilla Javascript to edit the html file and insert elements into it.
Bootstrap is used in this exercise to display a better looking layout.

The anwser of banana question is in the first tab of this exercise.
