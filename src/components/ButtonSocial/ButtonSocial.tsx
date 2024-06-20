import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, Title, Icon } from './styles';


interface Props extends RectButtonProps {
    title?: string;
    isLoading?: boolean;
    iconName: React.ComponentProps<typeof Fontisto>['name'];
    backgroundColor: string;
};


const ButtonSocial: React.FC<Props> = ({ title, isLoading = false, iconName, ...rest }) => {
    return (
        <Button disabled={isLoading} activeOpacity={0.7} {...rest}>
            {isLoading ? (
                <ActivityIndicator color="#fff" />
            ) : (
                <>
                    <Icon name={iconName} />
                    <Title>{title}</Title>
                </>
            )}
        </Button>
    )
}

 export {ButtonSocial};