import React,{Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component{
  renderContent(){
    console.log(this.props);
    switch (this.props.auth){
      case null:
        return;
      case false:

      console.log("false");
        return (<li><a href="/auth/google">Login With Google</a></li>);
      default:
      console.log("default");
        return (<li><a>Logout111</a></li>);
    }
  }
  render(){
    console.log(this.props);
      return(
      <nav>
        <div className="nav-weapper">
          <a className="left brand-logo">
            Ezra Porfile
          </a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
      );
  }

}
function mapStateToProps({auth}){
  return {auth};
}
export default connect(mapStateToProps)(Header);
