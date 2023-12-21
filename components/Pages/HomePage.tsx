// pages/index.tsx

import Link from 'next/link';
import Quiz from './Quiz';


const rules = [
  'Read each question carefully before selecting an answer.',
  'You cannot go back to the previous question once answered.',
  'Your score will be displayed at the end of the quiz.',
];


const questions = [
    {
      id: 1,
      text: 'What is the capital of France?',
      options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
      correctOption: 'Paris',
    },
    {
      id: 2,
      text: 'Which programming language is this app built with?',
      options: ['Java', 'JavaScript', 'Python', 'TypeScript'],
      correctOption: 'TypeScript',
    },
    {
      id: 3,
      text: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      correctOption: 'Jupiter',
    },
    {
      id: 4,
      text: 'In which year did Christopher Columbus reach the Americas?',
      options: ['1492', '1607', '1776', '1865'],
      correctOption: '1492',
    },
    // Add more questions as needed
  ];
const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Quiz App</h1>
        <p className="text-lg mt-2">Test your knowledge with this quiz!</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Rules:</h2>
        <ul className="list-disc pl-6">
          {rules.map((rule, index) => (
            <li key={index} className="mb-2">
              {rule}
            </li>
          ))}
        </ul>
      </section>

      <Quiz questions={questions} />

      <footer className="text-center mt-8">
        <p>
          Ready to start the quiz?{' '}
          <Link href="/quiz">
            <a className="text-blue-500">Begin here!</a>
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default Home;
