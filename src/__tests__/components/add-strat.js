import React from 'react';
import { AddStrat } from '../../components/add-strat';
import { shallow, mount } from 'enzyme';

describe('<AddStrat />', () => {
  it('Should render without crashing', () => {
    const match = { params: { gameId: 1 } };
    shallow(<AddStrat match={match} handleSubmit={() => {}} />);
  });
});
