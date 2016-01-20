var config = {
  s3: [
    {
      // AWS specific options
      aws: {
        region: '',
        bucket: '',
      },

      // Run CloudFormation validation before deploying this bucket
      validate: false,

      // Create this bucket if it does not already exist
      create: true
    }
  ],
  // Remove 'condensation' from the beginning of the task names
  taskPrefix: '',

  dist: 'dist',
  lambdaSrc: ''
};

module.exports = config;
