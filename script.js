(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var lat = 52.5104294;
var lng = 13.330535899999973;
var zoom = 15;

var map = L.map('map', {
  center: [lat, lng],
  zoom: zoom
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 20,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYWJpc3oiLCJhIjoiY2o1MjVkY25vMGFnNDMxbXJ6Z2Vxajc1YSJ9.GdEcl_NPfWGC3HWS7KRVYw'
}).addTo(map);

var markers = [{
  lat: 52.5104294,
  lng: 13.3305358,
  title: 'Bushes of Love',
  link: 'https://www.youtube.com/watch?v=RySHDUU2juM'
}, {
  lat: 52.509238,
  lng: 13.327143400000068,
  title: 'Monsters of the Universe',
  link: 'https://www.youtube.com/watch?v=7e5-0t0pTF0'
}];

markers.forEach(function (m) {
  L.marker([m.lat, m.lng]).addTo(map).bindPopup('<b>' + (m.title || '') + '</b><br><iframe width="300" height="315" src="' + m.link.replace("watch?v=", "embed/") + '" frameborder="0" allowfullscreen></iframe>');
});

},{}]},{},[1]);
