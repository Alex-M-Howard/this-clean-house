AWS = require('./config.ts');
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10'});

const params = {
  TableName: 'USERS',
  AttributeDefinitions: [
    {
      AttributeName: 'id',
      AttributeType: 'N'
    },
    {
      AttributeName: 'name',
      AttributeType: 'S'
    },
  ],
  KeySchema: [
    {
      AttributeName: 'id',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'name',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  StreamSpecification: {
    StreamEnabled: false
  }
};

dynamodb.createTable(params, (err: any, data: any) => {
  if (err) {
    console.log('Error creating table: ', err);
  } else {
    console.log('Table created: ', data);
  }
});