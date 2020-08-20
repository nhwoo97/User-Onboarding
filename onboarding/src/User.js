import React, {useEffect} from "react";

export default function User(props) {
  const { details } = props;



  if (!details) {
    return <h3>Working...</h3>;
  }
  return (
    <div>
      <h2>{details.first_name}</h2>
      <p>Email:{details.email}</p>
      <p>Password:{details.password}</p>
        <p>Terms:{details.terms}</p>
    </div>
  );
}
