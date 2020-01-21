import React, {Component} from 'react';
import {USCurrencyFormat} from '../Helpers/Helpers';

class SummaryOption extends Component {

    static defaultProps = {
        summaryOption: []
    }

    render() {
        
        const summaryOption = this.props;

        return(
            <div className="summary__option" key={summaryOption.featureHash}>
            <div className="summary__option__label">{summaryOption.feature} </div>
            <div className="summary__option__value">{summaryOption.selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(summaryOption.selectedOption.cost)}
            </div>
          </div>
        );
    }
}

export default SummaryOption;