import os, base64
import requests
import xml.etree.ElementTree as ET
import urllib
from newspaper import Article
import pandas as pd
import sys
import uuid
from io import BytesIO
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# dictionary containing the extracted data
extract_data={'title':[], 'publish_date':[], 'content':[], 'summary':[], 'article_link':[]}

# get the news
def getNews(url, key):
    mytree=ET.parse(urllib.request.urlopen(url))
    root=mytree.getroot()
    for x in root.iter('item'):
        extract_data['title'].append(x.find('title').text)
        extract_data['article_link'].append(x.find('link').text)
        extract_data['publish_date'].append(x.find('pubDate').text)


# function to extract data from article websites        
def getData():
    for link in extract_data['article_link']:
        try:
            article=Article(link)
            article.download()
            article.parse()
            article.nlp()
            extract_data['content'].append(article.text)
            extract_data['summary'].append(article.summary)
        except:
            extract_data['content'].append('')
            extract_data['summary'].append('') 

# app routing
@app.route("/", methods=["GET"])
def create_entry():
    global extract_data 
    extract_data={'title':[], 'publish_date':[], 'content':[], 'summary':[], 'article_link':[]}
    req = request.get_json()

    try:
        # 1. parsing the keyword for url
        keyword=urllib.parse.quote_plus(req["keyword"])

        # 2. parsing if timing is in days
        if req["timing"] == "days":
            urlDaily=f"https://news.google.com/rss/search?q={keyword}%20when%3A{req['num']}d&hl=en-IN&gl=IN&ceid=IN:en"
            getNews(urlDaily, keyword)

        else:
            urlHourly=f"https://news.google.com/rss/search?q={keyword}%20when%3A{req['num']}h&hl=en-IN&gl=IN&ceid=IN:en"
            getNews(urlHourly, keyword)

        # 3. parsing the news
        getData()

        extracted_dataframe=pd.DataFrame(extract_data)
        filtered_df = extracted_dataframe[extracted_dataframe['content']!=""]

        # filtered_df.to_excel(f"./../NewsWowData/{keyword}_news.xlsx", index=False)

        # if successful, send an OK response

        res = make_response(filtered_df.to_json(orient="records"), 200)

    except Exception as e:
        # in case of any error, request timed out response
        res = make_response({"message": "Request Server Timeout"}, 408)

    return res


# if __name__=="__main__":




