import Image from "next/image";
import css from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={css.hero}>
      <Image
        src={"/heroImage.jpg"}
        alt={"login page image"}
        width={1440}
        height={700}
        className={css.image}
        priority
      />

      <div className={css.textBlock}>
        <h1 className={css.mainTitle}>Find your perfect rental car</h1>
        <h2 className={css.secondaryTitle}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <Link href={"/catalog"} className={css.button}>
          View Catalog
        </Link>
      </div>
    </div>
  );
}
