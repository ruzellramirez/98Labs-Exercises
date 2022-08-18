import type { NextPage } from "next";
import styles from "./style.module.css";
import Link from "next/link";
import Head from "next/head";
// import React, { useState, useEffect } from "react";

const BasicLayout1: NextPage = () => {
  return (
    <section>
      <Head>
        <title>98 Labs Coding Exercises - Basic Layout 1</title>
      </Head>
      <div className="container d-flex align-items-center justify-content-center">
        <div className={styles.paymentForm}>
          <p className="fw-bold text-uppercase text-center">Demo Store</p>
          <p className="h4">Checkout</p>
          <div className={styles.paymentForm__tnc__products}>
            <p className="h5 py-1">Products</p>
            <table>
              <tr>
                <td className="ps-3">
                  <Link href="#" className="">
                    <a>
                      Apple® - IPad® with Retina® display Wi-Fi -32GB - White
                    </a>
                  </Link>
                </td>
                <td className={styles.paymentForm__price}>$499.00</td>
              </tr>
              <tr>
                <td className="ps-3">
                  <Link href="#" className="">
                    16GB A Series Walkman Video MP3
                  </Link>
                </td>
                <td className={styles.paymentForm__price}>$130.00</td>
              </tr>
            </table>
          </div>
          <div className={styles.paymentForm__tnc__shipping}>
            <p className="h5 py-1">Shipping Method</p>
            <table>
              <tr>
                <td className="ps-3">
                  <p>FedEx</p>
                </td>
                <td className={styles.paymentForm__price}>$13.99</td>
              </tr>
            </table>
          </div>
          <div className={styles.paymentForm__tnc__payment}>
            <p className="h5 py-1">Payment Method</p>
            <div className="row d-flex justify-content-between">
              <div className="col-4">
                <button className="btn btn-primary w-100">Credit card</button>
              </div>
              <div className="col-4">
                <button className="btn btn-primary w-100">Gift card</button>
              </div>
              <div className="col-4">
                <button className="btn btn-primary w-100">PayPal</button>
              </div>
            </div>
          </div>
          <div id={styles.paymentForm__tnc__payment__cc}>
            {" "}
            <form className={["row", "my-3"].join(" ")}>
              <div
                className={[styles.paymentForm__tnc__cc, "col-lg-7"].join(" ")}
              >
                <label className="form-label fw-bold" htmlFor="cardNumber">
                  Card Number
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  required
                />
                <label className="form-label fw-bold m-0" htmlFor="cardNumber">
                  Valid thru (mm/yy)
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  required
                />
                <label className="form-label fw-bold m-0" htmlFor="cardNumber">
                  Cardholder&apos;s name
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  required
                />
              </div>
              <div className="col-lg-5">
                {" "}
                <label
                  className="form-label pt-4 fw-bold m-0"
                  htmlFor="cardNumber"
                >
                  CVV/CVC
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  required
                />
              </div>
              <div className={styles.paymentForm__tnc}>
                <input
                  className={styles.paymentForm__tnc__checkbox}
                  id="checkbox"
                  type="checkbox"
                />
                <label htmlFor="checkbox">
                  I accept the <a href="#">Terms and Conditions</a>.
                </label>
              </div>
              <button className="btn btn-warning">Place Order ($624.99)</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicLayout1;
