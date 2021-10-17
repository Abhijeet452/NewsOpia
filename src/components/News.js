import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PreLoader from './PreLoader';
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = { category: "general" }
    static propTypes = { category: PropTypes.string }
    article = [];
    constructor() {
        super();
        this.state = {
            article: this.article,
            PreLoader: false,
            page: 1
        }
    }
    async Update() {
        let Url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=ff149229124d4bf6b7a5965f6ad30cef&page=${this.state.page}`;
        this.setState({ PreLoader: true });
        let data = await fetch(Url);
        let parse = await data.json();
        this.setState({
            article: parse.articles,
            totalResults: parse.totalResults,
            PreLoader: false
        });
    }
    async componentDidMount() {
        this.Update();
    }
    handleNext = async () => {
        this.setState({
            page: this.state.page + 1,
        });
        this.Update();
    }
    handlePrev = async () => {
        this.setState({
            page: this.state.page - 1,
        });
        this.Update();

    }
    ToCapitalize = (category) => {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
    render() {
        return (
            <>
                <h1 className="text-center">Top Headlines-{this.ToCapitalize(this.props.category)}</h1>
                {this.state.PreLoader && <PreLoader />}
                <div className="row row-cols-md-3 g-3 m-3">
                    {
                        this.state.article.map((ele) => {
                            return <div key={ele.url}>
                                <NewsItem title={ele.title === null ? '' : ele.title.slice(0, 45)} description={ele.description == null ? '' : ele.description} xurl={ele.url} imageUrl={ele.urlToImage === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wHc3OzKebPw9iQ9NMcjKRHSxIFKN2Ds2LQ&usqp=CAU" : ele.urlToImage} publishedAt={ele.publishedAt} author={ele.author} srcname={ele.source.name} />
                            </div>
                        })
                    }
                </div>
                <div className="container d-flex justify-content-around my-3">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark my-3" onClick={this.handlePrev}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark my-3" onClick={this.handleNext}> Next &rarr;</button>
                </div>
            </>
        )

    }
}