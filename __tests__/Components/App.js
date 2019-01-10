import React, { Suspense } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from '../../src/Components/App';
import { EmptyUser, UserContainer } from '../../src/Components/App';

describe('App', () => {
  describe('component', () => {
    test('renders as expected', () => {
      const wrapper = shallow(
        <Suspense fallback={<div>loading...</div>}>
          <App />
        </Suspense>,
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    // test('renders without crashing', () => {
    //   expect(wrapper).toBeDefined();
    // });

    // test('HeaderContainer should be defined', () => {
    //   expect(wrapper.find('withRouter(HeaderContainer)')).toBeDefined();
    // });

    // test('routes "/" to EmptyUser', () => {
    //   expect(wrapper.find('Route[exact=true][path="/"]').first().prop('component')).toBe(EmptyUser);
    // });

    // test('routes "/:user" to UserContainer', () => {
    //   expect(wrapper.find('Route[exact=true][path="/:user"]').first().prop('render')).toBeDefined();
    // });
  });
});
