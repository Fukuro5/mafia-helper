import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';
import {
  Controller, FormProvider, useForm, useFormContext,
} from 'react-hook-form';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function Input({
  label, value, onChange, inputMode, defaultValue, onSubmitEditing, name,
}) {
  const { control, getValues } = useFormContext();
  const styles = StyleSheet.create({
    container: {
      paddingVertical: 5,
      width: '100%',
      paddingHorizontal: 38,
    },
    label: {
      marginBottom: 10,
      color: '#fff',
    },
    input: {
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 10,
      color: '#fff',
      paddingHorizontal: 10,
    },
  });

  console.log(getValues('playersCount'));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <TextInput
              style={styles.input}
              // inputMode={inputMode}
              // onSubmitEditing={onSubmitEditing}
              onBlur={onSubmitEditing}
              onChangeText={field.onChange}
            />
            <ErrorMessage error={error} />
          </>
        )}
      />
    </View>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};
