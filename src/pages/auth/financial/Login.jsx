import React from 'react'
import { LogoBlue } from '../../../assets/common'
import { GoogleLogo } from '../../../assets/signup'
import InputField from '../../../components/common/InputField'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router'


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


function Login() {

    const navigate = useNavigate()


    const ValidationSchema = yup.object({
        email: yup.string().email('Invalid email address').required('Email address is required'),
        password: yup.string('Enter password').required('Password is required'),
    });

    const formik = useFormik(
        {
            initialValues: { "password": "", "email": "" },
            validationSchema: ValidationSchema,
            enableReinitialize: true,
            onSubmit: async (values) => {
                // localStorage.setItem('email', values.email)
                // alert(JSON.stringify(values))
                await sleep(1000)
                navigate(`/financial/create-password`)
            }
        }
    )
    return (
        <main className='h-screen flex justify-center  max-sm:px-6'>

            <div className='pt-[105px] w-[454px]'>
                <div className='flex justify-center'>
                    <img src={LogoBlue} alt="" />
                </div>
                <div className='mt-[56px] text-left'>
                    <h1>Welcome back </h1>

                    <button className='text-white bg-kandaBlack font-bold py-4 rounded-2xl mt-6 w-full inline-flex justify-center items-center gap-2'>
                        <span className='w-8 h-8 bg-white flex justify-center items-center rounded-xl'><img src={GoogleLogo} alt="" /></span>
                        Sign-in with google</button>
                </div>

                <div className='w-full text-center border-b border-b-[#EEEEEE] leading-[0.1px] my-10 text-sm'>
                    <span className='text-[#6E7B89] px-2.5 bg-white'>or</span>
                </div>

                <div className='space-y-6'>
                    <InputField label={`Organisation email`} placeHolder={`Enter institution email`} name={`email`} onChange={formik.handleChange} value={formik.values.email} type={'email'} error={formik.touched.email && formik.errors.email} errorText={formik.errors.email} />

                    <div>
                        <InputField label={`Password`} placeHolder={`Enter password`} type={'password'} name={`password`} onChange={formik.handleChange} value={formik.values.password} error={formik.touched.password && formik.errors.password} errorText={formik.errors.password} />
                        <p className='text-right mt-2'>Forgot password?</p>
                    </div>


                    <div className='pt-5'>
                        <Link to={`/financial/create-password`}>
                            <button className='text-white bg-kandaBlue font-bold py-4 rounded-2xl w-full inline-flex justify-center items-center gap-2 disabled:bg-kandaBlue/50' disabled={formik.values.password === '' || formik.values.email === ''} type='submit' onClick={formik.handleSubmit}>Sign in</button>

                        </Link>
                    </div>


                </div>

                <div className='w-full text-center border-b border-b-[#EEEEEE] leading-[0.1px] my-10 text-sm'>
                </div>

                <div className='text-center text-contentFade text-sm pb-[50px]'>
                    <p className=''>Don't have an account? <Link to={`/financial/signup`} className='text-kandaBlue font-medium'>Create an account</Link></p>
                </div>
            </div>

        </main>
    )
}

export default Login
