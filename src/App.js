import React, { Component } from 'react';
import './App.css';
import FeatureList from './FeatureList/FeatureList';
import SummaryList from './SummaryList/SummaryList';
import SummaryTotal from './SummaryTotal/SummaryTotal';

// This object will allow us to
// easily convert numbers into US dollar values
// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  calculateTotal = () => {
    return Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost, 0 );
  }
  
  
  render() {
    
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>

          <form className="main__form">
            <h2>Customize your laptop</h2>
            {<FeatureList 
                features={this.props.features} 
                checked={this.state.selected} 
                onChange={this.updateFeature} />}
          </form>
          
          <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryList selected={this.state.selected} />
            <SummaryTotal total={this.calculateTotal()} />
          </section>

        </main>
      </div>
    );
  }
}

export default App;
