import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ProductList from './ProductList';
import ProductData from "../ProductData";

describe('Product List component', () => {
   it('should renders without crashing', () => {
      const output = shallow(<ProductList productList={ProductData} />);
      expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('should renders with empty message', () => {
        const output = shallow(<ProductList productList={[]} />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});