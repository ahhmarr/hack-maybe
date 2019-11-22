import React from 'react';

import first from './images/first.png';
import second from './images/second.png';
import third from './images/third.png';
import fourth from './images/fourth.png';
import fifth from './images/fifth.png';

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(window.location.search);
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
const First = () => {
  return (
    <img
      style={{
        width: '100vw'
      }}
      src={first}
      alt=""
    />
  );
};
const Second = () => {
  return (
    <img
      onClick={async () => {
        const companyId = getUrlParameter('companyId');
        const userId = getUrlParameter('userId');
        const pipeline_id = await createBundle({ companyId, userId });
        window.open(`https://app.pipedrive.dev/pipeline/${pipeline_id}`);
      }}
      style={{
        width: '100vw'
      }}
      src={second}
      alt=""
    />
  );
};
const Third = () => {
  return (
    <img
      style={{
        width: '100vw'
      }}
      src={third}
      alt=""
    />
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
    const url = `http://localhost:50372/api/v1/tiers/bundle/apply?companyId=${companyId}&userId=${userId}&api_token=17b85132b37645fa3bf7e293246fd96d67f92588&=`;
    const ping = await fetch(url);
    const resp = await ping.json();
    pipeline_id = resp.data.pipeline_id;
  } catch (e) {}

  return pipeline_id;
};
const gallery = [First, Second, Third, Fourth, Fifth];

export default gallery;
