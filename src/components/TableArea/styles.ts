import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
  padding: 20px;
  box-shadow: -5px 5px 8px #d1003f;
  border-radius: 0 0 10px 10px;
`;

export const TableHeadArea = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : `auto`)};
  padding: 10px 0;
  text-align: left;
`;
