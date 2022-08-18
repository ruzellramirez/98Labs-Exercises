import styles from "./style.module.css";
import Link from "next/link";

interface cardInfo {
  title: string;
  expectations: string;
  address: string;
  url: string;
}

const Card = ({ title, expectations, address, url }: cardInfo) => {
  return (
    <div className="col-lg-6">
      <div className={styles.card}>
        <p>
          <span className="fw-bold">Title: &nbsp;</span>
          {title}
        </p>
        <p>
          <span className="fw-bold">Expectations: &nbsp;</span>
          {expectations}
        </p>
        <p>
          <span className="fw-bold">Addressed to: &nbsp;</span>
          {address}
        </p>
        <div className="text-end mt-4">
          <button className="btn btn-primary btn-sm">
            <Link href={url}>View Solution</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
