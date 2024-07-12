import React, { Component } from 'react';

import NewsItem from './NewsItem';

export class News extends Component {
  articles =[
    {
      "source": {
          "id": "abc-news-au",
          "name": "ABC News (AU)"
      },
      "author": "ABC News",
      "title": "Indian Prime Minister Narendra Modi meets Vladimir Putin in Russia, condemns deaths of children in war and calls for peace",
      "description": "Narendra Modi's pointed remarks came just moments after he was welcomed to the Kremlin by Vladimir Putin.",
      "url": "https://www.abc.net.au/news/2024-07-10/narendra-modi-discusses-ukraine-with-vladimir-putin-in-russia/104077902",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/28f964e516f1663c43caa3836fd21f49?impolicy=wcms_watermark_news&cropH=2074&cropW=3687&xPos=0&yPos=39&width=862&height=485&imformat=generic",
      "publishedAt": "2024-07-09T19:09:50Z",
      "content": "Indian Prime Minister Narendra Modi has told Russian President Vladimir Putin that the death of innocent children was painful and terrifying, a day after a lethal strike on Kyiv's main hospital for c… [+5158 chars]"
  },
  {
      "source": {
          "id": "google-news-in",
          "name": "Google News (India)"
      },
      "author": "The Times of India",
      "title": "Mumbai BMW hit-and-run case: Juhu bar's license suspended for serving liquor to 23-year-old accused Mihir - The Times of India",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMisAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9pbmRpYS9tdW1iYWktYm13LWhpdC1hbmQtcnVuLWNhc2UtanVodS1iYXJzLWxpY2Vuc2Utc3VzcGVuZGVkLWZvci1zZXJ2aW5nLWxpcXVvci10by0yMy15ZWFyLW9sZC1hY2N1c2VkLW1paGlyLXNoYWgvYXJ0aWNsZXNob3cvMTExNjEzNzgwLmNtc9IBtAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9pbmRpYS9tdW1iYWktYm13LWhpdC1hbmQtcnVuLWNhc2UtanVodS1iYXJzLWxpY2Vuc2Utc3VzcGVuZGVkLWZvci1zZXJ2aW5nLWxpcXVvci10by0yMy15ZWFyLW9sZC1hY2N1c2VkLW1paGlyLXNoYWgvYW1wX2FydGljbGVzaG93LzExMTYxMzc4MC5jbXM?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-07-09T17:06:00+00:00",
      "content": null
  },
  {
      "source": {
          "id": "google-news-in",
          "name": "Google News (India)"
      },
      "author": "The Hindu",
      "title": "Russia offers compensation and citizenship to kin of Indians killed in Ukraine war - The Hindu",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMijQFodHRwczovL3d3dy50aGVoaW5kdS5jb20vbmV3cy9uYXRpb25hbC9ydXNzaWEtb2ZmZXJzLWNvbXBlbnNhdGlvbi1hbmQtY2l0aXplbnNoaXAtdG8ta2luLW9mLWluZGlhbnMta2lsbGVkLWluLXVrcmFpbmUtd2FyL2FydGljbGU2ODM4NTE0Ni5lY2XSAZIBaHR0cHM6Ly93d3cudGhlaGluZHUuY29tL25ld3MvbmF0aW9uYWwvcnVzc2lhLW9mZmVycy1jb21wZW5zYXRpb24tYW5kLWNpdGl6ZW5zaGlwLXRvLWtpbi1vZi1pbmRpYW5zLWtpbGxlZC1pbi11a3JhaW5lLXdhci9hcnRpY2xlNjgzODUxNDYuZWNlL2FtcC8?oc=5",
      "urlToImage": null,
      "publishedAt": "2024-07-09T16:26:00+00:00",
      "content": null
  },
  {
      "source": {
          "id": "wired",
          "name": "Wired"
      },
      "author": "Wired",
      "title": "This Ancient Technology Is Helping Millions Stay Cool",
      "description": "Cheap, low-energy evaporative cooling devices are keeping water, food, people, and even whole buildings cool across India.",
      "url": "https://www.wired.com/story/evaporative-cooling-devices-coolant-clay-matka-mitticool-india-heat-wave/",
      "urlToImage": "https://media.wired.com/photos/6672c421e0704c563b4e7b77/191:100/w_1280,c_limit/GettyImages-80973767.jpg",
      "publishedAt": "2024-07-09T15:42:42Z",
      "content": "CBalance is another company working to tackle the heat problem, specifically for underprivileged households living in tightly packed slums, ghettos, and poorly planned neighborhoods. Led by Vivek Gil… [+3227 chars]"
  }
  ]
  constructor(){
    super();
    console.log("Hello I am constructor from news component");
    this.state={
      articles: this.articles,
      loading: false
      
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Khabri-top headlines</h2>
          <div className="row">
              <div className="col-md-4 ">
              <NewsItem title="myTitle" description="mydesc" ImageUrl="https://live-production.wcms.abc-cdn.net.au/28f964e516f1663c43caa3836fd21f49?impolicy=wcms_watermark_news&cropH=2074&cropW=3687&xPos=0&yPos=39&width=862&height=485&imformat=generic" newsurl="todo"/>
              </div>
              <div className="col-md-4 ">
              <NewsItem title="myTitle" description="mydesc"/>
              </div>
              <div className='col-md-4 '>
              <NewsItem title="myTitle" description="mydesc"/>
              </div>
          
          </div>
        
      </div>
    )
  }
}

export default News;
