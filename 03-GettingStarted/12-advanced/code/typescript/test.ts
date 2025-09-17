import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const MathInputSchema = z.object({ a: z.number(), b: z.number() });

const mySchema = z
  .object({
    myString: z.string().min(5),
    myUnion: z.union([z.number(), z.boolean()]),
  })

let json = zodToJsonSchema(MathInputSchema);

console.log(json);