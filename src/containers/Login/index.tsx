//Author: Erik Rodriguez 🤌
'use client'; // This is a client component
import { useRouter } from 'next/navigation'
import { failStatusCodes } from '../../helpers/statusCodes';
import { useMutation } from "react-query";
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './form.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { string } from 'yup';
import { Loader } from '../../components/Loader';
import { Input } from '../../components/Input';
import axios from "axios";


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

	const [statusCode, setStatusCode] = useState(0);

	const options : Object = {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
		withCredentials: true
	};

	const mutation = useMutation((newPost) => {

		return axios.post(process.env.NEXT_PUBLIC_SERVER + process.env.NEXT_PUBLIC_LOGIN_USER, newPost, options)
			.then((response) => {
				console.log(response, 'response');
				//router.push('/browse')
			}, (error) => {
				setStatusCode(error.response?.status)
			});

	}
	);


	const onSubmit = (userCredentials: yup.ObjectShape, e: any) => {
		mutation.mutate(userCredentials);
	};
	console.log(mutation, '')




	const failedStatusCode: boolean = failStatusCodes(statusCode);
	return (
		<>
			{mutation.isError && <span>Error: {mutation.error.message}</span>}
			{mutation.isLoading && <Loader />}
			{mutation.isSuccess && <div>User created!</div> }

			<p className='title'> User login</p>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Input register={register} name='email' placeholder='Email' type='email' />
				<p>{errors.email?.message}</p>
				<Input register={register} name='password' placeholder='Password' type='password' />
				<p>{errors.password?.message}</p>
				{failedStatusCode && (<p>Fallo al autenticar</p>)}
				<input type='submit' value='Submit' />

			</form>




		</>
	);
};

export default RegisterUser;
