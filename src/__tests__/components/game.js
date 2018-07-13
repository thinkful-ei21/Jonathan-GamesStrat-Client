import React from 'react';
import { Game } from '../../components/game';
import { shallow, mount } from 'enzyme';

describe('<Game />', () => {
  it('Should render without crashing', () => {
    const game = [{}];
    const match = { params: { gameId: 1 } };
    shallow(<Game game={game} match={match} dispatch={() => {}} />);
  });
});
