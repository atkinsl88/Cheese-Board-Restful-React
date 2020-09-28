import React from 'react'
import { Link } from 'react-router-dom'
import { getSingleCheese, deleteCheese } from '../../lib/api'
import { isOwner } from '../../lib/auth'

class CheeseShow extends React.Component {
  state = {
    cheese: null
  }

  async componentDidMount() {
    const cheeseID = this.props.match.params.id
    try {
      const res = await getSingleCheese(cheeseID)
      this.setState({ cheese: res.data })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  handleDelete = async () => {
    const cheeseID = this.props.match.params.id
    try {
      await deleteCheese(cheeseID)
      this.props.history.push('/cheeses')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  render() {
    const { cheese } = this.state
    if (!cheese) return null
    return (
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">{cheese.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={cheese.image} alt={cheese.name} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4"><span role="img" aria-label="plate">🍽</span> Tasting Notes</h4>
              <p>{cheese.tastingNotes}</p>
              <hr />
              <h4 className="title is-4"><span role="img" aria-label="globe">🌍</span> Origin</h4>
              <hr />
              <p>{cheese.origin}</p>
              <hr />
              <h4 className="title is-4"><span role="img" aria-label="wave">🖐</span> Added By</h4>
              <hr />
              <p>{cheese.user.username}</p>
              <hr />
              {isOwner(cheese.user._id) &&
                <>
                  <Link to={`/cheeses/${cheese._id}/edit`} className="button is-warning">Edit Cheese</Link>
                  <hr />
                  <button onClick={this.handleDelete} className="button is-danger">Delete Cheese</button>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CheeseShow