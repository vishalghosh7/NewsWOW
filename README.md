# NewsWow

## Brief

NewsWow is an **_automated_ _news_ _parsing_ _tool_** that can be used in different fields of medicine, sports, finance, etc., and by individuals, organisations, and industries.

It has been developed with an intent to help organisations save time on **collecting the latest news data** from **all over the internet** without devoting much of their time in the process.

Not only it enable users to save most of their time gathering data, but also helps to **summarize** the content to get a meaningful understanding of the news. 

## Working

### Input
**NewsWow** expects the following input from the users in-order to search for what is required by them:

1. News topic to be searched.
2. The type by which they want data to be extracted:
  1. By days
  2. By hours
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
<div style="display: flex; justify-content: space-around; width: 100vh;">
<img src="https://www.python.org/static/img/python-logo@2x.png" width="150" alt="Python"/>
<img src="https://flask.palletsprojects.com/en/1.1.x/_images/flask-logo.png" width="150" alt="Flask"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/300px-Unofficial_JavaScript_logo_2.svg.png" width="100" alt="JavaScript"/>
</div>









