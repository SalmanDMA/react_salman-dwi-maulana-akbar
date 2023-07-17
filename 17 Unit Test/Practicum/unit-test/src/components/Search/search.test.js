import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import Search from './Search';

jest.mock('axios');

describe('Search component', () => {
 it('fetches and displays stories when search button is clicked', async () => {
  const mockData = {
   hits: [
    { objectID: '1', title: 'Story 1', url: 'https://example.com/story1' },
    { objectID: '2', title: 'Story 2', url: 'https://example.com/story2' },
   ],
  };

  axios.get.mockResolvedValueOnce({ data: mockData });

  render(<Search />);

  const input = screen.getByPlaceholderText('Tulis Cerita');
  const button = screen.getByText('Cari Cerita');

  fireEvent.change(input, { target: { value: 'test' } });
  fireEvent.click(button);

  expect(axios.get).toHaveBeenCalledWith('http://hn.algolia.com/api/v1/search?query=test');

  await waitFor(() => {
   expect(screen.getByText('Daftar Cerita')).toBeInTheDocument();
   expect(screen.getByText('Story 1')).toBeInTheDocument();
   expect(screen.getByText('Story 2')).toBeInTheDocument();
  });
 });

 it('displays error message when API request fails', async () => {
  const errorMessage = 'Network Error';

  axios.get.mockRejectedValueOnce(new Error(errorMessage));

  render(<Search />);

  const input = screen.getByPlaceholderText('Tulis Cerita');
  const button = screen.getByText('Cari Cerita');

  fireEvent.change(input, { target: { value: 'test' } });
  fireEvent.click(button);

  expect(axios.get).toHaveBeenCalledWith('http://hn.algolia.com/api/v1/search?query=test');

  await waitFor(() => {
   expect(screen.getByText('Ada yang error ...')).toBeInTheDocument();
  });
 });
});
