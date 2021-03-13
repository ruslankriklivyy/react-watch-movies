import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={342}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#2f3130"
    foregroundColor="#424141"
    {...props}>
    <rect x="25" y="7" rx="10" ry="10" width="250" height="320" />
    <rect x="25" y="340" rx="6" ry="6" width="140" height="27" />
    <rect x="244" y="340" rx="5" ry="5" width="30" height="27" />
    <rect x="205" y="340" rx="5" ry="5" width="30" height="27" />
  </ContentLoader>
);

export default MyLoader;
