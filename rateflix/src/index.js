import React from 'react'
import ReactDOM from 'react-dom'

const divStyle={
          position: 'fixed',
          top: '35%',
          left: '40%',
    }
const h1Style={
    fontSize:'400%'
}
const buttonStyle={
    fontSize: '30px',
    borderRadius: '8px',
}
class MyMainPage extends React.Component {
    render () {
        return (
                <h1 style={h1Style}> RATEFLIX </h1>)
    }
}

class MovieButton extends React.Component {
    
      render() {
            return (
              <button style={buttonStyle} onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href='./Movies.js';}}>MOVIES</button>
                );
          }
    }

class TVShowButton extends React.Component {
    
    render() {
          return (
            <button style={buttonStyle} onClick={(e) => {
                                e.preventDefault();
                                window.location.href='./TVshows.js';}}>TV SHOWS</button>
              );
        }
  }
class FinalTouch extends React.Component {
    render() {
        return (
        <div style={divStyle}>
            <MyMainPage />
            <MovieButton />
            <TVShowButton />
            </div>
        )
    }
}
ReactDOM.render(<FinalTouch />,document.getElementById('root'));

