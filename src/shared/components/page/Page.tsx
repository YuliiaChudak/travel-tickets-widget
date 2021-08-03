import React, { ReactElement } from 'react'
import PageMeta from './PageMeta'

type Props = {
    children: ReactElement
}

const Page = ({children}: Props) => {
    return (
        <>
            {children}
        </>
    )
}

export default Page
