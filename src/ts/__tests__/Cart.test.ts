import Cart from '../service/Cart';
import Book from '../domain/Book';
import Movie from '../domain/Movie';
import Smartphone from '../domain/Smartphone';

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add to cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1076, 'Мстители', 700, 2012, 'США', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, false));

  expect(cart.items).toEqual([[new Movie(1076, 'Мстители', 700, 2012, 'США', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, false), 1]]);
});

test('summ', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false));
  cart.add(new Movie(1076, 'Мстители', 700, 2012, 'США', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, false));

  expect(cart.summ()).toBe(2700);
});

test('summDiscount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false));
  cart.add(new Movie(1076, 'Мстители', 700, 2012, 'США', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, false));

  expect(cart.summDiscount(1)).toBe(2673);
});

test('remove multiple true', () => {
  const cart = new Cart();
  cart.add(new Smartphone(1077, 'Galaxy A05', 11000, 'Samsung', 2023, true));
  cart.add(new Smartphone(1077, 'Galaxy A05', 11000, 'Samsung', 2023, true));
  cart.remove(1077);

  expect(cart.items).toEqual([[new Smartphone(1077, 'Galaxy A05', 11000, 'Samsung', 2023, true), 1]]);
});

test('remove multiple false', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false));
  cart.add(new Movie(1076, 'Мстители', 700, 2012, 'США', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, false));
  cart.remove(1001);

  expect(cart.items).toEqual([[new Movie(1076, 'Мстители', 700, 2012, 'США', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, false), 1]]);
});

test('remove nonexistent', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false));
  cart.remove(1076);

  expect(cart.items).toEqual([[new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false), 1]]);
});
