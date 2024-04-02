import { Fragment } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'


// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            <main className='pt-[5%] min-h-full'>
                {children}
            </main>
            <Footer />
        </Fragment>
    )
}
