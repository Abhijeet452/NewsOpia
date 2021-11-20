import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import PreLoader from './PreLoader';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [article, setarticle] = useState([]);
    const [Loader, setLoader] = useState(false);
    const [page, setpage] = useState(1);
    const [TotalResults, setTotalResults] = useState(0);
    const Update = async () => {
        props.setProgress(30);
        let Url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=ff149229124d4bf6b7a5965f6ad30cef&page=${page}&pageSize=15`;
        // this.setState({preLoader: true})
        setLoader(true);
        let data = await fetch(Url);
        props.setProgress(50);
        let parse = await data.json();
        props.setProgress(75);
        setarticle(parse.articles);
        setTotalResults(parse.totalResults);
        setLoader(false);
        props.setProgress(100);
        console.log(parse.articles);
    }
    useEffect(() => {
        Update();
       // eslint-disable-next-line
    }, [])
    const fetchMoreData = async () => {
        let Url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=in&apiKey=ff149229124d4bf6b7a5965f6ad30cef&page=${page + 1}&pageSize=9`;
        setpage(page + 1);
        setLoader(true);
        let data = await fetch(Url);
        let parse = await data.json();
        setarticle(article.concat(parse.articles));
        setTotalResults(parse.totalResults);
        setLoader(false);
    };
    const ToCapitalize = (category) => {
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
    return (
        <>
            <h1 className="text-center fw-bold" style={{marginTop: '5rem'}}>Top Headlines-{ToCapitalize(props.category)}</h1>
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== TotalResults}
                loader={Loader && <PreLoader />}
            >
                <div className="container">
                    <div className="row row-cols-md-3 g-3 m-3">
                        {
                            article.map((ele) => {
                                return <div key={ele.url}>
                                    <NewsItem title={ele.title === null ? '' : ele.title} description={ele.description == null ? '' : ele.description.slice(0, 45)} xurl={ele.url} imageUrl={ele.urlToImage === null ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wHc3OzKebPw9iQ9NMcjKRHSxIFKN2Ds2LQ&usqp=CAU" : ele.urlToImage} publishedAt={ele.publishedAt} author={ele.author} srcname={ele.source.name} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
News.defaultProps = { category: "general" }
News.propTypes = { category: PropTypes.string }

export default News;