import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class SubscribeForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }
  }
  _handleSubmit = async (e) => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({ result: result })
  }
  handleChange = (event) => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="form-row">
          <label className="flex flex-col">
            <span className="sr-only">Email address</span>
            <input
              className="p-2 max-w-72 subscribe-email"
              type="email"
              name="email"
              placeholder="Enter Email Address..."
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
        </div>
        { this.state.result ? 
          <div dangerouslySetInnerHTML={{ __html: this.state.result.msg }} className="inline-block p-2 mt-2 text-xs"></div>
          : null }
        <button
          onSubmit={this.handleSubmit}
          className="p-2 mt-4 transition duration-300 bg-sugar-pink-500 text-red hover:bg-sugar-pink-300 focus:bg-sugar-pink-300"
          type="submit"
        >
          Subscribe to offers
        </button>
      </form>
    )
  }
}
