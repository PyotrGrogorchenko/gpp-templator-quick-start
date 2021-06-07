import { Component } from 'gpp-templator'

export class Page extends Component {
  onClick = (e:Event) => {
    e.preventDefault()
    if (this.state.flag) {
      this.setState({
        flag: false,
        latin: 'Push the button!',
        wish: '↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓',
        button: 'Click me!'
      })
    } else {
      this.setState({
        flag: true,
        latin: 'Per aspera ad astra!',
        wish: 'Have a good hacking with gpp-templator!',
        button: 'Good luck!'
      })
    }
  }

  state = {
    flag: false,
    latin: 'Push the button!',
    wish: '↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓',
    button: 'Click me!',
    onClick: this.onClick
  }

  template() {
    return (
      `<div className='flex-column'>
        <div className='page-content'>
          <Title text={{state.latin}} color='white'></>
          <Title text={{state.wish}} color='blue'></>
          <Button text={{state.button}} onClick={{state.onClick}}></>
        <div>
      </div>`
    )
  }
}
