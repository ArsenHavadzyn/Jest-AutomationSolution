import { validateUsername, validatePassword } from '../data/authValidation.js';

test('Перевірка коректного імені користувача', () => {
  expect(validateUsername('standard_user')).toBe(true);
});

test('Перевірка пустого імені користувача', () => {
  expect(validateUsername('')).toBe(false);
});

test('Перевірка мінімальної довжини пароля (6 символів)', () => {
  expect(validatePassword('123456')).toBe(true);
});

test('Перевірка короткого пароля (менше 6 символів)', () => {
  expect(validatePassword('12345')).toBe(false);
});

test('Перевірка довгого пароля', () => {
  expect(validatePassword('securepassword123')).toBe(true);
});
