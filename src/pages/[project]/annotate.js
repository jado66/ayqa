import Head from 'next/head'
import ProtectedContent from '@/components/util/ProtectedContent'
import PageLayout from '@/components/util/PageLayout'

import { useRouter } from 'next/router'

export default function Images() {
  
    const router = useRouter()

    const {query} = router

    return (
    <>
      <Head>
        <title>Annotate {query.project}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <ProtectedContent
          debug
          
        >
            {/* <Sidebar/> */}
            <h1 className='text-center mt-4'>Annotate {query.project.replaceAll("_"," ")}</h1>
        </ProtectedContent>
      </main>
    </>
  )
}
