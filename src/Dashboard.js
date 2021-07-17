import React from 'react'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './state/actions'


const Dashboard = () => {

    const account = useSelector((state) => state.account)
    const dispatch = useDispatch()

    const actionCreators = bindActionCreators(actions, dispatch)


    console.log(actionCreators)




    return (
        <div>
            <h1>{account}</h1>
            <button onClick={(e) => { actionCreators.depositMoney(1000) }}>Deposit</button>
            <button onClick={(e) => { actionCreators.withdrawMoney(1000) }}>Withdraw</button>
        </div>
    )
}

export default Dashboard
