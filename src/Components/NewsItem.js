import React from "react";

const NewsItem  = (props) => {
  
    let { title, description, ImageUrl, newsurl, author, date, source } = props;

    return (
      <div className="my-3">
        <div className="card">
          <div style={{ display : 'flex', justifyContent: 'flax-end', position: 'absolute', right: '0'}}>
        <span class=" badge rounded-pill bg-danger" >
              {source}
              
            </span>
            </div>
          <img
            src={
              !ImageUrl
                ? "https://th.bing.com/th/id/OIP.VWChxFEpEc14eZmHhy9yowHaFj?w=1280&h=960&rs=1&pid=ImgDetMain"
                : ImageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            {/* <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {source}
              
            </span> */}
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "unkonown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
