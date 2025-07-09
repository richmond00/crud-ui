export const origin =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost'
    : 'http://crud-service.us-east-2.elasticbeanstalk.com';
