import Image from "next/image";
import TextInput from "./components/form/TextInput";

export default function Home() {
  return (
    <div className="h-svh py-20">
      <h1>test page</h1>
      <TextInput
        name="name"
        label="Name"
        placeholder="Enter your name"
        errorMessage="Name is required"
        error
        required
      />
    </div>
  );
}
