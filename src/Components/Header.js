import React from 'react'
import { PageHeader } from 'antd'

export default function Header() {
    return (
        <div>
            <PageHeader 
                className="site-page-header headerBoarder"
                title="Lit Lit"
                subTitle="It's like when you ask the librarian about a book"
            />
        </div>
    )
}
