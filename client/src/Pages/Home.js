import React, {useEffect} from 'react'
import AppBar from '../Components/AppBar'
import API from '../Controller/api'


export default function Home() {

     useEffect(() =>{
          API
            .getVolume()
            .then(res => {
                this.state({res})
                console.log(res)
            })
            .catch(err => console.log(err))
          });

  return (
    <div>
      <AppBar />
    </div>
  )
};