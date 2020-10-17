import React from 'react';
import { render } from '@testing-library/react';
import CommentBox from './CommentBox.jsx';

xtest('renders Comment Box', () => {
  const linkElement = render(<CommentBox />).getByText(/Comment Box/i);

  expect(linkElement).toBeInTheDocument();
});
