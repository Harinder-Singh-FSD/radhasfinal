import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.8460766013504!2d-0.3228576491861918!3d51.626028709744425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876145b6f097199%3A0xc9d8d3628cff3aad!2s8%20Hilltop%20Way%2C%20Stanmore%20HA7%203DB%2C%20UK!5e0!3m2!1sen!2sin!4v1624741449271!5m2!1sen!2sin"
        width="400"
        height="300"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
