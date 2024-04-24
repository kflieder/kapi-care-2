"use client";
import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import appwriteService from '@/appwrite/config';

const applicationSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10),
  experience: z.string(),
})


export default function Application() {
  const [employee, setEmployee] = React.useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
  })

  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: employee
  })

  const newEmployee = async () => {
    try {
      console.log(employee)
    } catch (error: any) {
      console.log(error)
    }
  }

  function onSubmit(values: z.infer<typeof applicationSchema>) {
    console.log(values)
    setEmployee(values)
    newEmployee()
    appwriteService.applicationsDatabase(values)
  }

  return (
    <div className="flex justify-center">
    <div className="w-80 my-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormControl>
                  <Input placeholder="First Name and Last Name" {...field} />
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
                <FormLabel>Email:</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number:</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience:</FormLabel>
                <FormControl>
                  <Textarea placeholder="Experience" {...field} />
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

