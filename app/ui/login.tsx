import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import Img from '@/app/ui/image';
import Button from '@/app/ui/button';
import Input from './input';
import styles from '@/app/assets/css/LoginForm.module.css';
import Link from 'next/link';

export default function Login() {
  const { pending } = useFormStatus();
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <article className={styles.login}>
      <div className={styles.formCont}>
        <form action={dispatch}>
          <Img
            imgSrc="icons/wineSil.png"
            imgAlt="AK Fine Wines"
            imgWidth={38}
            imgHeight={75}
          />
          <h1 className={styles.hdr}>Login</h1>
          <div className={styles.msg}>
            To unlock exclusive offers
            <br />
            faster checkout and much more.
          </div>
          <div className={styles.formFields}>
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
              <Input id="password" type="password" minLen={6} req>
                <Button css="">
                  <Img
                    imgSrc="icons/showPwd.png"
                    imgAlt="Show password"
                    imgWidth={16}
                    imgHeight={16}
                  />
                </Button>
              </Input>
            </div>
          </div>
          <Button css="loginBtn" disabled={pending}>
            Sign in
          </Button>
          <div aria-live="polite" aria-atomic="true">
            {errorMessage && <p className={styles.errorMsg}>{errorMessage}</p>}
          </div>
          <hr />
          <p>Don’t have an account?</p>
          <Link href="/signup" className={styles.signUp}>
            Sign Up
          </Link>
        </form>
      </div>
    </article>
  );
}
