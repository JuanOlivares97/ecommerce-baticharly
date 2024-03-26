'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [rut, setRut] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!showPasswordForm) {
            if (
                name &&
                firstName &&
                lastName &&
                rut &&
                phone &&
                email &&
                confirmEmail === email &&
                termsAccepted
            ) {
                setShowPasswordForm(true);
            } else {
                alert('Por favor, complete todos los campos correctamente.');
            }
        } else {
            if (password === confirmPassword) {
                // Handle registration logic here
                console.log('Name:', name);
                console.log('First Name:', firstName);
                console.log('Last Name:', lastName);
                console.log('RUT:', rut);
                console.log('Phone:', phone);
                console.log('Email:', email);
                console.log('Password:', password);
            } else {
                alert('Las contraseñas no coinciden.');
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen text-yellow-500">
            <div className="bg-black p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-6">
                    <Image
                        src="/img/BotiCharly-logotipos.svg"
                        alt="BotiCharlyLogo"
                        className=""
                        width={176}
                        height={176}
                    />
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
                <form onSubmit={handleSubmit}>
                    {!showPasswordForm ? (
                        <>
                            <div className="mb-4">
                                <label htmlFor="name" className="block font-bold mb-2">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={classInputs}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="firstName" className="block font-bold mb-2">
                                    Primer apellido
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className={classInputs}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="lastName" className="block font-bold mb-2">
                                    Segundo apellido
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className={classInputs}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="rut" className="block font-bold mb-2">
                                    RUT
                                </label>
                                <input
                                    type="text"
                                    id="rut"
                                    value={rut}
                                    onChange={(e) => setRut(e.target.value)}
                                    className={classInputs}
                                    required
                                />
                                <span>Ej: 12345678-9</span>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block font-bold mb-2">
                                    Teléfono
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className={classInputs}
                                    required
                                />
                                <span>Ej: 9 1234 9876</span>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block font-bold mb-2">
                                    Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={classInputs}
                                    required
                                />
                                <span>Ej: micorreo@gmail.com</span>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmEmail" className="block font-bold mb-2">
                                    Confirmar correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="confirmEmail"
                                    value={confirmEmail}
                                    onChange={(e) => setConfirmEmail(e.target.value)}
                                    className={classInputs}
                                    required
                                />
                                <span>Ej: micorreo@gmail.com</span>
                            </div>
                            <div className="mb-6">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="termsAccepted"
                                        checked={termsAccepted}
                                        onChange={(e) => setTermsAccepted(e.target.checked)}
                                        className="mr-2 focus:ring-yellow-500"
                                    />
                                    <label htmlFor="termsAccepted" className="font-bold">
                                        He leído y acepto los Términos del servicio y política de privacidad.
                                    </label>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-4">
                                <label htmlFor="password" className="block font-bold mb-2">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={classInputs}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block font-bold mb-2">
                                    Confirmar contraseña
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={classInputs}
                                    required
                                />
                            </div>
                        </>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300"
                    >
                        {showPasswordForm ? 'Registrarse' : 'Continuar'}
                    </button>
                </form>
            </div>
        </div>
    );
};


const classInputs = "w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
export default RegisterPage; 