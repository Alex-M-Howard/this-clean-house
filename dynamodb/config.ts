let AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  endpoint: 'http://localhost:8000',
  accessKeyId: 'dummy-access-key',
  secretAccessKey: 'dummy-secret-key'
});

module.exports = AWS;
