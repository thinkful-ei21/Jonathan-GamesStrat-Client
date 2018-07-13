import React from 'react';
import { Login } from '../../components/login';
import { shallow, mount } from 'enzyme';

describe('<Login />', () => {
  it('Should render without crashing', () => {
    shallow(<Login handleSubmit={() => {}} />);
  });

  it('Should submit credentials when the form is submitted', () => {
    const newCredentials = { username: 'username', password: 'password' };
    const credentials = {};
    const wrapper = mount(<Login handleSubmit={() => {}} />);
    wrapper.setState({
      credentials
    });
    const input = wrapper.find('#loginUsername', '#loginPassword');
    input.instance().value = newCredentials;

    const form = wrapper.find('.loginForm');
    form.simulate('submit');

    expect(wrapper.state('credentials')).toEqual({
      ...credentials,
      newCredentials
    });
  });
});
