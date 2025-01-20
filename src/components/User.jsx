import React from 'react'

const User = ({users}) => {
  return (
    <div>
      {users.map((users, idex) => {
        return (
          <div
            key={idex}
            className="flex flex-col text-white items-center gap-2"
          >
            <h1>{users.fullName}</h1>
            
          </div>
        );
      })}
    </div>
  );
}

export default User
