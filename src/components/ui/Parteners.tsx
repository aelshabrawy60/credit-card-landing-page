import React from 'react'

const PartenersList = [
    'upwork.png',
    'rakuten.png',
    'petal.png',
    'nyt.png',
    'dell.png', 
    'vice.png'
]

function Parteners() {
  return (
    <div className='flex flex-wrap gap-10 justify-between'>
        {PartenersList.map((partener, i)=> <img src={partener} key={i}></img>)}
    </div>
  )
}

export default Parteners