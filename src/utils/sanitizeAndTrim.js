import DOMPurify from "dompurify";

export const sanitizeAndTrim = (dirtyText, useProfiles = { html: false }) => {
    if (typeof dirtyText !== "string") {
        throw new Error("Input must be a string");
    }

    try {
        const sanitizedText = DOMPurify.sanitize(dirtyText, { USE_PROFILES: useProfiles });
        return sanitizedText.trim();
    } catch (error) {
        console.error("Error sanitizing text:", error);
        return "";
    }
};
