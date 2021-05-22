import React, { useEffect, useState }  from 'react';
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";

init("user_nHGPz9w6KzGj4lW3nq4MZ");

const Wrapper = styled.div`
    height:100%;
    width:100%;
    background-color:purple;
`


const ContactForm = () => {
    let [loading, setLoading] = useState(false);
    
    const form = document.querySelector('#contactForm');

    const { watch, register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        setLoading(true)
        sendForm('default_service', 'template_85oyrbv', '#contactForm')
            .then((res) => {
                form.reset();
                setLoading(false)
                toast.success('Message successfully sent.')
                
            })
            .catch((err) => {
                setLoading(false)
                toast.error('Email failed to send, please try again later.')
            });
    }

    const message = watch('message') || '';
    const remainingMessageChars = 1500 - message.length;

    if(loading){
        return(
            <ClipLoader loading={loading} size={150} />
        )
    }
    else {
        return (
            <Wrapper>
    
                <form id='contactForm' onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        placeholder='Subject' 
                        type='text' 
                        {...register("subject", {required:true} )}
                        maxLength='30'
                        aria-invalid={errors.subject ? "true" : "false"}
                    /> 
                    {errors.subject?.type === 'required' && "Subject is required." }
    
                    <input 
                        {...register("email", {required:true})} 
                        placeholder='Email' 
                        type='email'
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email?.type === 'required' && "Email is required." }
    
                    <textarea 
                        {...register("message", {required:true})} 
                        placeholder='Message...' 
                        aria-invalid={errors.email ? "true" : "false"}
                        maxLength='1500'
                    />
                    <p className="remainingMessageChars">{remainingMessageChars}</p>
                    {errors.message?.type === 'required' && "A message is required." }
    
                    <input type='submit' value='send'/>
                </form>
                
            </Wrapper>
                
        )
    }
    
}


export default ContactForm;