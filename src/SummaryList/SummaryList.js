import React, {Component} from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';

class SummaryList extends Component {

    static defaultProps = {
        features: []
    }
    renderSummaryOptions() {
        return Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
  
            return <SummaryOption 
                    key={idx}
                    featureHash={featureHash} 
                    feature={feature} 
                    selectedOption={selectedOption} />
      })
    }

    render() {

        return (
            <div className="summaryList">
                { this.renderSummaryOptions() }
            </div>
        );
    }
}

export default SummaryList;