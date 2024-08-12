import * as z from 'zod';

export const signupSchema = z
  .object({
    fname: z.string().min(1, {
      message: 'Please enter your first name',
    }),
    lname: z.string().min(1, {
      message: 'Please enter your last name',
    }),
    email: z.string().email({
      message: 'Please enter a valid email address',
    }),
    password: z.string().min(6, {
      message: 'Password should be atleast 6 characters long',
    }),
    confirmPassword: z.string().min(6, {
      message: 'Password must be atleast 6 characters long',
    }),
    address: z.string().min(1, {
      message: 'Please enter your address',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

export const signinSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(6, {
    message: 'Password should be atleast 6 characters long',
  }),
});
