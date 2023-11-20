import { PlusCircleIcon } from '@primer/octicons-react'
import React from 'react'
import CompareComp from '../../Components/CompareComp/CompareComp'

const Compare = () => {
    return (
        <div className="p-3 w-100">
            <div>
                <h3><b>Compare Schools</b></h3>
            </div>
            <div className='d-flex w-100 gap-3 mt-4'>
                <CompareComp />
                <CompareComp />
                <CompareComp />
            </div>
        </div>
    )
}

export default Compare