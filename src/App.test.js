import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import App from './App';
import CommentBox from './Components/CommentBox/CommentBox.jsx';
import CommentList from './Components/CommentList/CommentList';

describe('MAIN APP', () => {
  test('renders component CommentBox', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(CommentBox).length).toEqual(1);
  });

  test('renders CommentList', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(CommentList).length).toEqual(1);
  });
  
  // beforeEach(() => {
  //   const wrapper = shallow(<App />);
  // });
});
