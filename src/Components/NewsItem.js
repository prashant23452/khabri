import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title, description, ImageUrl, newsurl} =  this.props;

    return (
        
      <div className='my-3'>
        <div className="card" style={{width:"18rem"}}>
            <img src={!ImageUrl?"https://th.bing.com/th/id/OIP.VWChxFEpEc14eZmHhy9yowHaFj?w=1280&h=960&rs=1&pid=ImgDetMain":ImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsurl} target="_blank" className= "btn btn-sm btn-primary">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem;
