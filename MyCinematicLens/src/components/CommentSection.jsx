import React from "react";
const sampleComments = [
  {
    id: 1,
    name: "Emma L.",
    avatar: "https://i.pravatar.cc/150?img=12",
    timestamp: "2 hours ago",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.!"
  },
  {
    id: 2,
    name: "Jack M.",
    avatar: "https://i.pravatar.cc/150?img=8",
    timestamp: "5 hours ago",
    text: "I watched it twice and still caught new details the second time. A masterpiece!"
  },
  {
    id: 3,
    name: "Sofia R.",
    avatar: "https://i.pravatar.cc/150?img=21",
    timestamp: "1 day ago",
    text: "Overrated imo. Good acting, but the plot dragged in the middle."
  },
  {
    id: 4,
    name: "Lucas T.",
    avatar: "https://i.pravatar.cc/150?img=33",
    timestamp: "2 days ago",
    text: "The cinematography and soundtrack are 🔥🔥🔥"
  },
  {
    id: 5,
    name: "Maya B.",
    avatar: "https://i.pravatar.cc/150?img=45",
    timestamp: "3 days ago",
    text: "I need a sequel. Immediately."
  }
];

function Comment({ name, avatar, timestamp, text }) {
  return (
    <div className="flex py-4 first:pt-0 place-items-center rounded-xl gap-5 bg-neutral-700 ">
      <p></p>
      <img src={avatar} alt={name} className="transition delay-150 duration-300 ease-in-out hover:-translate-y-px-1 hover:scale-105 rounded-full size-16 px-4" />
      <div className="flex flex-col gap-3">
        <div className="text-red-400 flex gap-3">
          <p>{name}</p>
          <span className="text-white">{timestamp}</span>
        </div>
        <p className="text-stone-50">{text}</p>
        <p></p>
      </div>
    </div>
  );
}

export default function CommentSection() {
  return (
    <div className="grid grid-cols-1 gap-12 justify-between">
      <h3 className="">Comments</h3>
      {sampleComments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}