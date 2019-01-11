import React, { Component } from 'react';
import kv from './kv.jpg';
import kvm from './kv-m.jpg';
// import './App.css';
// import 'scss/app.scss'

class KV extends Component {
  render() {
    return (
        /* eslint-disable-next-line */
      <section role="kv">
        <aside className="slick">
          <figure><img src={kv} className="visual hidden-xs" alt="心相聚 每一刻" /><img src={kvm} className="visual visible-xs" alt="心相聚 每一刻" /></figure>
        </aside>
      </section>
    );
  }
}

export default KV;
