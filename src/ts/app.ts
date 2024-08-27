import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Smartphone from './domain/Smartphone';

const cart = new Cart();
// console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225, false));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900, false));
cart.add(new Movie(1076, 'Мстители', 700, 2012, 'США', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, false));
cart.add(new Movie(1076, 'Мстители', 700, 2012, 'США', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137, false));
cart.add(new Smartphone(1077, 'Galaxy A05', 11000, 'Samsung', 2023, true));
cart.add(new Smartphone(1077, 'Galaxy A05', 11000, 'Samsung', 2023, true));
cart.add(new Smartphone(1077, 'Galaxy A05', 11000, 'Samsung', 2023, true));

console.log(cart.items);
console.log(cart.summ());
console.log(cart.summDiscount(1));
cart.remove(1077);
console.log(cart.items);
console.log(cart.summ());
console.log(cart.summDiscount(1));
cart.remove(1076);
console.log(cart.items);
console.log(cart.summ());
console.log(cart.summDiscount(1));
cart.remove(1078);
console.log(cart.items);
console.log(cart.summ());
console.log(cart.summDiscount(1));
