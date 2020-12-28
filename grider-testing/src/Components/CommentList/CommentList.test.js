import React from 'react';
import { shallow } from 'enzyme';

import CommentList from 'Components/CommentList/CommentList';
import Root from 'Root';

describe('COMMENT LIST SECTION', () => {
  let commentList;
  const initialState = {
    comments: ['1', '2']
  }

  commentList = shallow(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  
  test('renders Comment List', () => {
    expect(commentList).toEqual({});
  });

  test('mocking initial state', () => {
    console.log('commentList.find().length', commentList.find('li').length)
    expect(commentList.find('li').length).toEqual(2);
  });

});
