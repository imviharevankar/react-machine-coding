import { useState } from "react";

const checkboxesData = [
  {
    id: 1,
    name: "Electronics",
    checked: false,
    children: [
      {
        id: 2,
        name: "Mobile phones",
        checked: false,
        children: [
          {
            id: 3,
            name: "iPhone",
            checked: false,
          },
          {
            id: 4,
            name: "Android",
            checked: false,
          },
        ],
      },
      {
        id: 5,
        name: "Laptops",
        checked: false,
        children: [
          {
            id: 6,
            name: "MacBook",
            checked: false,
          },
          {
            id: 7,
            name: "Surface Pro",
            checked: false,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Books",
    checked: false,
    children: [
      {
        id: 9,
        name: "Fiction",
        checked: false,
      },
      {
        id: 10,
        name: "Non-fiction",
        checked: false,
      },
    ],
  },
  {
    id: 11,
    name: "Toys",
    checked: false,
  },
];

const NestedCheckboxes = () => {
  const [data, setData] = useState(checkboxesData);
  const handleParentSelection = (index: number, checked: boolean) => {
    setData(
      data.map((item, ind) =>
        ind === index
          ? {
              ...item,
              checked,
              children: item?.children?.map((child) => ({ ...child, checked })),
            }
          : item
      )
    );
  };

  const handleChildSelection = (
    index: number,
    childIndex: number,
    checked: boolean
  ) => {
    setData((prevData) => {
      const newData = [...prevData];
      const parent = { ...newData[index] };
      const updatedChildren = parent.children?.map((child, cIndex) =>
        cIndex === childIndex ? { ...child, checked } : child
      );

      const allChildrenChecked =
        updatedChildren?.every((child) => child.checked) || false;

      parent.children = updatedChildren;
      parent.checked = allChildrenChecked;

      newData[index] = parent;
      return newData;
    });
  };
  return (
    <>
      <p className="text-3xl text-center">Nested Checkboxes</p>
      {data.map((item, index) => {
        return (
          <>
            <div className="flex align-middle gap-1 mt-2">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleParentSelection(index, !item.checked)}
              />
              <p>{item.name}</p>
            </div>
            {item?.children?.map((child, childIndex) => (
              <div className="flex ml-4 align-middle gap-1 mt-1">
                <input
                  type="checkbox"
                  checked={child.checked}
                  onChange={() =>
                    handleChildSelection(index, childIndex, !child.checked)
                  }
                />
                <p>{child.name}</p>
              </div>
            ))}
          </>
        );
      })}
    </>
  );
};

export default NestedCheckboxes;
