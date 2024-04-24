"use client";
import React, { useState } from 'react'
import appwriteService from '@/appwrite/config';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const signUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8)
})


export default function SignUpForm() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: user
    })

    const createEmployeeAccount = async () => {
        try {
            const userData = await appwriteService.createEmployeeAccount(user);
            if (userData) {
                router.push('/profilePages/users/[id]');
            }
        } catch (error: any) {
            console.log(error);
        }
    }


    function onSubmit(values: z.infer<typeof signUpSchema>) {
        setUser(values);
        console.log(values);
        createEmployeeAccount();
    }


    return (
        <div className="flex justify-center h-screen items-center">
            <div className="w-80">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" type="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )

}
