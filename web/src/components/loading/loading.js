import './loading.css'

export const Loading = ({ color = 'primary' }) => {
  return (
    <div className="loading">
      <h3>
        <div className={`spinner-border text-${color}`} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </h3>
    </div>
  )
}
