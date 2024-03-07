export default function Task({ task }) {
  return (
    <div key={task.id}>
      <span>{task.text}</span>
    </div>
  );
}
