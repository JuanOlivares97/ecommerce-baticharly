'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center h-screen text-yellow-500">
      <div className="bg-black p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-6">
          <Image src="/img/BotiCharly-logotipos.svg" alt="BotiCharlyLogo" className="" width={176} height={176}/>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center ">Inicia sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-bold mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:yellow-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="mt-4 text-center">
          ¿Primera vez en BotiCharly?{' '}
          <button className="text-yellow-500 hover:text-yellow-700"><Link href="/auth/register">Crear una cuenta</Link></button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;