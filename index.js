var React = require('react');

var ReactDOM = require('react-dom');

var SoundCloudEmbed = function(props) {
    var playerUrl = 'https://w.soundcloud.com/player/';
    var trackUrl = 'https://api.soundcloud.com/tracks/' + props.trackId;
    var options = 'auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true';
    var src = playerUrl + '?url=' + trackUrl + '&' + options;
    return <iframe width="100%" height="450" scrolling="no" frameborder="no" src={src}></iframe>;
};

var Button = function(props) {
    return <button onClick={props.onClick}>{props.text}</button>;
};

var Surprise = React.createClass({
    getInitialState: function() {
        return {
            clicked: false
        };
    },
    onButtonClick: function() {
        this.setState({
            clicked: true
        });
    },
    render: function() {
        return (
            <div>
            <Button onClick={this.onButtonClick} text="Ready to be amazed?" />
            {this.state.clicked ? <SoundCloudEmbed trackId="191075550" /> : null}
            </div>
        );
    }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Surprise />, document.getElementById('app'));
});

//Stateful Person variable/component
//var Person = React.createClass({
//    getInitialState: function() {
//        return {
//            highlight: false
//        };
//    },
//    onClick: function() {
//        this.setState({
//            highlight: !this.state.highlight
//        });
//    },
//    render: function() {
//        var classes = 'person ' + (this.state.highlight ? 'highlight' : '');
//        return (
//            <div className={classes} onClick={this.onClick}>
//                <div className='person-name'>{this.props.name}</div>
//                <img className='person-img' src={this.props.imageUrl}/>
//                <div className='person-job'>{this.props.job}</div>
//            </div>
//        );
//    }
//});

//var Person = function (props) {
//    var name = 'Derek Zoolander';
//    var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
//    var job = 'Male model';
//    return (
//        <div className = 'person'>
//            <div className = 'person-name'>{props.name}</div>
//            <img className = 'person-img' src = {props.imageUrl}/>
//            <div className = 'person-job'>{props.job}</div>
//        </div >
//    );
//};

//var PersonList = function () {
//    return (
//        <div className = "person-list">
//            <Person name="Derek Zoolander"
//                    imageUrl="http://uifaces.com/assets/static/images/zoolander.jpg"
//                    job="Male model"/>
//            <Person name="Donald Knuth"
//                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
//                    job="Clever chap"/>
//        </div>
//    );
//};

//var PersonList = React.createClass({
//    render: function() {
//        var people = [];
//        for (var i=0; i < 5; i++) {
//            people.push(<Person/>);
//        }
//        return(
//            <div className="person-list">{people}</div>
//        );
//    }
//});

//document.addEventListener('DOMContentLoaded', function () {
//    ReactDOM.render( <PersonList/> , document.getElementById('app'));
//});
