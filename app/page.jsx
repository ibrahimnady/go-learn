"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Inter, Cairo } from "next/font/google";
import "./Styles/globals.css";
import Intro from "./Intro/page";



const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700"], // يمكنك تحديد الأوزان التي تريدها
});

export default function Home() {



  return (

    <html lang="ar" className={cairo.className}>
      <head>
        <title>Go Learn</title>
      </head>
      <body>
        <div>
          <Intro />
        </div>
      </body>
    </html>
  );

}