import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div>
      <div className="qestion-one">
        <h2>How react work?</h2>
        <p>
          Ans:- React is a javasceript library.You can use it to help build
          single page application and mobile apps,or to build complex apps if yo
          utilise it with other libraries.it designs simple viws for each state
          in your application,and react will efficiently update and render just
          the right component when your data change...
        </p>
      </div>
      <div className="qestion-one">
        <h2>What will be different of props vs state? </h2>
        <p>
          Ans:- The key difference between props and state is that state is
          internal and controlled by the component itself while props are
          external and controlled by whatever renders the component.
          <br />
          props are read only---state change can be asnchronous.
          <br /> props are immutable.---state is mutable.
          <br /> props can be accessed by the child component---state cannot be
          accessd by child components.
          <br />
          props make components reusable.---state cannot make components
          reusable..
        </p>
      </div>
    </div>
  );
};

export default Question;
