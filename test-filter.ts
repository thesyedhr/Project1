import { BAKERY_PRODUCTS } from './src/data/products.ts';
const selectedDietary = 'Vegetarian';
const filtered = BAKERY_PRODUCTS.filter(item => {
  return !item.dietary?.includes(selectedDietary as any) && !item.tags?.includes(selectedDietary);
});
console.log(filtered.map(p => ({ name: p.name, dietary: p.dietary })));
