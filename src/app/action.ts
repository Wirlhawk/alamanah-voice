/* eslint-disable @typescript-eslint/no-unused-vars */
"use server"

import { createClient } from "@/utils/supabase/server"
import { formSchema } from "@/zod/schema";

export async function submitForm(data: unknown) {
    const supabase = await createClient()
    const parsedData = formSchema.safeParse(data);

    if (!parsedData.success) {
        throw new Error('Validation failed');
    }

    const { message, name } = parsedData.data;

    const { data: messageData, error } = await supabase
        .from('messages')
        .insert([
            { message, name }
        ])
        .select()


    if (error) {
        console.log("error : ", error.message)
    }

}
