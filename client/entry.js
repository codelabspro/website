
/**
 * @fileoverview
 * This is the entry point for the app.  Based on the route (either /driver or
 * /rider), it will render the correct layout
 */

import React      from 'react'
import reactMixin from 'react-mixin'

import jss from '../modules/jss-configured'

// react-famous components
import Camera from 'reacfamo/components/Camera'
import Scene  from 'reacfamo/Scene'
import Node   from 'reacfamo/Node'

// routes
import '../modules/routes'

//import initCordova from './lib/cordova'

// app components
import Home from './modules/Home'

window.debug = false
window.outlineWidth = 0 // for debugging layout, making it visible. Set to >0 to see...

// store layouts for each route. Another method is to store piece of the layout for each route, depending on the granularity you want.
let layouts = { Home }

/**
 * The root of the app UI.
 *
 * @class Root
 * @extends {React.Component}
 */
class Root extends React.Component {
    render() {
        return (
            <div className="scene-container">
                <Scene style={{width: "100%", height: "100%"}}>
                    <Camera depth={1000} />

                    <Node id             = "layoutNode"
                        sizeMode         = {['relative', 'relative']}
                        proportionalSize = {[1.0, 1.0]}
                        >

                        {React.createElement(this.data.layout)}

                    </Node>
                </Scene>
            </div>
        )
    }

    getMeteorData() {
        return {
            layout: layouts[Session.get('layout')]
        }
    }
}
reactMixin(Root.prototype, ReactMeteorData)

Tracker.autorun(function() {
    document.title = Session.get('appTitle')
})

Meteor.startup(function() {

    //initCordova()

    // create the root of the app UI in the <body>.
    React.render(<Root />, document.body)
})
