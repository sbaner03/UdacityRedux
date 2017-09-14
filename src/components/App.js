import React, { Component } from 'react';
import '../index.css'
import { Route, Switch, withRouter } from 'react-router-dom';
import ShowPosts from './ShowPosts'
import ShowCategories from './ShowCategories'
import { connect } from 'react-redux'




class App extends Component {

  render() {
    let categories = this.props.categories
    let catnamearray = categories.map(x=>x.name)
    return (

      <div className = "container-fluid">
        <div className = 'row'>
          <div className = "col-sm-1">
            <Route exact path="/" className = "showcategories" render={({history}) => (<ShowCategories/>)}/>
          </div>
          <div className = "col-sm-11">
            <Switch>
              <Route exact path="/" className = "showposts" render={({history}) => (<ShowPosts passedcategories = {categories}/>)}/>
              {catnamearray.map(catname=>(<Route key = {catname} exact path={`/${catname}`} render={({history}) => (<ShowPosts passedcategories = {categories.filter(x=>x.name===catname)}/>)}/>))}

            </Switch>
          </div>

        </div>
      </div>
    )
  }
}

function mapStateToProps ({ categories }) {

  return {
    categories: categories

  }
}



export default withRouter(connect(mapStateToProps)(App));
