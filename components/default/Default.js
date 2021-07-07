import React from 'react'
import DefaultStyles from '../../styles/Default.module.scss'

const Default = (data) => {
  return (
    <div className={DefaultStyles.default}>
      {JSON.stringify(data, null, 2)}
    </div>
  )
}

export default Default
