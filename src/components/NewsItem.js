
import React, { Component } from 'react'
export default class NewsItem extends Component {

    render() {
        let { title, description, xurl, imageUrl, publishedAt, author,srcname } = this.props;
        let mystls = { cursor: 'pointer'}
        return (
            <div>
                <div className="col">
                    <div className="card">
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {srcname}
                        </span>
                        <img src={imageUrl} className="card-img-top xyz" alt="..." />
                        <a rel="noreferrer" href={xurl} style={{ textDecoration: 'none', color: 'black' }} target="_blank">
                            <div className="card-body" style={mystls}>
                                <h5 className="card-title fw-bold">{title}...</h5>
                                <p className="card-text">{description}...</p>
                                <p className="card-text text-success fw-bold">{author == null ? 'Unknown' : author}, {new Date(publishedAt).toGMTString()}...</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}