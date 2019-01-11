import React, { Component } from 'react';
import bg from './background.jpg';
import bgm from './background-m.jpg';
import cta1 from './cta1.png';
import cta2 from './cta2.png';
import cta1m from './cta1-m.png';
import cta2m from './cta2-m.png';
// import bg1 from './background1.jpg';
// import './App.css';
// import 'scss/app.scss'

class wayContent extends Component {
  render() {
    return (
      <section role="wayContent">
        <aside class="viewport">
          <figure><img src={bg} className="visual hidden-xs" alt="" /><img src={bgm} className="visual visible-xs" alt="" /></figure>
          <aside class="buttons inner">
            <a target="_blank" href="https://shop.samsung.com/tw/" className="btn cta1"><img className="hidden-xs" src={cta1} alt="" /><img className="visible-xs" src={cta1m} alt="" /></a>
            <a target="_blank" href="https://members.samsung.com.tw/dealer_location/index.aspx" className="btn cta2"><img className="hidden-xs" src={cta2} alt="" /><img className="visible-xs" src={cta2m} alt="" /></a>
          </aside>
        </aside>
      </section>
    );
  }
}

export default wayContent;
