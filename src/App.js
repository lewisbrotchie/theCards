import React, { Component } from 'react';
import styled from 'styled-components';

import cardBack from './back.png';
import cardFront from './front.png';

const Card = styled.img`
    position: absolute;
    left: ${props => props.x}px;
    bottom: ${props => props.y}px;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {render: false,
                  cards: [],
                  x: 1, y: 1};
    this.handleClick = this.handleClick.bind(this);  
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    /*for (let i = 0; i < 99; i++) {
      this.state.cards.push(
          <Card src={cardBack} />
        );
    }*/
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    //this.setState({render: !this.state.render });
      this.setState({render: true});
      while (this.state.cards.length <= 100) {
        this.state.cards.push(
          <Card key={this.state.y.toString()}
                src={cardBack} 
                onClick={this.handleClick} 
                clicked={false}
                x={this.state.x} 
                y={this.state.y}
          />
        );
        this.setState({x: this.state.x + 10,
                       y: this.state.y + (Math.sin(this.state.x) * 2000)
                      });
      }
  }

  handleClick() {
    //this.setState({render: !this.state.render});
    //this.setState({stop: !this.state.stop});
   // this.setState({clicked: true});
    console.log("hi");
  }
  render() {
    return (
      <div>{this.state.cards}</div>
      /*<div className="App">
        
        <Card src={cardBack} onClick={this.handleClick} />
          {this.state.render &&
            <Card2 src={cardBack} />
          }
      </div>*/
    )
  }
}

export default App;
