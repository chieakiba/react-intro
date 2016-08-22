var http = require('http');
var express = require('express');

var app = express();
app.use(express.static('public'));

var server = http.Server(app);

var React = require('react');

var ReactDOM = require('react-dom');

var Person = function () {
    var name = 'Derek Zoolander';
    var imageUrl = 'http://uifaces.com/assets/static/images/zoolander/jpg';
    var job = 'Male model';
    return (
        <div className = 'person'>
            <div className = 'person-name'>{name}</div>
            <img className = 'person-img' src = {imageUrl}/>
            <div className = 'person-job'>{job}</div>
        </div >
    );
};

var PersonList = function () {
    return (
        <div className = "person-list">
            <Person/>
            <Person/>
            <Person/>
            <Person/>
            <Person/>
        </div>
    );
};

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render( <PersonList/> , document.getElementById('app'));
});

server.listen(process.env.PORT || 8080);
