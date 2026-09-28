export type Course = {
  id: string;
  title: string;
  author: string;
  rating: number;
  price: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  comments: number;
  students: string;
  priceUnit: string;
  image: string;
};

export const courses: Course[] = [
  {
    id: "learn-figma",
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    priceUnit: "lifetime",
    image: "/images/courses/figma.jpg",
  },
  {
    id: "digital-asset",
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    priceUnit: "lifetime",
    image: "/images/courses/assets.jpg",
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    priceUnit: "lifetime",
    image: "/images/courses/bigdata.jpg",
  },
  {
    id: "productivity",
    title: "Balancing Productivity and Rest",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    priceUnit: "lifetime",
    image: "/images/courses/productivity.jpg",
  },
  {
    id: "money",
    title: "Mastering Money Management",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    priceUnit: "lifetime",
    image: "/images/courses/money.jpg",
  },
  {
    id: "startup",
    title: "From Idea to Startup Success",
    author: "purepearl studio",
    rating: 4.5,
    price: 25,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    students: "26+",
    priceUnit: "lifetime",
    image: "/images/courses/startup.jpg",
  },
];

export const topicFilters: string[] = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];
