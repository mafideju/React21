import React from 'react';
import CommentBox from './CommentBox.jsx';
import { mount, unmount, shallow } from 'enzyme';

describe("COMMENT BOX AREA", () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<CommentBox />);
  });
  
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
