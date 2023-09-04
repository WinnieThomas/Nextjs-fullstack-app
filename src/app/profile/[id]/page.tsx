import React from 'react'

const userProfile = ({params}: any ) => {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>User Profile id {params.id}</p>
    </div>
  )
}

export default userProfile
