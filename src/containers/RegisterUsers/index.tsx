//Author: Erik Rodriguez
'use client'; // This is a client component 👈🏽
import { useRouter } from 'next/navigation'
import { failStatusCodes } from '../../helpers/statusCodes';
import React, { use } from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './form.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { string } from 'yup';
import { Loader } from '../../components/Loader';
import { Input } from '../../components/Input';



const schema = yup
    .object({
        email: yup
            .string()
            .email('Invalid email address')
            .required('Email is required!'),
        password: string()
        .required()
        .min(8, 'Password length should be 8 chars minimum.')
        .matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/, 'Password is invalid check requirements.'),
        username: string()
		.required('Required username')
        .min(5, '5 chars minimun.'),
    })
    .required();
const RegisterUser = () => {
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
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        console.log(userInfo, "user info")
        if (Object.keys(userInfo).length !== 0) {
            async function fetchData(userInfo: yup.ObjectShape) {
                setLoader(true);
                const response = await fetch(process.env.NEXT_PUBLIC_SERVER + process.env.NEXT_PUBLIC_REGISTER_USER, {
                    method: 'POST',
                    body: JSON.stringify(userInfo),
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    credentials: 'include', //in order to set cookies in browser if there are from the server
                });
                setStatusCode(response.status)
                if (!response.ok) {
                    setLoader(false);
                    console.log(response.status, 'response status')
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
            <p className='title'> User Registration</p>
            <div >
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input register={register} name='email' placeholder='Email' type='email' />
                    <p>{errors.email?.message}</p>
                    <Input register={register} name='password' placeholder='Password' type='password' />
                    <p>{errors.password?.message}</p>
                    <Input register={register} name='username' placeholder='Username' type='username' />
                    <p>{errors.username?.message}</p>
                    {failedStatusCode && (<p>Fallo al autenticar</p>)}
                    {loader && <Loader />}
                    <input type='submit' value='Submit' />
                    
                </form>      
        
            
            </div>
            {/* <div className={'password-req'}>
                <p>Note password min requirements:</p>
                <p>Password must contain one digit from 1 to 9,
                    one lowercase letter, one uppercase letter,
                    one special character,
                    no space, and it must be 8-16 characters long.</p>
            </div> */}
        </>
    );
};

export default RegisterUser;
