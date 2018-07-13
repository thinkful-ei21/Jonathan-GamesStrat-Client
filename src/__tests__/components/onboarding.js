import React from 'react';
import { Onboarding } from '../../components/onboarding';
import { shallow, mount } from 'enzyme';

describe('<Onboarding />', () => {
  it('Should render without crashing', () => {
    shallow(<Onboarding />);
  });
});
