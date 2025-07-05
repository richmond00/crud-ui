import React from 'react';

interface ErrorProps {
  message: string;
}

const Error = (props: ErrorProps) => {
  return <div role="alert">Something went wrong: {props.message}</div>;
};

export default Error;
