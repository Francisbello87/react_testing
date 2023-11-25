"use client";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <button onClick={() => alert("What's up my nigga!!!")}>Click Here</button>
      <div>
        <label htmlFor="randomText">Enter any text </label>
        <input id="randomText" type="text" />
      </div>
      <div>
        <input  type="text" placeholder="Search...." />
      </div>
      <div className=" mt-4 text-black">
        <input value="Arsenal FC"  />
      </div>
    </main>
  );
}
