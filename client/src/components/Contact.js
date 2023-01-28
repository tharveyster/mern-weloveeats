const Contact = () => {
  return (
    <div className="contactButtonContainer">
      <div className="shareContent">
        <span className="socialText">Share us with friends here!</span>
        <br />
        <a
          href="https://www.facebook.com/sharer.php?u=https%3a%2f%2fwww.weloveeats.com"
          rel="noreferrer"
          target="_blank"
          title="Share on Facebook"
          data-social-share-network="facebook"
          className="fa fa-facebook share facebook"
        > </a>
        <a
          href="https://twitter.com/intent/tweet?text=WeLoveEats.com&amp;url=https%3a%2f%2fwww.weloveeats.com&amp;original_referer=https%3a%2f%2fwww.weloveeats.com"
          rel="noreferrer"
          target="_blank"
          title="Share on Twitter"
          data-social-share-network="twitter"
          className="fa fa-twitter share twitter"
        > </a>
        <a
          href="https://pinterest.com/pin/create/button/?url=https%3a%2f%2fwww.weloveeats.com&media=https%3a%2f%2fwww.weloveeats.com/images/placesetting.png&description=WeLoveEats.com"
          rel="noreferrer"
          target="_blank"
          title="Share on Pinterest"
          data-social-share-network="pinterest"
          data-pin-custom="true"
          className="fa fa-pinterest share pinterest"
        > </a>
      </div>
      <div className="fillerContent"></div>
      <div className="contactContent">
        <span className="socialText">Contact us!</span>
        <br />
        <a
          href="http://fb.me/weloveeats"
          rel="noreferrer"
          target="_blank"
          title="Contact us on Facebook"
          data-social-share-network="contact"
          className="fa fa-facebook share facebook"
        > </a>
      </div>
    </div>
  );
};

export default Contact;
