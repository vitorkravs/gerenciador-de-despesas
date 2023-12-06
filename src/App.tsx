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

const App = () => {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

      <C.Body>
        {/*área de informações*/}

        {/*área de inserção*/}

        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
