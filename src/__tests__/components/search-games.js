import React from 'react';
import { SearchGames } from '../../components/search-games';
import { shallow, mount } from 'enzyme';

describe('<SearchGames />', () => {
  it('Should render without crashing', () => {
    const games = [{}];
    shallow(<SearchGames games={games} handleSubmit={() => {}} />);
  });
});
