import React from 'react';
import ReactDOM from'react-dom';
import FriendsImg from './Assets/posters/TVShows/Friends.jpg'
import FriendsAudio from './Assets/Songs/TVShows-Song/Friends.mp3'
import StrangerThingsImg from './Assets/posters/TVShows/Stranger Things.jpg'
import StrangerThingsAudio from './Assets/Songs/TVShows-Song/Stranger Things.mp3'

const imagePath=[{
    name: 'Friends',
    isrc: FriendsImg,
    asrc: FriendsAudio,
},
{
    name: 'Stranger Things',
    isrc: StrangerThingsImg,
    asrc: StrangerThingsAudio,
}];

class Heading extends React.Component {
    render() {
        const headingstyle={
            backgroundColor: 'rgb(214,35,4)',
            fontSize: 60,
            textAlign: 'center'
        }
        return (
            <h1 style={headingstyle}>TV shows</h1>
        )
    }
}

class ShowDisplay extends React.Component {
    
    render() {
        
        var i,imgsrc,audiosrc;
        for(i=0;i<imagePath.length;i++)
        {
            if(imagePath[i].name === this.props.name)
            {
                imgsrc=imagePath[i].isrc;
                audiosrc=imagePath[i].asrc;
                break;
            }
        }
        const imgid=this.props.name+"Img"
        let audio= new Audio(audiosrc)
        const start= () => {
            audio.play();
        }

        const stop= () => {
            audio.pause();
        }
        const headerStyle={
            color:'white',
            fontSize: 20,
            fontFamily: 'Ariel',
        }
        return (
            <div>
                <h2 style={headerStyle}>{this.props.name}</h2>
                <img src={imgsrc} id={imgid} alt={this.props.name} height={300} width={300} onMouseEnter={start} onMouseLeave={stop}></img>
            </div>
        )
    }
}
class Site extends React.Component {
    render() {
        const bodyStyle={
            backgroundColor:'black'
        };
        return(
            <body style={bodyStyle}>
                <Heading />
                <hr></hr>
                <ShowDisplay name="Friends" />
                <ShowDisplay name="Stranger Things" />
            </body>
        )
    }
}

ReactDOM.render(
    <Site />,
    document.getElementById('root')
);