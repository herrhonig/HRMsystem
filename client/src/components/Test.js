import React, { useState, useRef, useCallback } from 'react'
import useClientsearch from './useClientSearch'

function Test() {
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(1)
  const [limitNumber, setLimitNumber] = useState(10)

  const {
    clients,
    hasMore,
    loading,
    error
  } = useClientsearch(query, pageNumber, limitNumber)

  const observer = useRef()
  const lastClientElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
    setLimitNumber(10)
  }

  return (
    <>
      <input type="text" value={query} onChange={handleSearch}></input>
      {clients.map((client, index) => {
        if (clients.length === index + 1) {
          return <div ref={lastClientElementRef} key={client}>{client}</div>
        } else {
          return <div key={client}>{client}</div>
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </>

  )
}

export default Test
