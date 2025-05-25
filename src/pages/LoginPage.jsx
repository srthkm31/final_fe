import { LoginForm } from '../components/login-form'

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div  className='flex justify-center items-center h-[500px] '>
            <LoginForm class="motion-opacity-in-0 motion-translate-x-in-100 motion-blur-in-md"/>
        </div>
    </div>
  )
}

export default LoginPage