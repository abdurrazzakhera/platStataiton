import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h2>What is Context API?</h2>
        <p>
          Ans: If a child component at nth level require a property from a
          parent component at any level, the information needs to be passed one
          level by level through props. In an application with lot of nested
          components, it is difficult. <br />
          Context API helps to directly send an information from a parent
          component to a child component at any level.
        </p>
      </div>
      <div>
        <h2>What is Semantic Tags</h2>
        <p>
          Ans: Semantic HTML tags let you serve structured content to your
          users, which is especially important for on-page SEO and
          accessibility. Semantic tag indicates that the enclosed text is a
          paragraph. This is both semantic and presentational because we know
          what paragraphs are and browsers know how to display them.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
