import React from 'react';
import { Header } from '../../components/header';
import { shallow, mount } from 'enzyme';

describe('<Header />', () => {
  it('Should render without crashing', () => {
    const location = { pathname: '' };
    shallow(<Header location={location} />);
  });
});
