import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Products from './Products';

describe('Product component', () => {
   it('should renders without crashing', () => {
      const output = shallow(<Products />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
});

// test('should render Product component correctly', () => {
//    const output = shallow(<Products />);
//    expect(shallowToJson(output)).toMatchSnapshot();
// });

