import React from 'react'
import { getAllCheeses } from '../../lib/api'
import CheeseCard from './CheeseCard'
class CheeseIndex extends React.Component {
  state = {
    cheeses: []
  }

  async componentDidMount() {
    try {
      const res = await getAllCheeses()
      this.setState({ cheeses: res.data })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }
  
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.cheeses.map(cheese => (
              <CheeseCard key={cheese._id} {...cheese}/>
            ))}
          </div>
        </div>
      </section>
    )
  }
}
export default CheeseIndex