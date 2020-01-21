import React, {Component} from 'react';
import slugify from 'slugify';
import {USCurrencyFormat} from '../Helpers/Helpers';

class FeatureItem extends Component {

    static defaultProps = {
        featureOption: []
    }


    render() {

        const featureOption = this.props;
        return(
            
            <div key={featureOption.itemHash} className="feature__item">
                <input
                    type="radio"
                    id={featureOption.id}
                    className="feature__option"
                    name={slugify(featureOption.featureName)}
                    checked={featureOption.name === featureOption.checked}                   
                    onChange={e => this.props.onChange(featureOption.featureName, featureOption.item)}
                />
                <label htmlFor={featureOption.id} className="feature__label">
                    {featureOption.name} ({USCurrencyFormat.format(featureOption.cost)})
                </label>
            </div>
        );

    }
}

export default FeatureItem;