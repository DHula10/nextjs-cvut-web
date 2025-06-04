"use client";
import Image from "next/image";
import TextInput from "./components/form/TextInput";
import TextArea from "./components/form/TextArea";
import Button from "./components/button";

import { useState } from "react";

export default function Home() {

  const [error, setError] = useState(false);

  return (
    <div className="h-svh py-20 gap-10">
      <h1>test page</h1>
      <TextInput
        name="name"
        label="Name"
        placeholder="Enter your name"
        errorMessage="Name is required"
        error={error}
        required
      />

      <TextArea
        name="message"
        label="Message"
        placeholder="Enter your message"
        errorMessage="Message is required"
        error={error}
        required
      />


      <Button isLink={false} label="change error state" bgColor="r" inverse onClick={() => setError(!error)} />


    </div>
    
  );
}
