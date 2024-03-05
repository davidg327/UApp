import React from 'react';
import {DateTimePicker} from 'react-native-ui-lib';
import 'moment/locale/es';
import {StyleProp, View, ViewStyle} from 'react-native';
import {PrincipalTextInput} from '../textInput/PrincipalTextInput.tsx';

export interface ICalendar {
  valueChange: string;
  change: (value: any, text: string) => void;
  style: StyleProp<ViewStyle>;
  error: boolean | undefined;
}

const CalendarsComponent: React.FC<ICalendar> = ({
  valueChange,
  change,
  style,
  error,
}) => {
  return (
    <DateTimePicker
      mode={'date'}
      onChange={(date: any) => change(valueChange, date)}
      renderInput={(d: any) => {
        return (
          <View>
            <PrincipalTextInput
              value={d.value}
              valueChange={valueChange}
              change={change}
              style={style}
              label={'Cumpleaños'}
              mode={'outlined'}
              nameIcon={'calendar'}
              keyboard={'default'}
              error={error}
            />
          </View>
        );
      }}
    />
  );
};

export default CalendarsComponent;
