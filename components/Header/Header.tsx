"use client";
import css from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={css.headerWrapper}>
      <div className={css.container}>
        <Link href={"/"}>
          <svg width={104} height={16}>
            <use href="/logo.svg#logo"></use>
          </svg>
        </Link>
        <nav>
          <ul className={css.navList}>
            <li>
              <Link href={"/"} className={pathname === "/" ? css.active : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/catalog"}
                className={pathname === "/catalog" ? css.active : ""}
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
