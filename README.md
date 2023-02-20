# cs465-fullstack
CS-465 Full Stack Development with MEAN

# Architecture
The angular project structure is similar to the Express HTML structure in that the resources are grouped by their type. Angular takes this a step further. Angular uses component-based grouping that combines HTML, CSS, and TypeScript for each component. In Express HTML, you would likely have all .html files in a “models” directory.
The big concept for using a SPA is utilizing the client’s device. Technology has advanced to the point where almost every client device imaginable has more than enough processing power for running web applications. With an SPA, most of the resources are downloaded to the client device when the client navigates to the website.

The pros:
The fact that the content exists on the client device already means that the amount of REST API requests per page can be kept to a minimum. The web page no longer needs to send a bunch of requests back to the server asking for generic content like images. The SPA can just render the content immediately because the image already exists on the device. This allows for much faster performance.

The cons:
As one might imagine, downloading all of this content initially is going to slow down the initial loading speed. If the content size is significant or connection is poor, this can make for a frustrating experience if the client is consistently opening and closing the site. Most search engines do not have JavaScript rendering which can make SPA websites look odd in web searches.


# Functionality
JSON, an acronym for JavaScript Object Notation, is a method of representing data. JavaScript is a language. JSON is the data structure that both the frontend and backend use to exchange information. Yes, the format is HTTP when being transferred between backend and frontend, but both convert the HTTP data to JSON because JSON is much easier to work with.

One of our refactors was adding a delete option in the admin SPA. Prior to the refactor, we had add and edit functionality. Since we had existing functionality in edit and add, we were able to add the delete functionality which was based on the edit and add components.

Because we were able to leverage this existing functionality, we were able to quickly create delete functionality in the frontend that made for a much better admin experience.


# Testing
One of the biggest things I learned was the full stack process. When you start out, it's best to take it one step at a time. This is especially true for building an API. The best course of action is to build things incrementally. Get the core database functionallity done first. Then move to the middleware. Once the middleware is done, you can expose it with routing. Once you have reached this level, you can begin to test the endpoint. It may help to use a tool like postman to quickly and easily send API requests.

Once you have validated the core functionality, then you can begin to think about security. Security is going to add complexity to your API. The point is to ensure your core functionality is solid before adding more features like security. Finding bugs in core functionality is much easier to do before adding security.

Once security is completed, testing should involve you trying to break your code. That is the absolute best way to find bugs. This is essentially what malicious actors are going to try to do once you launch your site.


# Reflection
This class was my first for a lot of things. I had never written JavaScript before. Learning JavaScript was not too difficult. I definitely notice some things about JS that I think other languages like Python do a good job of fixing.

I have interacted with APIs before from client-side code, but I have never written an API backend. It was a cool experience to be able to build a suite of API endpoints for the Travlr application.

I have written some HTML/CSS before. In this course, we did a little bit of that with a touch of handlebars. When we worked on the admin frontend, we used Angular. I had heard of angular before but never knew how it worked or how to build with it. Learning how to use angular was challenging but ultimately worth it.
