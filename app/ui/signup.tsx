'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { FormStateProps } from '../lib/definitions';
import { useState } from 'react';
import { signUp } from '@/app/lib/actions';
import Img from '@/app/ui/image';
import Button from '@/app/ui/button';
import Input from './input';
import ManageDBMessages from './manage/manage-db-messages';
import styles from '@/app/assets/css/LoginForm.module.css';

const initialState: FormStateProps = {
  message: null,
  errors: {},
  success: false,
};

export default function SignUp() {
  const [state, action] = useFormState(signUp as never, initialState);
  const { pending } = useFormStatus();
  const [showPassword, setshowPassword] = useState(false);
  const isShowPW = showPassword ? 'text' : 'password';

  const togglePWView = () => setshowPassword(!showPassword);

  return (
    <article className={styles.login}>
      <div className={styles.formCont}>
        <form action={action}>
          <Img
            imgSrc="icons/wineSil.png"
            imgAlt="AK Fine Wines"
            imgWidth={38}
            imgHeight={75}
          />
          <h1 className={styles.hdr}>Sign Up</h1>
          <div className={styles.msg}>
            To unlock exclusive offers
            <br />
            faster checkout and much more.
          </div>
          <div className={styles.formFields}>
            <div className={styles.inputField}>
              <Input id="fName" pHolder="First Name" req />
            </div>
            <br />
            <div className={styles.inputField}>
              <Input id="lName" pHolder="Last Name" req />
            </div>
            <br />
            <div className={styles.inputField}>
              <Input id="email" type="email" req>
                <Img
                  imgSrc="icons/atSymboyl.svg"
                  imgAlt="AK Fine Wines"
                  imgWidth={24}
                  imgHeight={24}
                />
              </Input>
            </div>
            <br />
            <div className={styles.inputField}>
              <Input id="password" type={isShowPW} minLen={6} req>
                <Button css="" onClick={togglePWView}>
                  <Img
                    imgSrc="icons/showPwd.png"
                    imgAlt="Show password"
                    imgWidth={16}
                    imgHeight={16}
                  />
                </Button>
              </Input>
            </div>
            <br />
            <div className={styles.inputField}>
              <Input id="confirmPassword" type={isShowPW} minLen={6} req />
              <Button css="" onClick={togglePWView}>
                <Img
                  imgSrc="icons/showPwd.png"
                  imgAlt="Show password"
                  imgWidth={16}
                  imgHeight={16}
                />
              </Button>
            </div>
          </div>
          {/* <p className={styles.errorMsg}>{errorMessage}</p> */}
          <Button css="loginBtn" disabled={pending}>
            Sign up
          </Button>
          <ManageDBMessages errorMessages={state} />
        </form>
      </div>
    </article>
  );
}
