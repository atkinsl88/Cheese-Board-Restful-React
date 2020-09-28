import React from 'react'

const CheeseForm = ({ handleSubmit, handleChange, formData, buttonText }) => {

  return (
    <form onSubmit={handleSubmit} className="column is-half is-offset-one-quarter box">
      
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Origin</label>
        <div className="control">
          <input
            className="input"
            placeholder="Origin"
            name="origin"
            onChange={handleChange}
            value={formData.origin}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input
            className="input"
            placeholder="Image URL"
            name="image"
            onChange={handleChange}
            value={formData.image}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Tasting Notes</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Tasting Notes...."
            name="tastingNotes"
            onChange={handleChange}
            value={formData.tastingNotes}
          />
        </div>
      </div>

      <div className="field">
        <button type="submit" className="button is-fullwidth is-warning">{buttonText}</button>
      </div>
    </form>

  )
}
export default CheeseForm