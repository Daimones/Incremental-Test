import _ from 'lodash';

function component() {

    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello','Testing this'],' ')
    return element;
}

document.body.appendChild(component())