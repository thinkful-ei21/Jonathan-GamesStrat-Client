import React from 'react';
import { StratList } from '../../components/strat-list';
import { shallow, mount } from 'enzyme';

describe('<StratList />', () => {
  it('Should render without crashing', () => {
    const strats = [{ userId: '' }];
    shallow(<StratList strats={strats} dispatch={() => {}} />);
  });
});
