import './loading.css'

export const Loading = () => {
  return (
    <div className="loading">
      <h3>
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </h3>
    </div>
  )
}
