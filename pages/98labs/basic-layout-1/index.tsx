import React, { useEffect, useState, useCallback } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { CreditCard, GiftCard, PayPal } from "../../../components";

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

const BasicLayout1: NextPage = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("Credit card");
  const [state, setState] = useState<OrderData>({
    products: [],
    fees: [],
    total: 0,
  });

  let child;
  switch (paymentMethod) {
    case "Credit card":
      child = <CreditCard total={state.total} />;
      break;
    case "Gift card":
      child = <GiftCard />;
      break;
    case "PayPal":
      child = <PayPal />;
      break;
    default:
  }

  const handlePaymentMethodClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      document.querySelector(".is-active")?.classList.remove("is-active");
      e.currentTarget.classList.toggle("is-active");
      setPaymentMethod(e.currentTarget.innerHTML);
    },
    []
  );

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
        setState({
          ...state,
          products: products.data,
          fees: fees.data,
          total: total,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className="basic-layout">
      <Head>
        <title>98 Labs Coding Exercises - Basic Layout 1</title>
      </Head>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="paymentForm">
          <p className="fw-bold text-uppercase text-center">Demo Store</p>
          <h4>Checkout</h4>
          <div className="paymentForm__products">
            <h5 className="py-1">Products</h5>
            <table>
              <tbody>
                {state.products &&
                  state.products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td className="ps-3">
                          <Link href={product.url}>
                            <a>{product.name}</a>
                          </Link>
                        </td>
                        <td className="paymentForm__price">${product.price}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="paymentForm__shipping">
            <h5 className="py-1">Shipping Method</h5>
            <table>
              <tbody>
                {state.fees &&
                  state.fees.map((fee) => {
                    return (
                      <tr key={fee.id}>
                        <td className="ps-3">
                          <p>{fee.name}</p>
                        </td>
                        <td className="paymentForm__price">${fee.price}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="paymentForm__payment">
            <h5 className="pb-2">Payment Method</h5>
            <div className="d-flex justify-content-between">
              <div className="col pe-2">
                <button
                  className="btn btn-primary btn-sm w-100 is-active"
                  onClick={handlePaymentMethodClick}
                >
                  Credit card
                </button>
              </div>
              <div className="col pe-2">
                <button
                  className="btn btn-primary btn-sm w-100"
                  onClick={handlePaymentMethodClick}
                >
                  Gift card
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-primary btn-sm w-100"
                  onClick={handlePaymentMethodClick}
                >
                  PayPal
                </button>
              </div>
            </div>
            {child}
          </div>
          <div className="text-center">
            <Link href="/98labs">Back to Home</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicLayout1;
