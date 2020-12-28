import React from 'react';
import { shallow } from 'enzyme';
import CommentBox from 'Components/CommentBox/CommentBox';
import Root from 'Root';

let wrapper;
  
beforeEach(() => {
  wrapper = shallow(<Root><CommentBox /></Root>);
});

describe("COMMENT BOX AREA BASICS", () => {
  it('renders textarea', () => {
    expect(wrapper.find("textarea").length).toEqual(1);
  });

  it('renders button', () => {
    expect(wrapper.find("button").length).toEqual(1);
  });

  afterEach(() => {
    wrapper.unmount();
  });
});


describe("COMMENT BOX AREA CHANGING EVENTS", () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', {
      target: { value: 'novo comentario' }
    });

    wrapper.update();
  });
  
  it('renders after type and changing events', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('novo comentario');
  });

  it('renders and submit event', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();

    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });

});
