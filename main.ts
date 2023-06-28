type Obj = {
  price: number;
  discount: number;
  isInstallment: boolean;
  month: number;
};
const totalPrice = (obj: Obj) => {
  let discountResult = (obj.discount / 100) * obj.price;
  let finalCost = discountResult / obj.month;
  return finalCost;
};

let result = totalPrice({
  price: 10000,
  discount: 46,
  isInstallment: true,
  month: 5,
});
console.log(result);
