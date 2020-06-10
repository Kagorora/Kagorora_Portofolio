import React from "react";
import "../style/css/socialMedia.css";

const socialMedia = () => {
  return (
    <div className="socialMedia">
      <ul>
        <li>
          <i class="fa fa-github"></i>
          <span className='github'>Gihub</span>
        </li>
        <li>
          <i class="fa fa-linkedin"></i>
          <span className='linkedin'>Linkedin</span>
        </li>
        <li>
          <i class="fa fa-envelope"></i>
          <span className='email'>Email</span>
        </li>
      </ul>
    </div>
  );
};

export default socialMedia;
