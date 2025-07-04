/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * User or driver object.
 */
export interface FormsPolymorphicUserObjectResponseBody {
    /** ID of the polymorphic user. */
    id: string;
    /** The type of the polymorphic user.  Valid values: `driver`, `user` */
    type: FormsPolymorphicUserObjectResponseBody.Type;
}

export namespace FormsPolymorphicUserObjectResponseBody {
    /**
     * The type of the polymorphic user.  Valid values: `driver`, `user`
     */
    export type Type = "driver" | "user";
    export const Type = {
        Driver: "driver",
        User: "user",
    } as const;
}
