/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * The action type specific details. Set webhookIds for Slack or Webhook actions. Set recipients for Notifications. Set driverAppNotification for Driver App Push. Other action types don't need to set a param.
 */
export interface ActionParamsObjectRequestBody {
    driverAppNotification?: Samsara.DriverAppNotificationObjectRequestBody;
    /** Recipient of the action. */
    recipients?: Samsara.RecipientObjectRequestBody[];
    webhooks?: Samsara.WebhookParamsObjectRequestBody;
}
