
import React from 'react'
const NewsItem = (props) => {

    let { title, description, xurl, imageUrl, publishedAt, author, srcname } = props;
    let mystls = { cursor: 'pointer' }
    return (
        <div>
            <div className="col">
                <div className="card">
                    <div style={{ display: 'flex', JustifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge rounded-pill bg-danger">
                            {srcname.slice(0, 18)}
                        </span>
                    </div>
                    <a rel="noreferrer" href={xurl} style={{ textDecoration: 'none', color: 'black' }} target="_blank">
                        <img src={imageUrl} className="card-img-top xyz" alt="..." />
                        <div className="card-body" style={mystls}>
                            <h5 className="card-title fw-bold">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <div class="card-footer">
                                <small className="card-text text-secondary">{author == null ? 'Unknown' : author}, {new Date(publishedAt).toGMTString()}...</small>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem;