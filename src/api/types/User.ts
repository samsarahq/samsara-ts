/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Samsara from "../index.js";

/**
 * A user object.
 */
export interface User {
    authType: Samsara.UserAuthType;
    email: Samsara.UserEmail;
    id: Samsara.UserId;
    name: Samsara.UserName;
    roles: Samsara.UserRoles;
}
