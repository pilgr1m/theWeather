import React from 'react'
import OwmServiceContex from "../owmServiceContex/OwmServiceContex"

const WithOwmService = () => {
    return (Wrapped) => {
        return (props) => {
            return (
                <OwmServiceContex.Consumer>
                    { (OwmService) => {
                        return <Wrapped {...props} OwmService={OwmService} />
                    }}
                </OwmServiceContex.Consumer>
            )
        }
    }
}
export default WithOwmService


