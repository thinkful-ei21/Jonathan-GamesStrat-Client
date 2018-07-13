import React from 'react';
import { Strat } from '../../components/strat';
import { shallow, mount } from 'enzyme';

describe('<Strat />', () => {
  it('Should render without crashing', () => {
    const game = [{}];
    const strat = { title: '' };
    const match = { params: { gameId: 1, stratId: 1 } };
    shallow(
      <Strat
        game={game}
        strat={strat}
        match={match}
        dispatch={() => {
          return new Promise((resolve, reject) => {});
        }}
      />
    );
  });
});
