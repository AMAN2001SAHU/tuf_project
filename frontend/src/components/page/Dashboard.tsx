import CardWrapper from '@/components/ui/card-wrapper';
import AuthLayout from './authLayout/layout';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/lib/types';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Dashboard = () => {
  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPassword: '',
      address: '',
    },
  });

  const onSubmit = (values: z.infer<typeof signupSchema>) => {
    console.log(values);
  };

  return (
    <div className="">
      <AuthLayout>
        <CardWrapper
          label="Create an account"
          title="Register"
          backButtonHref="/signin"
          backButtonLabel="Already have an account? Login Here."
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="fname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> First Name </FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="John" />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Last Name </FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="Del" />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel> Email </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="abc@xyz.com"
                        />
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
                      <FormLabel> Password </FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full border">
                Submit
              </Button>
            </form>
          </Form>
        </CardWrapper>
      </AuthLayout>
    </div>
  );
};
