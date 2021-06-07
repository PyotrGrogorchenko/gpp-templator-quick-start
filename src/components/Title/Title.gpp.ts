import { Component } from 'gpp-templator'

export class Title extends Component {
  template() {
    return (
      `<h2 className={{props.color}}> 
        {{props.text}}
      </h2>`
    )
  }
}
