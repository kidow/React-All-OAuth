import React, { Component } from 'react'
import './App.scss'
import axios from 'axios'

import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import GitHubLogin from 'react-github-login'
import TwitterLogin from 'react-twitter-auth'
import KakaoLogin from 'react-kakao-login'

class App extends Component {
  state = {
    comments: [],
    logged: false
  }

  onFacebook = res => {
    console.log('facebook res: ', res)
  }

  onGoogle = res => {
    console.log('google res: ', res)
  }

  onGithubSuccess = res => {
    console.log('github res: ', res)
  }

  onGithubError = res => {
    console.log('github err :', res)
  }

  onTwitterSuccess = res => {
    console.log('twitter res: ', res)
  }

  onTwitterError = err => {
    console.log('twitter err :', err)
  }

  onKakaoSuccess = res => {
    console.log('kakao res :', res)
  }

  onKakaoError = err => {
    console.log('kakao err ', err)
  }

  // async componentDidMount() {
  //   const logged = await axios.get('/auth/check')
  //   this.setState({logged})
  // }
  render() {
    const {
      onFacebook,
      onGithubSuccess,
      onGithubError,
      onGoogle,
      onKakaoSuccess,
      onKakaoError,
      onTwitterSuccess,
      onTwitterError
    } = this
    return (
      <div className="container">
        <div className="comment__container">
          <input className="comment__input" placeholder="자유롭게 입력하세요" />
        </div>
        <div className="login__container">
          <FacebookLogin
            appId="384687665637323"
            callback={onFacebook}
            autoLoad
          />
          <GoogleLogin
            clientId="1058723835629-mqtnr9obs9jhr3lsgpnjddphn138ebgo.apps.googleusercontent.com"
            onSuccess={onGoogle}
            onFailure={onGoogle}
          />
          <GitHubLogin
            clientId="073adc4f5a4135a85606"
            onSuccess={onGithubSuccess}
            onFailure={onGithubError}
          />
          <TwitterLogin
            loginUrl="http://localhost:4000/api/v1/auth/twitter"
            onFailure={onTwitterError}
            onSuccess={onTwitterSuccess}
            requestTokenUrl="http://dev.twitter.com/oauth/request_token"
          />
          <KakaoLogin
            jsKey="5c86b603c29b8aa51a39743b480a7607"
            onSuccess={onKakaoSuccess}
            onFailure={onKakaoError}
            useDefaultStyle
          />
          {/* 로그아웃 버튼 */}
        </div>
      </div>
    )
  }
}

export default App
