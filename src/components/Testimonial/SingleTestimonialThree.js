import React from 'react';

const SingleTestimonialThree = (props) => {
  const { itemClass, description, authorAvatar, authorName, designation } =
    props;

  return (
    <div className={itemClass ? itemClass : 'ed-testimonial-item p-relative'}>
      <div className="ed-testimonial-ratting">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className="ed-testimonial-text">
        <p>
          {description
            ? description
            : ` “Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim.
          Amet consectetur adipiscing”`}
        </p>
      </div>
      <div className="ed-testimonial-author-box d-flex align-items-center">
        {authorAvatar ? (
          <div className="ed-testimonial-author mr-15">
            <img src={authorAvatar} alt="" />
          </div>
        ) : null}
        <div>
          <h5>{authorName ? authorName : 'Ellen Perera'}</h5>
          <span>{designation ? designation : 'CEO at House of Ramen'}</span>
        </div>
      </div>
    </div>
  );
};
export default SingleTestimonialThree;
