import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getInfo } from '../redux/slices/userSlice'

function Index() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInfo())
  }, [])


  return (
    <div>index</div>
  )
}

export default Index
