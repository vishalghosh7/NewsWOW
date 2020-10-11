# NewsWow

## Brief

NewsWow is an **_automated_ _news_ _parsing_ _tool_** that can be used in different fields of medicine, sports, finance, etc., and by individuals, organisations, and industries.

It has been developed with an intent to help organisations save time on **collecting the latest news data** from **all over the internet** without devoting much of their time in the process.

Not only it enable users to save most of their time gathering data, but also helps to **summarize** the content to get a meaningful understanding of the news. 

## Working

#### FrontEnd:
HTML5, CSS3, Bootstrap4 has been used for structuring and presenting the website. JavaScript has been used for animating the page. 
JavaScript fetch is used for requesting the API in-order to produce the desired output.

#### BackEnd:
Python Flask has been used for creating the REST API. 
Flask CORS for accepting the HTTP methods.

## Way to use

### Input
**NewsWow** expects the following input from the users in-order to search for what is required by them:

1. News topic to be searched.
2. The type by which they want data to be extracted:
  ..1. By days
  ..2. By hours
3. The total time, including today, for the news.

Input Image:
![alt text](https://github.com/vishalghosh7/NewsWOW/blob/master/website.png "Website image")

### Process
Once the above input are provided by a user, **NewsWow API** searches Google News for all the relevant websites, and extracts the data from respective sites.
After extracting all the contents, it uses Python newspaper package to summarize the data with the help of **NLP** and Natural Language Processing.

### Output
Output is in the format of an Excel Sheet with the following columns:
1. Title
2. Publish Date
3. Content
4. Summary
5. Article Link


## Languages and Libraries Used

<div style="display: flex;">
  <img src="https://www.python.org/static/img/python-logo@2x.png" width="120" alt="Python"/>
  <img src="https://flask.palletsprojects.com/en/1.1.x/_images/flask-logo.png" width="120" alt="Flask"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/300px-Unofficial_JavaScript_logo_2.svg.png" width="80" alt="JavaScript"/>
</div>

## Deployment Platform

<div>
  <img src="https://cdn.worldvectorlogo.com/logos/aws-ec2.svg" width="100" alt="AWS">
  <figcaption><strong>AWS EC2</strong></figcaption>
</div>

## Tools Used

<div style="display: flex;">
  <img src="https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png" width="80" alt="VSCode"/>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1200px-Jupyter_logo.svg.png" width="80" alt="Jupyter Notebook"/>
 </div>










