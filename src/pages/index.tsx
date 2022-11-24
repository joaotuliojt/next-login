import * as Styled from "../components/containers/Login/style";
import {ReactSVG} from 'react-svg'
import Image from "next/image";
import {signIn, useSession} from 'next-auth/react'
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";


export default function Home() {

  const {data: session} = useSession()


  return (
    <Styled.Container>
      <Styled.leftContent>
        <ReactSVG src={"/assets/illustration.svg"} alt=""/>
      </Styled.leftContent>

      <Styled.rightContainer>
        <div className="form-container">
          <Styled.FormHeader>
            <p className="welcome">Bem vindo de volta {session?.user?.name}</p>
            <h2 className="make-login">Faça login na sua conta</h2>
          </Styled.FormHeader>
          <Styled.Form>
            <Styled.InputContainer>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="text" placeholder="jhondoe@email.com"/>
            </Styled.InputContainer>
            <Styled.InputContainer>
              <label htmlFor="password">Password</label>
              <input id="password" type="password"/>
            </Styled.InputContainer>
            <Styled.FormActions>
              <div className="checkbox">
                <input id="remember" type={"checkbox"}/>
                <label htmlFor="remember">Lembre de mim</label>
              </div>
              <a href="">Esqueceu sua senha? </a>
            </Styled.FormActions>
            <Styled.ButtonsContainer>
              <Styled.Button type="submit" typeButton={"primary"}>Entrar</Styled.Button>
              <Styled.Button withIcon type="button" typeButton={"secondary"} onClick={() => signIn()}>
                <Image alt="Google Logo" src={"/assets/google.svg"} width={20} height={20}/>
                Ou faça login com o Google 
              </Styled.Button>
            </Styled.ButtonsContainer>
          </Styled.Form>
        </div>
        <Styled.Footer className="sign-in">
          <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
        </Styled.Footer>
      </Styled.rightContainer>
    </Styled.Container>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);
  if(session){
    return {
      redirect: {
        destination: "/home",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}