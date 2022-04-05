import React from "react";

const Blogs = () => {
  return (
    <div className='container mx-auto '>
      <div className='border p-3 rounded-xl'>
        <h2 className='text-sky-600 text-4xl font-semibold'>
          What is Context API?
        </h2>
        <p className='w-3/4 text-justify text-xl'>
          <strong className='text-red-400'>Ans:</strong> If a child component at
          nth level require a property from a parent component at any level, the
          information needs to be passed one level by level through props. In an
          application with lot of nested components, it is difficult. <br />
          Context API helps to directly send an information from a parent
          component to a child component at any level.
        </p>
      </div>
      <div className='border p-3 mt-2 rounded-xl'>
        <h2 className='text-sky-600 text-4xl font-semibold'>
          What is Semantic Tags
        </h2>
        <p className='w-3/4 text-justify text-xl'>
          <strong className='text-red-400'>Ans:</strong> Semantic HTML tags let
          you serve structured content to your users, which is especially
          important for on-page SEO and accessibility. Semantic tag indicates
          that the enclosed text is a paragraph. This is both semantic and
          presentational because we know what paragraphs are and browsers know
          how to display them.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
