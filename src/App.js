import logo from './logo.svg';
import './App.css';
import React from 'react';

const data = [{quote: '"A small stone may only make a small ripple at first, but someday it will be a wave."', author: "Wiegraf Folles"}, {quote: '"The best ways, don\'t always lead to the best results."', author: "Delita Hyral"}, {quote: '"Names don\'t matter. What\'s important is how you live your life."', author: "Ramza Beoulve"}, {quote: '"But we also know that what we see with our eyes alone isn\'t necessarily the truth."', author: "Alazlam Durai"}, {quote: '"Ignorance itself is a crime!"', author: "Miluda Folles"}];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }
  
  newQuote() {
    let number = Math.floor(Math.random() * 5);
    let newQuote = data[number].quote;
    let newAuthor = data[number].author;
    this.setState({quote: newQuote, author: newAuthor});
  }
  
  componentDidMount() {
    this.newQuote();
  }
  
  render() {
    return (
    <div id="quote-box">
       <p id="text">
         {this.state.quote}
        </p>
        <p id="author">
          -{this.state.author}
        </p>
        <div id="buttons">
        <button onClick={this.newQuote.bind(this)} id="new-quote">New Quote</button>
        <a href="twitter.com/intent/tweet" id="tweet-quote"><i className="fa fa-twitter"></i></a>
        </div>
    </div>
    )
  }
}

export default App;
