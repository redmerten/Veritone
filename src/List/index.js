import { Formik } from 'formik';
import { rem } from 'polished';
import React from 'react';
import styled from 'styled-components';

import Button from '../ui/atoms/Button';

import Field from '../ui/molecules/Field';
import TextInput from '../ui/atoms/TextInput';

const Form = styled.form`
  display: flex;
`;

const LI = styled.li`
  font-family: ${({ theme }) => theme.fonts.roboto};
`;

const UL = styled.ul`
  margin-left: ${rem(144)};
  width: 30%;
`;

export default function List() {
  const initialFormValues = {
    current: '',
    list: [],
    order: 'ascending',
  };

  const sortList = (order, list) => {
    return list.sort((a, b) => {
      if (a < b) {
        return order === 'ascending' ? -1 : 1;
      }
      if (a > b) {
        return order === 'ascending' ? 1 : -1;
      }
      return 0;
      // order === 'ascending' ? a - b : b - a));
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

  const clearList = (setFieldValue) => {
    setFieldValue('list', []);
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialFormValues}
        onSubmit={(values, { setFieldValue }) => handleListEntry(values, setFieldValue)}
        // validate={validate}
        validateOnChange={false}
      >
        {({ errors, handleChange, handleSubmit, setFieldValue, setErrors, values }) => {
          const { current, list, order } = values;

          const sortedList = sortList(order, list);
          console.log('values', values, sortedList);

          return (
            <>
              <Form onSubmit={handleSubmit}>
                <Field
                  //   disabled={disabled}
                  label="Input List Item"
                >
                  <TextInput name="current" onChange={handleChange} placeholder="a list item" value={current} />
                  <Button onClick={() => handleOrderChange(order, setFieldValue)}>
                    {order === 'ascending' ? '⬇️' : '⬆️'}
                  </Button>
                  <Button onClick={() => clearList(setFieldValue)}>Clear List</Button>
                </Field>
              </Form>

              <UL>
                {sortedList.map((item, i) => (
                  <LI key={item + i}>{item}</LI>
                ))}
              </UL>
            </>
          );
        }}
      </Formik>
    </>
  );
}
