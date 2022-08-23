import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: string;
  url: string;
}

interface Fee {
  id: number;
  name: string;
  price: string;
}

interface OrderData {
  products: Product[];
  fees: Fee[];
  total: number;
}

const useGetOrderData = (initialData: OrderData) => {
  const [data, setData] = useState<OrderData>(initialData);

  useEffect(() => {
    (async () => {
      try {
        const products = await axios.get("/data/products.json");
        const fees = await axios.get("/data/fees.json");

        let total: number = 0;
        products.data.forEach((product: Product) => {
          total += parseFloat(product.price);
        });
        fees.data.forEach((fee: Fee) => {
          total += parseFloat(fee.price);
        });
        setData({
          ...data,
          products: products.data,
          fees: fees.data,
          total: total,
        });
      } catch (error) {
        console.log(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data };
};

export default useGetOrderData;
