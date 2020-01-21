import React, {Component} from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import slugify from 'slugify';

class Feature extends Component {

    static defaultProps = {
        feature: []
    }

    renderFeatureItems() {
        
        return this.props.options.map( item => {
            const itemHash = slugify(JSON.stringify(item));
            return <FeatureItem 
                key={itemHash}
                id={itemHash}
                name={item.name} 
                featureName={this.props.name} 
                cost={item.cost} 
                item = {item}
                checked={this.props.checked.name}
                onChange={this.props.onChange} //{e => this.updateFeature(feature, feature.item)}
            />
        });
    }

    render() {
        
        const feature = this.props;
        
        return(
            <fieldset className="feature" key={this.featureHash}>
                <legend className="feature__name">
                    <h3>{feature.name}</h3>
                </legend>
                
                {this.renderFeatureItems()}

            </fieldset>
        );
    }
}

export default Feature;