import { z } from "zod"

const formSchema = z.object({
  name: z.string().max(20, {
    message: "Nama tidak boleh lebih dari 20 karakter",
  }).optional(),
  message: z.string().min(3, {
    message: "Form pesan harus di isi dengan minimal 3 karakter",
  }).max(200, {
    message: "Form pesan tidak boleh lebih dari 200 karakter",
  }),
})

export { formSchema }