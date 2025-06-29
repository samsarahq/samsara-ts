/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Multiple choice or checkbox value option object.
 */
export interface FormsSelectOptionObjectResponseBody {
    /** Identifier of the option. */
    id: string;
    /** Indicates whether the question should be ignored from the total score if this option is selected. Returns true if a score weight was not given to this option. Only present when the select form field has scoring. */
    ignoreQuestionFromScoreIfSelected?: boolean;
    /** Label of the option. */
    label: string;
    /** Score weight of the option, indicates number of score points received if this option is selected. Only present if the select form field has scoring. */
    optionScoreWeight?: number;
}
