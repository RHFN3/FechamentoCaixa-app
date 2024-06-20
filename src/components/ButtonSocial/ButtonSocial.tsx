import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, Title, Icon } from './styles';
 

interface Props extends RectButtonProps {
    title?: string;
    iconName: React.ComponentProps<typeof Fontisto>['name'];
    backgroundColor: string;
};


const ButtonSocial: React.FC <Props> = ({ title, iconName, ...rest }) => {
    return (
        <Button {...rest}>
            <Icon name={iconName} />
            <Title>{title}</Title>
        </Button>
    )
}

export { ButtonSocial };