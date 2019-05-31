// example of router test https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
import React from 'react';
import { mount } from 'enzyme';

import RouterApp from './index';
import App from '../App';
import '../App/App.scss';

test('valid path should not redirect to 404', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <RouterApp/>
      </MemoryRouter>
    );
    expect(wrapper.find(App)).toHaveLength(1);
  });