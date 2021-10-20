import React, { Component } from 'react';
import NewsItem from './NewsItem';
import PreLoader from './PreLoader';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
    static defaultProps = { category: "general" }
    static propTypes = { category: PropTypes.string }
    article = [];
    constructor() {
        super();
        this.state = {
            article: this.article,
            PreLoader: false,
            page: 1,
            totalResults: 0
        }
    }
    async Update() {
        let Url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=ff149229124d4bf6b7a5965f6ad30cef&page=${this.state.page}&pageSize=15`;
        this.setState({preLoader: true})
        let data = await fetch(Url);
        let parse = await data.json();
        this.setState({
            article: parse.articles,
            totalResults: parse.totalResults,
            PreLoader: false
        });
        console.log(parse.articles);
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
    fetchMoreData = async () => {
        this.setState({
            page: this.state.page + 1,
        });
        let Url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=in&apiKey=ff149229124d4bf6b7a5965f6ad30cef&page=${this.state.page}&pageSize=9`;
        this.setState({ PreLoader: true });
        let data = await fetch(Url);
        let parse = await data.json();
        this.setState({
            article: this.state.article.concat(parse.articles),
            totalResults: parse.totalResults,
            PreLoader: false
        });
    };
    ToCapitalize = (category) => {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
    render() {
        return (
            <>
                <h1 className="text-center fw-bold">Top Headlines-{this.ToCapitalize(this.props.category)}</h1>
                {/* {this.state.PreLoader && <PreLoader />} */}
                <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.article.length !== this.totalResults}
                    loader={this.state.PreLoader && <PreLoader />}
                >
                    <div className="container">
                        <div className="row row-cols-md-3 g-3 m-3">
                            {
                                this.state.article.map((ele) => {
                                    return <div key={ele.url}>
                                        <NewsItem title={ele.title === null ? '' : ele.title.slice(0, 45)} description={ele.description == null ? '' : ele.description} xurl={ele.url} imageUrl={ele.urlToImage === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wHc3OzKebPw9iQ9NMcjKRHSxIFKN2Ds2LQ&usqp=CAU" : ele.urlToImage} publishedAt={ele.publishedAt} author={ele.author} srcname={ele.source.name} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )

    }
}
