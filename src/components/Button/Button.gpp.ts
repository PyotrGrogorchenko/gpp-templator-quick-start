import { Component } from 'gpp-templator'

export class Button extends Component {
  template() {
    return (
      `<button 
        className='button'
        id='button'
        onClick={{props.onClick}}
      >
        {{props.text}}
      </button>`
    )
  }
}
