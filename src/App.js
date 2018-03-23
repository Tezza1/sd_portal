import React, { Component } from 'react';
import TitleBar from './components/titleBar'
import MenuBar from './components/menu'
import BookShelf from './components/bookShelf'
import Footer from './components/footer'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <MenuBar />
            <TitleBar title={"Sample Materials"}/>
            <BookShelf />
            <Footer />
        </div>
    );
  }
}

export default App;
