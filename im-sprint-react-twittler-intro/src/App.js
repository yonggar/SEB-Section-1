import React from 'react';
import './App.css';
import { dummyTweets, dummyNotice } from './static/dummyData';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'

// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Link to='/'>
        <i className="far fa-comment-dots"></i>
      </Link>
      <Link to='/notice'>
        <i className="far fa-bell"></i>
      </Link>
    </section>
  );
};

const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          total: {dummyTweets.length}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div>
    <footer>Copyright @ 2021 Code States</footer>
  </div>;
};
// TODO : Footer 함수 컴포넌트를 작성합니다. 시멘틱 엘리먼트 footer가 포함되어야 합니다.

//박해커 찾기
const tweetUserNameClass = function(username){
  return username === 'parkhacker' ? 'tweet__username tweet__username--purple' : 'tweet__username'
}

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              <img src={tweet.picture}></img>
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className={tweetUserNameClass(tweet.username)}>{tweet.username}</span>
                <span className='tweet__createdAt'>{tweet.createdAt}</span>
              </div>
              <div className='tweet__message'>{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      {/* <Tweets/> */}
        <Switch>
          <Route exact path='/'><Tweets /></Route>
          <Route path='/notice'><Notice /></Route>
        </Switch>
      <Footer />
    </section>
  );
};

const Notice = () => {
  return (
    <ul className="notifications">
      {dummyNotice.map((notice) => {
        return (
          <li className="notification" key={notice.id}>
            <div className="notification__content">
              <div className="notification__userInfo">
                <span className='notification__username'>{notice.username}</span>
                <span className='notification__createdAt'>{notice.createdAt}</span>
              </div>
              <div className='notification__content'>{notice.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
         {/* <Switch>
            <Router exact path='/'><Features /></Router>
            <Router path='/notice'><Notice /></Router>
          </Switch> */}
          <Features/>
        </main>
     </div>
    </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
// export default App