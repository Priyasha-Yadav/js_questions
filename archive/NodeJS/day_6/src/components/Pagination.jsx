import { useState, useEffect } from 'react'
import './Pagination.css'

const Pagination = ({ url, itemsPerPage }) => {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const result = await response.json()
      setData(result)
    }
    fetchData()
  }, [])

  // FILTER DATA
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // PAGINATION LOGIC
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredData.slice(startIndex, endIndex)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage) 

  // RESET PAGE ON SEARCH
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm])

  return (
    <>
      {/* SEARCH INPUT */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* CARDS */}
      <div className="container">
        {currentItems.length > 0 ? (
          currentItems.map(item => (
            <div key={item.id} className="card">
              <h5>{item.title}</h5>
              <p>{item.body}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(p => p - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? 'active' : ''}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(p => p + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </>
  )
}

export default Pagination
