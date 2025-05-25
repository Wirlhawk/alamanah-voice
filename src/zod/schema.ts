import { z } from "zod"

const formSchema = z.object({
  name: z.string().optional(),
  message: z.string().min(3, {
    message: "Form pesan harus di isi dengan minimal 3 karakter",
  }),
})

export { formSchema }