import React from 'react';
import { SafeAreaView } from 'react-native';
import { ButtonSocialGoogle } from '@src/components/ButtonSocialGoogle/ButtonSocialGoogle';
import { ButtonSocial } from '@src/components/ButtonSocial/ButtonSocial';

import { 
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
} from './styles';

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem vindo(a) ao {"\n"}Fechamento Caixa App</Title>
                    <Description>Cadastre-se com</Description>
                    <ViewButton>
                        <ButtonSocialGoogle title="" />
                        <ButtonSocial iconName='facebook' backgroundColor='#1877F2'/>
                        <ButtonSocial iconName='apple' backgroundColor='gray'/>
                        
                    </ViewButton>
                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>
            </Container>
        </SafeAreaView>
    );
};

export { Login };