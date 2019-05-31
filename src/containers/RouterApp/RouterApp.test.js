// example of router test https://stackoverflow.com/questions/44441852/testing-react-router-v4-with-jest-and-enzyme

import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import RouterApp from './index';
import App from '../App';

jest.dontMock('./index');

describe('<RouterApp />', () => {
  test('valid path should not redirect to 404', () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <RouterApp />
      </MemoryRouter>
    );
    expect(wrapper.find(App)).toHaveLength(0);
  });
});
