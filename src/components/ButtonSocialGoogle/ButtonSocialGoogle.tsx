import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler';
import { Button, IconGoogle, Title } from './styles';

import pngGoogle from '../../assets/google.png';

interface Props extends RectButtonProps {
    title: string;
}


const ButtonSocialGoogle: React.FC <Props> = ({ title, ...rest }) => {
    return (
        <Button {...rest}>
            <IconGoogle source={pngGoogle} resizeMode="contain" />
            <Title>{title}</Title>
        </Button>
    )
}

export { ButtonSocialGoogle };