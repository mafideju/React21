// REACT ECO
import React from 'react';

// TESTING LIBS
import { shallow } from 'enzyme';

// COMPONENTS
import App from 'App';
import Root from 'Root';
import CommentBox from 'Components/CommentBox/CommentBox';
import CommentList from 'Components/CommentList/CommentList';
import moxios from 'moxios';


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

describe("TESTES DE SERVIÇOS", () => {
  let wrapper;

  beforeEach(() => {
    // wrapper = mount(<Root><App /></Root>);
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{ name: 'Fetched 1' }, { name: 'Fetched 2' }]
    });
  });
  
  test('render a list o comments', () => {
    wrapper = shallow(<Root><App /></Root>);

    wrapper.find('.button-comments').simulate('click');
    
    setTimeout(() => {
      expect(wrapper.find('li').length).toEqual(2);
      console.log(wrapper.find('.button-comments'))
    }, 100);
    
  });
});

// wrapper.find('LoginForm')
//   .dive()
//   .find('.CLASS_NAME_OF_ELEMENT')
//   .simulate('click');