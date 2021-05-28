import React, { useState }  from 'react';
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
import Fade from 'react-reveal/Fade';

init("user_nHGPz9w6KzGj4lW3nq4MZ");

const Wrapper = styled.div`
    width:98%;
    flex-grow:1;
    background-color:#1d1d1d;
    z-index:2;
    border-radius:0 0 10px 10px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding-bottom:20px;


    
    @media (max-width: 700px) {
        padding:5px;
        text-align:center;
    }

    & h2 {
        color:white;
        font-size:2rem;
        & span {
            color:#ff4338;
        }
        @media (max-width: 700px) {
            font-size:1rem;
        }
    }

    & form {
        width:80%;
        max-width:700px;
        height:auto;
        display:flex;
        flex-direction:column;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        padding:20px;
        @media (max-width: 700px) {
            width:98%;
            padding:0px;
        }
        & label {
            color:white;
            font-size:1.2rem;
            margin-bottom:2px;
            padding:5px;
            @media (max-width: 700px) {
                display:none;
            }
            @media (max-height: 850px) {
                display:none;
            }
        }
        & p {
            color:white;
            margin-bottom:50px;
            padding:5px;
            @media (max-width: 700px) {
                margin-bottom:10px;
            }
        }
        & .input {
            padding:20px;
            border-radius:5px;
            margin-bottom:5px;
            font-size:1.2rem;
            border:0;
            @media (max-width: 700px) {
                padding:10px;
                font-size:0.8rem;
            }
        }
        & textarea {
            padding:20px;
            border-radius:5px;
            margin-bottom:5px; 
            font-size:1.2rem;
            border:0;
            @media (max-width: 700px) {
                padding:10px;
                font-size:0.8rem;
            }
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
            @media (max-width: 700px) {
                width:100%;
            }
            
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
                <Fade delay={300}>
                    <h2>You can send me a message...</h2>
                    <form id='contactForm' onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="subject">Subject</label>
                        <input 
                            id="subject"
                            className="input"
                            placeholder='Subject' 
                            type='text' 
                            {...register("subject", {required:true} )}
                            maxLength='30'
                            aria-invalid={errors.subject ? "true" : "false"}
                        /> 
                        {errors.subject?.type === 'required' && "Subject is required." }
                        <label htmlFor="email">Your email</label>
                        <input 
                            id="email"
                            className="input"
                            {...register("email", {required:true})} 
                            placeholder='Your email' 
                            type='email'
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email?.type === 'required' && "Email is required." }

                        <label htmlFor="message">Your message</label>
                        <textarea 
                            id="message"
                            {...register("message", {required:true})} 
                            placeholder='Your message...' 
                            aria-invalid={errors.email ? "true" : "false"}
                            maxLength='1500'
                        />
                        <p className="remainingMessageChars">{remainingMessageChars} characters remaining.</p>
                        {errors.message?.type === 'required' && "A message is required." }
        
                        <input className="submitButton" type='submit' value='send'/>
                    </form>


                    <h2>...or give me a call. <span>@ </span>+44 7392540684</h2>
                    <h2>...or email me. <span>@ </span>owenhedwards@gmail.com</h2>
                </Fade>
            </Wrapper>
                
        )
    }
    
}


export default ContactForm;