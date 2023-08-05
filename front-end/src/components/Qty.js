import React, { useContext, useState, useEffect } from "react";
// context
import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
  const { handleInput, handleSelect } = useContext(CartContext);
  const [currentAmount, setCurrentAmount] = useState(item.amount.toString());
  useEffect(() => {
    setCurrentAmount(item.amount.toString());
  }, [item.amount]);
  return (
    <div className="flex gap-x-6 items-center text-primary">
      {item.amount < 10 ? (
        <select
          onChange={(e) => handleSelect(e, item.id)}
          value={item.amount}
          className="p-2 rounded-lg w-[70px] ssm:w-[80px] sm:w-[100px] h-[40px] sm:h-[48px] outline-none text-primary"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10+</option>
        </select>
      ) : (
        <input
          onBlur={(e) => handleInput(e, item.id)}
          onChange={(e) => setCurrentAmount(e.target.value)}
          value={currentAmount}
          className="text-primary placeholder:text-primary h-[40px] sm:h-[48px] rounded p-4
          w-[60px] ssm:w-[90px] sm:w-[120px] outline-accent"
          type="text"
        />
      )}
    </div>
  );
};

export default Qty;
