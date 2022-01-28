import React from 'react';
import '../component/style/style-detail.css';

export const CardDetail = props => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row pt-3 d-flex justify-content-center'>
          <img src='/images/logo1.png' alt='logo' className='logo' />
        </div>
        <div class='row'>
          <div className='col-12 d-flex justify-content-center'>
            <div className='card-detail'>
              <div>
                <img src='/images/pokemon-ijo.png' />
                <h2>Bulbasaur</h2>
              </div>
              <div className='content text-start'>
                <div className='bio'>
                  <h3>Bio</h3>
                  <p>
                    Bulbasaur, normal type pokemon. Bulbasaur's bellowing can
                    completely decimate a wood-frame house. It uses its voice to
                    punish its foes. This pokemon's round ears serve a
                    loudspeakers
                  </p>
                  <h4>
                    Genus
                    <span>
                      <p>Big Voice Pokemon</p>
                    </span>
                  </h4>
                  <h4>
                    Height
                    <span>
                      <p>1m (3'3.4")</p>
                    </span>
                  </h4>
                  <h4>
                    Weight
                    <span>
                      <p>40.5kg (89.1 lbs)</p>
                    </span>
                  </h4>
                  <h4>
                    Abilities
                    <span>
                      <span className='d-flex'>
                        <p>Soundproof</p>
                        <p>Soundproof</p>
                        <p>Soundproof</p>
                      </span>
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
