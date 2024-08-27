import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  public quantityGood: any;

  constructor() {
    this.quantityGood = [];
  }

  add(item: Buyable): void {
    const index = this.getCartindex(item.id);
    if (index === -1) {
      this.quantityGood.push([this._items.push(item) - 1, 1]);
    } else if (this._items[index].multiple) {
      this.quantityGood.find((element: number[]) => element[0] === index)[1]++;
    }
  }

  summ(): number {
    let sum = 0;
    this._items.map((item) => sum += (item.price * this.quantity(item.id)));
    return sum;
  }

  summDiscount(discount: number): number {
    return this.summ() * (1 - (discount / 100));
  }

  getCartindex(id: number): number {
    return this._items.findIndex((item) => item.id === id);
  }

  remove(id: number): void {
    const quantity = this.quantity(id);
    if (quantity !== 0) {
      const index = this.getCartindex(id);
      if (quantity === 1) {
        this._items.splice(index, 1);
        // const a = this.quantityGood.indexOf(this.quantityGood.find((element: number[]) => element[0] === index));
        this.quantityGood.splice(index, 1);
        for (const item of this.quantityGood) {
          if (item[0] > index) {
            item[0]--;
          }
        }
      } else {
        this.quantityGood.find((element: number[]) => element[0] === index)[1]--;
      }
    }
  }

  get items(): (number | Buyable)[][] {
    const arrItemsCart = [];
    for (const item of this._items) {
      arrItemsCart.push([item, this.quantity(item.id)]);
    }
    return [...arrItemsCart];
  }

  quantity(id: number): number {
    const index = this.getCartindex(id);
    return this.quantityGood.find((element: number[]) => element[0] === index) !== undefined ? this.quantityGood.find((element: number[]) => element[0] === index)[1] : 0;
  }
}
