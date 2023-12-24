import React from 'react';

type CheckboxParams = {
  label: string;
  value: string;
  checked?: boolean;
};

type Hobby = {
  id: number;
  item: string;
};

const items: Hobby[] = 


//todo:storybook
const CheckBox: React.FC<CheckboxParams> = ({ label, value, checked = false }) => {
  return (
    <label>
      <input type='checkbox' value={value} defaultChecked={checked} />
      {label}
    </label>
  );
}

type PresProps = {
  items: Hobby[];
};

const Pres: React.FC<PresProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const checkBox = <CheckBox key={item.id} label={`ID: ${item.id}`} value={item.item} />;
        return checkBox;
      })}
    </div>
  );
};

function SelectionForm() {
  return (
    <div>
      <h2>
        SelectionForm
      </h2>
      <Pres items={items}></Pres>

    </div>
  )
}

export default SelectionForm;