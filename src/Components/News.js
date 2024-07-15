import React, { Component } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {
  static defaultProps ={
     country: 'in',
     pageSize: 8,
     category: 'general'
  }
  static propTypes ={
     country: PropTypes.string,
     pageSize: PropTypes.number,
     category:PropTypes.string
  }
  articles =[];
  capitalizeFirstLetter = (string) =>{
      return string.charAt(0).toUpperCase() + string.slice(1);
  }


  constructor(props){
    super(props);
    console.log("Hello I am constructor from news component");
    this.state={
      articles: this.articles,
      loading: false,
      page: 1
    }
    document.title= `${this.capitalizeFirstLetter(this.props.category)} - Khabri`;
  }
  async updateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9817cbbb2d154748be294fc684545db0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data= await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, 
    totalResults: parsedData.totalResults,
    loading: false
    })
  }

  async componentDidMount(){
    this.updateNews();
    // console.log("didmount");
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9817cbbb2d154748be294fc684545db0&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data= await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({articles: parsedData.articles, 
    // totalResults: parsedData.totalResults,
    // loading: false
    // })
  }
  
  handlePrevClick= async() =>{
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9817cbbb2d154748be294fc684545db0&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data= await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //  page: this.state.page - 1,
    //  articles: parsedData.articles,
    //  loading: false
    // })
    this.setState({page: this.state.page -1});
    this.updateNews();
  }
  handleNextClick= async() =>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9817cbbb2d154748be294fc684545db0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //   this.setState({loading: true});
  //   let data= await fetch(url);
  //   let parsedData = await data.json();
    
  //   this.setState({
  //    page: this.state.page + 1,
  //    articles: parsedData.articles,
  //    loading: false
  // })
  this.setState({page: this.state.page +1});
  this.updateNews();
}

  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1 className="text-center">Khabri-top headlines from {this.capitalizeFirstLetter(this.props.category)}</h1>
          {this.state.loading && <Spinner/>}
          <div className="row my-5">
          { ! this.state.loading &&this.state.articles.map((element)=>{
             return <div className="col-md-4 " key={element.url} >
             <NewsItem title={element.title ?element.title.slice(0, 45) :""} description={element.description ?element.description.slice(0, 88):""} ImageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
             </div>
          })}  
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News;
