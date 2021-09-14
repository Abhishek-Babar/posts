import logo from './logo.svg';
import './App.css';
import SearchBar from './components/navbar';
import Post from './components/post';
import { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Posts from './components/posts';
import Details from './components/details';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      data: [],
      search: ""
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: [...data], data: [...data] }));
  }

  render() {
    return (
      <BrowserRouter>
        <SearchBar sendData={(data) => this.setState({ search: data }, () => {
          const filter = this.state.data.filter(data => data.title.includes(this.state.search))
          this.setState({ posts: filter })
        })} />
        <Switch>
          <Route path="/" exact component={() => <Posts posts={this.state.posts}/>} />
          <Route path="/posts/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
