import React from "react";


function HistoryPage({history}) {

  return (
    <>
      <div id="Lazy_background">
        <div></div>{" "}
      </div>
      <div className="container">
        <div className="row card-group g-1">
       { history.map((news)=><div key={news.id}>   <div className="card">
        <div className="card-body">
        <span className="card-title">  <span className='fs-4' >{news.title}</span> - {new Date(news.event_date_utc).toLocaleDateString()}</span>
         <p className="card-text">
           {news.details}
          </p>
          <button onClick={()=>window.open(news.links.article)} className="btn btn-outline-secondary">Learn more </button>
        </div>
      </div></div>)}
        </div>
       
      </div>
    </>
  );
}

export default HistoryPage;
