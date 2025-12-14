'use client';
import { useState } from 'react';
import SubmitButton from '../ui/buttons/SubmitBtn';
import Input from '../ui/Input';
import TextLink from '../ui/links/TextLink';

function SigninForm({ handleLogin }) {
  const onSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(new FormData(e.target));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="
    w-full
    max-w-md
    mx-auto
    bg-primary-50
    p-6 sm:p-8
    rounded-xl
    shadow-lg
    space-y-4
  "
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-900 text-center mb-4">
        Sign in to your account
      </h2>

      {/* Email input */}
      <Input type="email" placeholder="Your email" name="email" id="email" />

      {/* Password input */}
      <Input type="password" placeholder="Your password" name="password" id="password" />

      {/* Forget password link */}
      <div className="text-right">
        <TextLink href="/auth/reset">Forget your password?</TextLink>
      </div>

      {/* Sign in button */}
      <SubmitButton variant="primary" size="lg" className="w-full">
        Sign in
      </SubmitButton>

      {/* Signup link */}
      <div className="text-center text-sm text-gray-700">
        <span>If you don&apos;t have an account? </span>
        <TextLink href="/auth/signup" underline>
          Create account
        </TextLink>
      </div>
    </form>
  );
}

export default SigninForm;
