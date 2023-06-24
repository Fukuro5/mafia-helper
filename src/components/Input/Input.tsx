import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';
import {
  Controller, useFormContext,
} from 'react-hook-form';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

interface IInputProps {
  label: string;
  onSubmitEditing: () => void;
  name: string;
}

export default function Input({
  label, onSubmitEditing, name,
}: IInputProps) {
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
              onBlur={onSubmitEditing}
              onChangeText={field.onChange}
            />
            {error && (
              <ErrorMessage error={error} />
            )}
          </>
        )}
      />
    </View>
  );
}
