import React, { Component } from 'react'

export default class Chat extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        
        (function(d, m){
            var kommunicateSettings = {"appId":"39455888e4a81723f0f565ac5bf7d7c6c","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    
    }
  render() {
    return (
      <div></div>
    )
  }
}
