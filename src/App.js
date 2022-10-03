import React from 'react';
import { connect } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from '../src/redux/user/user.actions'
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component'
import CollectionPage from './pages/collection/collection.component';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }

      setCurrentUser({ currentUser: userAuth })

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    console.log(this.props)

    // console.log('currentUser' + this.props.currentUser && this.props.currentUser.currentUser)

    return (
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop'>
            <Route index element={<Shop />} />
            <Route path=':collectionId' element={<CollectionPage />} />
          </Route>
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/signin'
            element={this.props.currentUser?.currentUser ? <Navigate to="/" /> : < SignInAndSignUpPage />}
          // render={() => (<h1>Hello</h1>)}
          />
        </Routes>
        {/* <HomePage /> */}
      </div >
    );
  }


}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
