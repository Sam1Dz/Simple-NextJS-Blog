import Image from "next/image";

import { Avatar, Typography } from "@mui/material";

import styles from "@/styles/hero.module.css";

function HeroComponent() {
  return (
    <section className={styles.hero}>
      <div className={styles.acrylicEffect}>
        <Image
          fill
          src="/images/site/hero-background.jpg"
          alt="Hero Background"
          priority
          className={styles.backgoroundImage}
        />
      </div>
      <div className={styles.heroProfile}>
        <Avatar
          sx={{
            width: 300,
            height: 300,
            boxShadow: "0 1px 8px 16px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            m: "auto",
          }}
        >
          <Image
            src="/images/site/sam1dz-pp.jpg"
            alt="Sam1Dz Profile Photo"
            width={300}
            height={300}
          />
        </Avatar>

        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ mt: "1rem" }}
        >
          Hi, i&apos;m &quot;Sam1Dz&quot;
        </Typography>
        <Typography variant="h5" component="p">
          This is just an example of a Web Blog created by NextJS
        </Typography>
        <Typography variant="overline" component="p">
          &quot;Enhanced version from NextJS course by Maximilian
          Schwarzmüller&quot;
        </Typography>
      </div>
    </section>
  );
}

export default HeroComponent;
