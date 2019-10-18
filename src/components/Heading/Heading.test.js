import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Heading } from './Heading';

jest.mock('./styled/PageHeading.js', () => {
    return {
        LargePageHeading: 'LargePageHeading',
    }
})

describe('<Heading />', () => {
    it('should render', () => {
        const wrapper = shallow(<Heading />);
        expect(wrapper);
    });

    it('should match snapshot', () => {
        const wrapper = shallow(<Heading/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should match snapshot with passed props', () => {
        const wrapper = shallow(<Heading title="test title" variant="secondary" />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render with prop variant', () => {
        const wrapper = shallow(<Heading variant='secondary' />);
        expect(wrapper.prop('variant')).toEqual('secondary');
    });

    it('should render with text as child passed with prop', () => {
        const wrapper = shallow(<Heading title='Example' />);
        expect(wrapper.text()).toEqual('Example');
    });
});