function LabeledInput({ id, label, ...delegated }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...delegated} />
    </div>
  );
}

export default LabeledInput;
