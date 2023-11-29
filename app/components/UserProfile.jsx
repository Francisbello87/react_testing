import React from "react";

export default function UserProfile(props) {
  const { displayName, username, email, isEmailVerified } = props;
  return (
    <div>
      <div>
        <span>
          Display Name: {' '}
          {displayName.length > 5
            ? displayName.slice(0, 5).concat("...")
            : displayName}
        </span>
      </div>
      <div>
        <span>Username: {username}</span>
      </div>
      <div>
        <span>Email: {email}</span>
      </div>
      <div>
        Verfied:
        <span>{isEmailVerified ? "Email verified" : "Email not verified"}</span>
      </div>
    </div>
  );
}
