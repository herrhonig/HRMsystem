import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useClientsearch(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [clients, setClients] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setClients([])
  }, [query])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'http://localhost:4000/clients/search?query=&page=${currentOffset}&limit=30',
      params: { query: query, page: pageNumber, limit: 10 },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setClients(prevClients => {
        return [...new Set([...prevClients, ...res.data.results.map(b => b.name)])]
      })
      setHasMore(res.data.results.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, clients, hasMore }
}


