import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import StoriesList from './components/StoriesList';
import Search from './components/Search';

class App extends Component 
{
  state = {
    news: []
  };

  componentDidMount() {
    this.readNews();
  }

  readNews = async (category = 'general') => {
    const apiKey = '3f9bc33971f8493fb12b21e5c620b2c3';
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${apiKey}`;
    const resp = await fetch(url);
    const news = await resp.json();
    this.setState({
      news: news.articles
    });
  }

  render() {
    return (
      <Fragment>
        <Header
          title="News API" />
        <div className="container white contenedor-noticias">
          <Search
            readNews={this.readNews} />
          <StoriesList
            news={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
