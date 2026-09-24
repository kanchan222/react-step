import React from "react";

function Card({ username, btnText }) {
  console.log(username);
  return (
    <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
      <img
        class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="https://images.pexels.com/photos/39348072/pexels-photo-39348072.jpeg"
        alt="nothing"
      />

      <div class="space-y-2 text-center sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg font-semibold text-black">{username}</p>
          <p class="font-medium text-gray-500">Computer Engineer</p>
        </div>
        <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
