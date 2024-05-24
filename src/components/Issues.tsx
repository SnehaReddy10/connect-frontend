import { Link } from 'react-router-dom';
import Card from './Card';

const issues = [
  {
    id: 7,
    title: 'Fix something random',
    category: 'finance',
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    likes: 5,
    comments: [
      { message: 'that would be great', likes: 2, replies: [] },
      { message: 'that would be great', likes: 2, replies: [] },
    ],
  },
  {
    id: 7,
    title: 'Fix something random',
    category: 'finance',
    description: 'It would be great if we have something to fix....',
    likes: 5,
    comments: [
      { message: 'that would be great', likes: 2, replies: [] },
      { message: 'that would be great', likes: 2, replies: [] },
    ],
  },
  {
    id: 7,
    title: 'Fix something random',
    category: 'finance',
    description: 'It would be great if we have something to fix....',
    likes: 5,
    comments: [
      { message: 'that would be great', likes: 2, replies: [] },
      { message: 'that would be great', likes: 2, replies: [] },
    ],
  },
  {
    id: 7,
    title: 'Fix something random',
    category: 'finance',
    description: 'It would be great if we have something to fix....',
    likes: 5,
    comments: [
      { message: 'that would be great', likes: 2, replies: [] },
      { message: 'that would be great', likes: 2, replies: [] },
    ],
  },
  {
    id: 7,
    title: 'Fix something random',
    category: 'finance',
    description: 'It would be great if we have something to fix....',
    likes: 5,
    comments: [
      { message: 'that would be great', likes: 2, replies: [] },
      { message: 'that would be great', likes: 2, replies: [] },
    ],
  },
  {
    id: 7,
    title: 'Fix something random',
    category: 'finance',
    description: 'It would be great if we have something to fix....',
    likes: 5,
    comments: [
      { message: 'that would be great', likes: 2, replies: [] },
      { message: 'that would be great', likes: 2, replies: [] },
    ],
  },
];

const Issues = () => {
  return (
    <div className="mt-7 flex flex-col gap-3">
      <div className="">
        <h4 className="text-slate-300 flex justify-center text-xs">
          Got an Issue?&nbsp;
          <p className="text-white font-sans font-bold">Report It Here</p>
          &nbsp;and Engage with a Community of Solvers!
        </h4>
      </div>
      <div className="relative flex justify-end">
        <div className="flex gap-1 items-center hover border border-slate-600 px-3 py-1 rounded-md">
          <img
            src="/assets/icons/funnel.png"
            alt="filter"
            className="h-4 w-4"
          />
          <p className="text-xxs font-semibold tracking-wider">Filter</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {issues.map((issue) => (
          <Link to={`/room/${issue.id}`}>
            <Card>
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-semibold uppercase">
                  {issue.title}
                </h3>
                <p className="text-xxs line-clamp-2 text-slate-300">
                  {issue.description}
                </p>
                <div className="flex gap-2 justify-end">
                  <div className="flex gap-1">
                    <img
                      src="/assets/icons/like-outline.png"
                      alt="like"
                      className="h-3 w-3"
                    />
                    <p className="text-xxs">{issue.likes}</p>
                  </div>
                  <div className="flex gap-1">
                    <img
                      src="/assets/icons/bubble-chat.png"
                      alt="like"
                      className="h-3 w-3"
                    />
                    <p className="text-xxs">{issue.comments.length}</p>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Issues;
