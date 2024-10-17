import { InputProps } from '../lib/definitions';
import { capitalizeFirstLetter } from '../lib/utils';

export default function Input({
  children,
  id,
  pHolder,
  type = 'text',
  minLen = 0,
  req = false,
}: InputProps) {
  const idUc = capitalizeFirstLetter(id);
  const labelId = `lbl${idUc}`;

  return (
    <label htmlFor={id} id={labelId}>
      <input
        id={id}
        type={type}
        name={id}
        placeholder={pHolder || idUc}
        aria-labelledby={labelId}
        required={req}
        minLength={minLen}
      />
      {children}
    </label>
  );
}
