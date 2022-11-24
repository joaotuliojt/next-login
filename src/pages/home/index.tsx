import * as Styled from '../../components/containers/Home/style'
import {useSession, signOut} from 'next-auth/react'
import { unstable_getServerSession } from 'next-auth'
import { GetServerSideProps } from 'next'
import { authOptions } from '../api/auth/[...nextauth]'

export default function Home(){

  const {data: session} = useSession()

  return(
    <Styled.Container>
      <div>
        <Styled.Profile 
          css={{
            backgroundImage: `url(${session?.user?.image})`
          }}
          />
        <h1>Olá <span>{session?.user?.name}</span> 👋✌️</h1>
        <Styled.Button typeButton={"primary"} onClick={() => signOut()}>Deslogar</Styled.Button>
      </div>
    </Styled.Container>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await unstable_getServerSession(ctx.req, ctx.res, authOptions);
  if(!session){
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}