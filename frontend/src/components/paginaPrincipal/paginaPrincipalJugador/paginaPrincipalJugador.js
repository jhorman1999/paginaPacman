import React, { Component } from 'react'
import Unity, { UnityContent, UnityContext } from "react-unity-webgl";

export default class paginaPrincipal extends Component {

    constructor(props, UnityContext) {
        super(props);
        this.unityContext = new UnityContent({
            loaderUrl: "Build/PacManWebGl.loader.js",
            dataUrl: "Build/PacManWebGl.data",
            frameworkUrl: "Build/PacManWebGl.framework.js",
            codeUrl: "Build/PacManWebGl.wasm",
        });


        this.render = this.render.bind(this);
    }

    componentDidMount() {
        const correo = localStorage.getItem('correo');
    }
    render() {
        return (
            <div>

                <div className="card">
                    <div className="card-header">

                    </div>
                    <div className="card-body">
                        
                        <iframe src="https://i.simmer.io/@DanielVp/pacmanmultiplayer" style={{width:"960px", height:"600px"}}></iframe>

                    </div>
                </div>

            </div>
        )
    }
}
