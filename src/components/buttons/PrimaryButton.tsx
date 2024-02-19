import React, {ReactNode} from 'react';
import {Pressable} from 'react-native';
import buttonsStyles from './styles.tsx';
import {PrincipalText} from '../texts/PrincipalText.tsx';

export interface IPrimaryButton {
  text: string;
  backgroundColor: string;
  disabled: boolean;
  action: () => void;
  children?: ReactNode;
}

export const PrimaryButton: React.FC<IPrimaryButton> = ({
  text,
  backgroundColor,
  disabled,
  action,
  children,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={action}
      style={{
        ...buttonsStyles.containerPrimary,
        backgroundColor: backgroundColor,
      }}>
      {children}
      {!children && (
        <PrincipalText text={text} styles={buttonsStyles.textButtonPrimary} />
      )}
    </Pressable>
  );
};
