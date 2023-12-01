import React from "react";
import { LogoBlue } from "../../../assets/common";
import InputField from "../../../components/common/InputField";
import { Link } from "react-router-dom";
import { CheckCircle } from "../../../assets/signup";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ChangePassword = () => {
  const navigate = useNavigate()


  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);



  const ValidationSchema = yup.object({
    password: yup
      .string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-_])[A-Za-z\d@$!%*?&]{8,}/,
        'Password is too weak'
      ),
    confirm_password: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });


  const formik = useFormik(
    {
      initialValues: { "password": "", "confirm_password": "" },
      validationSchema: ValidationSchema,
      enableReinitialize: true,
      onSubmit: async (values) => {
        // alert(JSON.stringify(values))
        await sleep(1000)
        navigate(`/financial/registration`)
      }
    }
  )
  return (
    <main className="h-screen flex justify-center max-sm:px-6">
      {isVisible && (
        <div
          id="toast-top-left"
          class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 left-5"
          role="alert"
        >

          <div className="text-sm font-normal flex">
            <p className="text-[#0D0D0D]">Your email has been verified</p>
            <img src={CheckCircle} className="ml-2" alt="checkmark" />
          </div>
        </div>
      )}
      <div className="pt-[105px] w-[454px]">
        <div className="flex justify-center">
          <img src={LogoBlue} alt="" />
        </div>
        <div className="mt-[54px] text-left">
          <h1>Create your password</h1>
          <p className="mt-2 font-normal text-sm text-fadedBlue">
            This will allow you log into your new account
          </p>
        </div>

        <div className="space-y-6 mt-8">
          <InputField label={`Password`} placeHolder={`Enter password`} name={'password'} value={formik.values.password} onChange={formik.handleChange} type={'password'} error={formik.touched.password && formik.errors.password} errorText={formik.errors.password} />

          <div>
            <p className="text-sm text-contentFade">Password must have</p>

            <div className="flex flex-wrap mt-4 gap-3 text-[13px]">
              <p className={`${/^(?=.*[a-z])/.test(formik.values.password) ? 'text-kandaBlue bg-kandaBlue/10' : 'text-fadedBlue bg-[#F6F6F6]'} py-1 px-2 rounded-[20px]`} >
                1 Lowercase
              </p>
              <p className={`${/^(?=.*[A-Z])/.test(formik.values.password) ? 'text-kandaBlue bg-kandaBlue/10' : 'text-fadedBlue bg-[#F6F6F6]'} py-1 px-2 rounded-[20px]`}>
                1 Uppercase
              </p>
              <p className={`${/^.{8,}$/.test(formik.values.password) ? 'text-kandaBlue bg-kandaBlue/10' : 'text-fadedBlue bg-[#F6F6F6]'} py-1 px-2 rounded-[20px]`}>
                At least 8 Characters
              </p>
              <p className={`${/^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])/.test(formik.values.password) ? 'text-kandaBlue bg-kandaBlue/10' : 'text-fadedBlue bg-[#F6F6F6]'} py-1 px-2 rounded-[20px]`}>
                1 Special Character
              </p>
              <p className={`${/^(?=.*\d)/.test(formik.values.password) ? 'text-kandaBlue bg-kandaBlue/10' : 'text-fadedBlue bg-[#F6F6F6]'} py-1 px-2 rounded-[20px]`}>
                1 Number
              </p>
            </div>
          </div>

          <InputField
            label={`Confirm password`}
            placeHolder={`Confirm password`}
            name={'confirm_password'} value={formik.values.confirm_password} onChange={formik.handleChange}
            type={'password'}
            error={formik.touched.confirm_password && formik.errors.confirm_password} errorText={formik.errors.confirm_password}
          />

          <div className="pt-5">
            <Link to={`/financial/registration`}>
              <button className="text-white bg-kandaBlue font-bold py-4 rounded-2xl w-full inline-flex justify-center items-center gap-2 disabled:bg-kandaBlue/50" disabled={formik.values.password === '' || formik.values.confirm_password === ''} onClick={formik.handleSubmit}>
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChangePassword;
