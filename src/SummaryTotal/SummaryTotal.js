import React, {Component} from 'react';
import {USCurrencyFormat} from '../Helpers/Helpers';

class SummaryTotal extends Component {

    static defaultProps = {
        total: ''
    }

    render() {
        return (
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(this.props.total)}
              </div>
            </div>
        );
    }
}

export default SummaryTotal;