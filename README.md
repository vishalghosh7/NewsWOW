# NewsWow

## Brief

NewsWow is a **_automated_ _news_ _parsing_ _tool_** that can be used in different fields of medicine, sports, finance, etc., and by individuals, organisations, and industries.

It has been developed with an intent to help organisations save time on **collecting the latest news data** from **all over the internet** without devoting much of their time in the process.

Not only it enable users to save most of their time gathering data, but also helps to **summarize** the content to get a meaningful understanding of the news. 

## Working

#### Input
**NewsWow** expects the following input from the users in-order to search for what is required by them:

1. News topic to be searched.
2. The type by which they want data to be extracted:
  1. By days
  2. By hours
3. The total time, including today, for the news.
Input Image:
![alt text](https://github.com/vishalghosh7/NewsWOW/blob/master/website.png "Website image")

####Process
Once the above input are provided by a user, **NewsWow API** searches Google News for all the relevant websites, and extracts the data from respective sites.
After extracting all the contents, it uses Python newspaper package to summarize the data with the help of **NLP** and Natural Language Processing.

####Output








