let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_test.fifo',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '2',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			// your logic to access each message through out the loop. Each message is available under variable message 
			// within this block test
		})
	}, function (error) {
		// implement error handling logic here
		//test
	});


	callback(null, 'Successfully executed');
}