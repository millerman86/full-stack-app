import React from 'react'
import { useRouteMatch } from 'react-router-dom'


export default () => {
    let match = useRouteMatch('/yourtickets/:blah')
    console.log(match) // match contains all the data about the matched url
    // path, url, params
    return (<div>hello world</div>)
}