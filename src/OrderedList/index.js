import { Formik } from 'formik';
import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';

import Button from '../ui/atoms/Button';
import TextInput from '../ui/atoms/TextInput';

import Field from '../ui/molecules/Field';

const FlexDiv = styled.div`
  align-items: center;
  display: flex;
  height: ${rem(20)};
  justify-content: space-between;
  margin: ${rem(5)} 0;
  width: 80%;
`;

const Form = styled.form`
  display: flex;
`;

const LI = styled.li`
  font-family: ${({ theme }) => theme.fonts.roboto};
`;

const UL = styled.ul`
  margin-left: ${rem(144)};
`;

//
//  OrderedList Component
//  -------------------------------------------------------

export default function OrderedList() {
  const initialFormValues = {
    current: '',
    list: [],
    order: 'ascending',
  };

  const sortList = (order, list) => {
    return list.sort((a, b) => {
      if (a < b) return order === 'ascending' ? -1 : 1;
      if (a > b) return order === 'ascending' ? 1 : -1;
      return 0;
    });
  };

  const handleListEntry = (values, setFieldValue) => {
    if (values.current) {
      setFieldValue('list', [...values.list, values.current]);
      setFieldValue('current', '');
    }
  };

  const handleOrderChange = (order, setFieldValue) => {
    setFieldValue('order', order === 'ascending' ? 'descending' : 'ascending');
  };

  const clearList = setFieldValue => {
    setFieldValue('list', []);
  };

  const removeListItem = (item, list, setFieldValue) => {
    console.log(
      'remove',
      item,
      list.filter(e => e !== item)
    );
    setFieldValue(
      'list',
      list.filter(e => e !== item)
    );
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialFormValues}
        onSubmit={(values, { setFieldValue }) => handleListEntry(values, setFieldValue)}
        validateOnChange={false}
      >
        {({ handleChange, handleSubmit, setFieldValue, values }) => {
          const { current, list, order } = values;

          const sortedList = sortList(order, list);

          return (
            <>
              <Form onSubmit={handleSubmit}>
                <Field label="Input List Item">
                  <TextInput name="current" onChange={handleChange} placeholder="a list item" value={current} />
                  <Button
                    class="sort-direction"
                    onClick={() => handleOrderChange(order, setFieldValue)}
                    order
                    type="button"
                  >
                    {order === 'ascending' ? '⬇️' : '⬆️'}
                  </Button>
                  <Button class="clear-list" onClick={() => clearList(setFieldValue)} type="button">
                    Clear List
                  </Button>
                </Field>
              </Form>

              <UL class="items-list">
                {sortedList.map((item, i) => (
                  <FlexDiv>
                    <LI key={item + i}>{item}</LI>
                    <Button onClick={() => removeListItem(item, list, setFieldValue)} remove>
                      x
                    </Button>
                  </FlexDiv>
                ))}
              </UL>
            </>
          );
        }}
      </Formik>
    </>
  );
}
