import { addDoc, getFirestore, collection } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContextProvider'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import Ticket from './Ticket';

const TestFormulario = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const {cart, buyAll} = useContext(CartContext)



    let  total =0;
    cart.forEach(item => {
        total+=item.price*item.cant;
    });

    const terminarCompra = () =>{
        let date = new Date();
        const order = {
            buyer: {name: {name}, email: {email}, phone: {phone}},
            items: {cart},
            date: {date},
            total: {total}
        }
        const db = getFirestore();
        const ordersCollection = collection(db, 'compras');
        addDoc(ordersCollection, order).then(({id}) => console.log(id))
    }
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: '', 
                    telefono: ''
				}}
				validate={(valores) => {
					let errores = {};

                    setName(valores.nombre)
					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

                    setEmail(valores.correo)
					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

                    setPhone(valores.telefono)
                    //validacion telefono
                    if(!valores.telefono){
                        errores.telefono = 'Por favor ingrese un telefono'
                    }

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
                    terminarCompra();
                    buyAll();
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					// setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
						<div>
							<label htmlFor="nombre" onChange={(e) =>{
                                setName(e.currentTarget.value)
                            }}>Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="John Doe"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="correo" onChange={(e) =>{
                                setEmail(e.currentTarget.value)
                            }}>Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>
                        <div>
							<label htmlFor="telefono" onChange={(e) =>{
                                setPhone(e.currentTarget.value)
                            }}>Telefono</label>
							<Field
								type="number" 
								id="telefono" 
								name="telefono" 
								placeholder="+54 9 ..." 
							/>
							<ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
						</div>
						<button to='/' type="submit">Enviar</button>
						{formularioEnviado && <Ticket></Ticket>}
					</Form>
				)}
			</Formik>
		</>
	);
}
 
export default TestFormulario;