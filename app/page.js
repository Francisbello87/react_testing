"use client";

import { useState } from "react";
import UserProfile from "./components/UserProfile";
import { UserList } from "./components/UserList";

export default function Home() {
  const [showText, setShowText] = useState(false);
  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={() => alert("What's up my nigga!!!")}>Click Here</button>
      <div>
        <label htmlFor="randomText">Enter any text </label>
        <input id="randomText" type="text" />
      </div>
      <div>
        <input type="text" placeholder="Search...." />
      </div>
      <div className=" mt-4 text-black">
        <input value="Arsenal FC" />
      </div>
      <div className=" flex gap-4 justify-start my-5">
        {showText && <span>This is the text!</span>}
        <button
          className="bg-gray-600"
          onClick={() =>
            setTimeout(() => {
              setShowText(!showText);
            }, 1100)
          }
        >
          Show Text
        </button>
      </div>

      <UserProfile
        displayName={"Legolas"}
        username="Francis"
        email="francis@francis.com"
        isEmailVerified={false}
      />

      <UserList/>
    </main>
  );
}
