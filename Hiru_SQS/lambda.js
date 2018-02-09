let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {

	sqs.sendMessage({
		MessageBody: 'This is a 0.6.0. test edit',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_test.fifo',
		DelaySeconds: '0',
		MessageDeduplicationId: '001',
		MessageGroupId: 'Sample',
		MessageAttributes: {
			"test": {
				"DataType": "Number",
				"StringValue": "001"
			}
		}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
		console.log(data);
		callback(null, data);
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here test comment test
		console.log(error);
		callback(null, error);
	});

	//callback(null, 'Successfully executed');
}