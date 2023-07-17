import { renderHook, act } from '@testing-library/react-hooks';
import { useInputValue } from './useInputValue';

test('useInputValue updates value correctly', () => {
 const { result } = renderHook(() => useInputValue(''));

 expect(result.current.value).toBe('');

 act(() => {
  result.current.onChange({ target: { value: 'Hello' } });
 });

 expect(result.current.value).toBe('Hello');

 act(() => {
  result.current.onChange({ target: { value: '' } });
 });

 expect(result.current.value).toBe('');

 act(() => {
  result.current.onChange({ target: { innerText: 'World' } });
 });

 expect(result.current.value).toBe('World');
});
