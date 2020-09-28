import React from 'react'
import { getSingleCheese, editCheese } from '../../lib/api'
import CheeseForm from './CheeseForm'

class CheeseEdit extends React.Component {

  state = {
    formData: {
      name: '',
      origin: '',
      image: '',
      tastingNotes: ''
    }
  }

  async componentDidMount() {
    const cheeseID = this.props.match.params.id
    try {
      const res = await getSingleCheese(cheeseID)
      this.setState({ formData: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }
  handleSubmit = async event => {
    event.preventDefault()
    const cheeseID = this.props.match.params.id
    try {
      const res = await editCheese(this.state.formData, cheeseID)
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
              buttonText="Edit my Cheese"
            />
          </div>
        </div>
      </section>
    )
  }
}

export default CheeseEdit