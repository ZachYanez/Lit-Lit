import React, {useEffect} from 'react'
import AppBar from '../Components/AppBar'
import API from '../utils/api'


export default function Home() {

     useEffect(() =>{
          API
            .getVolume()
            .then(res => {
                this.state({shelf: res.data})
                console.log(res.data.results)
            })
            .catch(err => console.log(err))
          });

  return (
    <div>
      <AppBar />
    </div>
  )
};