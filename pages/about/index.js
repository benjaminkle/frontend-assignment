import ToggleMessage from "../../components/ToggleMessage";

export default function About() {
  return (
    <div>
      <h2>About This Project</h2>

      <ToggleMessage
        heading="A project that showcases the ability to build modern web applications using HTML, CSS, JavaScript, React, and Next.js."
        message="This project is a simple React and Next.js web application that demonstrates core front-end development concepts from Weeks 1–4. 
        It showcases how to build reusable components, manage state with React hooks, handle user interactions through event handling, and apply conditional rendering to display dynamic content. 
        Each feature is styled with a modern card design to create a clean, user-friendly interface."
      />
    </div>
  );
}
