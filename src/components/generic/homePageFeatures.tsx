
import * as React from 'react';


export default function HomePageFeatures() {

    return (
        <>
        <section className="bg-primary pb-10">
            <div className="container px-6 py-10 mx-auto">
                <div className='mt-4 text-gray-500 xl:mt-6 text-center'>
                        <h1 className="py-4 text-white uppercase">Descubre nuestras funciones</h1>
                        <hr className='bg-white w-1/4 m-auto' />
                </div>
                
                
                <div className="grid grid-cols-1 max-xl gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

                    
                <div className="rounded-lg bg-white p-6 shadow-md bg-neutral-700 space-y-3 border-2 border-neutral">
                        <span className="inline-block text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Conéctate Directamente</h1>

                        <p className="text-gray-500">
                            Comunícate directamente con los establecimientos con la información de contacto en nuestra plataforma. 
                            Obtén detalles de contacto, direcciones precisas y hasta la opción de llamar directamente desde la aplicación. 
                            Hacemos que conectar con los comercios que aceptan tus métodos de pago preferidos sea más fácil que nunca
                        </p>


                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-md bg-neutral-700 space-y-3 border-2 border-neutral">
                        <span className="inline-block text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Explora y Encuentra</h1>

                        <p className="text-gray-500">
                        Descubre de manera rápida y sencilla los establecimientos y comercios que aceptan tu dinero digital, explora opciones 
                        según tu ubicación, brindándote la información que necesitas al alcance de tu mano.
                        </p>

                    
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow-md bg-neutral-700 space-y-3 border-2 border-neutral">
                        <span className="inline-block text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize">Información Clara y al día</h1>

                        <p className="text-gray-500">
                        Accede a detalles específicos de cada lugar, desde las criptomonedas aceptadas hasta los tipos de tarjetas prepagadas y otros 
                        activos digitales admitidos. 
                        Obtén información precisa sobre las opciones de pago, evitando sorpresas y asegurándote una experiencia de compra sin contratiempos.
                        </p>

                    
                    </div>

                </div>
            </div>
        </section>

        </>
    );
}
