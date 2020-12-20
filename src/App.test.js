import React from 'react';

import { shallow } from 'enzyme';

import App from './App';
import CommentBox from './Components/CommentBox/CommentBox.jsx';
import CommentList from './Components/CommentList/CommentList';

describe('MAIN APP', () => {
  // beforeEach(() => {
  //   const wrapper = shallow(<App />);
  // });
  
  test('renders component CommentBox', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(CommentBox).length).toEqual(1);
  });

  test('renders component CommentList', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(CommentList).length).toEqual(1);
  });
  
});
