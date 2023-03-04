import React from 'react';
import { } from 'react-bootstrap';

export default function Home() {
  return <>
    <div className="w-50 mx-auto text-center">
      <p>
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </p>
      <p>
        This website is collaborative, if you want to contribute, you can do it by forking the github and making a pull request. <br />
        <a href="https://github.com/lucasfoufou/best-award-summary" className="text-decoration-underline" target='_blank'>Github Link</a>
      </p>
    </div>
  </>;
};
