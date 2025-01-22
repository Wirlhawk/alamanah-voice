"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";
import { formSchema } from "@/zod/schema";
import { submitForm } from "@/app/action";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormBuilder() {
    const [isLoading, setisLoading] = useState(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setisLoading(true)
            await submitForm(values);
            setisLoading(false)
            router.push('/success')
            
        } catch (error) {
            console.error("Form submission error", error);
            setisLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 max-w-3xl mx-auto "
            >
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    cols={5}
                                    placeholder="Ketik pesan yang akan di kirim"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    {/* <Button variant="ghost">
                        <Paperclip />
                    </Button> */}
                    <Button
                        type="submit"
                        variant="neu"
                        size="lg"
                        className="font-bold"
                        disabled={isLoading}
                    >
                        { isLoading ? <Loader2/> : <Send /> }
                         
                    </Button>
                </div>
            </form>
        </Form>
    );
}
