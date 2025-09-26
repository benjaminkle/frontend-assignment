import Counter from "../../components/Counter";
import ValidateForm from "../../components/ValidateForm";

export default function Features() {
  return (
    <div>
      <h2>Features</h2>
      <Counter />
      <ValidateForm minLength={5} title="Form Submission with Validation" />
    </div>
  );
}
