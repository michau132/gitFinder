import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../../src/Components/App';

const props = {
  location: {
    state: {
      modal: true,
    },
  },
};

describe('App', () => {
  describe('component', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<App {...props} />);
    });

    test('renders as expected', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    test('renders without crashing', () => {
      expect(wrapper).toBeDefined();
    });

    test('routes "/" to WrappedBeerList', () => {
      expect(wrapper.find('Route[exact=true][path="/"]').first().prop('component')).toBe(WrappedBeerList);
    });

    test('routes "/beer/:id" to WrappedBeerList', () => {
      expect(wrapper.find('Route[exact=true][path="/beer/:id"]').first().prop('component')).toBe(WrappedBeerList);
    });

    test('routes "/beer/:id" and should be defined', () => {
      expect(wrapper.find('Route[path="/beer/:id"]').not('[exact=true]').prop('component')).toBeDefined();
    });
  });
});
