import { z } from "zod";
export const Create_Message_ZOD = z.object({
    content: z.string(),
    replyTo: z.optional(z.string()),
});
