import { Item } from "../../types/Item";
import * as C from "./styles";

import TableItem from "../TableItem";

type Props = {
  list: Item[];
};

const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadArea width={100}>Data</C.TableHeadArea>
          <C.TableHeadArea width={130}>Categoria</C.TableHeadArea>
          <C.TableHeadArea>Título</C.TableHeadArea>
          <C.TableHeadArea width={150}>Valor</C.TableHeadArea>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};

export default TableArea;
