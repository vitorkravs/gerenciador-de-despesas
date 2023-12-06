import { useState, useEffect } from "react";

import * as C from "./App.styles";

import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";

//components
import TableArea from "./components/TableArea/index";

//types
import { Item } from "./types/Item";
import { Category } from "./types/Category";

//dados
import { Items } from "./data/item";
import { Categories } from "./data/categories";
import { InfoArea } from "./components/infoArea";
import { InputArea } from "./components/InputArea";

const App = () => {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (Categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
