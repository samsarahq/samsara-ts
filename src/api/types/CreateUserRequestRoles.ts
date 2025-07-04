/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A role that applies to a user. If the role has a `tagId`, then the role applies for that tag. If there is no `tagId`, then the role applies at the organizational level. A user may have many tag-specific roles, but may only have one organizational role. If the organizational level role has higher privileges than a tag-specific role, then the organizational role privileges will take precedence.
 */
export interface CreateUserRequestRoles {
    /** The unique ID for the role. */
    roleId: string;
    /** ID of the tag this role applies to. */
    tagId?: string;
}
