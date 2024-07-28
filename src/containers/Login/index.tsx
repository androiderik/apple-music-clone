//Author: Erik Rodriguez
"use client"; // This is a client component 👈🏽
import { useRouter } from "next/navigation"
import { failStatusCodes } from "../../helpers/statusCodes";


import React, { use } from "react";


import Request from "../../SDK";
import { useEffect, useState } from "react";
import { RegisterUser } from "./Form";
import { useForm } from "react-hook-form";
import "./form.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { string } from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: string().required(),
  })
  .required();
const UserLogin = () => {
  const router = useRouter()


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [fetchedData, setFetchedData] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [statusCode, setStatusCode] = useState(0);

  useEffect(() => {
    if (Object.keys(userInfo).length !== 0) {
      async function fetchData(userInfo: yup.ObjectShape) {
        const response = await fetch("http://localhost:8080/auth/login", {
          method: "POST",
          body: JSON.stringify(userInfo),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          credentials: "include", //in order to set cookies in browser if there are from the server
        });
        setStatusCode(response.status)
        if (!response.ok) {
          console.log(response.status, "response status")
          //throw new Error(response.status);

        } else {
          if (response.status === Number(process.env.NEXT_PUBLIC_SUCCESS_LOGIN)) {
            router.push('/browse')
          }
        }

        const responseData = await response.json();

        setFetchedData(responseData);
      }
      fetchData(userInfo);



    }
  }, [userInfo]);

  const onSubmit = (userCredentials: yup.ObjectShape, e: any) => {
    e.preventDefault();
    setUserInfo(userCredentials);
  };


  const failedStatusCode = failStatusCodes(statusCode);
  return (
    <>
      <p className="title"> User Registration</p>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} />
          <p>{errors.email?.message}</p>
          <input {...register("password")} />
          <p>{errors.password?.message}</p>
          {failedStatusCode && (<p>Fallo al autenticar</p>)}
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default UserLogin;
