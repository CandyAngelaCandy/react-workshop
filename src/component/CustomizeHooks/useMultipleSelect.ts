import { SelectItem } from "../Select";
import { useState, useEffect } from "react";

const useMultipleSelect: (
  defaultItems: SelectItem[]
) => [
  SelectItem[],
  (item: SelectItem) => void,
  (items: SelectItem[]) => void
] = (defaultItems) => {
  const [items, setItems] = useState(defaultItems);
  const [selectedItem, setSelectedItem] = useState({} as SelectItem);
  useEffect(() => {
    const updatedItems = items.map((item) => {
      if (item.value === selectedItem.value) {
        return {
          ...item,
          isSelected: !selectedItem.isSelected,
        };
      }
      return { ...item };
    });
    if (JSON.stringify(updatedItems) !== JSON.stringify(items)) {
      setItems(updatedItems);
    }
  }, [items, selectedItem]);
  return [items, setSelectedItem, setItems];
};

export default useMultipleSelect;
