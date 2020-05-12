import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ProductListItem from './ProductListItem';
import ProductData from "../../ProductData";

describe('Product List Item component', () => {
   it('should renders without crashing', () => {
      const output = shallow(<ProductListItem product={ProductData[0]} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
});