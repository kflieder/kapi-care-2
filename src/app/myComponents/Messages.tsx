"use client"
import react from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import appwriteService from "@/appwrite/config"

const messageBodySchema = z.object({
    message: z.string().min(1).max(1000)
})

type MessageType = { message: string}

export default function Messages() {
    const [messages, setMessages] = react.useState<MessageType[]>([]);
    const form = useForm<z.infer<typeof messageBodySchema>>({
        resolver: zodResolver(messageBodySchema),
    })

    async function onSubmit(values: z.infer<typeof messageBodySchema>) {
        const createdMessage: any = await appwriteService.createMessage(values)
        form.reset()
        form.setValue("message", "");
        setMessages([...messages, createdMessage])
    }

    react.useEffect(() => {
        appwriteService.getMessages().then((messages: any) => {
            setMessages(messages)
            console.log("Fetched data:", messages)
        })

    }, [])
    




    return (
        <div className="flex flex-col justify-around items-center h-screen">
            <div className="border-2 p-5 w-2/3 overflow-scroll h-2/3 mt-12">
                {messages.map((message: any) => (
                    <div key={message.$id}>
                        <p className="border rounded inline-block p-1 my-2">{message.name}:</p>
                        <p className="ml-10 border rounded p-2 w-2/3">{message.body}</p>
                    </div>
                ))}
            </div>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 flex flex-row justify-around items-center border">
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write a message..."
                                            className="w-96 resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Send</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}
