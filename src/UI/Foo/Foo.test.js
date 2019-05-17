import React from 'react';
import { shallow } from 'enzyme';

import Foo from './index';

const setUp = () => {
    const props = {
        text: 'some to comment',
      };
      const wrapper = shallow(<Foo />);
      return { wrapper, props };
}

describe('Foo Test Suite', () => {
    it('Should have an text', () => {
      const { wrapper } = setUp();
      expect(wrapper.find('p').exists()).toBe(true);
    });
  });