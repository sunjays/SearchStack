import React from 'react';

import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { shallow, render } from 'enzyme';

import Search, { Unwrapped as UnwrappedSearch } from '../Search';

import store from '../store';

import { setSearchTerm } from '../actionCreators';

import SearchBox from './SeacrhBox';



test('Search renders correctly', () => {

  const component = shallow(<UnwrappedSearch searchTerm="" SearchBox={preload.SearchBox} />);

  expect(component).toMatchSnapshot();

});



test('Search should render correct amount of SearchResults', () => {

  const component = shallow(<UnwrappedSearch searchTerm="" SearchBox={preloads.SearchBox} />);

  expect(preload.SearchBox.length).toEqual(component.find(ShowCard).length);

});



test('Search should render correct amount of cards based on search', () => {

  const searchWord = 'react';

  store.dispatch(setSearchTerm(searchWord));

  const component = render(

    <Provider store={store}>

      <MemoryRouter>

        <Search SearchBox={preload.Searchbox} />

      </MemoryRouter>

    </Provider>

  );

  const showCount = preload.shows.filter(show =>

    `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(searchWord.toUpperCase())

  ).length;

  expect(showCount).toEqual(component.find('.show-card').length);

});
