import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NameForm from './FormCoding';

describe('NameForm', () => {
 afterEach(() => {
  jest.restoreAllMocks(); // Restore all mocked functions after each test
 });

 test('renders form correctly', () => {
  const { getByLabelText, getByText } = render(<NameForm />);

  // Assert form elements are rendered correctly
  expect(getByLabelText(/nama lengkap/i)).toBeInTheDocument();
  expect(getByLabelText(/email/i)).toBeInTheDocument();
  expect(getByLabelText(/no handphone/i)).toBeInTheDocument();
  expect(getByLabelText(/latar belakang pendidikan/i)).toBeInTheDocument();
  expect(getByLabelText(/kelas coding yang dipilih/i)).toBeInTheDocument();
  expect(getByLabelText(/foto surat kesungguhan/i)).toBeInTheDocument();
  expect(getByLabelText(/harapan untuk coding bootcamp ini/i)).toBeInTheDocument();
  expect(getByText(/submit/i)).toBeInTheDocument();
  expect(getByText(/reset/i)).toBeInTheDocument();
 });

 test('submits form with valid data', () => {
  const { getByLabelText, getByText } = render(<NameForm />);
  jest.spyOn(window, 'alert').mockImplementation(() => {}); // Mock the alert function

  // Simulate user input
  fireEvent.change(getByLabelText(/nama lengkap/i), { target: { value: 'John Doe' } });
  fireEvent.change(getByLabelText(/email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(getByLabelText(/no handphone/i), { target: { value: '1234567890' } });
  fireEvent.click(getByLabelText(/latar belakang pendidikan/i)); // Update the selector for the selected option
  fireEvent.change(getByLabelText(/kelas coding yang dipilih/i), { target: { value: 'golang' } });
  fireEvent.change(getByLabelText(/foto surat kesungguhan/i), {
   target: { files: [new File([''], 'test.png', { type: 'image/png' })] },
  });
  fireEvent.change(getByLabelText(/harapan untuk coding bootcamp ini/i), { target: { value: 'I hope to learn a lot!' } });

  fireEvent.click(getByText(/submit/i));

  // Assert expected behavior
  expect(window.alert).toHaveBeenCalledWith('Data Pendaftar "John Doe" Berhasil Diterima');

  // Restore the original alert function
  window.alert.mockRestore();

  // Assert form reset
  expect(getByLabelText(/nama lengkap/i).value).toBe('');
  expect(getByLabelText(/email/i).value).toBe('');
  expect(getByLabelText(/no handphone/i).value).toBe('');
  expect(getByLabelText(/latar belakang pendidikan/i).checked).toBe(false); // Update the selector for the selected option
  expect(getByLabelText(/kelas coding yang dipilih/i).value).toBe('');
  expect(getByLabelText(/foto surat kesungguhan/i).value).toBe('');
  expect(getByLabelText(/harapan untuk coding bootcamp ini/i).value).toBe('');
 });

 test('displays error messages for invalid data', () => {
  const { getByLabelText, getByText } = render(<NameForm />);

  // Simulate user input with invalid data
  fireEvent.change(getByLabelText(/nama lengkap/i), { target: { value: '123' } });
  fireEvent.change(getByLabelText(/email/i), { target: { value: 'invalid-email' } });
  fireEvent.change(getByLabelText(/no handphone/i), { target: { value: '123' } });

  fireEvent.click(getByText(/submit/i));

  // Assert error messages
  expect(getByText(/nama lengkap harus berupa huruf/i)).toBeInTheDocument();
  expect(getByText(/email tidak sesuai/i)).toBeInTheDocument();
  expect(getByText(/no handphone tidak sesuai/i)).toBeInTheDocument();
 });
});
