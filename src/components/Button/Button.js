import React, {Component} from 'react';
import { SButton } from './styled/Button';

export default class Button extends Component {
    render() {

        return (
            <SButton onClick={this.props.onClick}>
              {this.props.children}
            </SButton>
        );
    }
}
