import React from 'react';
import { Registration } from '../../components/register';
import { shallow, mount } from 'enzyme';

describe('<Registration />', () => {
  it('Should render without crashing', () => {
    shallow(<Registration handleSubmit={() => {}} />);
  });

  it('Should submit registration info when the form is submitted', () => {
    const newUser = {
      firstName: 'John',
      lastName: 'Doe',
      username: 'username',
      password: 'password'
    };
    const user = {};
    const wrapper = mount(<Registration />);
    wrapper.setState({
      user
    });
    const input = wrapper.find(
      '#username',
      '#password',
      '#firstName',
      '#lastName'
    );
    input.instance().value = newUser;

    const form = wrapper.find('.registerForm');
    form.simulate('submit');

    expect(wrapper.state('user')).toEqual({
      ...user,
      newUser
    });
  });
});
