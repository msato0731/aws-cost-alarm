import { App } from 'aws-cdk-lib';
import { BillingAlarmStack } from './billing_alarm_stack';
import 'dotenv/config';

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: 'us-east-1',
};


const app = new App();

new BillingAlarmStack(app, 'billing-alarm', {
  env,
  slackWorkspaceId: process.env.SLACK_WORKSPACE_ID!,
  slackChannelConfigurationName: process.env.SLACK_CHANNEL_CONFIGURATION_NAME!,
  slackChannelId: process.env.SLACK_CHANNEL_ID!,
  budgetLimitAmountUsd: 50,
  costAnomaryThresholdUsd: 1,
});

app.synth();