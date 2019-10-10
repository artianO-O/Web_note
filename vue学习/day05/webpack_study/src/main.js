import $ from 'jquery'

import './css/test.css'
import './css/index.less'


$(function(){
    $('li:odd').css('backgroundColor','lightblue');
    $('li:even').css('backgroundColor','red');
})

