import React, { useState }  from 'react';
import styled from "styled-components";
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
import Fade from 'react-reveal/Fade';

init("user_nHGPz9w6KzGj4lW3nq4MZ");

const Wrapper = styled.div`
    width:100%;
    flex-grow:1;
    background-color:${props => props.theme.offBlack};
    z-index:2;
    border-radius:0 0 10px 10px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    padding-bottom:20px;
    text-align:center;
    /* max-width:1400px; */
    
    @media (max-width: 700px), (max-height:700px) {
        padding:5px;
        text-align:center;
    }

    & h2 {
        color:white;
        font-size:2.3rem;
        @media (max-width: 700px), (max-height:700px) {
            font-size:1rem;
        }
    }
    & h3 {
        color:white;
        font-size:1.9rem;
        & span {
            color:#ff4338;
        }
        @media (max-width: 700px), (max-height:700px) {
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
        text-align:start;
        background-color:${props => props.theme.secondaryColorHover};
        @media (max-width: 700px), (max-height:700px) {
            width:98%;
            padding:0px;
        }
        & label {
            color:white;
            font-size:1.2rem;
            margin-bottom:2px;
            padding:5px;
            @media (max-width: 700px), (max-height:700px) {
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
            @media (max-width: 700px), (max-height:700px) {
                margin-bottom:10px;
            }
        }
        & .input {
            padding:20px;
            border-radius:5px;
            margin-bottom:5px;
            font-size:1.2rem;
            border:0;
            @media (max-width: 700px), (max-height:700px) {
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
            @media (max-width: 700px), (max-height:700px) {
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
            @media (max-width: 700px), (max-height:700px) {
                width:100%;
            }
            
            &:hover {
               background-color:#fc5a51;
            }
        }
    }

    .loadingContainer {
        position:absolute;
        width:100%;
        height:100%;
        background-color:red;
        z-index:5;
    }
    .hidden {
        display:none;
    }
`


const ContactForm = () => {
    let [loading, setLoading] = useState(false);
    
    const form = document.querySelector('#contactForm');

    const { watch, register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        setLoading(true)
        sendForm('port_contact_form', 'template_85oyrbv', '#contactForm')
            .then((res) => {
                form.reset();
                setLoading(false)
                toast.success('Your message has been sent!')
                
            })
            .catch((err) => {
                setLoading(false)
                toast.error('Email failed to send, please try again later.')
            });
    }

    const message = watch('message') || '';
    const remainingMessageChars = 1500 - message.length;

    return (
        <Wrapper>
            {(loading) 
                ? <ClipLoader loading={loading} size={150} />
                : <React.Fragment/>
            }
            
            <Fade className="test" delay={300}>
                <h2>You can email me. <span>@ </span>owenhedwards@gmail.com</h2>
                <h3>...or give me a call. <span>@ </span>+44 7468966914</h3>
                <h3>...or send me a message...</h3>
                <form className={loading ? 'hidden' : 'visible'} id='contactForm' onSubmit={handleSubmit(onSubmit)}>
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
            </Fade>
        </Wrapper>     
    ) 
}


export default ContactForm;