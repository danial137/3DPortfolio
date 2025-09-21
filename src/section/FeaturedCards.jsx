import React from 'react'
import {abilities} from "../constants/index.js";

const FeaturedCards = () => {
    return (
      <div className="w-full padding-x-lg">
          <div className="mx-auto grid-3-cols">

              {abilities.map(({imgPath,title,desc})=>(
                  <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                      <h3>{title}</h3>
                  </div>
              ))}

          </div>
      </div>
    )
}
export default FeaturedCards
