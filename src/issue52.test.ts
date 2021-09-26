import { SQSClient } from "@aws-sdk/client-sqs";
import { mockClient } from "aws-sdk-client-mock";

describe('Simple Test', () => {
    const sqsMock = mockClient(SQSClient);

    it('should exist', () => {
        expect(true).toBeTruthy();
    });
});
