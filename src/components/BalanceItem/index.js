import React, {useMemo} from 'react';
import {Balance, Container, Label} from './styles';

const BalanceItem = ({data}) => {
  const labelName = useMemo(() => {
    if (data.tag === 'saldo') {
      return {
        label: 'Actual Balance',
        color: '3b3dbf',
      };
    } else if (data.tag === 'receita') {
      return {
        label: "Today's Revenue",
        color: '00b94a',
      };
    }else{
        return{
            label: "Today's Expense",
            color: "EF463a"
        }
    }
  }, [data]);

  return (
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance>${data.saldo}</Balance>
    </Container>
  );
};

export default BalanceItem;
