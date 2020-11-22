import React, { useState, useEffect } from 'react';

function ApiExample() {
  const [users, setUsers] = useState([])
  const [isFetchin, setUseFetchin] = useState(true)

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {
      setUsers(users)
      setUseFetchin(false)
    })
    .catch(error => console.log(`Error: ${error}`))
  },[])

    return (
        <div>
          <p>Api Example</p>
          {isFetchin ? 'Loading ...': (
            <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
          )}
        </div>
    )
}

export default ApiExample;