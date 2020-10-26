import React from 'react'
import { useQuery } from '@apollo/client'
import { apolloHelper, appLogic } from '../../../..'
import Lottie from '../../../../lottie'

function AvaliableBalance() {
    const {loading, data } = useQuery(apolloHelper.AVALIABLE_BALANCE,{fetchPolicy:"network-only"})
    return (
        <div>
            { loading ? <Lottie style={{width:"120px",height:"22px",transform:"scale(3)"}} animation="/loading1.json"/>:
                    <>
                    { `N ${appLogic.numberWithCommas(data?.getUserAvaliableBalance.balance)}.00` }
                    </>}
        </div>
   
   )
}

export default AvaliableBalance
