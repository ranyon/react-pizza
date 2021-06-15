import React from 'react'
import pizza2 from '../../img/Eqpizza.jpg'

const About = () => {
   return(
       <>
           <div className="container">
      <div className="row">
        <h1 className="text-center">About Pizza</h1>
        <br />
        <div className="col-md-6">
          <img
            src={pizza2}
            alt=""
            className="img-responsive"
          />
        </div>
        <div className="col-md-6">
          <h3>Pizza Is Awesome</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            aliquid aliquam laboriosam nemo laborum, aperiam delectus
            exercitationem nulla, ipsam velit deserunt et repellendus
            perferendis ut perspiciatis pariatur eveniet laudantium tempore.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            aliquid aliquam laboriosam nemo laborum, aperiam delectus
            exercitationem nulla, ipsam velit deserunt et repellendus
            perferendis ut perspiciatis pariatur eveniet laudantium tempore.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            aliquid aliquam laboriosam nemo laborum, aperiam delectus
            exercitationem nulla, ipsam velit deserunt et repellendus
            perferendis ut perspiciatis pariatur eveniet laudantium tempore.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            aliquid aliquam laboriosam nemo laborum, aperiam delectus
            exercitationem nulla, ipsam velit deserunt et repellendus
            perferendis ut perspiciatis pariatur eveniet laudantium tempore.
          </p>
        </div>
      </div>
    </div>
       </>
   )
}

export default About;
