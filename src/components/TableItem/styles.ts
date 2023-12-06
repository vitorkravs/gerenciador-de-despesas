import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  text-transform: capitalize;
  padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
  color: #fff;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  padding: 8px;
  display: inline-block;
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
