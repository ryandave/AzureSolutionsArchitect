import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

// import image1 from '../assets/images/image1.jpg';

{/* <a className="image">
<img src={<<image>>} alt="" />
</a> */}

const sections = [
  { id: 'network', name: 'Network infrastructure', icon: 'fa-connectdevelop' },
  { id: 'storage', name: 'Storage infrastructure', icon: 'fa-cubes' },
  { id: 'compute', name: 'Compute infrastructure', icon: 'fas fa-desktop' },
  { id: 'operations', name: 'Operations', icon: 'fa-server' },
  { id: 'data', name: 'Data Platforms', icon: 'fa-database' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h3 className="alt">
              <strong>Azure Solutions Architect Expert Certification</strong>
              <br />
            </h3>
            <br />
            <p>Notes For All Microsoft Learning Paths</p>
          </header>
        </div>
      </section>

      <section id="network" className="two">
        <div className="container">
          <header>
            <h2>Network infrastructure</h2>
          </header>

          <p>
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
          </p>

        </div>
      </section>

      <section id="storage" className="two">
        <div className="container">
          <header>
            <h2>Storage infrastructure</h2>
          </header>

          <p>
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
          </p>

        </div>
      </section>

      <section id="compute" className="two">
        <div className="container">
          <header>
            <h2>Compute infrastructure</h2>
          </header>
          <p>
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
          </p>
        </div>
      </section>

      <section id="operations" className="two">
        <div className="container">
          <header>
            <h2>Infrastructure operations</h2>
          </header>
          <p>
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
          </p>
        </div>
      </section>

      <section id="data" className="two">
        <div className="container">
          <header>
            <h2>Data Platforms</h2>
          </header>
          <p>
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
            THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_THIS-IS-FILLER-TEXT_
          </p>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
