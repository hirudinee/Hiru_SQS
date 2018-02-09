let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {

	sqs.sendMessage({
		MessageBody: 'This is a 0.6.0. test',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_test.fifo',
		DelaySeconds: '0',
		MessageDeduplicationId: '001',
		MessageGroupId: 'Sample',
		MessageAttributes: {
			"Test": {
				"DataType": "String",
				"StringValue": "001"
			}
		}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
	});

	callback(null, 'Successfully executed');
}