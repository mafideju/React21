// REACT ECO
import React from 'react';

// TESTING LIBS
import { shallow } from 'enzyme';

// COMPONENTS
import App from 'App';
import CommentBox from 'Components/CommentBox/CommentBox';
import CommentList from 'Components/CommentList/CommentList';


describe('MAIN APP', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  
  test('renders component CommentBox', () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });

  test('renders component CommentList', () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
  });
  
});
