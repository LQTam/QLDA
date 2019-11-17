import React, {Component} from 'react';

class Logo extends Component {
    render() {
        return (
            <>
                <div className="navbar-header">
  <a className="navbar-brand" href="index.html">
    {/* Logo icon */}<b>
      {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
      {/* Dark Logo icon */}
      <img src="../assets/images/logo-icon.png" alt="homepage" className="dark-logo" />
      {/* Light Logo icon */}
      <img src="../assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
    </b>
    {/*End Logo icon */}
    {/* Logo text */}<span>
      {/* dark Logo text */}
      <img src="../assets/images/logo-text.png" alt="homepage" className="dark-logo" />
      {/* Light Logo text */}    
      <img src="../assets/images/logo-light-text.png" className="light-logo" alt="homepage" /></span> </a>
</div>


            </>
        );
    }
}

export default Logo;