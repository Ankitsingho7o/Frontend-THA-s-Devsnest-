import React from 'react'
import FirstRow from './firstRow'
import SecondRow from './secondRow'

export default function Chess() {
    return (
        <div className="chess">
            <FirstRow/>
            <SecondRow/>
            <FirstRow/>
            <SecondRow/>
            <FirstRow/>
            <SecondRow/>
            <FirstRow/>
            <SecondRow/>
        </div>
    )
}
