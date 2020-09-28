import React from 'react'
import { createCheese } from '../../lib/api'
import CheeseForm from './CheeseForm'

class CheeseNew extends React.Component {
  state = {
    formData: {
      name: '',
      origin: '',
      image: '',
      tastingNotes: ''
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createCheese(this.state.formData)
      this.props.history.push(`/cheeses/${res.data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <CheeseForm
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              formData={this.state.formData}
              buttonText="Make my Cheese"
            />
          </div>
        </div>
      </section>
    )
  }
}

export default CheeseNew