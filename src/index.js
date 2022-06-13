
import _ from 'lodash';
import Vue from 'vue';
import { draw, resize} from './IncCanvas'

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var width
var height

window.setInterval(function(){

}, 1000);

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello vue'
    }
})
