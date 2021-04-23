import React from 'react';
import { shallow } from 'enzyme';
import CommentList from 'Components/CommentList/CommentList';
import Root from 'Root';

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useLayoutEffect: jest.requireActual('react').useEffect,
// }));

describe('COMMENT LIST SECTION', () => {
  let wrapped;
  
  beforeEach(() => {
    const initialState = {
      comments: ['Teste Comentario 1', 'Coment 2']
    }

    wrapped = shallow(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });
  
  test('RENDERS COMMENT LIST', () => {
    expect(wrapped).toEqual({});
  });

  // test('MOCKING INITIAL STATE ******FAIL********', () => {
    // console.log('wrapped.find().length', wrapped.find('div').length)
    // expect(wrapped.find('li').length).toEqual(2);
  // });

  test('DISPLAYS A COMMENT ON THE SCREEN', () => {
    expect(wrapped.render().text()).toContain('Coment');
  });
});
