import React, { useState } from 'react';

import first from './images/first.png';
import second from './images/second.png';
import third from './images/third.png';
import fourth from './images/fourth.png';
import fifth from './images/fifth.png';
import loading from './images/loading.gif';

import axios from 'axios';

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(window.location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
const CommentBox = () => {
  return (
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      style={{
        position: 'relative',
        zIndex: '100',
        bottom: '1463px',
        left: '346px',
        height: '123px',
        width: '1084px',
        border: 'none',
        outline: 'none',
        fontSize: '20px',
        resize: 'none'
        // backgroundColor: 'red'
      }}></textarea>
  );
};
const First = () => {
  return (
    <>
      <img
        style={{
          width: '100vw'
        }}
        src={first}
        alt=""
      />
    </>
  );
};
const Loading = function({ show = false }) {
  return (
    show && (
      <div
        style={{
          position: 'absolute',
          zIndex: '10',
          top: '206px',
          right: '43px',
          backgroundColor: 'white',
          width: '400px',
          height: '66px',
          textAlign: 'center'
        }}>
        <img
          src={loading}
          alt=""
          style={{
            height: '50px'
          }}
        />
      </div>
    )
  );
};
const Second = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Loading show={loading} />
      <img
        onClick={async () => {
          setLoading(true);
          const companyId = getUrlParameter('companyId');
          const userId = getUrlParameter('userId');
          const pipeline_id = await createBundle({ companyId, userId });
          setLoading(false);

          window.open(`https://app.pipedrive.dev/pipeline/${pipeline_id}`);
        }}
        style={{
          width: '100vw'
        }}
        src={second}
        alt=""
      />
    </>
  );
};
const Third = () => {
  return (
    <>
      <img
        style={{
          width: '100vw'
        }}
        src={third}
        alt=""
      />
      <CommentBox />
    </>
  );
};
const Fourth = () => {
  return (
    <img
      style={{
        width: '100vw'
      }}
      src={fourth}
      alt=""
    />
  );
};
const Fifth = () => {
  return (
    <img
      style={{
        width: '100vw'
      }}
      src={fifth}
      alt=""
    />
  );
};
const createBundle = async function({ companyId, userId }) {
  let pipeline_id = '';
  try {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const url = `http://localhost:50372/api/v1/tiers/bundle/apply?companyId=${companyId}&userId=${userId}&api_token=17b85132b37645fa3bf7e293246fd96d67f92588&=`;
    const client = axios.create({
      headers: {
        'Accept': 'application/json',
        'Cache-control': 'no-cache',
        'Pragma': 'no-cache'
      },
      mode: 'cors',
      withCredentials: true,
      crossdomain: true
    });
    const ping = await client({ url, method: 'GET' });
    const resp = await ping.data;
    pipeline_id = resp.data.pipeline_id;
  } catch (e) {}

  return pipeline_id;
};
const gallery = [First, Second, Third, Fourth, Fifth];

export default gallery;
