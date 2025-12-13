'use server';
import { redirect } from 'next/navigation';
import { createClient } from '../utils/supabase/server';

export async function signUpAction(formData) {
  const supabase = await createClient();
  const email = formData.get('email');
  const password = formData.get('password');
  const fname = formData.get('fname');
  const lname = formData.get('lname');

  //const supabase = createClient();
  const { error, data } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fname,
        lname,
      },
    },
  });
  if (!error) {
    redirect('/');
  }

  return { error, data };
}

export async function signInAction(formData) {
  const supabase = await createClient();
  const email = formData.get('email');
  const password = formData.get('password');

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { success: false, message: error.message };
  } else {
    return { success: true, user: data.user };

  }
}
