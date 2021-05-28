import React, { useEffect, useState }  from 'react';
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";

init("user_nHGPz9w6KzGj4lW3nq4MZ");

const Wrapper = styled.div`
    height:100%;
    width:98%;
    background-color:#1d1d1d;
    z-index:2;
    border-radius:0 0 10px 10px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    & h2 {
        color:white;
        font-size:2rem;
    }
    & h3 {
        color:white;
        font-size:2rem;
        & span {
            color:#ff4338;
        }
    }
    & form {
        width:80%;
        height:auto;
        display:flex;
        flex-direction:column;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        padding:30px;
        & p {
            color:white;
            margin-bottom:50px;
        }
        & .input {
            padding:20px;
            border-radius:5px;
            margin-bottom:5px;
        }
        & textarea {
            padding:20px;
            border-radius:5px;
            margin-bottom:5px; 
        }
        & .submitButton {
            border:0;
            height:60px;
            margin:0 auto;
            width:30%;
            background-color:#ff4338;
            border-radius:5px;
            transition:all 0.5s;
            cursor: pointer;
            color:white;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:1.3rem;
            
            &:hover {
               background-color:#fc5a51;
            }
        }
    }
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
                <h2>You can send me a message...</h2>
                <form id='contactForm' onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        className="input"
                        placeholder='Subject' 
                        type='text' 
                        {...register("subject", {required:true} )}
                        maxLength='30'
                        aria-invalid={errors.subject ? "true" : "false"}
                    /> 
                    {errors.subject?.type === 'required' && "Subject is required." }
    
                    <input 
                        className="input"
                        {...register("email", {required:true})} 
                        placeholder='Your email' 
                        type='email'
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email?.type === 'required' && "Email is required." }
    
                    <textarea 
                        {...register("message", {required:true})} 
                        placeholder='Your message...' 
                        aria-invalid={errors.email ? "true" : "false"}
                        maxLength='1500'
                    />
                    <p className="remainingMessageChars">{remainingMessageChars} characters remaining.</p>
                    {errors.message?.type === 'required' && "A message is required." }
    
                    <input className="submitButton" type='submit' value='send'/>
                </form>


                <h2>...or give me a call.</h2>
                <h3><span>@</span>0784562134</h3>
                
            </Wrapper>
                
        )
    }
    
}


export default ContactForm;