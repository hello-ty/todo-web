import clsx from "clsx";
import classes from "/src/styles/Home.module.css";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { useCallback, useState } from "react";
import { HyperLink } from "/src/components/HyperLink/";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { firstName, email, subject, message };
    console.log(body);
    try {
      const response = await fetch("/api/Inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log("something went wrong");
        //set an error banner here
      } else {
        resetForm();
        console.log("form submitted successfully !!!");
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log("there was an error submitting", error);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <>
      <form action="#" method="POST" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          className="bg-zinc-300 py-3 px-4 mb-3 block w-full shadow-sm text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="bg-zinc-300 py-3 px-4 mb-3 block w-full shadow-sm text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 rounded-md"
        />
        <input
          type="subject"
          name="subject"
          id="subject"
          autoComplete="subject"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          className="bg-zinc-300 py-3 px-4 mb-3 block w-full shadow-sm text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 rounded-md"
        />
        <input
          type="message"
          name="message"
          id="message"
          autoComplete="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="bg-zinc-300 py-3 px-4 mb-3 block w-full shadow-sm text-gray-200-900 focus:ring-indigo-400 focus:border-indigo-400 border-warm-gray-300 rounded-md"
        />
        <input type="submit" value="送信" />
      </form>
    </>
  );
}
