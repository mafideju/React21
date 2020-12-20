import React from 'react';
import { render } from '@testing-library/react';
import CommentList from './CommentList.jsx';

xtest('renders Comment List', () => {
  const linkElement = render(<CommentList />).getByText(/Comment List/i);

  expect(linkElement).toBeInTheDocument();
});
