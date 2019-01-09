import React, { Component } from 'react'
import './App.scss'

import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import GithubLogin from 'react-github-login'
import TwitterLogin from 'react-twitter-auth'
import KakaoLogin from 'react-kakao-login'

class App extends Component {
  onFacebook = res => {
    console.log('facebook res: ', res)
  }

  onGoogle = res => {
    console.log('google res: ', res)
  }

  onGithub = res => {
    console.log('github res: ', res)
  }

  onTwitter = res => {
    console.log('twitter res: ', res)
  }

  onKakaoSuccess = res => {
    console.log('kakao res :', res)
  }

  onKakaoError = err => {
    console.log('kakao err ', err)
  }
  render() {
    const {
      onFacebook,
      onGithub,
      onGoogle,
      onKakaoSuccess,
      onKakaoError,
      onTwitter
    } = this
    return (
      <div className="container">
        <div className="comment__container">
          <input className="comment__input" placeholder="자유롭게 입력하세요" />
        </div>
        <div className="login__container">
          <FacebookLogin />
          <GoogleLogin />
          <GithubLogin />
          <TwitterLogin />
          <KakaoLogin />
        </div>
      </div>
    )
  }
}

export default App
