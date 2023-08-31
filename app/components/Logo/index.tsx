"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./logo.module.scss";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={100}
      height={30}
      className={styles.logo}
    />
  );
};

export default Logo;
