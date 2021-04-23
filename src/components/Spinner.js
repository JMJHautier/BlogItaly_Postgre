import React, {useState} from 'react';
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 50px auto 50px;
`;
const Spinner = () => {
    const [color] = useState("#5E2828");
    
    return (
      <div style={{padding: '200px', marginLeft: '200px'}}>
        <RingLoader color={color} css={override} size={150} />
        <h3 style={{fontSize: '1.5em', textAlign: 'center'}} className="display-3">Loading ...</h3>
      </div>
    )
}

export default Spinner
