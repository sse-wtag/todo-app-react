import DOMPurify from "dompurify";

function purify(dirtyText, useProfiles = { html: false }) {
    if (typeof dirtyText !== "string") {
        throw new Error("Input must be a string");
    }

    try {
        const purifiedText = DOMPurify.sanitize(dirtyText, { USE_PROFILES: useProfiles });
        return purifiedText.trim();
    } catch (error) {
        console.error("Error sanitizing text:", error);
        return "";
    }
}

export default purify;
