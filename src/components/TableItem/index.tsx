import { Categories } from "../../data/categories";
import { formatDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  item: Item;
};

const TableItem = ({ item }: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={Categories[item.category].color}>
          {Categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value
          color={Categories[item.category].expense ? "#B30415" : "#3DD119"}
        >
          R$ {item.value}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};

export default TableItem;
