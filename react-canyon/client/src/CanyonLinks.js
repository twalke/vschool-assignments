import React from "react";

import {Link} from "react-router-dom";

function CanyonLinks({canyons}) {
  // const canyonLinks = canyons.map((canyon) => (
  //   canyon.state == 'UT' ?
  //   <div key={canyon._id}>
  //     <Link to={{
  //       pathname: `/canyon/${canyon.name}`,
  //       state: {canyon}
  //     }}>{canyon.name}</Link>
  //   </div>
  // ))
  const utahLinks = canyons.map((canyon) =>
    canyon.state == 'UT' ?
    <Link to={{
          pathname: `/canyon/${canyon.name}`,
          state: {canyon}
        }}>{canyon.name}</Link>
    :
      <div></div>
    )
  return (
    <div className="canyonLinks">
      {utahLinks}
    </div>
  )
}

export default CanyonLinks;
