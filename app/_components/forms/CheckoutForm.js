'use client';
import Image from 'next/image';
import { useState } from 'react';
import Input from '../ui/Input';
import ButtonLink from '../ui/links/ButtonLink';

function CheckoutForm({ user }) {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <form className="space-y-2 sm:space-y-3 my-3">
      {/* First & Last Name */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Input
          placeholder="First name"
          defaultValue={user.user_metadata.fname}
          name="fname"
          id="fname"
          disabled
          className="flex-1"
        />
        <Input
          placeholder="Last name"
          defaultValue={user.user_metadata.lname}
          name="lname"
          id="lname"
          disabled
          className="flex-1"
        />
      </div>

      {/* Email & Country */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Input
          type="email"
          className="flex-1"
          placeholder="Your email"
          name="email"
          defaultValue={user.user_metadata.email}
          disabled
          id="email"
        />
        <Input
          type="text"
          className="flex-1"
          placeholder="Country"
          name="country"
          id="country"
        />
      </div>

      {/* Governate / City / Postal code */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Input
          type="text"
          placeholder="Governate"
          name="governate"
          id="governate"
          className="flex-1"
        />
        <Input type="text" placeholder="City" name="city" id="city" className="flex-1" />
        <Input
          type="text"
          placeholder="Postal code"
          name="code"
          id="code"
          className="flex-1"
        />
      </div>

      {/* Address */}
      <Input
        type="text"
        className="w-full"
        placeholder="Address"
        name="address"
        id="address"
      />

      {/* Payment Section */}
      <h1 className="text-2xl font-bold mt-4">Payment</h1>
      <p className="mb-3">All transactions are secure and encrypted.</p>

      {/* Credit Card Option */}
      <label className="flex items-center sm:flex-row  sm:items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="selection"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <div className="flex sm:flex-row justify-between items-center w-full gap-2">
          <span>Credit Card</span>
          <div className="flex gap-2">
            <Image
              src="/payment/visa.png"
              alt="visa"
              width={50}
              height={50}
              className="w-auto h-auto"
            />
            <Image
              src="/payment/paypal.png"
              width={50}
              height={50}
              className="w-auto h-auto"
              alt="paypal"
             
            />
          </div>
        </div>
      </label>

      {/* Credit Card Fields */}
      <Input
        type="text"
        className="w-full"
        placeholder="Card number"
        name="card-num"
        id="card-num"
      />
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <Input
          type="text"
          className="flex-1"
          placeholder="Expiration date (MM / YY)"
          name="exdate"
          id="exdate"
        />
        <Input
          type="text"
          className="flex-1"
          placeholder="Security code"
          name="sec-code"
          id="sec-code"
        />
      </div>
      <Input
        type="text"
        className="w-full"
        placeholder="Name on card"
        name="name-on-card"
        id="name-on-card"
      />

      {/* COD Option */}
      <label className="flex items-center gap-2 cursor-pointer mt-2">
        <input
          type="radio"
          name="selection"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        <span className="text-sm">COD</span>
      </label>

      {/* Submit Button */}
      <ButtonLink href="/checkout" className="mt-4 sm:mt-6 py-2" full>
        Pay now
      </ButtonLink>
    </form>
  );
}

export default CheckoutForm;
