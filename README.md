# Yale Art Redesign
A redesign of the Yale Art department website. Group project for CS4474: Human Computer Interaction.

## Deployed Heroku Instance

To view the deployed site, follow this link: https://stormy-brushlands-53780.herokuapp.com/


## Running the App

1. Install node if you haven't already. (npm comes with node)

2. Navigate to the root of our repository that you have cloned from github

3. Run ```npm install``` in your terminal in order to download all dependencies for our app.

**Note that if you are a user of git bash, many command line tools don't get automatically added to the path for this terminal. I suggest finding a better terminal like powershell for windows.**

4. Run ```npm start``` in your terminal to start the server

5. Open your browser and type ```localhost:3000``` into the address bar

6. You should now see the site. You can keep it running while making changes to your html pages and simply refresh the page to see your changes.

## Workflow

### Create a Page
In order to create a page, create a new file within the views folder. Then you must add a route to the server for your page. More on this below. 

The contents of every bootstrap page needs to be placed within the container div like so:

```html
<div class="container-fluid">

<!-- YOUR CONTENT HERE -->

</div>
```

You can also use the "container" class for this, to see the difference please refer to the bootstrap documentation.
 
### Including the header template

Our header template should be present on every page according to our design. In order to add it to the top of your page do the following:

1. Inside of the container div, place a div exactly like this:

```html
<div id="header"></div>
```

2. Include the script for loading our templates inside the <head> tag of your page:

```html
<script src="/static/js/loadTemplates.js"></script>
```

Once you've done these two things you should see the header loading in the proper location.

Remember that you must be viewing the website on localhost:3000 with the server running in order to see this. 




### Create a template

If you find that you have a block of bootstrap code that you're having to repeat alot, you might think about making it a template to save yourself time copying and pasting.

To do so you can just put the html in a file inside the templates folder, only the divs that you want to be repeatedly used in any environment. There is no need to wrap it in a container because the page it loads into will already have one.

After doing this you can edit the /static/js/loadTemplates.js script to load your html into a div with an id of your choosing using jQuery. This is how we do it for the header:

```javascript
$(document).ready(function(){
	$('#header').load("/static/templates/header.html");
});
```

...And we use this code in our html page by both including the /static/js/loadTemplates.js script in the head of our target html page and the div with the id we've chosen in the location we want to see that template loaded into.

```html
<div id="yourChosenID"></div>
```




### Adding a Route for Your Page

Once you've created a bootstrap html page, you can make it accessible to the website address by adding a route to your html file on the server. It's done as follows:

```javascript
#Server.js

router.get("/about",function(req,res){
	res.sendFile(path + "about.html");
});
```

Now when you create an href link on a page, you can set the address to "/about" and the browser will navigate to the html page you've created.