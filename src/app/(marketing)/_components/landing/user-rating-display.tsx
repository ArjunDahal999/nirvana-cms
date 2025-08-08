// components/UserRatingDisplay.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserRatingDisplay() {
  const users = [
    { id: 1, name: "User 1", avatarUrl: "https://github.com/shadcn.png" },
    {
      id: 2,
      name: "User 2",
      avatarUrl: "https://github.com/arjundahal999.png",
    },
    { id: 3, name: "User 3", avatarUrl: "https://github.com/test.png" },
    { id: 4, name: "User 4", avatarUrl: "https://github.com/best.png" },
    { id: 5, name: "User 5", avatarUrl: "https://github.com/nice.png" },
    { id: 6, name: "User 6", avatarUrl: "https://github.com/dice.png" },
  ];

  const rating = 5; // Assuming a 5-star rating from the image

  return (
    <div className="flex w-fit items-center space-x-4  rounded-full ">
      {/* Avatar Group */}
      <div className="flex -space-x-4 rtl:space-x-reverse">
        {users.map((user, index) => (
          <Avatar
            key={user.id}
            className={`w-10 h-10 border-2 border-white ${
              index > 0 ? "relative" : "" // Add relative for z-index stacking
            }`}
            style={{ zIndex: users.length - index }} // Ensures correct stacking order
          >
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        ))}
      </div>

      {/* Star Rating */}
    </div>
  );
}

import { cn } from "@/lib/utils";

const data = [
  {
    name: "John Doe",
    position: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jane Smith",
    position: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "David Johnson",
    position: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Emily Davis",
    position: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Michael Wilson",
    position: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sarah Thompson",
    position: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function AvatarList({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes: Record<"sm" | "md" | "lg", string> = {
    lg: "m-3 size-6",
    md: "m-2 size-12",
    sm: "m-1 size-8",
  };

  return (
    <div className=" flex flex-col gap-y-6 items-start">
      <div className="flex gap-x-1">
        <span>10k+ Happy Patients</span>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-6 h-6 ${i < 5 ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      <div className={cn("flex items-center ", className)}>
        {data.map((item) => (
          <div
            key={item.name}
            className="group relative z-0 -ml-4 flex scale-100 items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
          >
            <div className="relative overflow-hidden rounded-full bg-white">
              <div className="bg-size pointer-events-none absolute h-full w-full animate-bg-position from-green-500 from-30% via-green-900 via-50% to-green-300 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r" />
              <div className="z-1 blur-lg" />
              <img
                src={item.image}
                alt={item.name}
                className={cn(
                  "rounded-full object-cover",
                  sizes[size] ?? sizes.md
                )}
              />
            </div>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
              <div className="text-sm font-semibold">{item.name}</div>
              <div className="text-sm">{item.position}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
