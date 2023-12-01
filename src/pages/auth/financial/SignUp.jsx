import React from 'react'
import { LogoBlue } from '../../../assets/common'
import { GoogleLogo, CheckCircle } from '../../../assets/signup'
import InputField from '../../../components/common/InputField'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router'


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function SignUp() {
    const navigate = useNavigate()


    const ValidationSchema = yup.object({
        email: yup.string().email('Invalid email address').required('Email address is required'),
        name: yup.string('Enter First Name of Employee').required('Institution Name is required'),
    });

    const formik = useFormik(
        {
            initialValues: { "name": "", "email": "" },
            validationSchema: ValidationSchema,
            enableReinitialize: true,
            onSubmit: async (values) => {
                localStorage.setItem('email', values.email)
                // alert(JSON.stringify(values))
                await sleep(1000)
                navigate(`/financial/verification`)
            }
        }
    )
    return (
        <main className='h-screen flex justify-center max-sm:px-6'>

            <div className='pt-[105px] max-w-[454px]'>
                <div className='flex justify-center'>
                    <img src={LogoBlue} alt="" />
                </div>
                <div className='mt-[56px] text-left'>
                    <h1>Welcome to Kanda </h1>
                    <p className='mt-2 font-normal text-sm text-fadedBlue'>Liquidity at you fingertips</p>

                    <button className='text-white bg-kandaBlack font-bold py-4 rounded-2xl mt-6 w-full inline-flex justify-center items-center gap-2'>
                        <span className='w-8 h-8 bg-white flex justify-center items-center rounded-xl'><img src={GoogleLogo} alt="" /></span>
                        Sign-up with google</button>
                </div>

                <div className='w-full text-center border-b border-b-[#EEEEEE] leading-[0.1px] my-10 text-sm'>
                    <span className='text-[#6E7B89] px-2.5 bg-white'>or</span>
                </div>

                <form method='POST'>

                    <div className='space-y-6'>
                        <InputField label={`Financial institution name`} placeHolder={`Enter institution name`} name={`name`} value={formik.values.name} onChange={formik.handleChange} error={formik.touched.name && formik.errors.name} errorText={formik.errors.name}/>

                        <div className='relative'>
                            <InputField label={`Institution email`} placeHolder={`Enter email`} name={`email`} onChange={formik.handleChange} value={formik.values.email} type={'email'} error={formik.touched.email && formik.errors.email} errorText={formik.errors.email}/>

                            {formik.touched.email && !formik.errors.email && (
                                <img src={CheckCircle} alt="" className='absolute top-[63%] right-4' />
                            )}
                        </div>


                        <div className='pt-5'>
                            <Link to={`/financial/verification`}>
                                <button className='text-white bg-kandaBlue font-bold py-4 rounded-2xl w-full inline-flex justify-center items-center gap-2 disabled:bg-kandaBlue/50' disabled={formik.values.name === '' || formik.values.email === ''} type='submit' onClick={formik.handleSubmit}>Continue with email</button>
                            </Link>

                            <p className='text-center text-sm text-contentFade mt-2'>By continuing, you agree to the <span className='font-bold text-contentPrimary'>Terms of use</span>  and our <span className='font-bold text-contentPrimary'>Privacy Policy</span> at Kanda</p>
                        </div>


                    </div>
                </form>

                <div className='w-full text-center border-b border-b-[#EEEEEE] leading-[0.1px] my-6 text-sm'>
                </div>

                <div className='text-center text-contentFade text-sm pb-[50px]'>
                    <p className=''>Already have an account? <Link to={`/financial/login`} className='text-kandaBlue font-medium'>Log In</Link></p>
                </div>
            </div>

        </main>
    )
}

export default SignUp
