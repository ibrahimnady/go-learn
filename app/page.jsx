"use client"
import React from 'react';
import Intro from "./Intro/page";
import { useDispatch, useSelector } from 'react-redux';
import { logout, logIn } from './redux/slices/authSlice';


export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);
  return (
    <div>

      <Intro />
      <div>{data.loggedIn ? "true" : "false"}</div>

    </div>
  );
}
