import React from 'react';
import GameStrat from '../../components/gameStrat';
import { shallow, mount } from 'enzyme';

describe('<GameStrat />', () => {
  it('Should render without crashing', () => {
    shallow(<GameStrat />);
  });
});
