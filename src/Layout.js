import React from 'react'

const Layout = (props) => {
    return (
        <React.Fragment>
            <header>

            </header>
            {
                props.children
            }
            <footer>

            </footer>
        </React.Fragment>
    )
}

export default Layout