import React, {Component} from 'react';
import Feature from '../Feature/Feature';

class FeatureList extends Component {

    static defaultProps = {
        features: []
    }

    renderFeatures() {
        return Object.keys(this.props.features).map( (feature, idx) => {
            const featureHash = feature + '-' + idx;
            const list = <Feature 
                key={featureHash} 
                id={featureHash} 
                name={feature} 
                options={this.props.features[feature]}  
                checked={this.props.checked[feature]} 
                onChange={this.props.onChange} />

                //console.log(`checkedFeature: ${this.props.checked[feature].name}`);

                return list;
        });
    }

    render() {

        return (
            <div className="featureList">
                { this.renderFeatures() }
            </div>
        );
    }
}

export default FeatureList;